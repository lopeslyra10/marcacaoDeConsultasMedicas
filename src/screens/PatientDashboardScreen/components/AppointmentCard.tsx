// src/screens/PatientDashboardScreen/components/AppointmentCard.tsx
import React from 'react';
import { ListItem, Text } from 'react-native-elements';
import { EnrichedAppointment } from '../hooks/usePatientDashboard';
import { getStatusText } from '../hooks/usePatientDashboard';
import { AppointmentCard, StatusBadge, StatusText, styles } from '../styles';

type AppointmentCardProps = {
  appointment: EnrichedAppointment;
};

const AppointmentCardComponent: React.FC<AppointmentCardProps> = ({ appointment }) => {
  return (
    <AppointmentCard>
      <ListItem.Content>
        <Text style={styles.doctorName as TextStyle}>{appointment.doctorName}</Text>
        <Text style={styles.specialty as TextStyle}>{appointment.specialty}</Text>
        <Text style={styles.dateTime as TextStyle}>
          {appointment.date} às {appointment.time}
        </Text>
        <StatusBadge status={appointment.status}>
          <StatusText status={appointment.status}>
            {getStatusText(appointment.status)}
          </StatusText>
        </StatusBadge>
      </ListItem.Content>
    </AppointmentCard>
  );
};

export default React.memo(AppointmentCardComponent);