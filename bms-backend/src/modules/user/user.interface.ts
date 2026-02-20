export interface IUser {
  _id?: string;
  email: string;
  // password: string;
  phone?: string;
  name?: string;
  activateUser?: boolean;
  role: "admin" | "user";
  createdAt?: Date;
  updatedAt?: Date;
}
