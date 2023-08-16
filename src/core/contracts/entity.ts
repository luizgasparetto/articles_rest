export abstract class Entity<T> {
  public readonly id: string;
  public readonly props: T;

  constructor(props: T) {
    this.id = crypto.randomUUID();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }


    if (!(object instanceof Entity)) {
      return false;
    }

    if (this === object) {
      return true;
    }

    return this.id === object.id;
  }
}