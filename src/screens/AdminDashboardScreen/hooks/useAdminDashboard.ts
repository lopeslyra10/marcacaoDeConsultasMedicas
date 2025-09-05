import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Appointment } from '@/types/appointments';
import { User } from '@/types/auth';
import { loadAppointments, loadUsers, updateAppointmentStatus } from '../services/adminDashboardStorage';

export function useAdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = async () => {
    const [storedAppointments, storedUsers] = await Promise.all([
      loadAppointments(),
      loadUsers(),
    ]);
    setAppointments(storedAppointments);
    setUsers(storedUsers);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    const updatedAppointments = await updateAppointmentStatus(id, status);
    setAppointments(updatedAppointments);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return { appointments, users, refreshing, onRefresh, handleUpdateStatus };
}
