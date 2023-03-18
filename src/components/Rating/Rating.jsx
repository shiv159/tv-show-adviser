import {StarFill,StarHalf,Star as StartEmpty} from "react-bootstrap-icons";

export function Rating({rating}) {

    const starList=[];
    const starFillcount=Math.floor(rating)
    const halfStartcount=rating-parseInt(starFillcount)>=.5;
    const emptyStarCount=5-starFillcount-(halfStartcount?1:0);
    for(let i=0;i<starFillcount;i++)
    {
        starList.push(<StarFill key={"start-fill"+i}></StarFill>)
    }
    if(halfStartcount)
    {
        starList.push(<StarHalf key={"start-half"}></StarHalf>)
    }
    for(let i=0;i<emptyStarCount;i++)
    {
        starList.push(<StartEmpty key={"start-empty"+i}></StartEmpty>)
    }

    return(
     <div>
        {starList}
     </div>  
    );
   }