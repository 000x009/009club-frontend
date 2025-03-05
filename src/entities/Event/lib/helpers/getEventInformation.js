import { parseDate } from "./parseDate"

export function getEventInformation(startAt, endAt, dressCode) {
    const startDate = parseDate(startAt)
    const endDate = parseDate(endAt)
    const hours = startDate.hours + " - " + endDate.hours

    return [
        {
          id: 1,
          label: "DAY",
          value: startDate.day,
        },
        {
          id: 2,
          label: "DATE",
          value: startDate.date,
        },
        {
          id: 3,
          label: "HOURS",
          value: hours,
        },
        {
          id: 4,
          label: "DRESS CODE",
          value: dressCode,
        },
      ]
}