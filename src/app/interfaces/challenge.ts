export interface Challenge {
    _id: string;
    name: string;
    description: string;
    basepoints: number;
    activeStart: Date;
    activeEnd: Date;
    loccoords: {
        lon: number,
        lat: number
    };
    locradius: number;
}
