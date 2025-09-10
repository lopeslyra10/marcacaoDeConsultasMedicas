import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appointment } from '../../../types/appointments';

const APPOINTMENTS_KEY = '@MedicalApp:appointments';

export const adminDashboardService = {
  async loadAppointments(): Promise<Appointment[]> {
    try {
      const data = await AsyncStorage.getItem(APPOINTMENTS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
      return [];
    }
  },

  async saveAppointments(appointments: Appointment[]): Promise<void> {
    try {
      await AsyncStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
    } catch (error) {
      console.error('Erro ao salvar consultas:', error);
    }
  },

  async updateAppointmentStatus(
    id: string,
    status: string
  ): Promise<void> {
    try {
      const appointments = await this.loadAppointments();
      const updated = appointments.map((a) =>
        a.id === id ? { ...a, status } : a
      );
      await this.saveAppointments(updated);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    }
  },
};
