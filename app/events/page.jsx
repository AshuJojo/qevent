'use client';

import EventCard from "@/components/EventCard";
import { useEffect, useState } from "react";

const EventsPage = ({ searchParams }) => {
    const EVENTS_URL = 'https://qevent-backend.labs.crio.do/events';
    const [events, setEvents] = useState(null);
    const [filteredEvents, setFilteredEvents] = useState(null);

    const fetchEvents = async () => {
        const res = await fetch(EVENTS_URL, { next: { revalidate: 600 } });

        if (!res || !res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    }

    useEffect(() => {
        (async () => {
            const data = await fetchEvents();
            setEvents(data);
        })();
    }, [searchParams]);

    useEffect(() => {
        if (events && events.length > 0) {
            const filteredData = searchParams.artist ? events.filter((event) => event.artist === searchParams.artist) : events;
            setFilteredEvents(filteredData);
        }
    }, [events]);

    return (
        <div className="flex flex-wrap justify-around">
            {filteredEvents?.map((event) => (
                <EventCard key={event.id} eventData={event} />
            ))}
        </div>
    )
}

export default EventsPage