export interface IErrorWithMessage {
  status: number;
  data: {
    message: string;
  };
}

export interface IUser {
  id: string;
  email: string;
  password: string;
  name: string;
  // createEmployee: IEmployee[];
}

export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  userId: string;
}

export type TUserData = Omit<IUser, "id">;

export type TResponseLoginData = IUser & {
  token: string;
};

export type TRegisterData = Omit<IUser, "id"> & {
  confirmPassword: string;
};
