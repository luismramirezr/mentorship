import type { User } from "domain/entities";
import type { Authentication } from "domain/protocols";

export namespace UserSignInUseCase {
  export type Params = {
    email: string;
    password: string;
  }

  export type Return = {
    user: Omit<User, 'hashedPassword'>;
    tokens: Authentication;
  } | null;

  export interface Perform {
    perform: (params: Params) => Promise<Return>,
  }
}