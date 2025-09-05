import { Appointment } from '../../../types/appointments';

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientName: 'Carlos Silva',
    doctorName: 'Dr. João Mendes',
    specialty: 'Cardiologia',
    date: '2025-09-10',
    time: '14:00',
    status: 'pending',
  },
  {
    id: '2',
    patientName: 'Mariana Costa',
    doctorName: 'Dra. Ana Paula',
    specialty: 'Dermatologia',
    date: '2025-09-12',
    time: '09:30',
    status: 'completed',
  },
];
