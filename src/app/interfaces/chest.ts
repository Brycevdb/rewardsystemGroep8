import { Reward } from "./reward";

export interface Chest {
    stamp: Date;
    cost: number;
    reward: Reward;
}
