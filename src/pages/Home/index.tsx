import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getProduct } from "../../asyncfunctions";
import { IProduct } from "../../types";
import HomeCard from "./HomeCard";

const Home: React.FC = () => {
  const { product } = useAppSelector((s) => s);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  console.log(product);

  return (
    <div id="home">
      <div className="container">
        <div
          className="home"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {product.map((el: IProduct, idx: number) => (
            <HomeCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
