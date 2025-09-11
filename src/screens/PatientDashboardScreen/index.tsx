import React from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { usePatientDashboard } from './hooks/usePatientDashboard';
import Header from '../../components/Header';
import AppointmentItem from './components/AppointmentItem';
import * as S from './styles';

const PatientDashboardScreen: React.FC = () => {
  const { loading, appointments, signOut, handleNavigate } = usePatientDashboard();

  const renderListHeader = () => (
    <>
      <S.Title>Minhas Consultas</S.Title>
      <Button
        title="Agendar Nova Consulta"
        onPress={() => handleNavigate('CreateAppointment')}
        containerStyle={S.elementStyles.buttonContainer}
        buttonStyle={S.elementStyles.primaryButton}
      />
      <Button
        title="Meu Perfil"
        onPress={() => handleNavigate('Profile')}
        containerStyle={S.elementStyles.buttonContainer}
        buttonStyle={S.elementStyles.secondaryButton}
      />
      <Button
        title="Configurações"
        onPress={() => handleNavigate('Settings')}
        containerStyle={S.elementStyles.buttonContainer}
        buttonStyle={S.elementStyles.secondaryButton}
      />
    </>
  );

  if (loading) {
    return (
      <S.Container>
        <Header />
        <S.LoadingText>Carregando...</S.LoadingText>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Header />
      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AppointmentItem appointment={item} />}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={
          <Button
            title="Sair"
            onPress={signOut}
            containerStyle={S.elementStyles.buttonContainer}
            buttonStyle={S.elementStyles.logoutButton}
          />
        }
        ListEmptyComponent={<S.EmptyText>Nenhuma consulta agendada</S.EmptyText>}
        contentContainerStyle={{ padding: 20 }}
      />
    </S.Container>
  );
};

export default PatientDashboardScreen;