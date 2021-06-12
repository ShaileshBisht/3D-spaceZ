import "./App.css";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import Model from "./Model";
import RoverSection from "./RoverSection";
import SpaceCarrier from "./SpaceCarrier";
import PlanetDiscovery from "./PlanetDiscovery";
import ExternalColony from "./ExternalColony";

function App() {
  return (
    <div className="app">
      <div className="hero_section">
        <Canvas camera={{ position: [0, 0, 16], fov: 75 }}>
          <ambientLight intensity={0.3} />
          <fog attach="fog" args={["#272730", 16, 30]} />
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={1.5}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />

          <Stars radius={500} depth={10} count={1100} factor={10} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>

          <OrbitControls
            autoRotate={false}
            enablePan={true}
            enableDamping={true}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      <div className="hero_data">
        <h1>SpaceZ</h1>
      </div>
      <SpaceCarrier />
      <RoverSection />
      <PlanetDiscovery />
      <ExternalColony />
    </div>
  );
}

export default App;
