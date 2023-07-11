import { NavItem } from './NavItem'
import { LANGUAGES } from '../../constants'
import { useTranslation } from 'react-i18next'
import styles from './Navbar.module.scss'

export const Navbar = () => {
    const { i18n, t } = useTranslation();
    const savedLang = localStorage.getItem("lang");

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
        localStorage.setItem("lang", lang_code);
    }
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <NavItem text={t('home')} link={'/'}/>
                <NavItem text={t('about')} link={'/about'} />
                <NavItem text={t('contact')} link={'/contact'} />
            </nav>
            <div className={styles.langSelect}>
                <div className={styles.icon}/>
                <select defaultValue={savedLang || "ua"} onChange={onChangeLang}>
                        {LANGUAGES.map(({ code, label }) => (
                          <option key={code} value={code}>
                            {code}
                          </option>
                        ))}
                      </select>
            </div>
        </div>
    )
}