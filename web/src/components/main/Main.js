import React, {useEffect} from 'react';
import requests from "../../api/request";
import instance from "../../api/axios";
import VideoFrame from "./banner/VideoFrame";
import Banner from "./banner/Banner";
import Row from "../common/Row";

const tag = '[Fetch]';
const imgUrl = 'https://image.tmdb.org/t/p/original/';


const Main = () => {
    const [movie, setMovie] = React.useState([]);
    const [isClicked, setIsClicked] = React.useState(false);

    // 화면 렌더링 될 때 정보 가져오기
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await instance.get(requests.fetchNowPlaying);
        console.log(`${tag} total result => `,request.data.results);
        const randNum = Math.floor(Math.random() * request.data.results.length);
        console.log(`${tag} get random 1 => `,request.data.results[randNum]);
        const movieId = request.data.results[randNum].id;
        // console.log(`movieId: ${movieId}`);

        const {data: movieDetail} = await instance.get(requests.fetchMovieDetail(movieId), {
            params: {append_to_response: "videos"}
        });
        console.log(movieDetail);
        setMovie(movieDetail);
        // console.log(imgUrl + movie?.backdrop_path);
    }
    const onClickVideo = (boolean) => {
        if (!boolean) {
            console.log("영화 미리 보기가 없습니다.");
        }
        setIsClicked(boolean);
    }

    return (
        <>
            { isClicked ? (
                (movie?.videos.results.length > 0)
                    ?  <VideoFrame movie={movie} />
                    : onClickVideo(false)
            ) : <Banner movie={movie} imgUrl={imgUrl} onClickVideo={onClickVideo} />
            }
            <Row
                title={movie?.title}
                id={movie?.id}
                url={requests.fetchActionMovies}
                isLarge={true}/>
        </>
    )

};

export default Main;
