import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { Appointment } from '../../../types/appointments';
import { DoctorDashboardService } from '../services/doctorDashboardServices';

export const useDoctorDashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadAppointments = async () => {
    try {
      const loadedAppointments = await DoctorDashboardService.loadAppointments();
      setAppointments(loadedAppointments);
    } catch (error) {
      console.error('Erro ao carregar consultas:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadAppointments();
    }, [])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadAppointments();
    setRefreshing(false);
  };

  const handleDeleteAppointment = async (appointmentId: string) => {
    try {
      const updatedAppointments = await DoctorDashboardService.deleteAppointment(appointmentId);
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error('Erro ao deletar consulta:', error);
    }
  };

  const handleEditAppointment = (appointment: Appointment) => {
    // Lógica para editar consulta será implementada posteriormente
    console.log('Editar consulta:', appointment);
  };

  return {
    appointments,
    refreshing,
    onRefresh,
    handleDeleteAppointment,
    handleEditAppointment,
  };
};

export default useDoctorDashboard;