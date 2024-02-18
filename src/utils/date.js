const format = (date, locale, options) =>
  new Intl.DateTimeFormat(locale, options).format(date);

const now = new Date();

const fr = format(now, "fr", { dateStyle: "long" });
const frShort = format(now, "fr", { weekday: "short", day: "numeric" });
console.log(fr, frShort);
