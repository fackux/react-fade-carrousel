import FadeCarousel from './components/FadeCarousel';
import './styles.css'

import POSTINGS from './postings.json'


function App() {
  const { pictures } = POSTINGS.visiblePictures//resizeUrl1200x1200

  return (
    <FadeCarousel pictures={pictures} />
  )
}

export default App;
