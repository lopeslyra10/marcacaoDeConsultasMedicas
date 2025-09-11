import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';
import { ViewStyle, TextStyle } from 'react-native';
import theme from '../../styles/theme'; 
import { Appointment } from '../../types/appointments'; 
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

export const elementStyles = {
  buttonContainer: {
    marginBottom: 15,
    width: '100%',
  } as ViewStyle,
  primaryButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
    marginTop: 10,
  },

  doctorName: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 4,
  } as TextStyle,
  specialty: {
    fontSize: 14,
    color: theme.colors.text,
    fontStyle: 'italic',
  } as TextStyle,
  dateTime: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 8,
  } as TextStyle,
};

export const AppointmentCard = styled(ListItem).attrs({
  containerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
})`
  margin-bottom: 10px;
`;

type StatusProps = { status: Appointment['status'] };

export const StatusBadge = styled.View<StatusProps>`
  background-color: ${({ status }) => getStatusColor(status) + '20'};
  padding: 4px 10px;
  border-radius: 12px;
  align-self: flex-start;
  margin-top: 10px;
`;

export const StatusText = styled.Text<StatusProps>`
  color: ${({ status }) => getStatusColor(status)};
  font-size: 12px;
  font-weight: bold;
`;