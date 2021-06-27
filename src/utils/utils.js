export function daysBetween(startDate, endDate) {
  return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
}

export function convertCloudinaryUrlToJpeg(url) {
  const split = url.split('.');
  split[split.length - 1] = 'jpg';
  return split.join('.');
}
