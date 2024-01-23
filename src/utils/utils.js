export const shortLabel = (string) => {
  const label = string.toLowerCase().split("'").join("");

  return label;
};
