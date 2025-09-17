import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appointment, User } from '../../../types/';

export class PatientDashboardService {
  private static readonly APPOINTMENTS_KEY = '@MedicalApp:appointments';
  private static readonly USERS_KEY = '@MedicalApp:users';

  /**
   * Carrega e filtra as consultas de um paciente específico.
   */
  static async loadAppointments(patientId: string): Promise<Appointment[]> {
    try {
      const stored = await AsyncStorage.getItem(this.APPOINTMENTS_KEY);
      if (!stored) {
        return [];
      }
      const allAppointments: any[] = JSON.parse(stored); // Usar any para ler dados brutos

      // Filtra as consultas pelo ID do paciente
      return allAppointments.filter(app => app.patientId === patientId);
    } catch (error) {
      console.error('Erro ao carregar consultas no serviço:', error);
      throw new Error('Não foi possível buscar as consultas.');
    }
  }

  /**
   * Busca todos os usuários para enriquecer os dados (ex: nome do médico).
   * Função auxiliar que pode ser movida para um serviço global de 'user' no futuro.
   */
  static async loadUsers(): Promise<User[]> {
      const stored = await AsyncStorage.getItem(this.USERS_KEY);
      return stored ? JSON.parse(stored) : [];
  }
}