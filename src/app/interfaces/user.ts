import { Chest } from './chest';
import { Event } from './event';

export interface User {
    _id: number;
    name: string;
    role: number;
    username: string;
    password: string;
    chest: Chest[];
    events: Event[];
}
