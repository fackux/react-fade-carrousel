import FadeCarousel from './components/FadeCarousel';

import POSTINGS from './postings.json'


function App() {
  const { postingId, pictures } = POSTINGS.visiblePictures//resizeUrl1200x1200

  return (
    <FadeCarousel postingId={postingId} pictures={pictures} />
  )
}

export default App;
