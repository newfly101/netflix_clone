import React, {useEffect} from 'react';
import requests from "../../api/request";
import VideoFrame from "./banner/VideoFrame";
import Banner from "./banner/Banner";
import Row from "../common/Row";
import MovieModal from "../common/MovieModal";
import {useDispatch, useSelector} from "react-redux";
import {
    getFetchBanner,
    setIsClicked,
    setIsModalOpen,
    setSelectedMovie
} from "../../redux/mainActions";

const Main = () => {
    const dispatch = useDispatch();
    const { bannerMovie, isClicked, isModalOpen, selectedMovie }
        = useSelector((state) => state.main);

    // 화면 렌더링 될 때 정보 가져오기
    useEffect(() => {
        // thunk action 호출
        dispatch(getFetchBanner());
    }, [dispatch]);

    const onClickVideo = (boolean) => {
        if (!boolean) {
            console.log("영화 미리 보기가 없습니다.");
        }
        dispatch(setIsClicked(boolean));

    }
    const handleModalOpen = (open, item) => {
        // console.log("Modal Open:", open, "Selected Movie:", item);
        dispatch(setIsModalOpen(open));
        dispatch(setSelectedMovie(item));
    }

    return (
        <>
            {isModalOpen && (
                <MovieModal items={selectedMovie} isOpen={isModalOpen} onClose={() => dispatch(setIsModalOpen(false))} />
            )}
            {/* todo 구조 변경 : isClicked 되면 <Banner 안에 .banner랑 VideoFrame이랑 ? 로 걸어서 변경 하기*/}
            { isClicked ? (
                (bannerMovie?.videos.results.length > 0)
                    ?  <VideoFrame movie={bannerMovie} />
                    : onClickVideo(false)
            ) : <Banner onClickVideo={onClickVideo} />
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
