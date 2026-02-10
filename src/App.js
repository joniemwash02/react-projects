import './App.css';
import Imageslider from './Components/Image slider';
// import Accodian from './Components/Accodian';
// import RandomColor from './Components/radom color';
// import StarRating from './Components/starRating';
const url= 'https://picsum.photos/v2/list'

function App() {
  return (
    <div className="App">
      {/* <Accodian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      <Imageslider url={url} page={'1'} limit={"10"}/>
    </div>
  );
}

export default App;
