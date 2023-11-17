import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// import Stats from "stats.js";

const SEPARATION = 120;
const AMOUNTX = 300;
const AMOUNTY = 70;

const WaveAnimation = () => {
  let container = useRef(null);
  let camera, scene, renderer;
  let particles = [];
  let count = 20;
  let particle;

  useEffect(() => {
    init();
    animate();

    return () => {
      // Clean up resources (if needed)
      container.current.removeChild(renderer.domElement);
    };
  }, []);

  // Reset count when the component mounts
  useEffect(() => {
    count = 0;
  }, []);

  function init() {
    container.current = document.getElementById("animation-container");

    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 10000;

    scene = new THREE.Scene();

    particles = new Array();

    const PI2 = Math.PI * 2;
    const material = new THREE.SpriteMaterial({ color: 0xffffff });

    let i = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        particle = particles[i++] = new THREE.Sprite(material);
        particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        scene.add(particle);
      }
    }

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.current.appendChild(renderer.domElement);

    // const stats = new Stats();
    // stats.domElement.style.position = "absolute";
    // stats.domElement.style.top = "0px";
    // container.current.appendChild(stats.domElement);

    window.addEventListener("resize", onWindowResize, false);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
    // stats.update(); // Stats.js is not included in the provided code
  }

  function render() {
    // Replace the following line:
    camera.position.set(0, 355, 122);

    // With this line:
    camera.position.set(0, 710, 122);

    let i = 0;

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        particle = particles[i++];
        particle.position.y =
          Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
        particle.scale.x = particle.scale.y =
          (Math.sin((ix + count) * 0.3) + 1) * 4 +
          (Math.sin((iy + count) * 0.5) + 1) * 4;
      }
    }

    renderer.render(scene, camera);

    count += 0.1;
  }

  return <div id="animation-container" />;
};

export default WaveAnimation;
