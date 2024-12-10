import EventCard from "@/components/EventCard";

const EventsPage = async ({ searchParams }) => {
    const EVENTS_URL = 'https://qevent-backend.labs.crio.do/events';

    const fetchEvents = async () => {
        const res = await fetch(EVENTS_URL, {cache: 'no-store'});

        if (!res || !res.ok) {
            throw new Error('Failed to fetch data')
        }

        return await res.json();
    }

    const events = await fetchEvents();
    const filteredEvents = searchParams && searchParams.artist ? events.filter((event) => event.artist === searchParams.artist) : events;

    return (
        <div className="flex flex-wrap justify-around">
            {filteredEvents?.map((event) => (
                <EventCard key={event.id} eventData={event} />
            ))}
        </div>
    )
}

export default EventsPage