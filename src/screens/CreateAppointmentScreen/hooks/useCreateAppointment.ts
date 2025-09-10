import { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/navigation';
import { createAppointmentService } from '../services/createAppointmentService';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

const availableDoctors: Doctor[] = [
  { id: '1', name: 'Dr. João Silva', specialty: 'Cardiologia', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Dra. Maria Santos', specialty: 'Pediatria', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: '3', name: 'Dr. Pedro Oliveira', specialty: 'Ortopedia', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: '4', name: 'Dra. Ana Costa', specialty: 'Dermatologia', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '5', name: 'Dr. Carlos Mendes', specialty: 'Oftalmologia', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
];

type Navigation = NativeStackNavigationProp<RootStackParamList, 'CreateAppointment'>;

export const useCreateAppointment = ({ navigation }: { navigation: Navigation }) => {
  const { user } = useAuth();
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreateAppointment = async () => {
    try {
      setLoading(true);
      setError('');

      if (!date || !selectedTime || !selectedDoctor) {
        setError('Por favor, preencha a data e selecione um médico e horário');
        return;
      }

      await createAppointmentService({
        user,
        date,
        time: selectedTime,
        doctor: selectedDoctor,
      });

      alert('Consulta agendada com sucesso!');
      navigation.goBack();
    } catch {
      setError('Erro ao agendar consulta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    date,
    setDate,
    selectedTime,
    setSelectedTime,
    selectedDoctor,
    setSelectedDoctor,
    error,
    loading,
    availableDoctors,
    handleCreateAppointment,
  };
};
