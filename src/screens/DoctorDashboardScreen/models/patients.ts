import { Patient } from '../../../types/auth';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Ana Souza',
    email: 'ana.souza@example.com',
    role: 'patient',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'Carlos Pereira',
    email: 'carlos.pereira@example.com',
    role: 'patient',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '3',
    name: 'Marina Lima',
    email: 'marina.lima@example.com',
    role: 'patient',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export const getPatientInfo = (patientId: string): Patient | undefined => {
  return mockPatients.find(patient => patient.id === patientId);
};

export default mockPatients;
