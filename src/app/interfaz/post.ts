import { Category } from "./category";
import { User } from "./user";

export interface Post {
    id: number;
    title: string;
    description: string;
    user: User;
    category: Category;
    createdAt: string;
    updatedAt: string;
}
