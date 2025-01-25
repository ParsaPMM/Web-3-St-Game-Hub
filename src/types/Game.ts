import { Genre } from "./Genre";
import { Tag } from "./tag";

export interface Game {
    id: number,
    slug: string,
    name: string,
    background_image:string;
    released:string;
    genres: Genre[]
    tags:Tag[]
}
