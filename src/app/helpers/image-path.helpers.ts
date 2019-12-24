export const completeArgumentPictureWithUrl = (arg: Argument, url: string): Argument => ({
  picture: `${url}${arg.picture}`,
  title: arg.title,
  content: arg.content
});

export const completeArgumentsPictureWithUrl = (args: Argument[], url: string): Argument[] =>
  args.map(arg => completeArgumentPictureWithUrl(arg, url));

export const completeHomePageMapEntryPictureWithUrl = (entry: HomePageMapEntry, url: string): HomePageMapEntry => ({
  path: entry.path,
  picture: `${url}${entry.picture}`,
  content: entry.content
});

export const completeHomePageMapEntriesPictureWithUrl = (entries: HomePageMapEntry[], url: string): HomePageMapEntry[] =>
  entries.map(entry => completeHomePageMapEntryPictureWithUrl(entry, url));
