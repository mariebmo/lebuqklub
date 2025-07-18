import { Bookclub } from './bookclub';
import { User } from './user';

export type Book = {
	id: string;
	title: string;
	author: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	isbn: string;
	imageUrl: string;
	price: number;
	rating: number;
};

export type BookClubBook = {
	id: string;
	bookId: string;
	bookclubId: string;
	bookclub: Bookclub;
	book: Book;
	isCurrentBook: boolean;
};

export type BookReview = {
	id: string;
	bookId: string;
	userId: string;
	user: User;
	book: Book;
	rating: number;
	comment: string;
	isPrivate: boolean;
};
