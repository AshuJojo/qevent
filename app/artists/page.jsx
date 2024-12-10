import ArtistCard from "@/components/ArtistCard";

const ArtistsPage = async () => {
    const ARTISTS_URL = 'https://qevent-backend.labs.crio.do/artists';

    const fetchArtists = async () => {
        const res = await fetch(ARTISTS_URL);

        if (!res || !res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json();
    }

    const artists = await fetchArtists();

    return (
        <div className="flex flex-wrap">
            {artists?.map((artist) => (
                <ArtistCard key={artist.id} artistData={artist} />
            ))}
        </div>
    )
}

export default ArtistsPage