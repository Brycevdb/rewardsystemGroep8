import { User } from "./user";
import { Challenge } from "./challenge";

export interface Event {
    description: string;
    revisor: string;
    points: number;
    stamp: number;
    challenge: string;
}