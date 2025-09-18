import { InfoItem, InfoLabel, InfoValue, SectionTitle, SettingsCard } from "../styles"

interface CacheSettingsProps {
    storageInfo: any
}

export const CacheSecttings: React.FC<CacheSettingsProps> = (storageInfo: any) => {
    return (
        <>
            <SectionTitle>Dados e Armazenamento</SectionTitle>
            <SettingsCard>
                {storageInfo && (
                    <>
                        <InfoItem>
                            <InfoLabel>Itens no Cache:</InfoLabel>
                            <InfoValue>{storageInfo.cacheSize}</InfoValue>
                        </InfoItem>
                        <InfoItem>
                            <InfoLabel>Total de Chaves:</InfoLabel>
                            <InfoValue>{storageInfo.totalKeys}</InfoValue>
                        </InfoItem>
                    </>
                )}
            </SettingsCard>
        </>
    )
}