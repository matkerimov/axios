const greetingLang = {
    en: 'hello',
    ru: "привет",
    kg: "салам",
    uk: "привiт"
}

const sayGreeting = (lang) =>{
    return greetingLang[lang]
}

export {sayGreeting}
// console.log(sayGreeting("ru"))
// console.log(sayGreeting("en"))