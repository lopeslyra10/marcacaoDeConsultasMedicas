import { User } from '../../../types/auth';

export const mockUsers: User[] = [
  { 
    id: '1',
    name: 'Carlos Silva',
    email: 'carlos@email.com',
    role: 'admin',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  { 
    id: '2',
    name: 'Carlos Pereira',
    email: 'carlos.pereira@email.com',
    role: 'doctor',
    specialty: 'Cardiologia',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  { 
    id: '3',
    name: 'Ana Souza',
    email: 'ana.souza@email.com',
    role: 'patient',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];
