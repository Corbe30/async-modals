import "./App.css";
import useAsyncModal from "./useAsyncModal";

function App() {
  const {confirm} = useModal();

  const onClickHandler = async () => {
    const response = await confirm();
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClickHandler}>Open Modal</button>
      </header>
    </div>
  );
}

export default App;
