import '../../../css/home.css'
import { Header } from "./Header"
import { MySlider } from './MySlider'

export const Home = () => {
  return <div className="home">
    <Header />
    <MySlider />
  </div>
}