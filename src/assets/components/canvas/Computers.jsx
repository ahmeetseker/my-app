import {Suspense , useEffect , useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
//import {CanvasLoader} from "../Loader"

const Computers = () => {

  const Computer = useGLTF('./planet/scene.gltf')

    return(
      <mesh>
       <hemisphereLight
        intensity={0.15 }
         groundColor="black"
         
         />
         <spotLight

            position={[-20,50,10]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}

         />
           <pointLight intensity={1} />
       <primitive object={Computer.scene}
          
       />
      </mesh>
     )

  
 
}

const ComputersCanvas =()=>{

  return(  <Canvas  
          framerloop='demand'
          shadows
          camera={{position:[20 ,3,5], fov:25  }}
          gl={{preserveDrawingBuffer:true}}

  >  
    <Suspense fallback={ <CanvasLoader/>}>
      <OrbitControls
       enableZoom={false}
       maxPolarAngle={Math.PI / 2}
       minPolarAngle={Math.PI / 2}
      
      />

      <Computers/>
    </Suspense>

    <Preload all/>

  </Canvas>)
}

export default Computers