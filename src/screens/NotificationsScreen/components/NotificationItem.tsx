import React from 'react';
import { ListItem } from 'react-native-elements';
import { Notification } from '../../../services/notifications'; // Ajuste o caminho
// Atualize a linha abaixo para importar do hook
import { getNotificationIcon, formatDate } from '../hooks/useNotifications';
import * as S from '../styles';

type NotificationItemProps = {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onDelete: (id: string) => void;
};

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
  onDelete,
}) => {
  return (
    <S.NotificationCard isRead={notification.read}>
      <ListItem
        containerStyle={{ backgroundColor: 'transparent' }}
        onPress={() => !notification.read && onMarkAsRead(notification.id)}
        onLongPress={() => onDelete(notification.id)}
      >
        <S.NotificationIcon>
          {getNotificationIcon(notification.type)}
        </S.NotificationIcon>
        <ListItem.Content>
          <S.NotificationHeader>
            <ListItem.Title style={S.elementStyles.listItemTitle}>
              {notification.title}
            </ListItem.Title>
            {!notification.read && <S.UnreadDot />}
          </S.NotificationHeader>
          <ListItem.Subtitle style={S.elementStyles.listItemMessage}>
            {notification.message}
          </ListItem.Subtitle>
          <S.DateText>{formatDate(notification.createdAt)}</S.DateText>
        </ListItem.Content>
      </ListItem>
    </S.NotificationCard>
  );
};

export default React.memo(NotificationItem);