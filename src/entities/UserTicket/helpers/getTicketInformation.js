export function getTicketInformation(ticket) {
    const eventEndAt = new Date(ticket?.event?.end_at)

    return [
        {
          id: 1,
          label: "Guest Name",
          value: ticket?.user_full_name ?? null,
        },
        {
          id: 2,
          label: "Admission",
          value: ticket?.ticket_tier?.name ?? null,
        },
        {
          id: 3,
          label: "Ticket ID",
          value: ticket?.id ?? null,
        },
        {
            id: 4,
            label: "Status",
            value: ticket?.status ?? null,
          },
        {
          id: 5,
          label: "Event Name",
          value: ticket?.event?.title ?? null,
        },
        {
            id: 6,
            label: "Valid up to",
            value: eventEndAt ? eventEndAt.toLocaleString() : null,
        },
      ]
}