import AsyncStorage from '@react-native-async-storage/async-storage';
import { notificationService } from '../../../services/notifications';
import { User } from '../../../types/auth';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

interface CreateAppointmentProps {
  user: User | null;
  date: string;
  time: string;
  doctor: Doctor;
}

interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  specialty: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export const createAppointmentService = async ({
  user,
  date,
  time,
  doctor,
}: CreateAppointmentProps) => {
  const storedAppointments = await AsyncStorage.getItem('@MedicalApp:appointments');
  const appointments: Appointment[] = storedAppointments ? JSON.parse(storedAppointments) : [];

  const newAppointment: Appointment = {
    id: Date.now().toString(),
    patientId: user?.id || '',
    patientName: user?.name || '',
    doctorId: doctor.id,
    doctorName: doctor.name,
    date,
    time,
    specialty: doctor.specialty,
    status: 'pending',
  };

  appointments.push(newAppointment);

  await AsyncStorage.setItem('@MedicalApp:appointments', JSON.stringify(appointments));

  await notificationService.notifyNewAppointment(doctor.id, newAppointment);
};
