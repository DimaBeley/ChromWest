import { NavItem } from "./NavItem";
import { LANGUAGES } from '../../constants'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
    const { i18n, t } = useTranslation();
    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    }
    return (
        <div className={'container'}>
            <nav className={'content'}>
                <NavItem text={t('home')} link={'/'}/>
                <NavItem text={t('about')} link={'/about'} />
                <NavItem text={t('contact')} link={'/contact'} />
                <div className={'language'}>
                    <select defaultValue={"ua"} onChange={onChangeLang}>
                            {LANGUAGES.map(({ code, label }) => (
                              <option key={code} value={code}>
                                {label}
                              </option>
                            ))}
                          </select>
                </div>
            </nav>
        </div>
    )
}