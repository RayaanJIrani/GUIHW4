import {CartContextProvider} from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {routes} from "./routes";

function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
            {/* TODO: Style header and make link navigate to Product List*/}
          <header>Store</header>
            <Routes>
                <Route>
                    {
                        routes().map((route, index) => <Route key={index} { ...route } />)
                    }
                </Route>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
