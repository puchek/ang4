export interface UserType {
  id: number,
  name: string
}

export class UsersService {
  private users: Array<UserType> = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  getUsers(): Array<UserType> {
    return this.users;
  };
}
