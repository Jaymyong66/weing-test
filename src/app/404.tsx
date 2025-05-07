import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // GitHub Pages에서 경로 문제 해결을 위한 리디렉션
    const { pathname, asPath, query } = router;
    if (pathname !== asPath) {
      router.push({ pathname, query });
    }
  }, [router]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
      <button
        onClick={() => router.push('/')}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          cursor: 'pointer',
          backgroundColor: '#e66134',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}
