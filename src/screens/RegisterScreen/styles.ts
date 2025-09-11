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


export const elementStyles = {
  input: {
    marginBottom: 15,
  } as ViewStyle,
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  } as ViewStyle,
  registerButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  backButton: {
    backgroundColor: 'transparent',
  },
  backButtonTitle: {
    color: theme.colors.primary,
  }
};