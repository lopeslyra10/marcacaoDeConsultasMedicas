import React from 'react';
import { Button } from 'react-native-elements';
import { useProfile } from './hooks/useProfile';
import Header from '../../components/Header'; 
import ProfileImagePicker from '../../components/ProfileImagePicker';
import * as S from './styles';

const ProfileScreen: React.FC = () => {
  const { user, signOut, getRoleText, handleEditProfile, handleGoBack } = useProfile();

  if (!user) {
    return (
      <S.Container>
        <Header />
        <S.Title>Carregando perfil...</S.Title>
      </S.Container>
    );
  }

  const userRole = user.role || '';

  return (
    <S.Container>
      <Header />
      <S.ScrollView>
        <S.Title>Meu Perfil</S.Title>

        <S.ProfileCard>
          <ProfileImagePicker
            currentImageUri={user.image}
            onImageSelected={() => {}} // É somente leitura
            size={120}
            editable={false}
          />
          <S.Name>{user.name}</S.Name>
          <S.Email>{user.email}</S.Email>

          <S.RoleBadge role={userRole}>
            <S.RoleText>{getRoleText(userRole)}</S.RoleText>
          </S.RoleBadge>

          {userRole === 'doctor' && user.specialty && (
            <S.SpecialtyText>Especialidade: {user.specialty}</S.SpecialtyText>
          )}
        </S.ProfileCard>

        <Button
          title="Editar Perfil"
          onPress={handleEditProfile}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.editButton}
        />

        <Button
          title="Voltar"
          onPress={handleGoBack}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.backButton}
        />

        <Button
          title="Sair"
          onPress={signOut}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.logoutButton}
        />
      </S.ScrollView>
    </S.Container>
  );
};

export default ProfileScreen;