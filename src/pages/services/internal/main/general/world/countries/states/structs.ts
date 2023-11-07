import { Result } from "../service/structs";

export interface CountriesStore{
    countriesList: Array<Result>,
    setCountries: (countriesList: Array<Result>) => void;
    getCountries: () => void;
    clearCountries: () => void;
}