import {DateTime} from "luxon";


export default {
  data() {
    return {
      timezone: 'America/Los_Angeles'
    }
  },
  methods: {
    formattedProgramDate(dateStr){
      const date = DateTime.fromISO(dateStr);
      return  date.toFormat('MMMM d, yyyy');
    },
    now() {
      return DateTime.now().setLocale("en-US");
    },
    getNowTime(minutes = 0) {
      return this.now().plus({minutes}).setLocale("fr-FR").toLocaleString(DateTime.TIME_SIMPLE);
    },
    sameDay(firstDate, secondDate) {
      return firstDate.toLocaleString(DateTime.DATE_SHORT) === secondDate.toLocaleString(DateTime.DATE_SHORT);
    },
    differenceDown(date, minutes) {
      const now = this.now();
      const end = DateTime.fromISO(date).plus({ minutes: minutes });
      const diff = end.diff(now, ["days", "hours", "minutes", "seconds"]);
      return diff.toObject();
    },
    difference(date) {
      const now = this.now();
      const start = DateTime.fromISO(date);
      const diff = now.diff(start, ["days", "hours", "minutes", "seconds"]);
      return diff.toObject();
    },
    getDateTime(time) {
      return time.toISO();
    },
    parse(time) {
      return DateTime.fromSQL(time).setZone(this.timezone, {keepCalendarTime: true}).setLocale("en-US");
    }

  }
};
