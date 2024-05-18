import { useState } from "react";
import "./App.css";

function App() {
  // When title which is a state variable changes the component re-renders
  // Which means App re-renders and all the Header components used inside App re-renders even if one Header component state variable changes
  // Solution is to push the state down, which means if there is a need to change the title of the header based on button click, push the state into the component that needs to re-render when it changes, then everything else does not re-renders
  const [title, setTitle] = useState("This is a title");

  const updateTitle = () => {
    setTitle(Math.random());
  };
  return (
    <div>
      <button onClick={updateTitle}>Click to update</button>
      <Header title={title} />
      <Header title="Title 2" />
      <Header title="Title 3" />
      <Header title="Title 4" />
    </div>
  );
}

function Header({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}

export default App;
