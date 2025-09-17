import { AuthContextData, LoginCredentials } from '../../../types/auth';

export class LoginService {
  /**
   * Executa a lógica de login.
   * @param signIn - A função signIn vinda do AuthContext.
   * @param credentials - As credenciais (email e senha) do usuário.
   */
  static async login(
    signIn: AuthContextData['signIn'],
    credentials: LoginCredentials
  ): Promise<void> {
    // A lógica do serviço é chamar a função do contexto.
    // Se houvesse uma chamada de API direta, ela estaria aqui.
    try {
      await signIn(credentials);
    } catch (error) {
      console.error('Falha no serviço de login:', error);
      // Re-lança o erro para que o hook possa tratá-lo (ex: exibir mensagem na tela)
      throw new Error('Email ou senha inválidos.');
    }
  }
}