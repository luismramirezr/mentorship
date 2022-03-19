export namespace JwtSigner {
  export namespace Sign {
    export type Params = {
      data: any;
    }

    export type Return = string;

    export type Sign = (params: Params) => Return;
  }

  export interface JwtSigner {
    sign: Sign.Sign
  }
}