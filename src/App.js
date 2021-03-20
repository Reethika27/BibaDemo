import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Options from './Header/Options';
import Register from './Header/Register';
import TopHeader from './Header/TopHeader';
import BibaCarousel from './Body/BibaCarousel';
import SummerCollection from './Body/SummerCollections';
import NewCollections from './Body/NewCollections';
import Wardrobe from './Body/Wardrobe';
import Offer from './Body/Offer';
import SeasonalSeller from './Body/SeasonalSeller';
import DesignerPick from './Body/DesignerPick';
import FooterText from './Footer/FooterText';
import NavFooter from './Footer/NavFooter';
function App() {
  return (
    <>
    <TopHeader/>
    <Register/>
    <Options/>
    <BibaCarousel/>
    <SummerCollection/>
    <NewCollections/>
    <Wardrobe/>
    <Offer/>
    <SeasonalSeller/>
    <DesignerPick/>
    <br/>
    <FooterText/>
    <br/>
    <NavFooter/>
    </>
  );
}

export default App;
