import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1>{t('about')}</h1>
        </div>
    );
}
