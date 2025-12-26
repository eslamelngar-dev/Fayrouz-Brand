import NavBar from "../../Components/NavBar";
import MainSection from "./MainSection";
import Categories from "./categories";
import LatestProducts from "./LatestProducts";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <MainSection/>
      <Categories/>
      <LatestProducts/>
      <Footer/>
    </div>
  );
}
