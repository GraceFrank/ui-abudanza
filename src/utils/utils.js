export function daysBetween(startDate, endDate) {
  return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
}

export function convertCloudinaryUrlToJpeg(url) {
  const split = url.split('.');
  split[split.length - 1] = 'jpg';
  return split.join('.');
}

const INTEREST_RATES = {
  90: 15 / 100,
  180: 30 / 100,
  365: 45 / 100,
};
export function calculateAmountDue(duration, principal) {
  return (
    Number(principal) + Number(INTEREST_RATES[duration]) * Number(principal)
  );
}
