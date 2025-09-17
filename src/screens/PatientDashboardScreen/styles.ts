// src/screens/PatientDashboardScreen/styles.ts
import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';
import { ViewStyle, TextStyle } from 'react-native';
import theme from '../../styles/theme';
import { getStatusColor } from './hooks/usePatientDashboard';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const AppointmentCard = styled(ListItem)`
  background-color: ${theme.colors.background};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 15px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const LoadingText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 16px;
  margin-top: 20px;
`;

export const StatusBadge = styled.View<{ status: string }>`
  background-color: ${({ status }) => getStatusColor(status) + '20'};
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const StatusText = styled.Text<{ status: string }>`
  color: ${({ status }) => getStatusColor(status)};
  font-size: 12px;
  font-weight: 500;
`;

// Renomeado para elementStyles para consistência com as outras telas
export const elementStyles = {
  scrollContent: {
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: '100%',
  } as ViewStyle,
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
  } as TextStyle,
  specialty: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  } as TextStyle,
  dateTime: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  } as TextStyle,
};