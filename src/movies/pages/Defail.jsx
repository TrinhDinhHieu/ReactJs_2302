import { memo, useEffect, useState } from "react";
import { Col, Row ,Image, Skeleton} from "antd";
import LayoutMovies from "../component/Layout";
import { useParams } from "react-router-dom";
import { api } from "../sevices/api";
import { helpers } from "../helpers";

function DefailComponent() {
    const {id,slug} = useParams();
   
    const [loading, setLoading] = useState(true); //vào trang loading luôn
    const [error, setError] = useState(null);
    const [movie, setMovie]=useState({})
    useEffect(()=>{
        const getData = async()=>{
            setLoading(true);
            const data = await api.getDataMoviebyId(id);
            if(helpers.isEmptyObject(data)){
                //ko có data theo Id
                setError({
                    err:404,
                    mess:'ko có data',
                });

            }
            else{
                //có data theo Id
                setMovie(data);//lưu lại data
                setError(false);
            }
            setLoading(false)
        }
        getData()
    },[id])

    if(loading){
        return(
            <LayoutMovies level1="Trang chủ" level2="Chi tiết" level3={slug}>
            <Row>
              <Col span={24} >
                <Skeleton active/>
              </Col>
            </Row>
          </LayoutMovies>
        )
    }
  return (
    <LayoutMovies level1="Trang chủ" level2="Chi tiết" level3={slug}>
      <Row>
        <Col span={24} >
          <Row>
            <Col span={8}>
                <div style={{padding:'10px'}}>
                    <Image src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}/>
                    <p>{movie.original_title}</p>
                </div>
            </Col>
            <Col span={16}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </LayoutMovies>
  );
}

export default memo(DefailComponent);
