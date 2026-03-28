export interface IUser {
  _id?: string;
  email: string;
  // password: string;
  name?: string;
  phone?: number;
  activateUser?: boolean;
  role?: "admin" | "user";
  createdAt?: Date;
  updatedAt?: Date;
}
