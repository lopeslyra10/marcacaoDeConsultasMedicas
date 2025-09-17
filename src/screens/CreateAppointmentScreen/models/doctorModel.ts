import { User, Doctor as GlobalDoctorType } from '../../../types';

// O componente DoctorList espera um tipo Doctor mais simples.
// Vamos definir este tipo localmente para o modelo.
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

/**
 * Converte um array de usuários (com role 'doctor') para um array de Doutores.
 */
export const convertUsersToDoctors = (users: User[]): Doctor[] => {
  return users
    .filter(user => user.role === 'doctor') // Garante que estamos lidando apenas com médicos
    .map(user => {
      const doctorUser = user as GlobalDoctorType; // Faz um type cast para acessar 'specialty'
      return {
        id: doctorUser.id,
        name: doctorUser.name,
        specialty: doctorUser.specialty || 'Especialidade não informada',
        image: doctorUser.image,
      };
    });
};