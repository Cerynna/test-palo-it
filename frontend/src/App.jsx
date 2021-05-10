import { useState } from "react";
import axios from "axios";
import "./styles/main.scss";
import Input from "./components/Input";
import Tags from "./components/Tags";

function App() {
  const [tags, setTags] = useState(false);
  axios.get("/test").then(({ data }) => {
    console.log(data);
  });
  return (
    <div className="App">
      <Input setTags={setTags} />
      <Tags setTags={setTags} tags={tags} />
    </div>
  );
}

export default App;
