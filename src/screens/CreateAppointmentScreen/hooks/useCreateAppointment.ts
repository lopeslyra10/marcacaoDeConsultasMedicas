// src/screens/CreateAppointmentScreen/hooks/useCreateAppointment.ts
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';
import { User } from '../../../types';
import { CreateAppointmentService } from '../services/createAppointmentService';

export const useCreateAppointment = () => {
  const navigation = useNavigation();
  const { user } = useAuth();

  // Estado do formulário
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  // Estado de dados e UI
  const [doctors, setDoctors] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Carrega os médicos usando o serviço
  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const doctorsData = await CreateAppointmentService.loadDoctors();
        setDoctors(doctorsData);
      } catch (err: any) {
        setError(err.message || 'Erro ao carregar médicos.');
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleSave = async () => {
    if (!user || !date || !selectedTime || !selectedDoctorId) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }
    setLoading(true);
    try {
      await CreateAppointmentService.addAppointment({
        date,
        time: selectedTime,
        doctorId: selectedDoctorId,
        description: 'Consulta de rotina', // Ou adicionar um campo de descrição
      }, user);

      Alert.alert('Sucesso', 'Consulta agendada com sucesso!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível agendar a consulta.');
    } finally {
      setLoading(false);
    }
  };

  return {
    date, setDate,
    selectedTime, setSelectedTime,
    selectedDoctorId, setSelectedDoctorId,
    doctors,
    loading,
    error,
    handleSave,
  };
};