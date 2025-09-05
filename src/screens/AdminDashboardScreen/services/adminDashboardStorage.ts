import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appointment } from '@/types/appointments';
import { User } from '@/types/auth';

const APPOINTMENTS_KEY = 'appointments';
const USERS_KEY = 'users';

export async function loadAppointments(): Promise<Appointment[]> {
  const stored = await AsyncStorage.getItem(APPOINTMENTS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export async function saveAppointments(appointments: Appointment[]) {
  await AsyncStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
}

export async function loadUsers(): Promise<User[]> {
  const stored = await AsyncStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : [];
}

export async function saveUsers(users: User[]) {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function updateAppointmentStatus(
  id: string,
  status: string
): Promise<Appointment[]> {
  const appointments = await loadAppointments();
  const updated = appointments.map((a) =>
    a.id === id ? { ...a, status } : a
  );
  await saveAppointments(updated);
  return updated;
}
