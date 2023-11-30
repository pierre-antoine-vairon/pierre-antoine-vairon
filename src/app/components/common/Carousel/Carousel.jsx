//Style
import styles from './Carousel.module.css';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
//React Tools
import { useState } from 'react';
import Image from 'next/image';

export default function Carousel({ img }) {
  const numberPicture = img.length;
  const firstPicture = img[0];
  const lastPicture = img[numberPicture - 1];
  const [currentPicture, setCurrentPicture] = useState(firstPicture);
  const pictureIndex = img.indexOf(currentPicture);
  //<div>{img.indexOf(currentPicture) +1} / {numberPicture}</div>

  const nextSlide = () => {
    setCurrentPicture(
      currentPicture === lastPicture ? firstPicture : img[pictureIndex + 1]
    );
  };

  const prevSlide = () => {
    setCurrentPicture(
      currentPicture === firstPicture ? lastPicture : img[pictureIndex - 1]
    );
  };

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={currentPicture}
          alt={currentPicture.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {numberPicture !== 1 && (
        <div className={styles.navigationContainer}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={styles.navIcon}
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.navIcon}
            onClick={nextSlide}
          />
        </div>
      )}
    </section>
  );
}
