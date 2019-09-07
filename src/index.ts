export const identityTag = (strings: TemplateStringsArray, ...args: any[]) => {
  return strings
    .map((s, i) => {
      return i === strings.length - 1 ? `${s}` : `${s}${args[i]}`;
    })
    .join("");
};
