'use client';

import React from 'react';

import styles from './MainPageView.module.scss';
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from './Sections';
import { DummyData } from '../../data/dummyData';

interface MainPageViewProps {
  data: DummyData;
}

export const MainPageView: React.FC<MainPageViewProps> = ({ data }) => {
  return (
    <>
      <Section1 data={data.section1} />

      <Section2 data={data.section2} />
      <Section3 />

      <section className={styles.Section4_5}>
        <Section4 data={data.section4} />
        <Section5 data={data.section5} />
      </section>

      <Section6 data={data.section6} />
      <Section7 />
    </>
  );
};
