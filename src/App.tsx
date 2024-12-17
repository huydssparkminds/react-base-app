import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "@/router/routes";
import getStore from "./shared/store";
const store = getStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
