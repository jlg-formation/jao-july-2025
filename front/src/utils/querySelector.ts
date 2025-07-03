export const $ = (cssSelector: string): Element => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error("Cannot find element with selector = " + cssSelector);
  }
  return elt;
};
