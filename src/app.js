import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import * as dat from 'dat.gui';
import CANNON, { Material } from 'cannon'

const container = document.querySelector('.container');
const scene = new THREE.Scene();
const canvas = document.querySelector('.canvas');
const renderer = new THREE.WebGLRenderer({canvas,alpha:true});
let sizes = {
    width:container.clientWidth,
    height:container.clientHeight
}
let camPos = {
    x:0,
    y:0,
    z:3
}
const gui = new dat.GUI();
let debugObject = {

}

  debugObject.depthColor = '#186691';
  debugObject.surfaceColor = '#9bd8ff';



const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,100);
scene.add(camera);
camera.position.set(0,1,7);
renderer.setSize(sizes.width,sizes.height);
window.addEventListener('resize',()=>{
    sizes.width = container.clientWidth;
    sizes.height = container.clientHeight;
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });
  const controls = new OrbitControls(camera,canvas);

  const material= new THREE.ShaderMaterial({
    vertexShader:vertexShader,
    fragmentShader:fragmentShader,
    uniforms:{
      uTime:{value:0}
    },
    wireframe:true
  });

  const sphereMesh = new THREE.Mesh(new THREE.SphereGeometry(2,32,32),material);

  scene.add(sphereMesh);


 

const clock = new THREE.Clock();
let oldElapsedTime;
const tick = ()=>{
    const elapsedTime = clock.getElapsedTime() 
    material.uniforms.uTime.value = elapsedTime;   

    sphereMesh.position.x = Math.sin(elapsedTime*3.0);
    sphereMesh.position.z = Math.cos(elapsedTime*3.0+5.0)+50.0;

    controls.update();
requestAnimationFrame(tick);
renderer.render(scene,camera);
}

tick();
