import { useState, useEffect, useCallback } from 'react';
import { Appointment } from '../../../types/appointments';
import { statisticsService, Statistics } from '../../../services/statistics';
import { adminDashboardService } from '../services/adminDashboardStorage';

export const useAdminDashboard = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const data = await adminDashboardService.loadAppointments();
      setAppointments(data);

      const stats = await statisticsService.getGeneralStatistics();
      setStatistics(stats);
    } catch (error) {
      console.error('Erro ao carregar dados do AdminDashboard:', error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [loadData]);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      await adminDashboardService.updateAppointmentStatus(id, status);
      await loadData();
    } catch (error) {
      console.error('Erro ao atualizar status da consulta:', error);
    }
  };

  return {
    appointments,
    statistics,
    refreshing,
    onRefresh,
    handleUpdateStatus,
  };
};
