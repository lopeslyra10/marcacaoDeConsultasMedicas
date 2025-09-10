import React from 'react';
import { View, Text } from 'react-native';
import { Appointment, AppointmentStatus } from '../../../types/appointments';

interface Props {
  appointmentsByMonth: { [key: string]: number };
}

export const AppointmentCard: React.FC<Props> = ({ appointmentsByMonth }) => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold' }}>Consultas por mês:</Text>
      {Object.entries(appointmentsByMonth).map(([month, count]) => (
        <Text key={month}>
          {month}: {count}
        </Text>
      ))}
    </View>
  );
};