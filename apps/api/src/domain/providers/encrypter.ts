export namespace Encrypter {
  export namespace Compare {
    export type Params = {
      hash: string;
      valueToCompare: string;
    }

    export type Return = boolean;

    export type Compare = (params: Params) => Return;
  }

  export interface Encrypter {
    compare: Compare.Compare
  }

}