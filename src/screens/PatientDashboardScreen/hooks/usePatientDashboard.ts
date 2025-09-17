// src/screens/PatientDashboardScreen/hooks/usePatientDashboard.ts
import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../../contexts/AuthContext';
import { RootStackParamList, Appointment, User } from '../../../types';
import { PatientDashboardService } from '../services/patientDashboardServices';
import theme from '../../../styles/theme';

export type EnrichedAppointment = Appointment & {
  doctorName?: string;
  specialty?: string;
};

// Funções helper preenchidas
export const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmed':
      return theme.colors.success;
    case 'cancelled':
      return theme.colors.error;
    default:
      return theme.colors.warning;
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case 'confirmed':
      return 'Confirmada';
    case 'cancelled':
      return 'Cancelada';
    default:
      return 'Pendente';
  }
};


export const usePatientDashboard = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [appointments, setAppointments] = useState<EnrichedAppointment[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const [userAppointments, allUsers] = await Promise.all([
        PatientDashboardService.loadAppointments(user.id),
        PatientDashboardService.loadUsers()
      ]);

      const enriched = userAppointments.map(app => {
          const doctor = allUsers.find(u => u.id === app.doctorId && u.role === 'doctor');
          return {
              ...app,
              doctorName: doctor?.name || 'Médico não encontrado',
              specialty: (doctor as any)?.specialty || ''
          };
      });

      setAppointments(enriched);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useFocusEffect(loadData);

  const handleNavigate = (screen: keyof RootStackParamList) => {
    navigation.navigate(screen);
  };

  return {
    loading,
    appointments,
    signOut,
    handleNavigate,
  };
};