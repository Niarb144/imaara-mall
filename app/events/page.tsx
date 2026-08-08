import { EVENTS } from "@/data/data";
import { EventsPage } from "@/components/eventpage/EventsPage";

export default function EventsRoute() {
  return <EventsPage events={EVENTS} />;
}