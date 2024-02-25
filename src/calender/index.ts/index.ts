export const pluck = (elements:{[key:string]:string}[], field:string) => {
  return elements.map((element) => element[field]);
};
// pluck([{ a: 1 }, { a: 2 }], "a"); // [1,2]
