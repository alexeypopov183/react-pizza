import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";

import {Header} from "./components";
import {Home, Cart} from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({data}) => dispatch(setPizzas(data))
      )
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}


// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({data}) => setPizzas(data.pizzas));
//   }, []);
//
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home items={pizzas} />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

export default App;