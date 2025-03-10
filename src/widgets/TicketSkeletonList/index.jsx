import { TicketCardSkeleton } from "@/entities/Ticket/ui/TicketCardSkeleton/index.jsx";

export function TicketSkeletonList() {
  return Array(2).map((ticket) => <TicketCardSkeleton key={ticket.id} />);
}
