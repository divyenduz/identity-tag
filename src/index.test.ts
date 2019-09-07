import { identityTag } from "./index";

test("basic", () => {
  expect(identityTag``).toBe(``);
  expect(identityTag`{}`).toBe(`{}`);
  expect(identityTag`hello`).toBe(`hello`);
  expect(identityTag`😀`).toBe(`😀`);
  expect(identityTag`Text and 😀`).toBe(`Text and 😀`);
});

test("static variables", () => {
  const staticValue = "title";
  expect(identityTag`{
      id
      ${staticValue}
  }`).toBe(`{
      id
      title
  }`);
});

test("dynamic variables", async () => {
  const dynamicValuePromise = new Promise(resolve => {
    setTimeout(() => {
      resolve("title");
    }, 10);
  });

  const dynamicValue = await dynamicValuePromise;
  expect(identityTag`{
        id
        ${dynamicValue}
    }`).toBe(`{
        id
        title
    }`);
});
