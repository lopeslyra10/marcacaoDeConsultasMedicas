import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../../contexts/AuthContext'; 
import { RootStackParamList } from '../../../types/navigation'; 

// Tipo para a propriedade de navegação específica desta tela
type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const useLogin = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation<LoginNavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    
    if (!email || !password) {
      setError('Por favor, preencha o email e a senha.');
      return;
    }
    
    try {
      setLoading(true);
      setError('');
      await signIn({ email, password });
      
    } catch (err) {
      setError('Email ou senha inválidos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  
 
  const handleGoToRegister = () => {
    navigation.navigate('Register');
  };


  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleLogin,
    handleGoToRegister,
  };
};