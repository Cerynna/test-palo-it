import axios from "axios";
import "./styles/main.scss";

function App() {
  axios.get("/test").then(({ data }) => {
    console.log(data);
  });

  return <div className="App">APP</div>;
}

export default App;
