import React from 'react';
import { Button, Input } from 'react-native-elements';
import { useEditProfile } from './hooks/useEditProfile';
import Header from '../../components/Header'; // Ajuste o caminho
import ProfileImagePicker from '../../components/ProfileImagePicker'; // Ajuste o caminho
import * as S from './styles';

const EditProfileScreen: React.FC = () => {
  const {
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
  } = useEditProfile();

  const userRole = user?.role || '';

  return (
    <S.Container>
      <Header />
      <S.ScrollContainer>
        <S.Title>Editar Perfil</S.Title>

        <S.ProfileCard>
          <ProfileImagePicker
            currentImageUri={profileImage}
            onImageSelected={handleImageSelected}
            size={120}
          />

          <Input
            label="Nome"
            value={name}
            onChangeText={setName}
            containerStyle={S.elementStyles.input}
            placeholder="Digite seu nome"
          />

          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            containerStyle={S.elementStyles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {userRole === 'doctor' && (
            <Input
              label="Especialidade"
              value={specialty}
              onChangeText={setSpecialty}
              containerStyle={S.elementStyles.input}
              placeholder="Digite sua especialidade"
            />
          )}

          <S.RoleBadge role={userRole}>
            <S.RoleText>
              {userRole === 'admin' ? 'Administrador' : userRole === 'doctor' ? 'Médico' : 'Paciente'}
            </S.RoleText>
          </S.RoleBadge>
        </S.ProfileCard>

        <Button
          title="Salvar Alterações"
          onPress={handleSaveProfile}
          loading={loading}
          disabled={loading}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.saveButton}
        />

        <Button
          title="Cancelar"
          onPress={handleCancel}
          disabled={loading}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.cancelButton}
        />
      </S.ScrollContainer>
    </S.Container>
  );
};

export default EditProfileScreen;