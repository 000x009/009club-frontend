export const formatFormToUserTickets = (tickets) => {
  return tickets.map(ticket => ({
    ticket_tier_id: ticket.ticketId,
    full_name: ticket.name,
  }));
}
