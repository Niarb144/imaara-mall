import { notFound } from "next/navigation";
import { EVENTS } from "@/data/data";

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EventPage({
  params,
}: EventPageProps) {
  const { slug } = await params;

  const event = EVENTS.find(
    (item) => item.slug === slug
  );

  if (!event) {
    notFound();
  }

  return (
    <main>
      <h1>{event.title}</h1>

      {/* Event detail UI goes here */}
    </main>
  );
}