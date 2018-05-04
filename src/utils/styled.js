// @flow

export function fluidAttr (attrName: string, initial: string, addition: string) {
  return `
    ${attrName}: ${initial};

    @media (min-width: 20rem) {
      ${attrName}: calc(${initial} + ${addition} * (100vw - 20rem) / 60);
    }

    @media (min-width: 80rem) {
      ${attrName}: calc(${initial} + addition);
    }
  `
}
