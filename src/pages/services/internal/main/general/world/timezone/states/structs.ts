import { Result } from "../service/structs";

export interface TimezoneStore{
    timezoneList: Array<Result>,
    setTimezones: (timezoneList: Array<Result>) => void;
    getTimezones: (country_id: number) => void;
    clearTimezones: () => void;
}