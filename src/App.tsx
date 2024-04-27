import { FC, useEffect, useState } from "react";
import "./App.css";

export const App: FC = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <>
      <div>Howdy</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
