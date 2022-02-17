import Image from "next/image";
import { Fragment } from "react";
import Button from "../ui/button";

const MainComponent = () => {
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "60rem",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <Image
          src="/img/food.jpg"
          alt="hello"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        <center>
          <Button>Find our store</Button>
        </center>       
        
      </div>
    </Fragment>
  );
};

export default MainComponent;
