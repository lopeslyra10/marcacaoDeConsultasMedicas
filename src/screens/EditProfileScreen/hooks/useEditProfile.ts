import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '../../../contexts/AuthContext'; 
import { imageService } from '../../../services/imageService'; 
import { User } from '../../../types/auth'; 

export const useEditProfile = () => {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [specialty, setSpecialty] = useState(user?.specialty || '');
  const [profileImage, setProfileImage] = useState(user?.image || '');
  const [loading, setLoading] = useState(false);


  const handleImageSelected = async (imageUri: string) => {
    if (!user?.id) return;

    try {
     
      const savedImageUri = await imageService.saveProfileImage(user.id, imageUri);
      setProfileImage(savedImageUri);
    } catch (error) {
      console.error('Erro ao processar imagem:', error);
      Alert.alert('Erro', 'Não foi possível processar a imagem selecionada.');
    }
  };

  
  const handleSaveProfile = async () => {
    if (!name.trim() || !email.trim()) {
      Alert.alert('Erro', 'Nome e email são obrigatórios.');
      return;
    }

    setLoading(true);
    try {
      const updatedData: Partial<User> = {
        name: name.trim(),
        email: email.trim(),
        image: profileImage,
        ...(user?.role === 'doctor' && { specialty: specialty.trim() }),
      };

      
      await updateUser(updatedData);

      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o perfil.');
      console.error('Erro ao atualizar perfil:', error);
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleCancel = () => {
    navigation.goBack();
  };

  return {
    user,
    name,
    setName,
    email,
    setEmail,
    specialty,
    setSpecialty,
    profileImage,
    loading,
    handleImageSelected,
    handleSaveProfile,
    handleCancel,
  };
};