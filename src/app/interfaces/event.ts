import { User } from "./user";
import { Challenge } from "./challenge";

export interface Event {
    description: string;
    revisor: User;
    points: number;
    stamp: number;
    challenge: Challenge;
}