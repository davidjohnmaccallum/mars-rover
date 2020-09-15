const MyClass = require('../src/MyClass')

test('Test test', () => {
  const c = new MyClass()
  expect(c.calc(1,1)).toBe(2)
})