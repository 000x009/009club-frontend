export function getUserLanguage() {
    return new Intl.Locale(navigator.language)
}
