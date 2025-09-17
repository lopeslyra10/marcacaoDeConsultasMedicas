import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';
import { User } from '../../../types';
import { UserManagementService } from '../services/userManagementService';
import theme from '../../../styles/theme';

// Funções helper para a UI
export const getRoleText = (role: User['role']) => {
  switch (role) {
    case 'admin': return 'Administrador';
    case 'doctor': return 'Médico';
    case 'patient': return 'Paciente';
    default: return role;
  }
};

export const getRoleColor = (role: User['role']) => {
  switch (role) {
    case 'admin': return theme.colors.primary;
    case 'doctor': return theme.colors.success;
    default: return theme.colors.secondary;
  }
};


export const useUserManagement = () => {
  const { user: currentUser } = useAuth();
  const navigation = useNavigation();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    if (!currentUser) return;
    setLoading(true);
    try {
      const loadedUsers = await UserManagementService.loadUsers(currentUser.id);
      setUsers(loadedUsers);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível carregar a lista de usuários.');
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useFocusEffect(fetchUsers);

  const handleDeleteUser = (userId: string) => {
    Alert.alert('Excluir Usuário', 'Tem certeza que deseja excluir este usuário permanentemente?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            // Chama o serviço para deletar e já recebe a lista atualizada
            const allUsersUpdated = await UserManagementService.deleteUser(userId);
            // Filtra o usuário logado novamente para a exibição na tela
            setUsers(allUsersUpdated.filter(u => u.id !== currentUser?.id));
            Alert.alert('Sucesso', 'Usuário excluído.');
          } catch (error) {
            Alert.alert('Erro', 'Não foi possível excluir o usuário.');
          }
        },
      },
    ]);
  };

  const handleGoBack = () => navigation.goBack();
  const handleAddNewUser = () => Alert.alert('A Fazer', 'Funcionalidade não implementada.');
  const handleEditUser = (userId: string) => Alert.alert('A Fazer', `Edição para o usuário ${userId} não implementada.`);

  return {
    loading,
    users,
    handleDeleteUser,
    handleAddNewUser,
    handleEditUser,
    handleGoBack,
  };
};