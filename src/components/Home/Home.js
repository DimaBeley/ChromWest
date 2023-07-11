import { useTranslation } from 'react-i18next'

export const Home = () => {
    const { t } = useTranslation();
        return (
            <div className="container">
                <h1>{t('home')}</h1>
            </div>
        );
}
