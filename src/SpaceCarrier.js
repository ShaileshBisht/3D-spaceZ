import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Carrier from "./Carrier";

import "./SpaceCarrier.css";

function SpaceCarrier() {
  return (
    <div className="spaceCarrier">
      <div className="spaceCarrier_title">
        <h1>Our Carrier</h1>
      </div>
      <div className="spaceCarrier_flex">
        <div className="spaceCarrier_left">
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
            adipisci, placeat harum quaerat autem earum voluptas quasi libero
            ipsam omnis labore ut repudiandae eligendi quis vero.
          </p>
        </div>
        <div className="spaceCarrier_right">
          <Canvas camera={{ position: [0, 50, 120], fov: 75 }}>
            <Stars radius={500} depth={10} count={1100} factor={1} />
            <ambientLight intensity={1} />
            <pointLight intensity={1} position={[-10, -25, 0]} />
            <pointLight intensity={1} position={[-10, 25, 0]} />
            <directionalLight
              intensity={2}
              angle={0.2}
              penumbra={1}
              position={[0, 20, 0]}
              shadow-mapSize={[1024, 1024]}
            />
            <Suspense fallback={null}>
              <Carrier />
            </Suspense>

            <OrbitControls autoRotate={true} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default SpaceCarrier;
