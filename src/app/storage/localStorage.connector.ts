export class LocalStorageConnector<Type>{
  constructor(private itemName:string) { }

  get(): Type | null {
    const strValue = localStorage.getItem(this.itemName);
    if (strValue === null) return strValue;

    try {
      const result : Type = JSON.parse(strValue);

      return result;
    } catch (e) {
      return null;
    }
  }

  set(value: Type): true {
    localStorage.setItem(this.itemName, JSON.stringify(value));

    return true;
  }
}
