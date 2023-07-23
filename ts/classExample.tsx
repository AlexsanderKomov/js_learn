class Constructor {
  field: number = 123;

  constructor(arg: number) {
    this.field = arg;
  }

  public publicMethod() {
    return this.field;
  }

  protected protectedMethod() {
    return this.field + 10;
  }

  private privateMethod() {
    return this.field + 30;
  }
}

const instance = new Constructor(123);

class Child extends Constructor {
  public childMethod() {}

  public protectedMethod(): number {
    return super.protectedMethod();
  }

  public publicMethod(): number {
    return super.publicMethod();
  }
}

// Абстрактные классы
abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

class NewChild extends AbstractClass {
  public abstractField: number = 234;

  public abstractMethod(): number {
    return this.abstractMethod();
  }
}

interface MyInterface {
  field: string;
  method(): string;
}

class NewClass implements MyInterface {
  public field: string = '123';

  public method(): string {
    return '';
  }
}

class MyComponent extends React.Component<
  { prop1: number },
  { state1: string }
> {
  constructor(props: { prop1: number }) {
    super(props);
    this.state = {
      state1: '123',
    };
  }
  public render() {
    return <div>{this.props.prop1}</div>;
  }
}
