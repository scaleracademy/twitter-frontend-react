export interface UserDetailType {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
}

export interface UserDetailReducerType extends UserDetailType {
  isLoading: boolean;
  error: string;
}
