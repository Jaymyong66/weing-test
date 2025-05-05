'use client';

import { Fragment, ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './TextArea.module.scss';

interface TextAreaProps {
  text: string;
  className?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

const TextAreaBase: React.FC<TextAreaProps> = ({
  text,
  className,
  footer,
  children,
}) => {
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

  return (
    <div className={`${styles.TextArea} ${className}`}>
      <div className={styles.TextBox}>{renderText()}</div>
      {footer}
      {children}
    </div>
  );
};

interface TextInfoProps {
  author: string;
  organization: string;
  className?: string;
}

const TextInfo = ({ author, organization, className }: TextInfoProps) => {
  return (
    <div className={`${styles.TextInfo} ${className}`}>
      <em>{author}</em>
      <span>{organization}</span>
    </div>
  );
};

const TextArea = Object.assign(TextAreaBase, {
  TextInfo,
});

export default TextArea;
