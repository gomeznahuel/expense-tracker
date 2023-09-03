// Format a given date and time using specified options and timezone.
const formatDateTime = (dateTime: Date, options: Intl.DateTimeFormatOptions, timeZone: string) => {
  const formatter = new Intl.DateTimeFormat("en-US", { ...options, timeZone });
  return formatter.format(dateTime);
};

// Options for formatting the current date.
const currentDateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

// Options for formatting the current time.
const currentTimeOptions: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

// Get the current formatted date in GMT-3.
export const getCurrentDate = () => {
  const currentDate = new Date();
  const timeZone = "America/Argentina/Buenos_Aires"; // Set the timezone to Buenos Aires, Argentina
  return formatDateTime(currentDate, currentDateOptions, timeZone);
};

// Get the current formatted time in GMT-3.
export const getCurrentTime = () => {
  const currentTime = new Date();
  const timeZone = "America/Argentina/Buenos_Aires"; // Set the timezone to Buenos Aires, Argentina
  return formatDateTime(currentTime, currentTimeOptions, timeZone);
};
