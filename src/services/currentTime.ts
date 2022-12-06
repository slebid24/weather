import { DateInterface } from "types/data";
import { DayofWeek } from "types/data";
import { Month } from "types/data";

// try to transform on hook
const currentTimeService = (timeZone: number): DateInterface => {
  const pr = new Intl.PluralRules("en-US", {
    type: "ordinal",
  });
  const suffixes = new Map([
    ["one", "st"],
    ["two", "nd"],
    ["few", "rd"],
    ["other", "th"],
  ]);

  const formatOrdinals = (n: number): string => {
    const rule = pr.select(n);
    const suffix = suffixes.get(rule);
    return `${n}${suffix}`;
  };

  const utcStamp: number = Date.parse(new Date().toUTCString());
  const localStamp: number = utcStamp + timeZone * 1000;

  const dateDefenitions: DateInterface = {
    dayOfMonth: formatOrdinals(new Date(localStamp).getUTCDate()),
    month: Month[new Date(localStamp).getUTCMonth()],
    year: "`" + new Date(localStamp).getUTCFullYear().toString().slice(2),
    dayOfWeek:
      DayofWeek[
        new Date(localStamp).getUTCDay() === 0
          ? new Date(localStamp).getUTCDay() + 6
          : new Date(localStamp).getUTCDay() - 1
      ],
    time: new Date(localStamp).toUTCString().slice(17, 25),
    ts: localStamp,
  };
  return dateDefenitions;
};

export default currentTimeService;

// export const TimeService = {getCurrentTime};
