import { useState } from 'react';

import styles from './Video.module.scss';

interface VideoProps {
  src: string;
  poster?: string;
}

const Video = ({ src, poster = '/images/img_poster.jpg' }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className={styles.VideoArea}>
      <div className={styles.Video}>
        {isPlaying ? (
          <div className={styles.YoutubeBox} title='동영상 보기'>
            <iframe
              width='1280'
              height='720'
              id='VideoPlayer'
              src={`${src}${src.includes('?') ? '&' : '?'}autoplay=1`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div
            className={styles.YoutubePoster}
            style={{ backgroundImage: `url(${poster})` }}
            onClick={handlePlayClick}
            title='동영상 보기'
          >
            <div className={styles.PlayButton}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;
