import { getDummyData } from './data/dummyData';
import { MainPageView } from './views/MainPageView';

export default function MainPage() {
  const dummyData = getDummyData();

  return (
    <main>
      <MainPageView data={dummyData} />
    </main>
  );
}
