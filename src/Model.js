import React, { Suspense } from "react";
import { Loader } from "@react-three/drei";

import Scene from "./Scene";

function Model() {
  return (
    <Suspense fallback={null}>
      <Scene />
      <Loader />
    </Suspense>
  );
}

export default Model;
