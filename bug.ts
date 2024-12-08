function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string): void {
  if (typeof value === 'number') {
    printNumber(value);
  } else {
    printString(value);
  }
}

processValue(123);
processValue('hello');
// Uncaught TypeError: printNumber is not a function