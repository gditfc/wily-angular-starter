export class UserModel {
  emailVerified: boolean;
  email: string;
  clientId: string;
  updatedAt: Date;
  name: string;
  picture: string;
  userId: string;
  nickname: string;
  createdAt: Date;
  sub: string;
  authorization: Authorization;
  username: string;
  authorities: Array<Authority>;
  admin: boolean;
  password: string;
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
}

export class Authorization {
  groups: Array<string>;
  roles: Array<string>;
}

export class Authority {
  authority: string;
}
