import styles from './ImageItem.module.css';

const ImageGalleryItem = ({ pictureId, srcWebformat, onClick }) => {
  return (
    <li className={styles.imageGallery} onClick={onClick}>
      <img src={srcWebformat} alt="" className={styles.image} />
    </li>
  );
};
export default ImageGalleryItem;