import React from 'react';
import { ListItem, Button } from 'react-native-elements';
import { User } from '../../../types/auth';
import { getRoleText } from '../hooks/useUserManagement';
import * as S from '../styles';

type UserItemProps = {
  user: User;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const UserItem: React.FC<UserItemProps> = ({ user, onEdit, onDelete }) => {
  return (
    <S.UserCard>
      <ListItem.Content>
        <ListItem.Title style={S.elementStyles.userName}>
          {user.name}
        </ListItem.Title>
        <ListItem.Subtitle style={S.elementStyles.userEmail}>
          {user.email}
        </ListItem.Subtitle>
        <S.RoleBadge role={user.role}>
          <S.RoleText role={user.role}>
            {getRoleText(user.role)}
          </S.RoleText>
        </S.RoleBadge>

        <S.ButtonContainer>
          <Button
            title="Editar"
            onPress={() => onEdit(user.id)}
            containerStyle={S.elementStyles.actionButtonContainer}
            buttonStyle={S.elementStyles.editButton}
          />
          <Button
            title="Excluir"
            onPress={() => onDelete(user.id)}
            containerStyle={S.elementStyles.actionButtonContainer}
            buttonStyle={S.elementStyles.deleteButton}
          />
        </S.ButtonContainer>
      </ListItem.Content>
    </S.UserCard>
  );
};

export default React.memo(UserItem);