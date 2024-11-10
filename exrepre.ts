class People {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHello(): void {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

const steve = new People("Steve");
steve.sayHello(); // Output: Hello, my name is Steve!
