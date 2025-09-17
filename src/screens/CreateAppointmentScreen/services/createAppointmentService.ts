import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../../../services/auth';
import { Appointment, User } from '../../../types';

export class CreateAppointmentService {
  private static readonly APPOINTMENTS_KEY = '@MedicalApp:appointments';

  /**
   * Carrega a lista de médicos da API.
   * Inclui a lógica de nova tentativa que estava no componente.
   */
  static async loadDoctors(): Promise<User[]> {
    try {
      return await authService.getAllDoctors();
    } catch (error) {
      console.warn('Primeira tentativa de carregar médicos falhou. Tentando novamente...', error);
      // Lógica de nova tentativa para contornar instabilidades
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const doctors = await authService.getAllDoctors();
            resolve(doctors);
          } catch (retryError) {
            console.error('Segunda tentativa de carregar médicos também falhou.', retryError);
            reject(new Error('API indisponível. Não foi possível carregar os médicos.'));
          }
        }, 1000);
      });
    }
  }

  /**
   * Adiciona uma nova consulta ao AsyncStorage.
   */
  static async addAppointment(newAppointmentData: Omit<Appointment, 'id' | 'status'>, patient: User): Promise<void> {
    const stored = await AsyncStorage.getItem(this.APPOINTMENTS_KEY);
    const appointments: Appointment[] = stored ? JSON.parse(stored) : [];

    const newAppointment: Appointment = {
      ...newAppointmentData,
      id: String(Date.now()),
      status: 'pending',
      // O tipo global `Appointment` não tem dados do paciente,
      // mas a aplicação precisa deles. Usamos `as any` para compatibilidade.
      patientId: patient.id,
      patientName: patient.name,
    } as any;

    const updatedAppointments = [...appointments, newAppointment];
    await AsyncStorage.setItem(this.APPOINTMENTS_KEY, JSON.stringify(updatedAppointments));
  }
}