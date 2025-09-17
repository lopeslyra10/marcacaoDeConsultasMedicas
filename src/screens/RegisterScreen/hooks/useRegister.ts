// src/screens/RegisterScreen/hooks/useRegister.ts
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../../contexts/AuthContext';
import { RootStackParamList, RegisterData } from '../../../types';
import { RegisterService } from '../services/registerService';

export const useRegister = () => {
  const { register } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Estado do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<RegisterData['userType']>('PACIENTE');
  
  // Estado da UI
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
      const registerData: RegisterData = { name, email, password, userType };
      await RegisterService.register(register, registerData);

      Alert.alert('Sucesso!', 'Sua conta foi criada. Faça o login para continuar.', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);

    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return {
    name, setName,
    email, setEmail,
    password, setPassword,
    userType, setUserType,
    loading,
    error,
    handleRegister,
    handleGoToLogin,
  };
};