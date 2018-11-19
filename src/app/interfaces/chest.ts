import { Reward } from "./reward";

export interface Chest {
    id: number;
    stamp: Date;
    cost: number;
    reward: Reward;
}
