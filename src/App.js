import "./App.css";
import MemoList from "./MemoList";

function App() {
  return (
    <div className="App">
      <MemoList
        items={[
          "Apple",
          "Orange",
          "Mango",
          "Strawberry",
          "Kiwi",
          "Watermelon",
          "Pineapple",
        ]}
      />
    </div>
  );
}

export default App;
