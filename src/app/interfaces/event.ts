import { User } from "./user";
import { Challenge } from "./challenge";

export interface Event {
    id: number;
    name: string;
    description: string;
    revisor: User;
    points: number;
    stamp: Date;
    challenge: Challenge;
}
