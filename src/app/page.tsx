import { getDummyData } from './data/dummyData';
import { MainPageView } from './views/MainPage';

export default function MainPage() {
  const dummyData = getDummyData();

  return (
    <main>
      <MainPageView data={dummyData} />
    </main>
  );
}
