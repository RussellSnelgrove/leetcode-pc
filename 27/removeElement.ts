function removeElement(nums: number[], val: number): number {
  let i: number = 0;
  let numsLength: number = nums.length;
  while (i < numsLength) {
    while (nums[i] === val) {
      nums.splice(i, 1);
      numsLength--;
    }
    i++;
  }
  return numsLength;
}
