import React, {useEffect} from 'react';
import requests from "../../api/request";
import instance from "../../api/axios";
import VideoFrame from "./banner/VideoFrame";
import Banner from "./banner/Banner";
import Row from "../common/Row";
import MovieModal from "../common/MovieModal";

// const tag = '[Fetch]';

const Main = () => {
    const [movie, setMovie] = React.useState([]);
    const [isClicked, setIsClicked] = React.useState(false);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState([]);

    // 화면 렌더링 될 때 정보 가져오기
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const request = await instance.get(requests.fetchNowPlaying);
        // console.log(`${tag} total result => `,request.data.results);
        const randNum = Math.floor(Math.random() * request.data.results.length);
        // console.log(`${tag} get random 1 => `,request.data.results[randNum]);
        const movieId = request.data.results[randNum].id;
        // console.log(`movieId: ${movieId}`);

        const {data: movieDetail} = await instance.get(requests.fetchMovieDetail(movieId), {
            params: {append_to_response: "videos"}
        });
        // console.log(movieDetail);
        setMovie(movieDetail);
        // console.log(IMAGE_UTL + movie?.backdrop_path);
    }
    const onClickVideo = (boolean) => {
        if (!boolean) {
            console.log("영화 미리 보기가 없습니다.");
        }
        setIsClicked(boolean);
    }
    const handleModalOpen = (open, item) => {
        console.log("Modal Open:", open, "Selected Movie:", item);
        setModalOpen(open);
        setSelectedMovie(item);
    }

    return (
        <>
            {isModalOpen && (
                <MovieModal items={selectedMovie} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            )}
            {/* todo 구조 변경 : isClicked 되면 <Banner 안에 .banner랑 VideoFrame이랑 ? 로 걸어서 변경 하기*/}
            { isClicked ? (
                (movie?.videos.results.length > 0)
                    ?  <VideoFrame movie={movie} />
                    : onClickVideo(false)
            ) : <Banner movie={movie} onClickVideo={onClickVideo} />
            }
            <Row
                title={"Action Movies"}
                id={"AM"}
                url={requests.fetchActionMovies}
                isLarge={true}
                isOpen={handleModalOpen}
            />
            <Row
                title={"Comedy Movies"}
                id={"CM"}
                url={requests.fetchComedyMovies}
                isLarge={false}
                isOpen={handleModalOpen}
            />
            <Row
                title={"Horror Movies"}
                id={"HM"}
                url={requests.fetchHorrorMovies}
                isLarge={false}
                isOpen={handleModalOpen}
            />
            <Row
                title={"Romance Movies"}
                id={"RM"}
                url={requests.fetchRomanceMovies}
                isLarge={false}
                isOpen={handleModalOpen}
            />
            <Row
                title={"Documentaries"}
                id={"DM"}
                url={requests.fetchDocumentaries}
                isLarge={false}
                isOpen={handleModalOpen}
            />
        </>
    )

};

export default Main;
