/* eslint-disable no-unused-vars */
import { memo, useEffect, useState } from "react";
// import trailer video
// import "react-modal-video/css/modal-video.min.css";
// import ModalVideo from "react-modal-video";

import YouTube from "react-youtube";
import { Col, Row, Image, Skeleton, Button, Carousel } from "antd";
import LayoutMovies from "../component/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../sevices/api";
import { helpers } from "../helpers";
import { useAuth } from "../hook/useAuth";

function DefailComponent() {
  const { id, slug } = useParams();
  //state bật video
  const [loading, setLoading] = useState(true); //vào trang loading luôn
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});
  const [favoirte, setFavoirte] = useState(helpers.getDataMovieToLocal(id))
  const { user } = useAuth(); //lấy info ng dùng đã dăng nhập trong local
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await api.getDataMoviebyId(id);
      if (helpers.isEmptyObject(data)) {
        //ko có data theo Id
        setError({
          err: 404,
          mess: "ko có data"
        });
      } else {
        //có data theo Id
        setMovie(data); //lưu lại data
        setError(false);
      }
      setLoading(false);
    };
    getData();
  }, [id]);

  // const checkDataMovieLocal = helpers.getDataMovieToLocal(id);

  //Event play video trailer
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  if (loading) {
    return (
      <LayoutMovies level1="Trang chủ" level2="Chi tiết" level3={slug}>
        <Row>
          <Col span={24}>
            <Skeleton active />
          </Col>
        </Row>
      </LayoutMovies>
    );
  }
  const addMovie = () => {
    if (!user) {
      //chưa đăng nhập
      navigate("/login");
    } else {
      //đã đăng nhập
      //lưu info của film vào local
      helpers.addDataMovieToLocal(movie);
      setFavoirte(false)
    }
  };
  const removevMove = (id)=>{
    if(!user){
      navigate('/login');

    }else{
      helpers.removeMovieLocalId(id);
      setFavoirte(true)
    }
  }
  return (
    <LayoutMovies level1="Trang chủ" level2="Chi tiết" level3={slug}>
      <Row>
        <Col span={24}>
          <Carousel autoplay style={{ marginLeft: "400px" }}>
            {movie["images"]["backdrops"].map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <Image
                  style={{ height: "300px", width: "400px" }}
                  src={`https://image.tmdb.org/t/p/w300${item.file_path}`}
                />
              </div>
            ))}
          </Carousel>
          <Row>
            <Col span={8}>
              <div style={{ padding: "10px" }}>
                <Image
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                />
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "22px",
                    fontWeight: "700"
                  }}
                >
                  {movie.original_title}
                </p>
                {/* custom Button yêu thích  */}
                {favoirte ? (
                  <Button type="primary" onClick={() => addMovie()}>
                   Chưa yêu thích
                  </Button>
                ) : (
                  <Button type="primary" danger onClick={() => removevMove(id)}>
                   Đã yêu thích
                  </Button>
                )}
              </div>
            </Col>
            <Col span={16}>
              <div style={{ padding: "10px" }}>
                <h3 style={{ margin: "20px 0" }}>{movie.title}</h3>
                <p style={{ fontSize: "16px" }}>{movie.overview}</p>
                <div
                  style={{
                    display: "flex",
                    // justifyItems:'space-between',
                    flexWrap: "wrap"
                  }}
                >
                  {movie["videos"]["results"].map((item, index) => (
                    <p key={index} style={{ marginBottom: "0px" }}>
                      {/* ModalVideo chỉ cho 1 video 
                      <ModalVideo
                        channel="youtube" // bắt buộc
                        autoplay
                        isOpen={isOpen}
                        videoId={item.key}
                        onClose={() => setOpen(false)}
                      /> */}
                      <YouTube
                        videoId={item.key}
                        onReady={onPlayerReady}
                        opts={opts}
                      />
                      {/* <Button
                        style={{ margin: "5px" }}
                        type="primary"
                        onClick={() => setOpen(true)}
                      >
                        Trailer {index + 1}
                      </Button> */}
                    </p>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </LayoutMovies>
  );
}

export default memo(DefailComponent);
