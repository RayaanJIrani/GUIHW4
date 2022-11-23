import {CartContextProvider} from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {routes} from "./routes";


function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
            {/* TODO: Style header and make link navigate to Product List*/}
          <header className={"navbar container-lg text-light bg-dark"}>Store</header>
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
