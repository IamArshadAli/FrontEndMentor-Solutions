import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
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
