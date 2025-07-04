type Class<T> = new () => T;

export const $ = <T extends Element>(
  cssSelector: string,
  type?: Class<T>
): T => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error("Cannot find element with selector = " + cssSelector);
  }
  if (type !== undefined) {
    if (!(elt instanceof type)) {
      throw new Error(
        `Found element but type is different: ${type.name} <> ${elt.constructor.name}`
      );
    }
  }
  return elt as T;
};
