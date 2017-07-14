// @flow

export type UserRes = {
  title?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: number;
  currency?: number;
  passwordHash?: string;
  blocked?: boolean;
  activated?: boolean;
  company?: string;
  id?: string;
  token?: string;
}
