// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import { memo } from "react";
import { useCallback } from "react";

// function App() {
// When title which is a state variable changes the component re-renders
// Which means App re-renders and all the Header components used inside App re-renders even if one Header component state variable changes
// Solution is to push the state down, which means if there is a need to change the title of the header based on button click, push the state into the component that needs to re-render when it changes, then everything else does not re-renders

//   return (
//     <div>
//       <HeaderWithButton title="Title 2" />
//       <Header title="Title 3" />
//       <Header title="Title 4" />
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("This is a title");
//   const updateTitle = () => {
//     setTitle("The title is " + Math.random());
//   };
//   return (
//     <div>
//       <button onClick={updateTitle}>Click to update</button>
//       <Header title={title} />
//     </div>
//   );
// }

// eslint-disable-next-line react/prop-types
// function Header({ title }) {
//   return (
//     <>
//       <div>{title}</div>
//     </>
//   );
// }

// Wrapper Component
// const App = () => {
//   return (
//     <div>
//       {/* <CardWrapper innerComponent={<TextComponent />} /> */}
//       <CardWrapper>Hi there</CardWrapper>
//       <CardWrapper>
//         <TextComponent />
//       </CardWrapper>
//     </div>
//   );
// };

// function TextComponent() {
//   return <div>Hi text</div>;
// }

// eslint-disable-next-line react/prop-types
// function CardWrapper({ children }) {
//   return (
//     <div>
//       <div style={{ border: "4px solid black" }}>{children}</div>
//     </div>
//   );
// }
var a = 1;

function App() {
  const [counter, setCounter] = useState(0);

  //useCallback
  a = useCallback(() => {
    console.log("Hi world!");
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Counter {counter}
        </button>
        <Demo a={a} />
      </div>
    </>
  );
}

// eslint-disable-next-line react/display-name, react/prop-types
const Demo = memo(function ({ a }) {
  console.log("rerender");
  return (
    <div>
      <div>hi there</div>
    </div>
  );
});

export default App;
