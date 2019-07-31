export default function concatenate(objects, key = null, last, delimiter = ', ') {
  return objects
    .map(o => (key ? o[key] : o))
    .join(delimiter)
    .replace(/, ([^, ]*)$/, `${last} $1`);
};
