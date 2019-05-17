import React, { Component } from "react";
import * as THREE from "three";
import OBJLoader from "three-obj-loader-es6-module";
import MTLLoader from "three-react-mtl-loader";
import OrbitControls from "three-orbitcontrols";

let renderer;
let camera;
let scene;
let pieceObject;
var actualRow = 0;
var targetPositionZ = -3;
class Scene extends Component {
  componentDidMount() {
    this.setupScene();
  }

  setupScene = () => {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);

    scene = new THREE.Scene();
    scene.background = new THREE.Color("grey");

    camera = new THREE.PerspectiveCamera(60, this.width / this.height, 1, 1000);
    camera.position.x = 8;
    camera.position.y = 8;
    scene.add(camera);
    this.renderer = renderer;

    let gameBoard = new MTLLoader();
    gameBoard.load("../../assets/gameBoard3D/gameBoard.mtl", materials => {
      materials.preload();

      let gameBoardObj = new OBJLoader();
      gameBoardObj.setMaterials(materials);

      gameBoardObj.load("/assets/gameBoard3D/gameBoard.obj", object => {
        scene.add(object);
      });
    });

    let pieceloader = new MTLLoader();
    pieceloader.load("../../assets/gameBoard3D/WoodenLarry.mtl", materials => {
      materials.preload();

      let piece = new OBJLoader();
      piece.setMaterials(materials);

      piece.load("/assets/gameBoard3D/WoodenLarry.obj", object => {
        scene.add(object);
        pieceObject = object;
        pieceObject.position.x = -4;
        pieceObject.position.z = 3;
      });
    });
    this.container.appendChild(this.renderer.domElement);

    // LIGHTS;
    var directionalLight = new THREE.DirectionalLight(0xe6ffe6, 2.5);
    directionalLight.position.y = 20;
    directionalLight.position.x = 20;

    scene.add(directionalLight);
    scene.add(camera);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 20;
    this.animate();

    window.addEventListener("resize", this.onWindowResize, false);
    this.onWindowResize();
  };
  onWindowResize = () => {
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  goRight = () => {
    if (pieceObject && pieceObject.position.z >= targetPositionZ) {
      pieceObject.position.z -= 0.1;
    }
  };
  // goLeft = () => {
  //   if (pieceObject && pieceObject.position.z >= targetPositionZ) {
  //     pieceObject.position.z += 0.1;
  //   }
  // };
  movePiece = () => {
    // if (pieceObject === targetPositionZ) {
    //   this.goLeft();
    // } else {
    //   this.goRight();
    // }
    this.goRight();
  };
  animate = () => {
    this.renderScene();
    this.movePiece();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    renderer.render(scene, camera);
  };

  render() {
    const width = "100%";
    const height = "100%";
    return (
      <div
        ref={container => {
          this.container = container;
        }}
        style={{
          width: width,
          height: height,
          position: "absolute",
          overflow: "hidden"
        }}
      />
    );
  }
}

export default Scene;
