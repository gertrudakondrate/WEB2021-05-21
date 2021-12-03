function getTranslation(lang) {
    let translations = {
        en: {
            menu: {
                main: "Home",
                services: "Services",
                contacts: "Contacts"
            }
        },
        lt: {
            menu: {
                main: "Pagrindinis",
                services: "Paslaugos",
                contacts: "Kontaktai"
            }

        }
    };
    return translations[lang];
}