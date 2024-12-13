'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const CreateEventPage = () => {
    const session = useSession();
    const router = useRouter();

    const [mounted, setMounted] = useState(false);
    const [formInput, setFormInput] = useState({
        name: '',
        location: '',
        dateTime: '',
        tags: '',
        image: '',
        artist: '',
        price: '',
        description: ''
    });

    // Handle form input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        const newFormInput = { ...formInput };

        newFormInput[id] = value;

        setFormInput(newFormInput)
    }

    // handle form submit
    const handleEventCreate = (e) => {
        e.preventDefault();
        console.log('form Submitted');
    }

    // Checks if the user is logged in using auth session
    useEffect(() => {
        if (mounted && !session.data)
            router.push('/events');
        setMounted(true);
    }, [session]);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div
                className="m-4 p-4 rounded-lg drop-shadow-lg bg-white"
            >
                <h2 className="font-bold text-4xl w-full text-center">Create Event</h2>
                <form
                    className="grid grid-cols-12 auto-cols-min gap-2 m-4 py-4 min-w-96"
                    onSubmit={handleEventCreate}
                >
                    {/* Event Name */}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Name:
                    </label>
                    <input
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        type="text"
                        id="name"
                        placeholder="Enter your event name"
                        value={formInput.name}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Location */}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Location:
                    </label>

                    <input
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        id="location"
                        type="text"
                        placeholder="Enter your location"
                        value={formInput.location}
                        onChange={handleInputChange}
                    />

                    {/* Date & Time*/}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Date & Time:
                    </label>
                    <input
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        id="dateTime"
                        type="datetime-local"
                        value={formInput.dateTime}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Tags */}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Tags:
                    </label>
                    <input
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        placeholder="Enter event tags seprated by comma"
                        id="tags"
                        type="text"
                        value={formInput.tags}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Image */}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Image:
                    </label>
                    <input
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        placeholder="Enter event image url"
                        id="image"
                        type="url"
                        value={formInput.image}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Artist */}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Artist:
                    </label>
                    <input
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        placeholder="Enter event artist"
                        id="artist"
                        type="text"
                        value={formInput.artist}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Price */}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Price:
                    </label>
                    <input
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        placeholder="Enter event price"
                        id="price"
                        type="number"
                        value={formInput.price}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Price */}
                    <label
                        className="text-lg col-span-2 text-end"
                    >
                        Description:
                    </label>
                    <textarea
                        className="col-span-10 border-2 border-gray-400 rounded py-1 px-2 ml-2"
                        id="description"
                        rows="4"
                        placeholder="Enter event description here..."
                        value={formInput.description}
                        onChange={handleInputChange}
                        required
                    />

                    <button
                        type="submit"
                        className="col-span-12 mt-4 w-fit mx-auto bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
                    >
                        Create Event
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateEventPage;