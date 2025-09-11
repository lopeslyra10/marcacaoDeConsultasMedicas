import React from 'react';
import { FlatList } from 'react-native';
import { Button, Badge } from 'react-native-elements';
import { useNotifications } from './hooks/useNotifications';
import Header from '../../components/Header'; // Ajuste o caminho
import NotificationItem from './components/NotificationItem';
import * as S from './styles';

const NotificationsScreen: React.FC = () => {
  const {
    loading,
    notifications,
    unreadCount,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
    handleGoBack,
  } = useNotifications();

  const renderHeader = () => (
    <>
      <S.TitleContainer>
        <S.Title>Notificações</S.Title>
        {unreadCount > 0 && (
          <Badge
            value={unreadCount}
            status="error"
            containerStyle={S.elementStyles.badge}
          />
        )}
      </S.TitleContainer>

      {unreadCount > 0 && (
        <Button
          title="Marcar todas como lidas"
          onPress={handleMarkAllAsRead}
          containerStyle={S.elementStyles.markAllButtonContainer}
          buttonStyle={S.elementStyles.markAllButton}
        />
      )}

      <Button
        title="Voltar"
        type="outline"
        onPress={handleGoBack}
        containerStyle={S.elementStyles.backButtonContainer}
        buttonStyle={S.elementStyles.backButton}
        titleStyle={S.elementStyles.backButtonTitle}
      />
    </>
  );

  if (loading) {
    return (
      <S.Container>
        <Header />
        <S.LoadingText>Carregando notificações...</S.LoadingText>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Header />
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            notification={item}
            onMarkAsRead={handleMarkAsRead}
            onDelete={handleDeleteNotification}
          />
        )}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          <S.EmptyContainer>
            <S.EmptyText>Nenhuma notificação encontrada</S.EmptyText>
          </S.EmptyContainer>
        }
        contentContainerStyle={{ padding: 20 }}
      />
    </S.Container>
  );
};

export default NotificationsScreen;