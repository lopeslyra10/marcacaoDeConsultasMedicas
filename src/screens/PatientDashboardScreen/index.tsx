// src/screens/PatientDashboardScreen/index.tsx
import React from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { usePatientDashboard } from './hooks/usePatientDashboard';
import Header from '../../components/Header';
import AppointmentCard from './components/AppointmentCard';
import { Container, Title, LoadingText, EmptyText, styles } from './styles';

const PatientDashboardScreen: React.FC = () => {
  const { loading, appointments, signOut, handleNavigate } = usePatientDashboard();

  const ListHeader = () => (
    <>
      <Title>Minhas Consultas</Title>
      <Button
        title="Agendar Nova Consulta"
        onPress={() => handleNavigate('CreateAppointment')}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />
      <Button
        title="Meu Perfil"
        onPress={() => handleNavigate('Profile')}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />
    </>
  );

  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingText>Carregando consultas...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AppointmentCard appointment={item} />}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={
          <Button
            title="Sair"
            onPress={signOut}
            containerStyle={styles.button as ViewStyle}
            buttonStyle={styles.logoutButton}
          />
        }
        ListEmptyComponent={<EmptyText>Nenhuma consulta agendada</EmptyText>}
        contentContainerStyle={styles.scrollContent}
      />
    </Container>
  );
};

export default PatientDashboardScreen;