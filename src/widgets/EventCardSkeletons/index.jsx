import { EventCardSkeleton } from "@/entities/Event/ui/EventCardSkeleton/index.jsx";

export function EventCardSkeletons() {
  return Array(1)
    .fill(0)
    .map((_, i) => <EventCardSkeleton key={i} />);
}
