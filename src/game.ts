import * as BABYLON from 'babylonjs'

const canvas = document.getElementById('renderCanvas')


const engine = new BABYLON.Engine(canvas, true);


const createScene = function (): BABYLON.Scene {

  // Now create a basic Babylon Scene object
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0, 1, 0, 0);
  const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, false);

  const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

  light.intensity = .5;


  const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);

  sphere.position.y = 1;
  const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

  return scene;
};
