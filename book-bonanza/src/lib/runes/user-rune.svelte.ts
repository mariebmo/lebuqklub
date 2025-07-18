export const userRune = $state({
	user: {
		name: 'John Doe',
		email: 'john.doe@example.com',
		password: 'password',
		isActive: true,
		isAdmin: false,
		isSuperAdmin: false,
		isBanned: false,
		isDeleted: false,
		isVerified: false,
		isEmailVerified: false,
		isPhoneVerified: false
	},
	books: [
		{
			title: 'The Great Gatsby'
		}
	]
});
