class Stack<T> {
  #element: T[] = [];

  isEmpty(): boolean {
    return this.#element.length === 0;
  }

  push(input: T): void {
    this.#element.push(input);
  }

  pop(): T | undefined {
    return this.#element.pop();
  }

  peek(): T {
    return this.#element[this.#element.length - 1];
  }
}

export default Stack;
