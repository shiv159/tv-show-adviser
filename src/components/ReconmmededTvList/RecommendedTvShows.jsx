import { TvShowList } from "../TvShowList/TvShowList";
import s from "./style.module.css"
export function RecommendedTvShows({tvShowList,onClickItem}){
  return(
    <div>
        <div className={s.title}>Recommended Shows </div>
        <div className={s.list}>
            {
                tvShowList.map((tvShow)=>{
                    return(
                        <span className={s.tv_show_item} key={tvShow.id}>
                        <TvShowList tvShow={tvShow} 
                        onClick={onClickItem}/>
                        </span>
                    );
                })
            }
        </div>
    </div>
  );
}