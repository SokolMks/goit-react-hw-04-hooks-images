import React, { useEffect, useState } from "react";
import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from "./components/imageGallery/ImageGallery";
import ImageGalleryItem from "./components/imageGalleryItem/ImageGalleryItem";
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import * as api from "./api/api";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [request, setRequest] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!request) {
      return;
    }
    fetchImages();
  }, [request]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [pictures]);

  const onChangeRequest = (query) => {
    setPictures([]);
    setRequest(query);
    setCurrentPage(1);
    setError(null);
  };

  const fetchImages = () => {
    const option = { request, currentPage };
    setIsLoading(true);
    api
      .fetchImages(option)
      .then(
        (picturesArr) => setPictures([...pictures, ...picturesArr]),
        setCurrentPage(currentPage + 1)
      )
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const onPictureClick = (url) => {
    setLargeImageURL(url);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const shouldRenderLoadMoreButton = pictures.length > 0 && !isLoading;
  return (
    <>
      <SearchBar onSubmit={onChangeRequest}></SearchBar>
      {error && <p>Sorry! Somethimg went wrong. Try again, please!</p>}
      <ImageGallery>
        {pictures.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            srcWebformat={webformatURL}
            pictureId={id}
            onClick={() => onPictureClick(largeImageURL)}
          />
        ))}
      </ImageGallery>
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <img src={largeImageURL} alt="" />
        </Modal>
      )}
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {shouldRenderLoadMoreButton && <Button  onClick={fetchImages} />}
    </>
  );
};

export default App;