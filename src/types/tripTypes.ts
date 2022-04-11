export interface TripState {
    //TODO: Budget number olacak
    budget: number
    selectedCitiesList: City[]
    cities: City[]
}

export interface City {
    id: number
    name: string
    cost: number
}

export interface Plan {
    id: number
    name: string
    cost: number
    days: number
}

export interface PexelPhotoResult {
    alt: string
    avg_color: string
    height: number
    id: number
    liked: boolean
    photographer: string
    photographer_id: number
    photographer_url: string
    src: {
        original: string
        small: string
        medium: string
    }
    url: string
    width: number
}

export interface PhotosListTripPage  {
    city: string
    photos: PexelPhotoResult[]
}