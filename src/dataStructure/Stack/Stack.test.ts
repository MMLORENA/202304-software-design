import Stack from './Stack';

describe('Given a Stack', () => {
  describe('When it is defined', () => {
    test('Then it should be a function', () => {
      expect(typeof Stack).toBe('function');
    });
  });

  describe('When it is empty and its method isEmpty is invoked', () => {
    test('Then it should return true', () => {
      const stack = new Stack<string>();

      expect(stack.isEmpty()).toBe(true);
    });

    test('Then its method peek should return undefined', () => {
      const stack = new Stack<string>();

      expect(stack.peek()).toBeUndefined();
    });
  });

  describe('When its method push is invoked with "["', () => {
    const input = '[';

    test('Then its method isEmpty should return false', () => {
      const stack = new Stack<string>();

      stack.push(input);

      expect(stack.isEmpty()).toBe(false);
    });

    test('And then its method peek should return the pushed element', () => {
      const stack = new Stack<string>();
      stack.push(input);

      expect(stack.peek()).toBe(input);
    });
  });

  describe('When it contains 1 element and its method pop is invoked', () => {
    const input = '[';

    test('Then its method isEmpty should be true', () => {
      const stack = new Stack<string>();
      stack.push(input);

      stack.pop();

      expect(stack.isEmpty()).toBe(true);
    });

    test('Then its method peek should return the removed element', () => {
      const stack = new Stack<string>();
      stack.push(input);

      const removedElement = stack.pop();

      expect(removedElement).toBe(input);
    });
  });
});
