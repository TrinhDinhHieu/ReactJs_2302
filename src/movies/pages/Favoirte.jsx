import React, { memo } from "react";
import LayoutMovies from "../component/Layout";
import ListMovies from "../component/ListMovies";
import { helpers } from "../helpers";

const FavoirteMovies = ()=>{
    let dataMovie = helpers.getDataMovieToLocal()
return(
    <LayoutMovies
    level1="Trang chu"
    level2="Danh sach"
    level3="Phim yêu thích nhất"
    >
      
   {
    dataMovie && (
        <ListMovies movies = {dataMovie}/>
    )
   }
    </LayoutMovies >
)
}
export default memo(FavoirteMovies);