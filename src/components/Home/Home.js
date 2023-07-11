import { useTranslation } from 'react-i18next'
import styles from './Home.module.scss'

export const Home = () => {
    const { t } = useTranslation();
        return (
            <div className={styles.container}>
                <h1>{t('home')}</h1>
            </div>
        );
}
