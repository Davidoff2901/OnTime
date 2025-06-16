export type User = {
    first_name: string
    last_name: string
    email: string
    birthday: Date
    country_code: string
    phone: string
}
export type Festival = {
    id: string
    name: string
    latitude: number
    longitude: number
    address: string
    start_date: Date
    end_date: Date
    stages?: Stage[]
    performances?: Performances[]
}

export type Stage = {
    id: string
    name: string
    festivalId: string
}

export type Artist = {
    id: string
    name: string
    genre: string
    subgenre: string
    bio: string
}

export type Performances = {
    id: string
    stageId: string
    artistId: string
    day: Date
    start_time: Date
    end_time: Date
}

export type TicketDTO = {
    festivalId: string,
    email: string
}
export type Ticket = {
    id?: string,
    festivalId?: string,
    purchased?: Date
    email?: string,
    festival?: { name: string, start_date: Date, end_date: Date }
}

export type Lineup = {
    festival: {
        end_date: Date,
        start_date: Date,
        name: string,
        performances: {
            day: Date,
            artist: {
                name: string,
                genre: string
            }
            stage: {
                name: string
            }
        }

    }
}

export const musicGenres: { name: string, subgenres: string[] }[] = [
    {
        name: "Rock",
        subgenres: [
            "Alternative Rock",
            "Indie Rock",
            "Hard Rock",
            "Classic Rock",
            "Punk Rock",
            "Progressive Rock",
            "Grunge",
            "Folk Rock",
            "Psychedelic Rock",
        ],
    },
    {
        name: "Metal",
        subgenres: [
            "Progressive Rock",
            "Death Metal",
            "Nu-Metal",
            "Symphonic Metal",
            "Thrash Metal",
            "Groove Metal",
            "Gothic Metal",
            "Industrial Metal",
        ],
    },
    {
        name: "Pop",
        subgenres: [
            "Pop Rock",
            "Dance-Pop",
            "Synth-Pop",
            "Electropop",
            "Teen Pop",
            "K-Pop",
            "J-Pop",
            "Indie Pop",
        ],
    },
    {
        name: "Hip Hop",
        subgenres: [
            "Gangsta Rap",
            "Conscious Hip Hop",
            "Trap",
            "Boom Bap",
            "Cloud Rap",
            "Mumble Rap",
            "Alternative Hip Hop",
            "Southern Hip Hop",
            "East Coast Hip Hop",
            "West Coast Hip Hop",
        ],
    },
    {
        name: "Electronic",
        subgenres: [
            "House",
            "Techno",
            "Trance",
            "Drum and Bass",
            "Dubstep",
            "EDM",
            "Downtempo",
            "Ambient",
            "Electro",
            "Synthwave",
        ],
    },
    {
        name: "R&B (Rhythm and Blues)",
        subgenres: [
            "Contemporary R&B",
            "Soul",
            "Funk",
            "Neo Soul",
            "PBR&B",
        ],
    },
    {
        name: "Jazz",
        subgenres: [
            "Bebop",
            "Cool Jazz",
            "Swing",
            "Fusion",
            "Smooth Jazz",
            "Dixieland",
            "Acid Jazz",
        ],
    },
    {
        name: "Blues",
        subgenres: [
            "Delta Blues",
            "Chicago Blues",
            "Electric Blues",
            "Acoustic Blues",
            "Blues Rock",
        ],
    },
    {
        name: "Latin",
        subgenres: [
            "Salsa",
            "Merengue",
            "Bachata",
            "Cumbia",
            "Reggaeton",
            "Latin Pop",
            "Flamenco",
            "Tango",
        ],
    },
];