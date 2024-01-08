import Header from './Components/Header';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './Components/Footer';
import SrcollToTop from './Components/SrcollToTop';
export default function App() {
  return (
    <div className="bg-white dark:bg-gray-800 relative">
      <Header />
      <AllRoutes />
      <SrcollToTop />
      <Footer />
    </div>
  );
}
