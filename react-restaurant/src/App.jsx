import "./App.css";

import RestaurantDetails from "./components/RestaurantDetails";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getRestaurantData() {
      const response = await fetch(`http://localhost:8080/Restaurant`);
      const Data = await response.json();
      console.log(Data);
      setData(Data);
    }
    getRestaurantData();
  }, []);
  const [state, setState] = useState({
    filterRating: 0,
  });
  const [payment, setPayment] = useState({
    paymentMethod: "All",
  });
  const [cost, setCost] = useState({
    sortMethod: null,
  });

  const handleRating = (rating) => {
    setState({ filterRating: rating });
  };
  const handlePayment = (payment) => {
    setPayment({ paymentMethod: payment });
  };

  const handleSort = (order) => {
    setCost({ sortMethod: order });
  };

  return (
    <div className="App">
      <h1>RESTAURANTS</h1>
      {data
        .filter(({ rating, payment_methods }) => {
          const { cash, card } = payment_methods;
          let paymentCondition = true;
          if (payment.paymentMethod === "Cash") {
            paymentCondition = cash ? true : false;
          } else if (payment.paymentMethod === "Card") {
            paymentCondition = card ? true : false;
          }
          return rating >= state.filterRating && paymentCondition;
        })
        .map((item) => {
          console.log(item);
          return <RestaurantDetails data={item} key={item.id} />;
        })}
    </div>
  );
}

export default App;
