import "./App.css";
import Form from "./components/Form/Form";
import User from "./components/User/User";
import PasProvider from "./store/context";

function App() {
  return (
    <PasProvider>
      <Form />
      <User />
    </PasProvider>
  );
}

export default App;
