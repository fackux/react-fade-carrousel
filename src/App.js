import FadeCarousel from './components/FadeCarousel';

const POSTINGS = {
  "pictures" : [
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745994.jpg",
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745990.jpg",
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745993.jpg",
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745988.jpg",
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745999.jpg",
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745987.jpg",
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745989.jpg",
  "https://preprostatic.zonapropcdn.com/avisos/resize/1/00/47/84/05/55/1200x1200/1765745984.jpg"
  ]
}


function App() {
  const { pictures } = POSTINGS;

  return (
    <FadeCarousel postingId={'101001'} pictures={pictures} height={'360px'} />
  )
}

export default App;
