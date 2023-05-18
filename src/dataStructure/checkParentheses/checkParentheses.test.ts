import checkParentheses from './checkParentheses';

describe('Given a checkParentheses function', () => {
  describe('When it is defined', () => {
    test('Then it should be an instance of Function', () => {
      expect(typeof checkParentheses).toBe('function');
    });

    describe('And it is invoked without an argument', () => {
      test('Then it shoyuld throw an error', () => {
        // eslint-disable-next-line max-nested-callbacks
        expect(() => checkParentheses()).toThrow('You must provided an input');
      });
    });

    describe('When it is invoked an argument that is not a string', () => {
      test('Then it should throw a Type Error', () => {
        // eslint-disable-next-line max-nested-callbacks
        expect(() => checkParentheses(2 as unknown as string)).toThrowError(
          'You must provided a string',
        );
      });
    });

    describe('When it is invoked with an odd length string', () => {
      test('Then it should return false', () => {
        const resultCheckParentheses = checkParentheses('123');

        expect(resultCheckParentheses).toBe(false);
      });
    });

    describe('When it is invoked with "()"', () => {
      test('Then it should return true', () => {
        const input = '()';

        const resultCheclParentheses = checkParentheses(input);

        expect(resultCheclParentheses).toBe(true);
      });
    });

    describe('When it is invoked with "(){}[]"', () => {
      test('Then it should return true', () => {
        const input = '(){}[]';

        const resultCheckParentheses = checkParentheses(input);

        expect(resultCheckParentheses).toBe(true);
      });
    });

    describe('When it is invoked with "[(({}))}]', () => {
      test('Then it should return false', () => {
        const input = '[(({}))}]';

        const resultCheckParentheses = checkParentheses(input);

        expect(resultCheckParentheses).toBe(false);
      });
    });
  });
});
