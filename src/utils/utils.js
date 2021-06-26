export function daysBetween(startDate, endDate) {
  return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
}
