import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import theme from '../../styles/theme'; // Ajuste o caminho

// --- CONTAINERS & LAYOUT ---
export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 20,
  },
})``;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  margin-top: 40px;
`;

// --- TEXTOS ---
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
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
  opacity: 0.7;
`;

// --- ESTILOS PARA COMPONENTES DE LIBS ---
export const elementStyles = {
  badge: {
    marginLeft: 10,
  } as ViewStyle,
  markAllButtonContainer: {
    marginBottom: 15,
    width: '100%',
  } as ViewStyle,
  markAllButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
  },
  backButtonContainer: {
    marginBottom: 20,
    width: '100%',
  } as ViewStyle,
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  backButtonTitle: {
    color: theme.colors.primary,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  listItemMessage: {
    fontSize: 14,
    color: theme.colors.text,
    marginTop: 4,
    lineHeight: 20,
  },
};

// --- ESTILOS PARA O ITEM DA NOTIFICAÇÃO (usado em NotificationItem.tsx) ---
export const NotificationCard = styled.View<{ isRead: boolean }>`
  background-color: ${(props) => (props.isRead ? theme.colors.white : '#E6F3FF')};
  border-radius: 8px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: ${(props) => (props.isRead ? theme.colors.border : theme.colors.primary)};
  overflow: hidden; /* Garante que o ListItem não ultrapasse as bordas arredondadas */
`;

export const NotificationIcon = styled.Text`
  font-size: 24px;
  margin-right: 12px;
`;

export const NotificationHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UnreadDot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${theme.colors.primary};
`;

export const DateText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.text};
  opacity: 0.6;
  margin-top: 6px;
`;