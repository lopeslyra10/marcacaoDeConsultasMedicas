import React from 'react';
import { Card, Button } from 'react-native-elements';
import { Appointment } from '@/types/appointments';

type Props = {
  appointment: Appointment;
  onUpdateStatus: (id: string, status: string) => void;
};

export default function AppointmentCard({ appointment, onUpdateStatus }: Props) {
  return (
    <Card>
      <Card.Title>{appointment.description}</Card.Title>
      <Card.Divider />
      <Card.FeaturedSubtitle>
        {appointment.date} - {appointment.time}
      </Card.FeaturedSubtitle>
      <Card.FeaturedSubtitle>Status: {appointment.status}</Card.FeaturedSubtitle>

      <Button
        title="Marcar como realizada"
        onPress={() => onUpdateStatus(appointment.id, 'realizada')}
        buttonStyle={{ marginTop: 8 }}
      />
      <Button
        title="Cancelar"
        onPress={() => onUpdateStatus(appointment.id, 'cancelada')}
        buttonStyle={{ marginTop: 8, backgroundColor: 'red' }}
      />
    </Card>
  );
}
