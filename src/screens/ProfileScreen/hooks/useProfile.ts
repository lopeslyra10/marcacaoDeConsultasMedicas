import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../../contexts/AuthContext'; 
import { RootStackParamList } from '../../../types/navigation'; 

export const useProfile = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const getRoleText = (role: string | undefined) => {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'doctor':
        return 'Médico';
      case 'patient':
        return 'Paciente';
      default:
        return 'N/A';
    }
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

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