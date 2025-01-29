import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Tag } from "./Tag";

export interface Game {
    id: number,
    slug: string,
    name: string,
    background_image:string;
    released:string;
    genres: Genre[]
    tags:Tag[]
    playtime:number;
    rating_top:number;
    parent_platforms: {platform:Platform}[]
}
