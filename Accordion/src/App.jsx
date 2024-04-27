import './App.css'
import ModalParent from './components/CustomModal'
// import ScrollIindicator from './components/ScrollIndicator'
// import QrCodeGen from './components/QrCodeGenerator/QrCodeGen'
// import LightDarkMode from './components/ThemeSwitcher'
// import TreeView from './components/TreeMenu'
// import ImageSlider from './components/ImageSlider/ImageSlider'
// import LoadMoreComponent from './components/LoadMoreFeature/LoadMoreComponent'
// import Accordion from './components/Accordion/Accordion'
// import RandomBgColor from './components/RandomBgColor/RandomBgColor'
// import StarRating from './components/StarRating/StarRating'
// import { Menu } from './components/TreeMenu/data'

function App() {

  return (
    <>
      {/* Accordion 
      <Accordion /> */}

      {/* Random Background Color 
      <RandomBgColor /> */}

      {/** Star Rating 
      <StarRating noOfStars={10} />*/}

      {/** Image Slider 
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} /> */}

      {/** Load More Component 
      <LoadMoreComponent />*/}

      {/** Tree Menu Component 
      <TreeView menu={Menu} /> */} 

      {/** QrCode generator Component  
      <QrCodeGen /> */}

      {/** Light-dark mode Component 
      <LightDarkMode />*/} 

      {/** Scroll Indicator Component  
      <ScrollIindicator url={'https://dummyjson.com/products?limit=100'} /> */}
    
      {/** Custom Modal Component */} 
      <ModalParent />
      </>
  )
}

export default App
