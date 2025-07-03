export const setAttrNbr = (elt: Element, key: string, val: number): void => {
  elt.setAttributeNS(null, key, val + "");
};
