const Fatorial = require("./fatorial");
const { createSandbox } = require("sinon");
const sinon = createSandbox();
const assert = require("assert");

(async () => {
  const fatorial = new Fatorial();
  const spy = sinon.spy(fatorial, fatorial.execute.name);
  const expectedCallCount = 6;

  // for (const _ of fatorial.execute(5));
  const result = [...fatorial.execute(5)];

  assert.strictEqual(spy.callCount, expectedCallCount);
  const { args } = spy.getCall(2);
  const expectedParams = [3, 6, 4];
  assert.deepStrictEqual(args, expectedParams);
  const expectedResult = [1, 2, 6, 24, 120];
  assert.deepStrictEqual(result, expectedResult);
})();
