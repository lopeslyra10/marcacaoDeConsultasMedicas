import styled from 'styled-components/native';
import { ViewStyle } from 'react-native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.text};
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
  min-height: 18px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 12px;
  margin-top: 8px;
`;

export const UserTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const UserTypeButton = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  padding: 12px;
  margin: 0 5px;
  border-radius: 8px;
  border: 2px solid ${({ selected }) => selected ? theme.colors.primary : theme.colors.border};
  background-color: ${({ selected }) => selected ? theme.colors.primary + '20' : 'transparent'};
  align-items: center;
`;

export const UserTypeText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => selected ? theme.colors.primary : theme.colors.text};
  font-weight: ${({ selected }) => selected ? 'bold' : 'normal'};
  font-size: 14px;
`;

export const elementStyles = {
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    width: '100%',
  } as ViewStyle,
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  backButton: {
    marginTop: 10,
    width: '100%',
  } as ViewStyle,
  backButtonStyle: {
    backgroundColor: 'transparent',
  },
  backButtonTitle: {
    color: theme.colors.secondary,
  }
};