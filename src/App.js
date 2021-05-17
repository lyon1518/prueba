import "bootstrap/dist/css/bootstrap.min.css";
import "@material-ui/core/Icon/index";
import Router from './Router';
import StoreProvider from "./store/StoreProvider";
function App() {
  // console.log('app');
  return (
    <div className="App">
      <StoreProvider>
        <Router/>
      </StoreProvider>
    </div>
  );
}

export default App;
