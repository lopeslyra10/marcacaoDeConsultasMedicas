import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../../contexts/AuthContext'; 
import { RootStackParamList } from '../../../types/navigation'; 
import { Alert } from 'react-native';

export const useRegister = () => {
  const { register } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await register({ name, email, password });
      Alert.alert('Sucesso!', 'Sua conta foi criada. Faça o login para continuar.', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (err) {
      setError('Erro ao criar conta. Verifique os dados e tente novamente.');
      console.error('Erro no registro:', err);
    } finally {
      setLoading(false);
    }
  };


  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return {
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
  };
};