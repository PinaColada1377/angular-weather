export interface Cities {
    forEach(arg0: (e: any) => void);
    flatMap(arg0: (el: any) => string);
    [index: number]: NameCities
}

interface NameCities {
    name: string,
    regions: regions
}

interface regions {
    forEach(arg0: (e: any) => void);
    [index: number]: region
}

interface region {
    name: string,
    cities: cities
}

interface cities {
    [index: number]: city
}

interface city {
    name: string,
    lat: number,
    lng: number
}

export interface Coordinate {
    lat: number,
    lng: number
}