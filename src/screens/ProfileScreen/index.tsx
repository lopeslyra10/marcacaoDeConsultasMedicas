import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { useProfile } from './hooks/useProfile';
import Header from '../../components/Header';
import {
  Container, ScrollView, Title, ProfileCard, Avatar,
  Name, Email, RoleBadge, RoleText, SpecialtyText, elementStyles,
} from './styles';

const ProfileScreen: React.FC = () => {
  const {
    user,
    signOut,
    getRoleText,
    handleEditProfile,
    handleGoBack,
  } = useProfile();

  if (!user) {
    // Estado de fallback caso o usuário ainda não tenha sido carregado
    return (
      <Container>
        <Header />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <ScrollView>
        <Title>Meu Perfil</Title>

        <ProfileCard>
          <Avatar source={{ uri: user.image || 'https://via.placeholder.com/150' }} />
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
          
          <RoleBadge role={user.role}>
            <RoleText>{getRoleText(user.role)}</RoleText>
          </RoleBadge>
          
          {user.role === 'doctor' && 'specialty' in user && (
            <SpecialtyText>Especialidade: {user.specialty}</SpecialtyText>
          )}
        </ProfileCard>

        <Button
          title="Editar Perfil"
          onPress={handleEditProfile}
          containerStyle={elementStyles.buttonContainer}
          buttonStyle={elementStyles.editButton}
        />

        <Button
          title="Voltar"
          onPress={handleGoBack}
          containerStyle={elementStyles.buttonContainer}
          buttonStyle={elementStyles.backButton}
        />

        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={elementStyles.buttonContainer}
          buttonStyle={elementStyles.logoutButton}
        />
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;