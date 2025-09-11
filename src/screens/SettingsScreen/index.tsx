import React from 'react';
import { Button, ListItem, Switch } from 'react-native-elements';
import { useSettings } from './hooks/useSettings';
import Header from '../../components/Header'; // Ajuste o caminho
import * as S from './styles';
import theme from '../../styles/theme'; // Ajuste o caminho

const SettingsScreen: React.FC = () => {
  const {
    settings,
    loading,
    storageInfo,
    updateSetting,
    handleCreateBackup,
    handleClearCache,
    handleClearAllData,
    handleGoBack,
  } = useSettings();

  if (loading) {
    return (
      <S.Container>
        <Header />
        <S.LoadingContainer>
          <S.LoadingText>Carregando...</S.LoadingText>
        </S.LoadingContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Header />
      <S.ScrollView>
        <S.Title>Configurações</S.Title>

        <S.SectionTitle>Preferências</S.SectionTitle>
        <S.SettingsCard>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>Notificações Push</ListItem.Title>
            </ListItem.Content>
            <Switch
              value={settings.notifications}
              onValueChange={(value) => updateSetting('notifications', value)}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
            />
          </ListItem>
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Backup Automático</ListItem.Title>
            </ListItem.Content>
            <Switch
              value={settings.autoBackup}
              onValueChange={(value) => updateSetting('autoBackup', value)}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
            />
          </ListItem>
        </S.SettingsCard>

        <S.SectionTitle>Dados e Armazenamento</S.SectionTitle>
        <S.SettingsCard>
          {storageInfo && (
            <>
              <S.InfoItem>
                <S.InfoLabel>Uso do Armazenamento:</S.InfoLabel>
                <S.InfoValue>{storageInfo.usage}</S.InfoValue>
              </S.InfoItem>
              <S.InfoItem>
                <S.InfoLabel>Total de Chaves:</S.InfoLabel>
                <S.InfoValue>{storageInfo.totalKeys}</S.InfoValue>
              </S.InfoItem>
            </>
          )}
        </S.SettingsCard>

        <Button
          title="Criar Backup Manual"
          onPress={handleCreateBackup}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.backupButton}
        />
        <Button
          title="Limpar Cache"
          onPress={handleClearCache}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.cacheButton}
        />

        <S.SectionTitle>Ações Perigosas</S.SectionTitle>
        <Button
          title="Apagar Todos os Dados"
          onPress={handleClearAllData}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.dangerButton}
        />
        
        <Button
          title="Voltar"
          onPress={handleGoBack}
          containerStyle={S.elementStyles.buttonContainer}
          buttonStyle={S.elementStyles.primaryButton}
        />
      </S.ScrollView>
    </S.Container>
  );
};

export default SettingsScreen;