export interface User {
  uid: string,
  name: string,
  email: string,
  phone: string | null,
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
  signUp: (email: string, password: string, name: string, phone: string) => void,
  signIn: (email: string, password: string) => void,
  logout: () => void,
  resetPasswordByEmail: (email: string) => void,
  updateUser: (email: string, name: string, phone: string, password: string) => void,
}