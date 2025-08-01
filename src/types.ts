export interface UserDataType {
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserContextType {
  userData: UserDataType;
  setUserData: React.Dispatch<React.SetStateAction<UserDataType>>;
}
