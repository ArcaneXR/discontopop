import translations from './translations.json';

class I18n {
    constructor() {
        this.currentLocale = 'pt-BR';
        this.translations = translations;
    }

    setLocale(locale) {
        if (this.translations[locale]) {
            this.currentLocale = locale;
            return true;
        }
        return false;
    }

    getLocale() {
        return this.currentLocale;
    }

    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLocale];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return key;
            }
        }

        return value;
    }
}

export const i18n = new I18n(); 