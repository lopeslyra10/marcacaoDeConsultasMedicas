import React from 'react';
import { RefreshControl } from 'react-native';
import { useAdminDashboard } from './hooks/useAdminDashboard';
import { AppointmentCard } from './components/AppointmentCard';
import { StatisticsSection } from './components/StatisticsSection';
import { SpecialtyList } from './components/SpecialtyList';
import {
  Container
} from './styles';
import { Appointment } from '../../types/appointments';
import { 
  HeaderContainer, 
  HeaderTitle, 
  Content, 
  AppointmentList, 
  EmptyText, 
} from '../HomeScreen/styles';

const AdminDashboardScreen: React.FC = () => {
  const {
    appointments,
    statistics,
    refreshing,
    onRefresh,
    handleUpdateStatus,
  } = useAdminDashboard();

  const renderAppointment = ({ item }: { item: Appointment }) => (
    <AppointmentCard appointment={item} onUpdateStatus={handleUpdateStatus} />
  );

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Painel do Administrador</HeaderTitle>
      </HeaderContainer>
      <Content>
        <StatisticsSection statistics={statistics} />
        <SpecialtyList specialties={statistics?.specialties || {}} />

        <AppointmentList
          data={appointments}
          keyExtractor={(item: Appointment) => item.id}
          renderItem={renderAppointment}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <EmptyText>Nenhuma consulta encontrada</EmptyText>
          }
        />
      </Content>
    </Container>
  );
};

export default AdminDashboardScreen;
