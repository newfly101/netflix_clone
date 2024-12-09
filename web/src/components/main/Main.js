import React, {useEffect} from 'react';
import requests from "../../api/request";
import VideoFrame from "./banner/VideoFrame";
import Banner from "./banner/Banner";
import Row from "../common/Row";
import MovieModal from "../common/MovieModal";
import {useDispatch, useSelector} from "react-redux";
import {
    getFetchBanner,
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

    const handleModalOpen = (open, item) => {
        // console.log("Modal Open:", open, "Selected Movie:", item);
        dispatch(setIsModalOpen(open));
        dispatch(setSelectedMovie(item));
    }

    return (
        <>
            {isModalOpen &&
                <MovieModal items={selectedMovie}
                            isOpen={isModalOpen}
                            onClose={() => dispatch(setIsModalOpen(false))}
                />
            }
            { isClicked && bannerMovie?.videos?.results.length > 0 ? <VideoFrame /> : <Banner /> }
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
