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
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: ${theme.colors.primary};
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 15px;
  font-size: 14px;
`;

export const CredentialsContainer = styled.View`
  margin-top: 25px;
  padding: 15px;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

export const HintText = styled.Text`
  text-align: center;
  color: ${theme.colors.text};
  font-weight: bold;
`;

export const CredentialsText = styled.Text`
  margin-top: 8px;
  text-align: center;
  color: ${theme.colors.text};
  font-size: 12px;
  line-height: 18px;
`;

export const elementStyles = {
  inputContainer: {
    marginBottom: 15,
  } as ViewStyle,
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  } as ViewStyle,
  loginButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  registerButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
  },
  registerButtonTitle: {
    color: theme.colors.primary,
  }
};