export const TimeConversation = (
  timeFromApi: string,
  timeZone: number
): string => {
  const utcStamp: number = Date.parse(timeFromApi);
  const localStamp: number = utcStamp + timeZone * 1000;

  return new Date(localStamp).toUTCString().slice(17, 25);
};

export const TimeConversationExtra = (
  timeFromApi: number,
  timeZone: number
): string => {
  // const localStamp: number= (timeFromApi * 100) + timeZone
  const result = new Date(timeFromApi * 1000 + timeZone * 1000).toUTCString();

  return result;
};
