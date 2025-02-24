import { EventCard } from "@/entities/Event/ui/EventCard/index.jsx";

export function Events() {
  return (
    <div>
      <EventCard
        name={"Event"}
        photoUrl={"src/shared/assets/example.png"}
        ageGroup={18}
        address={"st. Ivan Vazov"}
        locationName={"Moonlight Club"}
      />
    </div>
  );
}
