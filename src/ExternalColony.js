import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";

import "./ExternalColony.css";
import Colony from "./Colony";

function ExternalColony() {
  return (
    <div className="externalColony">
      <Canvas camera={{ position: [0, 10, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          intensity={2}
          angle={0.2}
          penumbra={1}
          position={[0, 20, 0]}
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          castShadow
          intensity={1.5}
          angle={0.2}
          penumbra={1}
          position={[-25, 20, -15]}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        <Suspense fallback={null}>
          <Colony />
        </Suspense>
        <Html center>
          <p className="externalColony_tool">PLANET</p>
          <p className="externalColony_tool">ROVER</p>
        </Html>

        <OrbitControls
          autoRotate={true}
          enablePan={true}
          enableDamping={true}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}

export default ExternalColony;
