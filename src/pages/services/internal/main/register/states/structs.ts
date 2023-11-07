import type { SingleValue } from "react-select";
import type { Result as Country } from "../../general/world/countries/service/structs";
import type { Option } from "../../general/world/orgs/service/structs";
import type { Result as State } from "../../general/world/states/service/structs";
import type { Result as Timezone } from "../../general/world/timezone/service/structs";

export interface RegForm {
  general: GeneralTemp;
  detail: DetailTemp;
  password: PasswordTemp;
}

export interface GeneralTemp {
  firstname: string;
  lastname: string;
  email: string;
  org_adm_id: number | undefined;
  org_adm_temp: string | undefined;
  dni?: string;
  work_position?: string;
}

export interface DetailTemp {
  country: number | undefined;
  state: number | undefined;
  city: string;
  timezone: string | undefined;
  code: string;
  phone: string;
  address?: string;
  address_work?: string;
}

export interface PasswordTemp {
  password: string;
  admin_factor?: boolean;
}

export interface RegisterForm {
  regForm: RegForm;
  setRegForm: (regForm: RegForm) => void;
  clearRegForm: () => void;
}

export interface OrgSelected {
  orgSelected: SingleValue<Option> | undefined;
  setSelectedOrg: (orgSelected: SingleValue<Option> | undefined) => void;
  clearSelectedOrg: () => void;
}

export interface Disabled {
  disable: boolean;
  setDisable: (disable: boolean) => void;
  clearDisabled: () => void;
}

export interface Entity {
  iso2: string;
  setEntity: (iso2: string) => void;
  selectEntity: (
    email: string,
    orgs: Array<Option>,
  ) => Promise<selectedEntity | undefined>;
  clearEntity: () => void;
}

export type selectedEntity = {
  iso2: string;
  org_adm_id: number;
  option: Option;
};

export interface SelectedCountry {
  selectedCountry: SingleValue<Country> | undefined;
  setSelectedCountry: (
    selectedCountry: SingleValue<Country> | undefined,
  ) => void;
  clearSelectedCountry: () => void;
}

export interface SelectedState {
  selectedState: SingleValue<State> | undefined;
  setSelectedState: (selectedState: SingleValue<State> | undefined) => void;
  clearSelectedState: () => void;
}

export interface SelectedTimezone {
  selectedTimezone: SingleValue<Timezone> | undefined;
  setSelectedTimezone: (
    selectedTimezone: SingleValue<Timezone> | undefined,
  ) => void;
  clearTimeZone: () => void;
}

export interface Code {
  code: string;
  setCode: (code: string) => void;
  clearCode: () => void;
}

export interface Password {
  password: string;
  setPassword: (password: string) => void;
}

export interface ShowPassword {
  show: boolean;
  setShow: (show: boolean) => void;
}

export interface ValidatePassword {
  uppercase: boolean;
  lowercase: boolean;
  symbols: boolean;
  number: boolean;
  len: boolean;
  setValidatePassword: (
    uppercase: boolean,
    lowercase: boolean,
    symbols: boolean,
    number: boolean,
    len: boolean,
  ) => void;
  validatePassword: (password: string) => void;
  clearValidatePassword: () => void;
}

export interface DisablePassword {
  disablePassword: boolean;
  setDisabled: (disabled: boolean) => void;
}
