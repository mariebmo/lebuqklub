export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	isActive: boolean;
	isAdmin: boolean;
	isSuperAdmin: boolean;
	isBanned: boolean;
	isDeleted: boolean;
	isVerified: boolean;
};
