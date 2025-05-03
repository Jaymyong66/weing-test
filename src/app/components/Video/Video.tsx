import styles from './Video.module.scss';

interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  return (
    <div className={styles.VideoArea}>
      <div className={styles.Video}>
        <div className={styles.YoutubeBox} title='동영상 보기'>
          <iframe
            width='1280'
            height='720'
            id='VideoPlayer'
            src={src}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
