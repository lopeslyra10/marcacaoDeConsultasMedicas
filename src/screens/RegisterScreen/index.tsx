import React from 'react';
import { Input, Button } from 'react-native-elements';
import { useRegister } from './hooks/useRegister';
import * as S from './styles';

const RegisterScreen: React.FC = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleRegister,
    handleGoToLogin,
  } = useRegister();

  return (
    <S.Container>
      <S.Title>Cadastro de Paciente</S.Title>
      
      <Input
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        containerStyle={S.elementStyles.input}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={S.elementStyles.input}
      />

      <Input
        placeholder="Senha (mínimo 6 caracteres)"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={S.elementStyles.input}
      />

      {error ? <S.ErrorText>{error}</S.ErrorText> : <S.ErrorText> </S.ErrorText>}

      <Button
        title="Cadastrar"
        onPress={handleRegister}
        loading={loading}
        disabled={loading}
        containerStyle={S.elementStyles.buttonContainer}
        buttonStyle={S.elementStyles.registerButton}
      />

      <Button
        title="Já tenho uma conta"
        type="clear"
        onPress={handleGoToLogin}
        disabled={loading}
        containerStyle={S.elementStyles.buttonContainer}
        buttonStyle={S.elementStyles.backButton}
        titleStyle={S.elementStyles.backButtonTitle}
      />
    </S.Container>
  );
};

export default RegisterScreen;