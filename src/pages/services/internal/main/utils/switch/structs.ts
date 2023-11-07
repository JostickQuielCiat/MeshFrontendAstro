export interface AppSwitch {
  appSwitch: string;
  setAppSwitch: (appSwitch: string) => void;
}

export interface AppUserData {
  userData: UserData | undefined;
  setUserData: (userData: UserData) => void;
  clearUserData: () => void;
}

export interface UserData {
  firstname: string;
  lastname: string;
  uuid: string;
  rolName: string;
}
