import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  specialties: { [key: string]: number };
}

export const SpecialtyList: React.FC<Props> = ({ specialties }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>Especialidades mais acessadas:</Text>
      {Object.entries(specialties).map(([specialty, count]) => (
        <Text key={specialty}>
          {specialty}: {count}
        </Text>
      ))}
    </View>
  );
};
