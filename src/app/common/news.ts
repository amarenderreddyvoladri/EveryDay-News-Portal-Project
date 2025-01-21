import { NewsCategory } from "./news-category";

export class News {

    id: number;

    headline: string

    content: string

    reporter: string

    imageUrl: string

    date: Date;

    newsCategory: NewsCategory;

}
