import "./App.css";
import Form from "./components/Form/Form";
import User from "./components/User/User";
import RowPageInfo from "./components/RowPageInfo/RowPageInfo";
import PasProvider from "./store/context";

function App() {
  return (
    <PasProvider>
      <Form />
      <User />
      <RowPageInfo />
    </PasProvider>
  );
}

export default App;
