import LanguageIcon from "@mui/icons-material/Language";
import {Box, FormControl, MenuItem, Select} from "@mui/material";
import {LANGUAGES} from "../../constants";
import * as React from "react";
import {useTranslation} from "react-i18next";

export const LanguageSelect = () => {
    const savedLang = localStorage.getItem("lang");
    const { i18n } = useTranslation();

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        console.log(lang_code, 'lang_code');
        setCurrentLang(lang_code)
        i18n.changeLanguage(lang_code);
        localStorage.setItem("lang", lang_code);
    }
    const [currentLang, setCurrentLang] = React.useState(savedLang || 'ua')

    return (
        <Box sx={{ flexGrow: 0 }}>
            <LanguageIcon sx={{position: 'relative', top: '27px', left: '6px'}} />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 65, color: 'white' }}>
                <Select
                  value={currentLang}
                  onChange={onChangeLang}
                  label="Language"
                  before={{border: 'none'}}
                  sx={{ my: 2, textTransform: 'uppercase', textAlign: 'center'}}
                >
                    {LANGUAGES.map(({code}) => (
                        <MenuItem key={code} value={code}>
                          {code}
                        </MenuItem>))}
                </Select>
            </FormControl>
      </Box>
    )
}