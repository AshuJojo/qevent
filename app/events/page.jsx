import EventCard from "@/components/EventCard";

const EventsPage = async () => {
    const EVENTS_URL = 'https://qevent-backend.labs.crio.do/events';

    const fetchEvents = async () => {
        const res = await fetch(EVENTS_URL);

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    }

    const events = await fetchEvents();

    return (
        <div className="flex flex-wrap">
            {events?.map((event) => (
                <EventCard key={event.id} eventData={event} />
            ))}
        </div>
    )
}

export default EventsPage