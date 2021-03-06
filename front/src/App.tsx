import { Provider } from "react-redux";
import Routes from "./Router";
import { store } from "src/dev-src/redux/index";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
