import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../../types';

export class UserManagementService {
  private static readonly USERS_KEY = '@MedicalApp:users';

  /**
   * Carrega todos os usuários do AsyncStorage, exceto o usuário logado.
   */
  static async loadUsers(currentUserId: string): Promise<User[]> {
    try {
      const stored = await AsyncStorage.getItem(this.USERS_KEY);
      if (!stored) return [];

      const allUsers: User[] = JSON.parse(stored);
      return allUsers.filter(u => u.id !== currentUserId);
    } catch (error) {
      console.error('Erro ao carregar usuários no serviço:', error);
      throw new Error('Não foi possível buscar os usuários.');
    }
  }

  /**
   * Deleta um usuário da lista e salva a lista atualizada no AsyncStorage.
   */
  static async deleteUser(userIdToDelete: string): Promise<User[]> {
    try {
      const stored = await AsyncStorage.getItem(this.USERS_KEY);
      if (!stored) return [];

      const allUsers: User[] = JSON.parse(stored);
      const updatedUsers = allUsers.filter(u => u.id !== userIdToDelete);
      
      await AsyncStorage.setItem(this.USERS_KEY, JSON.stringify(updatedUsers));
      return updatedUsers; // Retorna a lista completa atualizada
    } catch (error) {
      console.error('Erro ao deletar usuário no serviço:', error);
      throw new Error('Não foi possível excluir o usuário.');
    }
  }
}