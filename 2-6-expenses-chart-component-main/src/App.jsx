import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          // data.forEach((item) => {
          //   console.log(item.day,item.amount);
          // });
          // console.log(data.reduce((acc, item) => acc+item.amount,0))
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <main className="bg-Cream font-DMSans flex h-screen w-screen flex-col items-center justify-center gap-4 px-6">
      <Header balance={921.48} />
      <Card data={data} />
    </main>
  );
};

export default App;
