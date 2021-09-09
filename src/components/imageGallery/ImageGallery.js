import styles from './Image.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={styles.imageGallery}>{children}</ul>;
};

export default ImageGallery;