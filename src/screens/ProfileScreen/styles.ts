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

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const ProfileCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
  align-items: center;
  width: 100%;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 16px;
  border-width: 3px;
  border-color: ${theme.colors.primary};
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

export const Email = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 12px;
`;

export const RoleBadge = styled.View<{ role: string }>`
  background-color: ${(props: { role: string }) => {
    switch (props.role) {
      case 'admin': return theme.colors.primary + '20';
      case 'doctor': return theme.colors.success + '20';
      default: return theme.colors.secondary + '20';
    }
  }};
  padding: 6px 12px;
  border-radius: 16px;
`;

export const RoleText = styled.Text`
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: 500;
`;

export const SpecialtyText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.primary};
  margin-top: 12px;
  font-style: italic;
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