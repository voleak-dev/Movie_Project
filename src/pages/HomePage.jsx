import Slideshow from "../components/SlideShow"
import TrendingMovie from "../components/TrendingMovie"
import NewMovie from "../components/NewMovie"
import KhmerMovie from "../components/KhmerMovie"
import KoreanMovie from "../components/KoreanMovie"
import ChineseMovie from "../components/ChineseMovie"
import AllMovie from "../components/AllMovie"
import Sponsor from "../components/Sponsor"
const HomePage = () =>{
  return(
    <div>
        <Slideshow />
        <TrendingMovie />
        <NewMovie />
        <KhmerMovie />
        <KoreanMovie />
        <ChineseMovie />
        <AllMovie />
        <Sponsor />
    </div>
  )
}

export default HomePage;