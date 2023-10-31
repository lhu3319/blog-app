import React, { useState } from "react";

type Props = {};

const Carousel = (props: Props) => {
  const IMAGE_1_URL =
    "https://images.unsplash.com/photo-1698509147731-b28aefd9c147?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const IMAGE_2_URL =
    "https://images.unsplash.com/photo-1695765189584-046b776809cb?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const IMAGE_3_URL =
    "https://images.unsplash.com/photo-1698675951502-5fc1b750c6b1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [activeImage, setActiveImage] = useState(1);
  return <div>Carousel</div>;
};

export default Carousel;
