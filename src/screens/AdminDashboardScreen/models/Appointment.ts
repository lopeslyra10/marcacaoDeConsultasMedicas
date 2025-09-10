import { Appointment } from '../../../types/appointments';

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    date: '2025-09-10',
    time: '14:00',
    status: 'pending',
    doctorId: '1',
    description: 'Cardiologista'
  },
  {
    id: '2',
    date: '2025-09-12',
    time: '09:30',
    status: 'completed',
    doctorId: '1',
    description: 'Odontologista'
  },
];
