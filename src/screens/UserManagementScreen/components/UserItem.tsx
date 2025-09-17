// src/screens/UserManagementScreen/components/UserItem.tsx
import React from 'react';
import { ListItem, Button } from 'react-native-elements';
import { User } from '../../../types';
import { getRoleText } from '../hooks/useUserManagement';
import {
  UserCard, RoleBadge, RoleText, ButtonContainer, elementStyles,
} from '../styles';

type UserItemProps = {
  user: User;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const UserItem: React.FC<UserItemProps> = ({ user, onEdit, onDelete }) => {
  return (
    <UserCard>
      <ListItem.Content>
        <ListItem.Title style={elementStyles.userName as TextStyle}>{user.name}</ListItem.Title>
        <ListItem.Subtitle style={elementStyles.userEmail as TextStyle}>{user.email}</ListItem.Subtitle>
        <RoleBadge role={user.role}>
          <RoleText role={user.role}>{getRoleText(user.role)}</RoleText>
        </RoleBadge>
        <ButtonContainer>
          <Button
            title="Editar"
            onPress={() => onEdit(user.id)}
            containerStyle={{ flex: 1, marginRight: 5 }}
            buttonStyle={elementStyles.editButton}
          />
          <Button
            title="Excluir"
            onPress={() => onDelete(user.id)}
            containerStyle={{ flex: 1, marginLeft: 5 }}
            buttonStyle={elementStyles.deleteButton}
          />
        </ButtonContainer>
      </ListItem.Content>
    </UserCard>
  );
};

export default React.memo(UserItem);