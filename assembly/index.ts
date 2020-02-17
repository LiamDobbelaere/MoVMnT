let stack: Array<i32>;

export function init(): void {
  stack = new Array<i32>();

  stack.push(5);
  stack.push(7);
  stack.pop();
}

export function getStackValue(offset: i32 = 0): i32 {
  return stack[stack.length - 1 - offset];
}
