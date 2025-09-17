import React from 'react';
import { ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useCreateAppointment } from './hooks/useCreateAppointment';
import { convertUsersToDoctors } from './models/doctorModel';
import { Container, Title, SectionTitle, ErrorText, styles } from './styles';
import Header from '../../components/Header';
import DoctorList from '../../components/DoctorList';
import TimeSlotList from '../../components/TimeSlotList';

const CreateAppointmentScreen: React.FC = () => {
  const {
    date, setDate,
    selectedTime, setSelectedTime,
    selectedDoctorId, setSelectedDoctorId,
    doctors,
    loading,
    error,
    handleSave,
  } = useCreateAppointment();

  const navigation = useNavigation();

  // Converte os dados para o formato que o DoctorList espera
  const doctorListData = convertUsersToDoctors(doctors);

  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Title>Agendar Consulta</Title>

        <Input
          placeholder="Data (DD/MM/AAAA)"
          value={date}
          onChangeText={setDate}
          containerStyle={styles.input}
          keyboardType="numeric"
        />

        <SectionTitle>Selecione um Horário</SectionTitle>
        <TimeSlotList
          onSelectTime={setSelectedTime}
          selectedTime={selectedTime}
        />

        <SectionTitle>Selecione um Médico</SectionTitle>
        {loading && doctors.length === 0 ? (
          <ErrorText>Carregando médicos...</ErrorText>
        ) : (
          <DoctorList
            doctors={doctorListData}
            onSelectDoctor={(doctor) => setSelectedDoctorId(doctor.id)}
            selectedDoctorId={selectedDoctorId}
          />
        )}
        
        {error ? <ErrorText>{error}</ErrorText> : null}

        <Button
          title="Agendar"
          onPress={handleSave}
          loading={loading}
          containerStyle={styles.button as any}
          buttonStyle={styles.buttonStyle}
        />

        <Button
          title="Cancelar"
          onPress={() => navigation.goBack()}
          containerStyle={styles.button as any}
          buttonStyle={styles.cancelButton}
        />
      </ScrollView>
    </Container>
  );
};

export default CreateAppointmentScreen;