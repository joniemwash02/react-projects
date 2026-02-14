import './App.css';
// import LoadMoreData from './Components/load-more-data';
import TreeView from './Components/Tree-View';
import { Menus } from './Components/Tree-View/data';
// import Imageslider from './Components/Image slider';
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
      {/* <Imageslider url={url} page={'1'} limit={"10"}/> */}
      {/* < LoadMoreData /> */}

      <TreeView menus={Menus} />

    </div>
  );
}

export default App;
