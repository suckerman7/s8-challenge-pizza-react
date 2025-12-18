import HomeHeader from './HomeHeader';
import TopNav from './TopNav';
import PromoSection from './PromoSection';
import CategoryTitle from './CategoryTitle';
import FilterButtons from './FilterButtons';
import MenuGrid from './MenuGrid';
import Footer from './Footer';

export default function Home() {

  return (
    <div className='flex flex-col min-h-screen'>
      <HomeHeader />
      <TopNav />
      <PromoSection />
      <CategoryTitle />
      <FilterButtons />
      <MenuGrid />
      <Footer />
    </div>
  );
}