import { title } from "process";
import { CreatedAt } from "sequelize-typescript";

export interface Post {
    readonly title: string;
    readonly content: string;
    readonly excerpt: string;
    readonly createdAt: string;
    readonly categoryName: string;
    readonly authorName: string;
    readonly authorCountry: string;
}


