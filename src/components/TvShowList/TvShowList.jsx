import s from "./style.module.css";
import {image_list_url} from "../../config"
const max_title_length=20;

export function TvShowList({tvShow ,onClick}){
    function onClick_ (){
      onClick(tvShow);
    }
    
    return (
        <div onClick={onClick_} className={s.container}>
          <img className={s.img} alt={tvShow.name} src={image_list_url+tvShow.backdrop_path}></img>
          <div className={s.title}>{tvShow.name.length>max_title_length?  tvShow.name.slice(0,max_title_length)+"....": tvShow.name}</div>
        </div>
      );
}