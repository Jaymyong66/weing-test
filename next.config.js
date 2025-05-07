/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 HTML 내보내기 설정
  images: {
    unoptimized: true, // GitHub Pages에서는 이미지 최적화 서버를 사용할 수 없으므로 비활성화
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/weing-test' : '', // GitHub 저장소 이름으로 교체
  basePath: process.env.NODE_ENV === 'production' ? '/weing-test' : '', // GitHub 저장소 이름으로 교체
  trailingSlash: true, // 각 페이지를 index.html 파일로 생성하기 위한 설정
};

module.exports = nextConfig;
