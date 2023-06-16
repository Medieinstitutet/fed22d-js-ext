export class IceCream {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public cone: boolean,
    public howTodo: Todo
  ) {}
}

class Todo {
  constructor(
    public step1: string,
    public step2: string,
    public step3: string
  ) {}
}
