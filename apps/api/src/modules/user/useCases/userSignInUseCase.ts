import type { UserSignInUseCase } from 'modules/user/domain/useCases';
import type { UserRepository } from 'modules/user/domain/repositories';
import type { Encrypter, JwtSigner } from 'domain/providers';

export class UserSignIn implements UserSignInUseCase.Perform {
  constructor(
    private readonly userRepository: UserRepository.Repository,
    private readonly encrypter: Encrypter.Encrypter,
    private readonly jwtSigner: JwtSigner.JwtSigner,
  ) { }

  async perform(params: UserSignInUseCase.Params): Promise<UserSignInUseCase.Return> {
    const { email, password } = params;

    const user = await this.userRepository.loadUserByEmail({ email });

    if (!user) return null;

    const isAuth = this.encrypter.compare({
      hash: user.hashedPassword,
      valueToCompare: password,
    });

    if (!isAuth) return null;

    const accessToken = this.jwtSigner.sign({ data: { email } });
    const refreshToken = this.jwtSigner.sign({ data: { email } });

    const { hashedPassword, ...rest } = user;

    return {
      user: rest,
      tokens: {
        accessToken,
        refreshToken
      }
    }
  }
}