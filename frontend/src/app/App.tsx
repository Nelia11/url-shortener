import Header from '../components/Header';
import GetStarted from '../components/GetStarted';
import SearchAndStatistics from '../components/Statistics';
import BoostToday from '../components/BoostToday';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <GetStarted />
      <SearchAndStatistics />
      <BoostToday />
      <Footer />
    </div>
  );
};

export default App;
