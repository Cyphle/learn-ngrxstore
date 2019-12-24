import { splitArrayInEqualSizeOf } from './split.helpers';

describe('src/app/helpers/split.helpers', () => {
  const args = [
    {
      picture: '../../../assets/dev-back.png',
      title: 'Développeur Back',
      content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
    },
    {
      picture: '../../../assets/dev-front.png',
      title: 'Développeur Front',
      content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
    },
    {
      picture: '../../../assets/craftsman.png',
      title: 'Software Craftsman',
      content: 'Je crois dur comme fer à la philosophie Craftsman pour la qualité de code et la valeur délivrée'
    },
    {
      picture: '../../../assets/devops.png',
      title: 'DevOps',
      content: 'Je m\'intéresse aux problématiques DevOps avec Docker et Jenkins'
    },
    {
      picture: '../../../assets/dessin.png',
      title: 'Dessinateur',
      content: 'J\'adore le dessin'
    },
    {
      picture: '../../../assets/photo.png',
      title: 'Photographe',
      content: 'Et la photo'
    }
  ];

  it('should split array in subarrays of same size', () => {
    const split = splitArrayInEqualSizeOf<Argument>(args, 3);

    expect(split).toEqual([
      [
        {
          picture: '../../../assets/dev-back.png',
          title: 'Développeur Back',
          content: 'Je fais du dév back avec du NodeJS, Java, Kotlin'
        },
        {
          picture: '../../../assets/dev-front.png',
          title: 'Développeur Front',
          content: 'Je fais du dév front avec React et Angular pour mettre un peu de couleur dans ce monde'
        },
        {
          picture: '../../../assets/craftsman.png',
          title: 'Software Craftsman',
          content: 'Je crois dur comme fer à la philosophie Craftsman pour la qualité de code et la valeur délivrée'
        }
      ],
      [
        {
          picture: '../../../assets/devops.png',
          title: 'DevOps',
          content: 'Je m\'intéresse aux problématiques DevOps avec Docker et Jenkins'
        },
        {
          picture: '../../../assets/dessin.png',
          title: 'Dessinateur',
          content: 'J\'adore le dessin'
        },
        {
          picture: '../../../assets/photo.png',
          title: 'Photographe',
          content: 'Et la photo'
        }
      ]
    ]);
  });
});
