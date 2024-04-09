exports.slugify = (string) =>
  string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

exports.firstLetterinArraytoUppercase = (arr) => {
  const formattedArray = arr.map((el) =>
    el.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
  );
  return formattedArray;
};

exports.firstLetterInStringToUppercase = (string) => {
  return string.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

exports.containsCharacter = (string, character) => {
  return string.includes(character);
};
