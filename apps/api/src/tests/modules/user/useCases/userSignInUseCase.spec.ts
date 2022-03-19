import faker from '@faker-js/faker';
import { mock } from 'jest-mock-extended';

import { UserSignIn } from "modules/user/useCases";

import type { MockProxy } from 'jest-mock-extended';
import type { UserRepository } from 'modules/user/domain/repositories';
import type { Encrypter, JwtSigner } from "domain/providers";
import type { UserSignInUseCase } from "modules/user/domain/useCases";
import type { User } from 'domain/entities';

describe('UserSignInUseCase', () => {
  const params: UserSignInUseCase.Params = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  }

  const user: User = {
    email: params.email,
    hashedPassword: faker.internet.password(),
    name: faker.name.firstName(),
  }

  const token = faker.datatype.uuid();

  let userRepositoryMock: MockProxy<UserRepository.Repository>;
  let encrypterMock: MockProxy<Encrypter.Encrypter>;
  let jwtSignerMock: MockProxy<JwtSigner.JwtSigner>;
  let sut: UserSignIn;

  beforeEach(() => {
    userRepositoryMock = mock<UserRepository.Repository>({
      loadUserByEmail: jest.fn().mockResolvedValue(user)
    });
    encrypterMock = mock<Encrypter.Encrypter>({
      compare: jest.fn().mockReturnValue(true),
    });
    jwtSignerMock = mock<JwtSigner.JwtSigner>({
      sign: jest.fn().mockReturnValue(token)
    });

    sut = new UserSignIn(userRepositoryMock, encrypterMock, jwtSignerMock);
  });

  it('returns user and tokens on success', async () => {
    const result = await sut.perform(params);

    const { hashedPassword, ...userWithoutHashedPassword } = user;

    expect(result).toEqual({
      user: userWithoutHashedPassword,
      tokens: {
        accessToken: token,
        refreshToken: token
      },
    })

  });
});
