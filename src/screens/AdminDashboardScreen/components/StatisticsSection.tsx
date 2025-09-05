import React from 'react';
import { Card } from 'react-native-elements';
import { Appointment } from '@/types/appointments';
import { User } from '@/types/auth';

type Props = {
  users: User[];
  appointments: Appointment[];
};

export default function StatisticsSection({ users, appointments }: Props) {
  return (
    <Card>
      <Card.Title>Estatísticas</Card.Title>
      <Card.Divider />
      <Card.FeaturedSubtitle>Total de Usuários: {users.length}</Card.FeaturedSubtitle>
      <Card.FeaturedSubtitle>Total de Consultas: {appointments.length}</Card.FeaturedSubtitle>
    </Card>
  );
}
