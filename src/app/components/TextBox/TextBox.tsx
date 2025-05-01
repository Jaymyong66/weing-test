'use client';

import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './TextBox.module.scss';

interface TextBoxProps {
  text: string;
}

export const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 891px)' });

  const renderText = () => {
    if (isDesktop) {
      const lines = text.split('\n');

      return (
        <p>
          {lines.map((line, index) => (
            <Fragment key={index}>
              {line}
              {index < lines.length - 1 && <i className={`${styles.dpb}`}></i>}
            </Fragment>
          ))}
        </p>
      );
    } else {
      const processedText = text.replace(/\n/g, ' ');

      return <p>{processedText}</p>;
    }
  };

  return <div className={styles.TextBox}>{renderText()}</div>;
};

export default TextBox;
