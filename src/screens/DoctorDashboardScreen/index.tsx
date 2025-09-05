import React from 'react';
import { RefreshControl } from 'react-native';
import { useDoctorDashboard } from './hooks/useDoctorsDashboard';
import { AppointmentItem } from './components/AppointmentItem';
import {
  Container,
  HeaderContainer,
  HeaderTitle,
  Content,
  AppointmentList,
  EmptyText,
} from './styles';
import { Appointment } from '../../types/appointments';

const DoctorDashboardScreen: React.FC = () => {
  const {
    appointments,
    refreshing,
    onRefresh,
    handleDeleteAppointment,
    handleEditAppointment,
  } = useDoctorDashboard();

  const renderAppointment = ({ item }: { item: Appointment }) => (
    <AppointmentItem
      appointment={item}
      onEdit={handleEditAppointment}
      onDelete={handleDeleteAppointment}
    />
  );

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Consultas do Médico</HeaderTitle>
      </HeaderContainer>
      <Content>
        <AppointmentList
          data={appointments}
          keyExtractor={(item: Appointment) => item.id}
          renderItem={renderAppointment}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <EmptyText>Nenhuma consulta agendada</EmptyText>
          }
        />
      </Content>
    </Container>
  );
};

export default DoctorDashboardScreen;