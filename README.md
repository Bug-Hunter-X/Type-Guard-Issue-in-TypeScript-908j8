# Type Guard Issue in TypeScript
This repository demonstrates a subtle issue with type guards in TypeScript.  The code intends to handle both numbers and strings gracefully, using type guards to direct the input to the appropriate function. However, a runtime error occurs due to an unexpected compiler behavior related to type narrowing and function existence checks.

## The Problem
The `processValue` function uses a type guard to determine whether the input `value` is a number or a string. The compiler should understand, after the type check, that `printNumber` (for numbers) and `printString` (for strings) are both valid and defined functions.  Nevertheless, a runtime error may happen in some circumstances.

## How to Reproduce
Clone this repository and run the TypeScript code using a TypeScript compiler. The output will show an unexpected `TypeError`. 

## Solution
Refer to `bugSolution.ts` for a corrected version. The solution demonstrates how to correctly use type guards in TypeScript to ensure the safety and correctness of the code.

This issue highlights the importance of understanding the nuances of TypeScript's type system and type guards for effectively preventing runtime errors. 