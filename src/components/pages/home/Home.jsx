import { useState } from 'react'
import '../../../css/home.css'
import { Header } from "./Header"
import { MySlider } from './MySlider'
import { RecentSearch } from './RecentSearch'
import { Arrivals } from './Arrivals'
import { BestSellers } from './BestSellers'



export const Home = () => {
  const [activeTab, setActiveTab] = useState('forYou');
  const [isSearched, setIsSearched] = useState(true);
  
  const renderContent = () => {
    if (activeTab === 'forYou') {
      return (
        <>
          <MySlider />
          {isSearched && <RecentSearch />}
          <Arrivals />
          <BestSellers />
        </>
      );
    } else if (activeTab === 'eBooks') {
      // Add content for e-Books tab here
      return <div>e-Books content goes here</div>;
    }
  };

  return <div className="home">
    <Header activeTab={activeTab} setActiveTab={setActiveTab} />
    
    {renderContent()}
  </div>
}