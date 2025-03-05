import { getUserLanguage } from "@/shared/lib/helpers/getUserLanguage"

export function parseDate(time) {
    let language = getUserLanguage()

    const weekdayOptions = {
        weekday: "long"
    }
    const monthOptions = {
        month: "long"
    }
    const dayOptions = {
        day: "numeric" 
    }
    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit"
    }

    const date = new Date(time)

    return {
        day: date.toLocaleString(language, weekdayOptions).toUpperCase(),
        date: `${date.toLocaleString(language, dayOptions)} ${date.toLocaleString(language, monthOptions).toUpperCase()}`,
        hours: date.toLocaleString(language, timeOptions)
    }
}