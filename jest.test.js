// 通用测试工具
test('test common matcher', () => {
  expect(3 + 2).toBe(5);
  expect(1 + 1).not.toBe(3);
});
test('test to be true or false', () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});
// 测试大小
test('test number', () => {
  expect(2).toBeGreaterThan(1);
  expect(2).toBeLessThan(3);
});
// 测试对象值
test('test number', () => {
  expect({ name: 'song' }).toEqual({ name: 'song' }); // 测试值是否相同
});
