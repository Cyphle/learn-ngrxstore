import {
  completeArgumentPictureWithUrl,
  completeArgumentsPictureWithUrl, completeExperienceLogoWithUrl, completeExperiencesLogoWithUrl, completeHomePageMapEntriesPictureWithUrl,
  completeHomePageMapEntryPictureWithUrl
} from './image-path.helpers';

describe('src/app/helpers/image-path.helpers', () => {
  it('should complete path of picture of argument with given url', () => {
    const arg: Argument = {
      picture: '/assets/back.png',
      content: 'My back',
      title: 'My title'
    };

    const modifiedArg = completeArgumentPictureWithUrl(arg, 'http://localhost:3000');

    expect(modifiedArg).toEqual({
      picture: 'http://localhost:3000/assets/back.png',
      content: 'My back',
      title: 'My title'
    });
  });

  it('should complete path of picture of arguments with given url', () => {
    const args: Argument[] = [
      {
        picture: '/assets/back.png',
        content: 'My back',
        title: 'My title'
      },
      {
        picture: '/assets/front.png',
        content: 'My front',
        title: 'My title 2'
      }
    ];

    const modifiedArg = completeArgumentsPictureWithUrl(args, 'http://localhost:3000');

    expect(modifiedArg).toEqual([
      {
        picture: 'http://localhost:3000/assets/back.png',
        content: 'My back',
        title: 'My title'
      },
      {
        picture: 'http://localhost:3000/assets/front.png',
        content: 'My front',
        title: 'My title 2'
      }
    ]);
  });

  it('should complete path of picture of home page map with given url', () => {
    const entry: HomePageMapEntry = {
      path: '/path',
      picture: '/assets/back.png',
      content: 'My title'
    };

    const modifiedEntry = completeHomePageMapEntryPictureWithUrl(entry, 'http://localhost:3000');

    expect(modifiedEntry).toEqual({
      path: '/path',
      picture: 'http://localhost:3000/assets/back.png',
      content: 'My title'
    });
  });

  it('should complete path of picture of home page map with given url', () => {
    const entries: HomePageMapEntry[] = [
      {
        path: '/path',
        picture: '/assets/back.png',
        content: 'My title'
      },
      {
        path: '/url',
        picture: '/assets/front.png',
        content: 'My content'
      }
    ];

    const modifiedEntries = completeHomePageMapEntriesPictureWithUrl(entries, 'http://localhost:3000');

    expect(modifiedEntries).toEqual([
      {
        path: '/path',
        picture: 'http://localhost:3000/assets/back.png',
        content: 'My title'
      },
      {
        path: '/url',
        picture: 'http://localhost:3000/assets/front.png',
        content: 'My content'
      }
    ]);
  });

  it('should complete path of experience logo with given url', () => {
    const entry: Experience = {
      company: 'La Combe Du Lion Vert',
      logo: '/assets/lacombelogo.png',
      job: 'Software Craftsman Full Stack',
      description: 'Blabla',
      startDate: '2017-08-01',
      endDate: '2019-11-30'
    };

    const modifiedEntry = completeExperienceLogoWithUrl(entry, 'http://localhost:3000');

    expect(modifiedEntry).toEqual({
      company: 'La Combe Du Lion Vert',
      logo: 'http://localhost:3000/assets/lacombelogo.png',
      job: 'Software Craftsman Full Stack',
      description: 'Blabla',
      startDate: '2017-08-01',
      endDate: '2019-11-30'
    });
  });

  it('should complete path of experiences logo with given url', () => {
    const entries: Experience[] = [
      {
        company: 'La Combe Du Lion Vert',
        logo: '/assets/lacombelogo.png',
        job: 'Software Craftsman Full Stack',
        description: 'Blabla',
        startDate: '2017-08-01',
        endDate: '2019-11-30'
      },
      {
        company: 'La Foncière Numérique',
        logo: '/assets/lacombelogo.png',
        job: 'Software Craftsman Full Stack Freelance',
        description: 'Blabla',
        startDate: '2019-12-02'
      }
    ];

    const modifiedEntries = completeExperiencesLogoWithUrl(entries, 'http://localhost:3000');

    expect(modifiedEntries).toEqual([
      {
        company: 'La Combe Du Lion Vert',
        logo: 'http://localhost:3000/assets/lacombelogo.png',
        job: 'Software Craftsman Full Stack',
        description: 'Blabla',
        startDate: '2017-08-01',
        endDate: '2019-11-30'
      },
      {
        company: 'La Foncière Numérique',
        logo: 'http://localhost:3000/assets/lacombelogo.png',
        job: 'Software Craftsman Full Stack Freelance',
        description: 'Blabla',
        startDate: '2019-12-02'
      }
    ]);
  });
});
