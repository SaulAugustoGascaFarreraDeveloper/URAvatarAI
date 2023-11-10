import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls,useFBX } from "@react-three/drei";
import { useRef } from "react";


const MeshComp = () => {


    // const ref = useRef<THREE.Mesh>(null!)

    
    // useFrame((state,delta) => (ref.current.rotation.y += delta))


    // return(
    // <mesh ref={ref}>
    //     <boxGeometry />
    //     <meshNormalMaterial />
    //   </mesh>
    // )

    const ref = useRef<THREE.Mesh>(null!)

    useFrame((state,delta) => (ref.current.rotation.y += delta))

    const model = useFBX("/roboticarm2.fbx")

    return(
        <primitive  ref={ref}  object={model} scale={0.12}   />
    )

}



const Experience = () => {

    
    
    return (

        <div className=" h-[20vh] w-[53vw] sm:h-[55vh] sm:w-[55vw]">
        <Canvas>
            <OrbitControls enableZoom={true} />
           <ambientLight intensity={1.3} />
            <MeshComp />

           
        </Canvas>
        </div>
    );
}
 
export default Experience;