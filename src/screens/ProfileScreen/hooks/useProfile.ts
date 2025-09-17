// src/screens/ProfileScreen/hooks/useProfile.ts

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../../contexts/AuthContext';
import { RootStackParamList, User } from '../../../types';

export const useProfile = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  /**
   * Formata o texto do perfil do usuário para exibição.
   */
  const getRoleText = (role: User['role'] | undefined): string => {
    if (!role) return 'Indefinido';
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'doctor':
        return 'Médico';
      case 'patient':
        return 'Paciente';
      default:
        return role;
    }
  };

  /**
   * Navega para a tela de edição de perfil.
   */
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  /**
   * Navega de volta para a tela anterior.
   */
  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    user,
    signOut,
    getRoleText,
    handleEditProfile,
    handleGoBack,
  };
};