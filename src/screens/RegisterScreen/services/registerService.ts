import { AuthContextData, RegisterData } from '../../../types/auth';

export class RegisterService {
  /**
   * Executa a lógica de registro de um novo usuário.
   * @param register - A função register vinda do AuthContext.
   * @param data - Os dados do novo usuário.
   */
  static async register(
    register: AuthContextData['register'],
    data: RegisterData
  ): Promise<void> {
    try {
      await register(data);
    } catch (error) {
      console.error('Falha no serviço de registro:', error);
      // Re-lança o erro para que o hook possa tratá-lo na UI.
      throw new Error('Não foi possível criar a conta.');
    }
  }
}