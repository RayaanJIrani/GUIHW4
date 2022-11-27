import {CartContextProvider} from "./context/CartContext";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {routes} from "./routes";



function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
            <header className={"navbar container-lg bg-dark text-white p-3 align-middle"}><Link to={'/'} className = "text-white text-decoration-none">Store</Link></header>
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

function clickHandler() {
    console.log("clicked");
}

export default App;
