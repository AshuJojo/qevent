'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const CreateEventPage = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session.data)
            router.push('/events');
    }, [session]);

    return (
        <div>CreateEventPage</div>
    )
}

export default CreateEventPage;