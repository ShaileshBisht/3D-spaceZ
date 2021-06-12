import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import "./PlanetDiscovery.css";
import Planet from "./Planet";

function PlanetDiscovery() {
  return (
    <div className="planetDiscovery">
      <div className="planetDiscovery_title">
        <h1>Discover New Planet</h1>
      </div>
      <div className="planetDiscovery_flex">
        <div className="planetDiscovery_left">
          <Canvas camera={{ position: [0, 30, 30], fov: 75 }}>
            <Stars radius={500} depth={10} count={1100} factor={1} />
            <ambientLight intensity={0.3} />
            <directionalLight
              intensity={1}
              angle={0.2}
              penumbra={1}
              position={[0, 20, 0]}
              shadow-mapSize={[1024, 1024]}
            />
            <Suspense fallback={null}>
              <Planet />
            </Suspense>

            <OrbitControls autoRotate={false} enableZoom={false} />
          </Canvas>
        </div>
        <div className="planetDiscovery_right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            explicabo nulla quam odio voluptate accusantium debitis a
            repudiandae possimus consectetur mollitia dolorem doloremque ut
            saepe quos, sequi molestiae. Corrupti quisquam odit aliquam enim
            tempore qui placeat a, corporis est voluptatum iure voluptates modi
            cumque deserunt impedit veniam exercitationem at quam similique.
            Ipsum consectetur laboriosam numquam hic voluptates voluptas
            suscipit quod, et laudantium atque quidem reiciendis cupiditate
            aperiam itaque ea sit est aliquid ipsam adipisci dolores veritatis
            doloribus ex necessitatibus recusandae. Aperiam inventore saepe
            adipisci
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlanetDiscovery;
