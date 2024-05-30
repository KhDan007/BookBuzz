import { useState } from "react";
import "../../../css/home.css";
import { Header } from "./Header";
import { MySlider } from "./MySlider";
import { RecentSearch } from "./RecentSearch";
import { Arrivals } from "./Arrivals";
import { BestSellers } from "./BestSellers";
import { EBooks } from "./EBooks";
import { Footer } from "./Footer";

export const Home = () => {
  const [activeTab, setActiveTab] = useState("forYou");
  const [isSearched, setIsSearched] = useState(true);

  const renderContent = () => {
    if (activeTab === "forYou") {
      return (
        <>
          <MySlider />
          {isSearched && <RecentSearch />}
          <Arrivals />
          <BestSellers />
          <Footer />
        </>
      );
    } else if (activeTab === "eBooks") {
      // Add content for e-Books tab here
      return (
        <>
          <EBooks />
          <Footer />
        </>
      );
    }
  };

  return (
    <div className="home">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {renderContent()}
    </div>
  );
};
