import { User } from './user';

export type Bookclub = {
	id: string;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	ownerId: string;
	owner: User;
	members: User[];
};
