
var searchRange = require('./findFirstAndLast');

describe("findeFirstAndLast test suit",()=>{
  it('Should pass [5,7,7,8,8,10], 8',()=> expect(searchRange([5,7,7,8,8,10], 8)).toStrictEqual([3,4]));
  it('Should pass [5,7,7,8,8,10], 6',()=>  expect(searchRange([5,7,7,8,8,10], 6)).toStrictEqual([-1,-1]));
  it('Should pass [], 6',()=> expect(searchRange([], 6)).toStrictEqual([-1,-1]));
  it('Should pass [8], 8',()=> expect(searchRange([8], 8)).toStrictEqual([0,0]));
  it('Should pass  [8,8,8,8,8,8], 8',()=> expect(searchRange([8,8,8,8,8,8], 8)).toStrictEqual([0,5]));
  it('Should pass [5,7,7,8,8,8,8], 8',()=> expect(searchRange([5,7,7,8,8,8,8], 8)).toStrictEqual([3,6]));
  it('Should pass [8,8,8,8,9,10,20], 8',()=> expect(searchRange([8,8,8,8,9,10,20], 8)).toStrictEqual([0,3]));
  it('Should pass [-4,-2,-1,0,8,8,8,8,9,10,20], -2',()=> expect(searchRange([-4,-2,-1,0,8,8,8,8,9,10,20], -2)).toStrictEqual([1,1]));
  it('Should pass [-4,-2,-1,0,8,8,8,8,9,10,20], 0',()=> expect(searchRange([-4,-2,-1,0,0,0,0,8,8,8,8,9,10,20], 0)).toStrictEqual([3,6]));
  it('Should pass [-4,-2,-1], -2',()=> expect(searchRange([-4,-2,-1], -2)).toStrictEqual([1,1]));
  it('Should pass [-1], -2',()=> expect(searchRange([-1], -2)).toStrictEqual([-1,-1]));
  it('Should pass [-1], -1',()=> expect(searchRange([-1], -1)).toStrictEqual([0,0]));
})
