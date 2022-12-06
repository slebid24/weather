import { TimeConversationExtra } from "./timeConversation";
import { IList } from "types/data";

export const maxTempTimesInterval = (
  timeZone: number,
  list: IList[]
): number[] => {
  const timeStamps = list.map((timeSlice: IList) => {
    return timeSlice.dt;
  });

  const localTStamps = timeStamps.map((timeStamp: number) => {
    return TimeConversationExtra(timeStamp, timeZone);
  });

  const SolarNoonsTimeFilter = localTStamps.filter((localTime: string) => {
    return (
      localTime.slice(17, 19) === "14" ||
      localTime.slice(17, 19) === "12" ||
      localTime.slice(17, 19) === "13"
    );
  });

  const totalArray = SolarNoonsTimeFilter.map((solarSoonLocalTime: string) => {
    return localTStamps.indexOf(solarSoonLocalTime);
  });

  if (totalArray.length > 4) {
    return totalArray.slice(0, 4);
  }

  return totalArray.splice(1);
};

export const maxTempDaysOfWeek = (timeZone: number, list: IList[]) => {
  const timeStamps = list.map((timeSlice: IList) => {
    return timeSlice.dt;
  });

  const localTStamps = timeStamps.map((timeStamp: number) => {
    return TimeConversationExtra(timeStamp, timeZone);
  });

  const SolarNoonsTimeFilter = localTStamps.filter(
    (solarSoonLocalTime: string) => {
      return (
        solarSoonLocalTime.slice(17, 19) === "12" ||
        solarSoonLocalTime.slice(17, 19) === "13" ||
        solarSoonLocalTime.slice(17, 19) === "14"
      );
    }
  );

  if (SolarNoonsTimeFilter.length > 4) {
    return SolarNoonsTimeFilter.slice(0, 4);
  }

  return SolarNoonsTimeFilter.splice(1);
};
