import { Rating } from "../Rating/Rating";
import s from "./style.module.css";

export function TvShowDetails({tvShow}){
    const rating =(tvShow.vote_average/2).toFixed(2);
    return (
        <div>
            <div className={s.titel}>
                {tvShow.name}
            </div>
            <div className={s.rating_container}>
               <Rating rating={rating} />
               <span className={s.rating}>{rating}/5</span>
            </div>
            <div className={s.overview}>
                {tvShow.overview}
            </div>

        </div>
    );
}