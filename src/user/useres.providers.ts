import { User } from './entities/user.entity';

export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  }
];
