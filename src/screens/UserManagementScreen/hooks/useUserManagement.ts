import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/AuthContext'; 
import { User } from '../../../types/auth'; 
import theme from '../../../styles/theme'; 

// --- FUNÇÃO HELPER ---
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

// --- HOOK PRINCIPAL ---
export const useUserManagement = () => {
  const { user: currentUser } = useAuth();
  const navigation = useNavigation();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = React.useCallback(async () => {
    setLoading(true);
    try {
      const storedData = await AsyncStorage.getItem('@MedicalApp:users');
      if (storedData) {
        const allUsers: User[] = JSON.parse(storedData);
        // Filtra o usuário atual da lista para não se auto-gerenciar
        setUsers(allUsers.filter(u => u.id !== currentUser?.id));
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    } finally {
      setLoading(false);
    }
  }, [currentUser?.id]);

  useFocusEffect(loadUsers);

  const handleDeleteUser = (userId: string) => {
    Alert.alert('Excluir Usuário', 'Tem certeza que deseja excluir este usuário?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            const updatedUsers = users.filter(u => u.id !== userId);
            // Adiciona o usuário atual de volta antes de salvar para não se excluir
            const usersToSave = currentUser ? [...updatedUsers, currentUser] : updatedUsers;
            await AsyncStorage.setItem('@MedicalApp:users', JSON.stringify(usersToSave));
            setUsers(updatedUsers); // Atualiza o estado local sem precisar reler do AsyncStorage
          } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            Alert.alert('Erro', 'Não foi possível excluir o usuário.');
          }
        },
      },
    ]);
  };
  
  const handleGoBack = () => navigation.goBack();
  
  // Funções placeholder para futuras implementações
  const handleAddNewUser = () => Alert.alert('A Fazer', 'A tela de criação de usuário ainda não foi implementada.');
  const handleEditUser = (userId: string) => Alert.alert('A Fazer', `A edição para o usuário ${userId} ainda não foi implementada.`);

  return {
    loading,
    users,
    handleDeleteUser,
    handleAddNewUser,
    handleEditUser,
    handleGoBack,
  };
};