/* eslint-disable @typescript-eslint/naming-convention */

import Stack from '../Stack/Stack';

const checkInputExist = (input: string) => {
  if (!input) {
    throw new Error('You must provided an input');
  }
};

const checkInputType = (input: string) => {
  if (typeof input !== 'string') {
    // eslint-disable-next-line new-cap
    throw TypeError('You must provided a string');
  }
};

const parenthesisOpenClosePairs: Record<string, string> = {
  '[': ']',
  '{': '}',
  '<': '>',
  '(': ')',
};

const buildStack = (input: string): Stack<string> => {
  const inputStack = new Stack<string>();
  inputStack.push(input[0]);

  for (let position = 1; position < input.length; position++) {
    const currentElement = input[position];
    const topOfStack = parenthesisOpenClosePairs[inputStack.peek()];

    handleCurrentElement(inputStack, currentElement, topOfStack);
  }

  return inputStack;
};

const handleCurrentElement = (
  inputStack: Stack<string>,
  currentElement: string,
  topOfStack: string,
) => {
  if (topOfStack === currentElement) {
    inputStack.pop();
    return;
  }

  inputStack.push(currentElement);
};

const checkParentheses = (input = ''): boolean => {
  checkInputExist(input);
  checkInputType(input);

  if (input.length % 2 !== 0) {
    return false;
  }

  const inputStack = buildStack(input);

  return inputStack.isEmpty();
};

export default checkParentheses;
