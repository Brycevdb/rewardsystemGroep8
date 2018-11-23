export interface Challenge {
    _id: string;
    name: string;
    description: string;
    basepoints: number;
    activeStart: number;
    activeEnd: number;
    loccoords: {
        lon: number,
        lat: number
    };
    locradius: number;
}
