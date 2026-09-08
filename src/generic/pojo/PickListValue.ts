/** TypeScript port of com.conga.rlp.rudiments.generic.pojo.PickListValue. */
export class PickListValue {
  Key?: string;
  Value?: string;
  Sequence?: number;
  ImageURL?: string;

  getKey(): string | undefined {
    return this.Key;
  }

  setKey(key: string): void {
    this.Key = key;
  }

  getValue(): string | undefined {
    return this.Value;
  }

  setValue(value: string): void {
    this.Value = value;
  }

  getSequence(): number | undefined {
    return this.Sequence;
  }

  setSequence(sequence: number): void {
    this.Sequence = sequence;
  }

  getImageURL(): string | undefined {
    return this.ImageURL;
  }

  setImageURL(imageURL: string): void {
    this.ImageURL = imageURL;
  }
}
