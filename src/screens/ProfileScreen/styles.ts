import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import theme from '../../styles/theme'; 


export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
    alignItems: 'center',
  },
})`
  flex: 1;
`;

export const ProfileCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.border};
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const Email = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 12px;
`;

export const RoleText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`;

export const SpecialtyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.primary};
  margin-top: 8px;
  font-style: italic;
`;

export const RoleBadge = styled.View<{ role: string }>`
  background-color: ${({ role }) => {
    switch (role) {
      case 'admin': return theme.colors.primary + '20';
      case 'doctor': return theme.colors.success + '20';
      default: return theme.colors.secondary + '20';
    }
  }};
  padding: 6px 12px;
  border-radius: 16px;
`;

export const elementStyles = {
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    maxWidth: 400,
  } as ViewStyle,
  editButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  backButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
  logoutButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 12,
  },
};