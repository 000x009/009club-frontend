import { getUserLanguage } from "./getUserLanguage"

export function parseTime(time) {
    let language = getUserLanguage()

    const options = {
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }
    const date = new Date(time).toLocaleString(language, options)

    return date
}