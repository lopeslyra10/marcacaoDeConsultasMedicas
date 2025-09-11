import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAuth } from '../../../contexts/AuthContext'; 
import { RootStackParamList } from '../../../types/navigation'; 
import { Appointment } from '../../../types/appointments'; 
import theme from '../../../styles/theme'; 


export const getStatusColor = (status: Appointment['status']) => {
  switch (status) {
    case 'confirmed': return theme.colors.success;
    case 'cancelled': return theme.colors.error;
    default: return theme.colors.warning;
  }
};

export const getStatusText = (status: Appointment['status']) => {
  switch (status) {
    case 'confirmed': return 'Confirmada';
    case 'cancelled': return 'Cancelada';
    default: return 'Pendente';
  }
};


export const usePatientDashboard = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);


  const loadAppointments = React.useCallback(async () => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const storedData = await AsyncStorage.getItem('@MedicalApp:appointments');
      if (storedData) {
        const allAppointments: Appointment[] = JSON.parse(storedData);
        const userAppointments = allAppointments.filter(app => app.patientId === user.id);
        setAppointments(userAppointments);
      }
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
    } finally {
      setLoading(false);
    }
  }, [user?.id]);

  useFocusEffect(
    React.useCallback(() => {
      loadAppointments();
    }, [loadAppointments])
  );

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