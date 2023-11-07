import { Result } from "../service/structs";

export interface StatesStore{
    stateList: Array<Result>,
    setStates: (statesList: Array<Result>) => void;
    getStates: (country_id: number) => void;
    clearStates: () => void;
}