import React from 'react';
import { Card } from 'react-native-elements';
import { User } from '@/types/auth';

type Props = {
  users: User[];
};

export default function SpecialtyList({ users }: Props) {
  const doctors = users.filter((u) => u.role === 'doctor');
  const specialties = Array.from(new Set(doctors.map((d: any) => d.specialty))).sort();

  return (
    <Card>
      <Card.Title>Especialidades Médicas</Card.Title>
      <Card.Divider />
      {specialties.map((specialty, index) => (
        <Card.FeaturedSubtitle key={index}>{specialty}</Card.FeaturedSubtitle>
      ))}
    </Card>
  );
}
