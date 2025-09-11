import React from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { useUserManagement } from './hooks/useUserManagement';
import Header from '../../components/Header'; // Ajuste o caminho
import UserItem from './components/UserItem';
import * as S from './styles';

const UserManagementScreen: React.FC = () => {
  const {
    loading,
    users,
    handleDeleteUser,
    handleAddNewUser,
    handleEditUser,
    handleGoBack,
  } = useUserManagement();

  if (loading) {
    return (
      <S.Container>
        <Header />
        <S.LoadingText>Carregando usuários...</S.LoadingText>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Header />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserItem
            user={item}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        )}
        ListHeaderComponent={
          <>
            <S.Title>Gerenciar Usuários</S.Title>
            <Button
              title="Adicionar Novo Usuário"
              onPress={handleAddNewUser}
              containerStyle={S.elementStyles.buttonContainer}
              buttonStyle={S.elementStyles.primaryButton}
            />
          </>
        }
        ListFooterComponent={
          <Button
            title="Voltar"
            onPress={handleGoBack}
            containerStyle={S.elementStyles.buttonContainer}
            buttonStyle={S.elementStyles.backButton}
          />
        }
        ListEmptyComponent={<S.EmptyText>Nenhum outro usuário cadastrado</S.EmptyText>}
        contentContainerStyle={{ padding: 20 }}
      />
    </S.Container>
  );
};

export default UserManagementScreen;