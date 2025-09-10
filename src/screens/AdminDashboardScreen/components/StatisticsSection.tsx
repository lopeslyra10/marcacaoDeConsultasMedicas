import React from 'react';
import { View, Text } from 'react-native';
import { Statistics } from '../../../services/statistics';

interface Props {
  statistics: Statistics;
}

export const StatisticsSection: React.FC<Props> = ({ statistics }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text>Total de Consultas: {statistics.totalAppointments}</Text>
      <Text>Confirmadas: {statistics.confirmedAppointments}</Text>
      <Text>Pendentes: {statistics.pendingAppointments}</Text>
      <Text>Canceladas: {statistics.cancelledAppointments}</Text>
      <Text>Total de Pacientes: {statistics.totalPatients}</Text>
      <Text>Total de Médicos: {statistics.totalDoctors}</Text>
    </View>
  );
};
