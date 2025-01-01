"use client"

import { useEffect } from "react"
import * as three from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

export default function Skull() {
  useEffect(() => {
    const scene = new three.Scene()
    scene.background = new three.Color(0xffffff)

    const camera = new three.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      1,
      1000,
    )
    camera.position.z = 2.5

    const renderer = new three.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.getElementById("three")!.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)

    const loader = new GLTFLoader()
    loader.load("/scene.gltf", (gltf) => scene.add(gltf.scene))

    const up = new three.DirectionalLight()
    const down = new three.DirectionalLight()

    up.position.set(0, 1, 0)
    down.position.set(0, -1, 0)

    scene.add(up)
    // scene.add(down)

    const animate = () => {
      requestAnimationFrame(animate)

      renderer.render(scene, camera)
      controls.update()
    }

    animate()
  }, [])

  return <div id="three"></div>
}
