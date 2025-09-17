import React from 'react';
import { Input, Button, Text } from 'react-native-elements';
import { useLogin } from './hooks/useLogin';
import { Container, Title, ErrorText, styles } from './styles';

const LoginScreen: React.FC = () => {
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
    <Container>
      <Title>App Marcação de Consultas</Title>
      
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        containerStyle={styles.input}
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.input}
      />

      {error ? <ErrorText>{error}</ErrorText> : <ErrorText> </ErrorText>}

      <Button
        title="Entrar"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        containerStyle={styles.button as ViewStyle}
        buttonStyle={styles.buttonStyle}
      />

      <Button
        title="Cadastrar Novo Usuário"
        type="clear"
        onPress={handleGoToRegister}
        disabled={loading}
        containerStyle={styles.registerButton as ViewStyle}
        buttonStyle={styles.registerButtonStyle}
        titleStyle={styles.registerButtonTitle}
      />
      
      <Text style={styles.hint}>
        Primeiro acesso? Cadastre-se como Admin ou Paciente.
      </Text>
    </Container>
  );
};

export default LoginScreen;