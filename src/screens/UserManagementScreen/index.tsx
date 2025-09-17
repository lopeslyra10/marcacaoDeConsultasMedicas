import React from 'react';
import { FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { useUserManagement } from './hooks/useUserManagement';
import Header from '../../components/Header';
import UserItem from './components/UserItem';
import { Container, Title, LoadingText, EmptyText, elementStyles } from './styles';

const UserManagementScreen: React.FC = () => {
  const {
    loading, users, handleDeleteUser, handleAddNewUser, handleEditUser, handleGoBack,
  } = useUserManagement();

  if (loading) {
    return (
      <Container>
        <Header />
        <LoadingText>Carregando usuários...</LoadingText>
      </Container>
    );
  }

  return (
    <Container>
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
            <Title>Gerenciar Usuários</Title>
            <Button
              title="Adicionar Novo Usuário"
              onPress={handleAddNewUser}
              containerStyle={elementStyles.button as ViewStyle}
              buttonStyle={elementStyles.buttonStyle}
            />
          </>
        }
        ListFooterComponent={
          <Button
            title="Voltar"
            onPress={handleGoBack}
            containerStyle={elementStyles.button as ViewStyle}
            buttonStyle={elementStyles.backButton}
          />
        }
        ListEmptyComponent={<EmptyText>Nenhum outro usuário cadastrado</EmptyText>}
        contentContainerStyle={{ padding: 20 }}
      />
    </Container>
  );
};

export default UserManagementScreen;