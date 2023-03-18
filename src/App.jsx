import { TvShowAPI } from "./api/tv-show"
import s from "./style.module.css"
import {useEffect,useState} from "react"
import { back_drop_base_url } from "./config";
import { TvShowDetails } from "./components/TvShowDetail/TvShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/logo.png"
import { RecommendedTvShows } from "./components/ReconmmededTvList/RecommendedTvShows";
import { SearchBar } from "./components/SearchBar/SearchBar";
 
export function App(){
  
const [currentTvshow,setCurrentTvShow]=useState();
const [recommendedTvshowList,setRecommendedTvshowList]=useState([]);
async function fetchPopularTvshows(){
    const popularTvShowList=await TvShowAPI.fetchPopulars();
    if(popularTvShowList.length>0){
    setCurrentTvShow(popularTvShowList[0]);
    }
}

async function fetchReconmmendedTvshows(tvShowId){
    const recommendedshowList=await TvShowAPI.fetchRecommendations(tvShowId);
    if(recommendedshowList.length>0){
        setRecommendedTvshowList(recommendedshowList.slice(0,10));
    }
}

async function fetchByTitle(title){
    const searchedTvShow=await TvShowAPI.fetchByTitle(title);
    if(searchedTvShow.length>0){
        setCurrentTvShow(searchedTvShow[0]);
    }
}

useEffect(() => {
   fetchPopularTvshows();
}, [])

useEffect(() => {
    if(currentTvshow){
    fetchReconmmendedTvshows(currentTvshow.id); 
    }
 }, [currentTvshow])

 function updateCurrentTvShow(tvShow)
 {
    setCurrentTvShow(tvShow);
 }

    return(
        <div className={s.main_container} 
        style={{background: currentTvshow ? `linear-gradient(rgba(0,0,0,.58),rgba(0,0,0,.58)),url("${back_drop_base_url}${currentTvshow.backdrop_path}") no-repeat center / cover` 
        :"black"}}
        >
        <div className={s.header}>
            <div className="row">
                <div className="col-4">
                    <Logo img={logo} title="What2Watch" subtitle="Find a show you may like"></Logo>

                </div>
                <div className="col-md-12 col-lg-4">
                <SearchBar OnSubmit={fetchByTitle}></SearchBar>
                </div>
            </div>
        </div>
        <div className={s.tv_show_detail}>
            {currentTvshow && <TvShowDetails tvShow={currentTvshow} />}</div>
        <div className={s.recommended_tv_shows}>
           {currentTvshow &&  <RecommendedTvShows tvShowList={recommendedTvshowList} onClickItem={updateCurrentTvShow}
           ></RecommendedTvShows>}
        </div>

        </div>
    );
}