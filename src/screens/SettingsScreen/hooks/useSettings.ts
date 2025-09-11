import React, { useState } from 'react';
import { Alert, Share } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../contexts/AuthContext';
import { storageService } from '../../../services/storage';

export interface AppSettings {
  notifications: boolean;
  autoBackup: boolean;
  theme: 'light' | 'dark';
  language: string;
}

export interface StorageInfo {
  usage: string;
  totalKeys: number;
}

const INITIAL_SETTINGS: AppSettings = {
  notifications: true,
  autoBackup: true,
  theme: 'light',
  language: 'pt-BR',
};

export const useSettings = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();
  const [settings, setSettings] = useState<AppSettings>(INITIAL_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [storageInfo, setStorageInfo] = useState<StorageInfo | null>(null);

  const loadData = React.useCallback(async () => {
    setLoading(true);
    try {
      const [appSettings, info] = await Promise.all([
        storageService.getAppSettings(),
        storageService.getStorageInfo(),
      ]);
      setSettings(appSettings || INITIAL_SETTINGS);
      setStorageInfo(info);
    } catch (error) {
      console.error('Erro ao carregar dados das configurações:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(loadData);

  const updateSetting = async (key: keyof AppSettings, value: any) => {
    const updatedSettings = { ...settings, [key]: value };
    setSettings(updatedSettings);
    try {
      await storageService.updateAppSettings({ [key]: value });
    } catch (error) {
      console.error('Erro ao atualizar configuração:', error);
      Alert.alert('Erro', 'Não foi possível salvar a configuração.');
      // Reverte o estado em caso de erro
      setSettings(settings);
    }
  };

  const handleCreateBackup = async () => {
    try {
      const backup = await storageService.createBackup();
      await Share.share({ message: backup, title: `Backup do App - ${new Date().toLocaleDateString('pt-BR')}` });
      Alert.alert('Sucesso', 'Backup compartilhado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar backup:', error);
      Alert.alert('Erro', 'Não foi possível criar o backup.');
    }
  };

  const handleClearCache = () => {
    Alert.alert('Limpar Cache', 'Tem certeza que deseja limpar o cache da aplicação?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Limpar',
        style: 'destructive',
        onPress: async () => {
          try {
            await storageService.clearCache();
            await loadData();
            Alert.alert('Sucesso', 'Cache limpo!');
          } catch (error) {
            Alert.alert('Erro', 'Não foi possível limpar o cache.');
          }
        },
      },
    ]);
  };

  const handleClearAllData = () => {
    Alert.alert('Apagar Todos os Dados', 'ATENÇÃO: Isso apagará TODOS os dados do app permanentemente!', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'APAGAR TUDO',
        style: 'destructive',
        onPress: () => {
          Alert.alert('Confirmação Final', 'Tem certeza absoluta?', [
            { text: 'Cancelar', style: 'cancel' },
            {
              text: 'SIM, APAGAR',
              style: 'destructive',
              onPress: async () => {
                try {
                  await storageService.clearAll();
                  Alert.alert('Concluído', 'Todos os dados foram apagados.', [
                    { text: 'OK', onPress: signOut },
                  ]);
                } catch (error) {
                  Alert.alert('Erro', 'Não foi possível apagar os dados.');
                }
              },
            },
          ]);
        },
      },
    ]);
  };
  
  const handleGoBack = () => navigation.goBack();

  return {
    settings,
    loading,
    storageInfo,
    updateSetting,
    handleCreateBackup,
    handleClearCache,
    handleClearAllData,
    handleGoBack,
  };
};