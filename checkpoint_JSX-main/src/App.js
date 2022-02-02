import imageInSrc from "./imageInSrc.png";
import './App.css';
import './style.css';
import react from "react";

function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Ahmed bchir</h1>

<br />

<img className="image" src={imageInSrc} alt="imageInSrc"/>

<br />

<img className="image" src="./imgageInSrc.png" alt="imageInPublic"/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
