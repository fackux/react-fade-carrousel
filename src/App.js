import Galeria from "./components/Galeria";
import './styles.css'

import { visiblePictures } from './postings.json'

function App() {
  return (
    <Galeria items={visiblePictures.pictures}/>
  );
}

export default App;
