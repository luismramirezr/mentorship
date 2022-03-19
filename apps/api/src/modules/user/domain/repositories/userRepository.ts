import type { User } from "domain/entities";

export namespace UserRepository {
  export namespace LoadUserByEmail {
    export type Params = {
      email: string;
    };

    export type Return = User | null;

    export type LoadUserByEmail = (params: Params) => Promise<Return>;
  }
  export interface Repository {
    loadUserByEmail: LoadUserByEmail.LoadUserByEmail
  }
}