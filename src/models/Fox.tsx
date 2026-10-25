/* eslint react/no-unknown-property: "off" */

/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import { useEffect, useRef } from "react";
import type { ThreeElements } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import type { Group, Material, Object3D, SkinnedMesh } from "three";

import scene from "../assets/3d/fox.glb";

type FoxProps = ThreeElements["group"] & {
  currentAnimation: string;
};

type FoxModelNodes = {
  GLTF_created_0_rootJoint: Object3D;
  Object_7: SkinnedMesh;
  Object_8: SkinnedMesh;
  Object_9: SkinnedMesh;
  Object_10: SkinnedMesh;
  Object_11: SkinnedMesh;
};

type FoxModelMaterials = {
  PaletteMaterial001: Material;
};

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export function Fox({ currentAnimation, ...props }: FoxProps) {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(scene);
  const modelNodes = nodes as typeof nodes & FoxModelNodes;
  const modelMaterials = materials as typeof materials & FoxModelMaterials;
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={modelNodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name='Object_7'
          geometry={modelNodes.Object_7.geometry}
          material={modelMaterials.PaletteMaterial001}
          skeleton={modelNodes.Object_7.skeleton}
        />
        <skinnedMesh
          name='Object_8'
          geometry={modelNodes.Object_8.geometry}
          material={modelMaterials.PaletteMaterial001}
          skeleton={modelNodes.Object_8.skeleton}
        />
        <skinnedMesh
          name='Object_9'
          geometry={modelNodes.Object_9.geometry}
          material={modelMaterials.PaletteMaterial001}
          skeleton={modelNodes.Object_9.skeleton}
        />
        <skinnedMesh
          name='Object_10'
          geometry={modelNodes.Object_10.geometry}
          material={modelMaterials.PaletteMaterial001}
          skeleton={modelNodes.Object_10.skeleton}
        />
        <skinnedMesh
          name='Object_11'
          geometry={modelNodes.Object_11.geometry}
          material={modelMaterials.PaletteMaterial001}
          skeleton={modelNodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scene);
