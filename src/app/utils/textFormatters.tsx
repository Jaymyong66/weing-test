import { Fragment, ReactNode } from 'react';

/**
 * 텍스트에서 개행문자(\n)를 찾아 React 엘리먼트로 변환합니다.
 * @param text 변환할 텍스트
 * @returns React 엘리먼트 배열
 */
export const splitTextByNewlines = (text: string): ReactNode[] => {
  const lines = text.split('\n');

  return lines.map((line, index) => (
    <Fragment key={index}>
      {line}
      {index < lines.length - 1 && <i style={{ display: 'block' }}></i>}
    </Fragment>
  ));
};

/**
 * 텍스트에서 개행문자(\n)를 공백으로 대체합니다.
 * @param text 변환할 텍스트
 * @returns 공백으로 대체된 텍스트
 */
export const removeNewlines = (text: string): string => {
  return text.replace(/\n/g, ' ');
};
