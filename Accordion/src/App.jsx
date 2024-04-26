import './App.css'
import TreeView from './components/TreeMenu'
// import ImageSlider from './components/ImageSlider/ImageSlider'
// import LoadMoreComponent from './components/LoadMoreFeature/LoadMoreComponent'
// import Accordion from './components/Accordion/Accordion'
// import RandomBgColor from './components/RandomBgColor/RandomBgColor'
// import StarRating from './components/StarRating/StarRating'
import { Menu } from './components/TreeMenu/data'

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

      {/** Tree Menu Component */} 
      <TreeView menu={Menu} />
    </>
  )
}

export default App
