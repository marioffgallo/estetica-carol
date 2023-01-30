export interface User {
  uid: string,
  name: string,
  email: string,
  type: UserType
}

export enum UserType {
  ADMIN = 0,
  CLIENT = 1
}

export type UserAuthContextType = {
  signed: boolean,
  user: User | null,
  loading: boolean,
  loadingAuth: boolean,
  signUp: (email: string, password: string, name: string) => void,
  signIn: (email: string, password: string) => void,
  logout: () => void,
}