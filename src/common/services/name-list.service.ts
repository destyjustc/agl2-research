export class NameListService {
  names = ['Angular', 'Angular2', 'React', 'Wahahaha', 'test'];

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
}
