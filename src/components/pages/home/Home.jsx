import { useState } from 'react'
import '../../../css/home.css'
import { Header } from "./Header"
import { MySlider } from './MySlider'
import { RecentSearch } from './RecentSearch'
import { Arrivals } from './Arrivals'
import { BestSellers } from './BestSellers'



export const Home = () => {

  const [isSearched, setIsSearched] = useState(true);
  
  return <div className="home">
    <Header />
    <MySlider />

    {isSearched ? <RecentSearch /> : ""}
    <Arrivals />
    <BestSellers />
  </div>
}