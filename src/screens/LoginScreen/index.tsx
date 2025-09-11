import React from 'react';
import { Input, Button } from 'react-native-elements';
import { useLogin } from './hooks/useLogin';
import { credentials } from './models/credentials';
import * as S from './styles'; // Importa tudo de styles.ts como 'S'

const LoginScreen: React.FC = () => {
  // O hook provê todo o estado e a lógica necessários
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
    handleGoToRegister,
  } = useLogin();

  return (
    <S.Container>
      <S.Title>Bem-vindo!</S.Title>
      
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={S.elementStyles.inputContainer}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={S.elementStyles.inputContainer}
      />

      {error ? <S.ErrorText>{error}</S.ErrorText> : null}

      <Button
        title="Entrar"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        containerStyle={S.elementStyles.buttonContainer}
        buttonStyle={S.elementStyles.loginButton}
      />

      <Button
        title="Cadastrar Novo Paciente"
        type="outline" // Fica melhor com o estilo que definimos
        onPress={handleGoToRegister}
        containerStyle={S.elementStyles.buttonContainer}
        buttonStyle={S.elementStyles.registerButton}
        titleStyle={S.elementStyles.registerButtonTitle}
      />

      <S.CredentialsContainer>
        <S.HintText>{credentials.hint}</S.HintText>
        <S.CredentialsText>
          {credentials.admin}{'\n'}
          {credentials.doctors}
        </S.CredentialsText>
      </S.CredentialsContainer>
    </S.Container>
  );
};

export default LoginScreen;