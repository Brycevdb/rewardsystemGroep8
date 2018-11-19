export interface Challenge {
    id: number;
    name: string;
    basepoints: Int16Array;
    activeStart: Date;
    activeEnd: Date;
    loccoords: {
        lon: number,
        lat: number
    };
    locradius: number;
}
