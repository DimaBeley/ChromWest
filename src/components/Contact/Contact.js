import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <h1>{t('contact')}</h1>
        </div>
    );
}
