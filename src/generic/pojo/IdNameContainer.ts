/** TypeScript port of com.conga.rlp.rudiments.generic.pojo.IdNameContainer. */
export class IdNameContainer {
  Id?: string;
  Name?: string;

  getId(): string | undefined {
    return this.Id;
  }

  setId(id: string): void {
    this.Id = id;
  }

  getName(): string | undefined {
    return this.Name;
  }

  setName(name: string): void {
    this.Name = name;
  }
}
