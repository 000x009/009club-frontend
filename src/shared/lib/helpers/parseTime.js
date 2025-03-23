export function parseTime(time, options) {
  const date = new Date(time).toLocaleString("en-EN", options);
  return date;
}
