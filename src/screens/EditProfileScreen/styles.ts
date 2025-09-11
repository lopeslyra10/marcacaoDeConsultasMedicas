import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const ProfileCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const RoleText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`;

export const RoleBadge = styled.View<{ role: string }>`
  background-color: ${({ role }) => {
    switch (role) {
      case 'admin':
        return theme.colors.primary + '20';
      case 'doctor':
        return theme.colors.success + '20';
      default:
        return theme.colors.secondary + '20';
    }
  }};
  padding: 8px 16px;
  border-radius: 16px;
  margin-top: 10px;
`;

export const elementStyles = {
  input: {
    marginBottom: 15,
  } as ViewStyle,
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  } as ViewStyle,
  saveButton: {
    backgroundColor: theme.colors.success,
    paddingVertical: 12,
  },
  cancelButton: {
    backgroundColor: theme.colors.gray,
    paddingVertical: 12,
  },
};