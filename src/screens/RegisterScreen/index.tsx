import React from 'react';
import { Input, Button } from 'react-native-elements';
import { useRegister } from './hooks/useRegister';
import {
  Container, Title, ErrorText, SectionTitle,
  UserTypeContainer, UserTypeButton, UserTypeText, elementStyles,
} from './styles';

const RegisterScreen: React.FC = () => {
  const {
    name, setName,
    email, setEmail,
    password, setPassword,
    userType, setUserType,
    loading,
    error,
    handleRegister,
    handleGoToLogin,
  } = useRegister();

  return (
    <Container>
      <Title>Cadastro de Usuário</Title>
      
      <Input
        placeholder="Nome completo"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        containerStyle={elementStyles.input}
      />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={elementStyles.input}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={elementStyles.input}
      />

      <SectionTitle>Tipo de Usuário</SectionTitle>
      <UserTypeContainer>
        <UserTypeButton selected={userType === 'PACIENTE'} onPress={() => setUserType('PACIENTE')}>
          <UserTypeText selected={userType === 'PACIENTE'}>👤 Paciente</UserTypeText>
        </UserTypeButton>
        <UserTypeButton selected={userType === 'ADMIN'} onPress={() => setUserType('ADMIN')}>
          <UserTypeText selected={userType === 'ADMIN'}>🔧 Administrador</UserTypeText>
        </UserTypeButton>
      </UserTypeContainer>

      {error ? <ErrorText>{error}</ErrorText> : <ErrorText> </ErrorText>}

      <Button
        title="Cadastrar"
        onPress={handleRegister}
        loading={loading}
        disabled={loading}
        containerStyle={elementStyles.button}
        buttonStyle={elementStyles.buttonStyle}
      />

      <Button
        title="Voltar para Login"
        type="clear"
        onPress={handleGoToLogin}
        disabled={loading}
        containerStyle={elementStyles.backButton}
        buttonStyle={elementStyles.backButtonStyle}
        titleStyle={elementStyles.backButtonTitle}
      />
    </Container>
  );
};

export default RegisterScreen;