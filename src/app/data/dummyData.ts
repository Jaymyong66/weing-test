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
  section2: {
    title: string;
    subTitle: string;
    description: string;
  }[];
  section4: {
    imageSrc: string;
    link: string;
    title: string;
    content: string;
  }[];
  section5: {
    content: string;
    author: string;
    organization: string;
  }[];
  section6: {
    partners: string[];
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
    section2: [
      {
        title: '글로벌 매너 마스터 클래스',
        subTitle: '국제 활동에 필요한 자신감과 경쟁력을 향상시키는 프로그램',
        description:
          '이문화 이해를 바탕으로 상황 별 매너와 에티켓을 완벽하게 습득하여\n국제 무대에서의 경쟁력을 업그레이드 합니다.',
      },
      {
        title: '글로벌 비즈니스 커뮤니케이션',
        subTitle: '성과를 만드는 글로벌 비즈니스 스킬',
        description:
          '국제 활동에서 인정받는 리더가 갖춰야 할\n완벽한 커뮤니케이션 방법을 습득할 수 있습니다.',
      },
      {
        title: '한국 예절 클래스',
        subTitle: '외국인을 위한 필수 한국 예절 가이드',
        description:
          '글로벌 매너 전문가의 특별한 인사이트로\n한국 고유의 예절 문화를 친절하게 알려드립니다.',
      },
      {
        title: '한국 문화 스토리투어',
        subTitle: '흥미로운 스토리텔링형 문화 투어 프로그램',
        description:
          '한국 예절 전문가와 함께하는 스토리 투어로\n한국 고유의 문화에 담긴 가치를 발견합니다.',
      },
    ],
    section4: [
      {
        imageSrc: '/images/img_main_03.jpg',
        link: 'https://mariakglobal.com/programs/#item1',
        title: '글로벌 국제 행사 - 주한콜롬비아대사 안동투어',
        content: 'Learn More',
      },
      {
        imageSrc: '/images/img_main_03.jpg',
        link: 'https://mariakglobal.com/programs/#item1',
        title: '글로벌 비즈니스 커뮤니케이션',
        content: '성과를 만드는 글로벌 비즈니스 스킬',
      },
      {
        imageSrc: '/images/img_main_03.jpg',
        link: 'https://mariakglobal.com/programs/#item1',
        title: '한국 예절 클래스',
        content: '외국인을 위한 필수 한국 예절 가이드',
      },
      {
        imageSrc: '/images/img_main_03.jpg',
        link: 'https://mariakglobal.com/programs/#item1',
        title: '한국 문화 스토리투어',
        content: '흥미로운 스토리텔링형 문화 투어 프로그램',
      },
      {
        imageSrc: '/images/img_main_03.jpg',
        link: 'https://mariakglobal.com/programs/#item1',
        title: '한국 예절 클래스',
        content: '외국인을 위한 필수 한국 예절 가이드',
      },
      {
        imageSrc: '/images/img_main_03.jpg',
        link: 'https://mariakglobal.com/programs/#item1',
        title: '한국 문화 스토리투어',
        content: '흥미로운 스토리텔링형 문화 투어 프로그램',
      },
      {
        imageSrc: '/images/img_main_03.jpg',
        link: 'https://mariakglobal.com/programs/#item1',
        title: '한국 예절 클래스',
        content: '외국인을 위한 필수 한국 예절 가이드',
      },
    ],
    section5: [
      {
        content:
          '현재 캐나다에서 유학중인데 외국 친구들과 어울리면서 오해도 생기고 문화 차이도 많이 느끼고 있었어요. 지금까지 근본적인 원인과 문제를 모르다가 대표님 덕분에 알게 되었어요. 저는 관계에서 항상 제 식대로, 제가 배워 온대로 행동하고 말하면 되는 줄 알았는데 관계에서 성공하고 싶은 사람이 상대방에 맞춰서 다가간다는 말씀에 명쾌한 답을 얻었어요. 강의 들으면서 캐나다에서 제가 어떻게 친구들과 교수들을 이해하고 대했는지 계속 반성하게 되더라구요. 그 외에도 악수하는 방법, 명함 주는 방법 사소한 것들 하나하나가 해외를 돌아다니며 MICE 산업 일을 하고 싶은 저에게는 정말 필요한 가르침이 되었던 것 같아요. ',
        author: '김*연',
        organization: '한국 MICE아카데미',
      },
      {
        content:
          '현재 캐나다에서 유학중인데 외국 친구들과 어울리면서 오해도 생기고 문화 차이도 많이 느끼고 있었어요. 지금까지 근본적인 원인과 문제를 모르다가 대표님 덕분에 알게 되었어요. 저는 관계에서 항상 제 식대로, 제가 배워 온대로 행동하고 말하면 되는 줄 알았는데 관계에서 성공하고 싶은 사람이 상대방에 맞춰서 다가간다는 말씀에 명쾌한 답을 얻었어요. 강의 들으면서 캐나다에서 제가 어떻게 친구들과 교수들을 이해하고 대했는지 계속 반성하게 되더라구요. 그 외에도 악수하는 방법, 명함 주는 방법 사소한 것들 하나하나가 해외를 돌아다니며 MICE 산업 일을 하고 싶은 저에게는 정말 필요한 가르침이 되었던 것 같아요. ',
        author: '김*연',
        organization: '한국 MICE아카데미',
      },
      {
        content:
          '현재 캐나다에서 유학중인데 외국 친구들과 어울리면서 오해도 생기고 문화 차이도 많이 느끼고 있었어요. 지금까지 근본적인 원인과 문제를 모르다가 대표님 덕분에 알게 되었어요. 저는 관계에서 항상 제 식대로, 제가 배워 온대로 행동하고 말하면 되는 줄 알았는데 관계에서 성공하고 싶은 사람이 상대방에 맞춰서 다가간다는 말씀에 명쾌한 답을 얻었어요. 강의 들으면서 캐나다에서 제가 어떻게 친구들과 교수들을 이해하고 대했는지 계속 반성하게 되더라구요. 그 외에도 악수하는 방법, 명함 주는 방법 사소한 것들 하나하나가 해외를 돌아다니며 MICE 산업 일을 하고 싶은 저에게는 정말 필요한 가르침이 되었던 것 같아요. ',
        author: '김*연',
        organization: '한국 MICE아카데미',
      },
      {
        content:
          '현재 캐나다에서 유학중인데 외국 친구들과 어울리면서 오해도 생기고 문화 차이도 많이 느끼고 있었어요. 지금까지 근본적인 원인과 문제를 모르다가 대표님 덕분에 알게 되었어요. 저는 관계에서 항상 제 식대로, 제가 배워 온대로 행동하고 말하면 되는 줄 알았는데 관계에서 성공하고 싶은 사람이 상대방에 맞춰서 다가간다는 말씀에 명쾌한 답을 얻었어요. 강의 들으면서 캐나다에서 제가 어떻게 친구들과 교수들을 이해하고 대했는지 계속 반성하게 되더라구요. 그 외에도 악수하는 방법, 명함 주는 방법 사소한 것들 하나하나가 해외를 돌아다니며 MICE 산업 일을 하고 싶은 저에게는 정말 필요한 가르침이 되었던 것 같아요. ',
        author: '김*연',
        organization: '한국 MICE아카데미',
      },
      {
        content:
          '현재 캐나다에서 유학중인데 외국 친구들과 어울리면서 오해도 생기고 문화 차이도 많이 느끼고 있었어요. 지금까지 근본적인 원인과 문제를 모르다가 대표님 덕분에 알게 되었어요. 저는 관계에서 항상 제 식대로, 제가 배워 온대로 행동하고 말하면 되는 줄 알았는데 관계에서 성공하고 싶은 사람이 상대방에 맞춰서 다가간다는 말씀에 명쾌한 답을 얻었어요. 강의 들으면서 캐나다에서 제가 어떻게 친구들과 교수들을 이해하고 대했는지 계속 반성하게 되더라구요. 그 외에도 악수하는 방법, 명함 주는 방법 사소한 것들 하나하나가 해외를 돌아다니며 MICE 산업 일을 하고 싶은 저에게는 정말 필요한 가르침이 되었던 것 같아요. ',
        author: '김*연',
        organization: '한국 MICE아카데미',
      },
      {
        content:
          '현재 캐나다에서 유학중인데 외국 친구들과 어울리면서 오해도 생기고 문화 차이도 많이 느끼고 있었어요. 지금까지 근본적인 원인과 문제를 모르다가 대표님 덕분에 알게 되었어요. 저는 관계에서 항상 제 식대로, 제가 배워 온대로 행동하고 말하면 되는 줄 알았는데 관계에서 성공하고 싶은 사람이 상대방에 맞춰서 다가간다는 말씀에 명쾌한 답을 얻었어요. 강의 들으면서 캐나다에서 제가 어떻게 친구들과 교수들을 이해하고 대했는지 계속 반성하게 되더라구요. 그 외에도 악수하는 방법, 명함 주는 방법 사소한 것들 하나하나가 해외를 돌아다니며 MICE 산업 일을 하고 싶은 저에게는 정말 필요한 가르침이 되었던 것 같아요. ',
        author: '김*연',
        organization: '한국 MICE아카데미',
      },
      {
        content:
          '현재 캐나다에서 유학중인데 외국 친구들과 어울리면서 오해도 생기고 문화 차이도 많이 느끼고 있었어요. 지금까지 근본적인 원인과 문제를 모르다가 대표님 덕분에 알게 되었어요. 저는 관계에서 항상 제 식대로, 제가 배워 온대로 행동하고 말하면 되는 줄 알았는데 관계에서 성공하고 싶은 사람이 상대방에 맞춰서 다가간다는 말씀에 명쾌한 답을 얻었어요. 강의 들으면서 캐나다에서 제가 어떻게 친구들과 교수들을 이해하고 대했는지 계속 반성하게 되더라구요. 그 외에도 악수하는 방법, 명함 주는 방법 사소한 것들 하나하나가 해외를 돌아다니며 MICE 산업 일을 하고 싶은 저에게는 정말 필요한 가르침이 되었던 것 같아요. ',
        author: '김*연',
        organization: '한국 MICE아카데미',
      },
    ],
    section6: {
      partners: [
        '/images/partners/partner_1.jpg',
        '/images/partners/partner_2.jpg',
        '/images/partners/partner_3.jpg',
        '/images/partners/partner_4.jpg',
        '/images/partners/partner_5.jpg',
        '/images/partners/partner_6.jpg',
        '/images/partners/partner_7.jpg',
        '/images/partners/partner_8.jpg',
        '/images/partners/partner_9.jpg',
        '/images/partners/partner_10.jpg',
        '/images/partners/partner_11.jpg',
        '/images/partners/partner_12.jpg',
        '/images/partners/partner_13.jpg',
        '/images/partners/partner_14.jpg',
        '/images/partners/partner_15.jpg',
        '/images/partners/partner_16.jpg',
        '/images/partners/partner_17.jpg',
        '/images/partners/partner_18.jpg',
        '/images/partners/partner_19.jpg',
        '/images/partners/partner_20.jpg',
      ],
    },
  };
};
