import { useState } from 'react'
import '../../../css/home.css'
import { Header } from "./Header"
import { MySlider } from './MySlider'
import { RecentSearch } from './RecentSearch'
import { Arrivals } from './Arrivals'



export const Home = () => {

  const [isSearched, setIsSearched] = useState(true);
  
  return <div className="home">
    <Header />
    <MySlider />

    {isSearched ? <RecentSearch /> : ""}
    <Arrivals />
  </div>
}