import Intro from "./component/intro";
import Navbar from "./component/navbar";
import About from "./component/about";

import "../src/App.css";

function App() {
    return(
        <div>
        
          
          <Navbar />
          <Intro />
          <About />
        </div>
        
    );

}

export default App;