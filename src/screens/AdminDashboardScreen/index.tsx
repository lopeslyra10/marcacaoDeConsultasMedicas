import React from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import { Container, Title } from './styles';
import { useAdminDashboard } from './hooks/useAdminDashboard';

import AppointmentCard from './components/AppointmentCard';
import StatisticsSection from './components/StatisticsSection';
import SpecialtyList from './components/SpecialtyList';

export default function AdminDashboard() {
  const { appointments, users, refreshing, onRefresh, handleUpdateStatus } = useAdminDashboard();

  return (
    <Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Title>Painel Administrativo</Title>

        <StatisticsSection users={users} appointments={appointments} />

        <SpecialtyList users={users} />

        {appointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
