export interface FirebaseError {
  cause: unknown,
  code: string,
  message: string,
  name: string,
  namespace: string,
  nativeErrorCode: string | number,
  nativeErrorMessage: string,
  stack: undefined | string
}