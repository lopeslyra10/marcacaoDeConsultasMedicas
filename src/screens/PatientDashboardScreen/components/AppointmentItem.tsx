import React from 'react';
import { ListItem, Text } from 'react-native-elements';
import { Appointment } from '../../../types/appointments'; 
import { getStatusText } from '../hooks/usePatientDashboard';
import * as S from '../styles';

type AppointmentItemProps = {
  appointment: Appointment;
};

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment }) => {
  return (
    <S.AppointmentCard>
      <ListItem.Content>
        <Text style={S.elementStyles.doctorName}>{appointment.doctorName}</Text>
        <Text style={S.elementStyles.specialty}>{appointment.specialty}</Text>
        <Text style={S.elementStyles.dateTime}>
          {appointment.date} às {appointment.time}
        </Text>
        <S.StatusBadge status={appointment.status}>
          <S.StatusText status={appointment.status}>
            {getStatusText(appointment.status)}
          </S.StatusText>
        </S.StatusBadge>
      </ListItem.Content>
    </S.AppointmentCard>
  );
};

export default React.memo(AppointmentItem);