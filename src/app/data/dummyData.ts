export interface DummyData {
  section1: {
    [key: number]: {
      title: string;
      nextTileTitle: string;
      mainVisual: string;
      visualThumb: string;
      next: number;
    };
  };
}

export const getDummyData = (): DummyData => {
  return {
    section1: {
      1: {
        title: '세계를 무대로 꿈을 펼칠\n사람들이 모여 있습니다',
        nextTileTitle: '같이 즐기며\n배우는 시간',
        mainVisual: '/images/main_visual1.jpg',
        visualThumb: '/images/visual_thumb1.jpg',
        next: 2,
      },
      2: {
        title: '재미와 감동, 환희가 함께하는\n역동적인 액션러닝이 있습니다',
        nextTileTitle: '사람과 세계를\n만나는 시간',
        mainVisual: '/images/main_visual2.jpg',
        visualThumb: '/images/visual_thumb2.jpg',
        next: 3,
      },
      3: {
        title: '한국인이 세계인과,\n세계인이 한국인과 더 가까워집니다',
        nextTileTitle: '뜨거운 열정이\n넘치는 시간',
        mainVisual: '/images/main_visual3.jpg',
        visualThumb: '/images/visual_thumb3.jpg',
        next: 1,
      },
    },
  };
};
