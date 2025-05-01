import { MainPageView } from './views/MainPageView';
import { getDummyData } from './data/dummyData';

export default function MainPage() {
  const dummyData = getDummyData();

  return (
    <main>
      <MainPageView data={dummyData} />
    </main>
  );
}
