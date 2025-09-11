import styled from 'styled-components/native';
import { ListItem } from 'react-native-elements';
import { ViewStyle, TextStyle } from 'react-native';
import theme from '../../styles/theme'; 
import { User } from '../../types/auth'; 
import { getRoleColor } from './hooks/useUserManagement';

// --- LAYOUT & CONTAINERS ---
export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;

// --- TEXTOS & TÍTULOS ---
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

// --- ESTILOS PARA LIBS (React Native Elements) ---
export const elementStyles = {
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
  } as ViewStyle,
  primaryButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  backButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
  // Estilos para o UserItem
  actionButtonContainer: {
    flex: 1,
    marginHorizontal: 5,
  } as ViewStyle,
  editButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  } as TextStyle,
  userEmail: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
  } as TextStyle,
};

// --- COMPONENTES PARA O USER ITEM ---
export const UserCard = styled(ListItem).attrs({
  containerStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
})`
  margin-bottom: 10px;
`;

type RoleProps = { role: User['role'] };

export const RoleBadge = styled.View<RoleProps>`
  background-color: ${({ role }) => getRoleColor(role) + '20'};
  padding: 4px 10px;
  border-radius: 12px;
  align-self: flex-start;
  margin-top: 8px;
`;

export const RoleText = styled.Text<RoleProps>`
  color: ${({ role }) => getRoleColor(role)};
  font-size: 12px;
  font-weight: bold;
`;