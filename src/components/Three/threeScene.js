import React, { Component } from "react";
import * as THREE from "three";
import OBJLoader from "three-obj-loader-es6-module";
import MTLLoader from "three-react-mtl-loader";
import OrbitControls from "three-orbitcontrols";
import { Player } from "./player";
import TWEEN from "@tweenjs/tween.js";
import Cards from "../../containers/CardsContainer";
import Answers from "../../containers/AnswersContainer";
var STLLoader = require("three-stl-loader")(THREE);

let renderer;
let camera;
let scene;
let playersPiecesModel = [{
  mesh: null,
  tween: null
}];
class Scene extends Component {
  componentDidMount() {
    this.setupScene();
    console.log("player", this.props.players);
    console.log("coordinate", this.props.coordinate);
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
        object.scale.z = 0.85;
        object.scale.x = 0.85;
        object.position.x = 3.6;
        object.position.z = -0.5;
      });
    });
    this.props.players.forEach((player, i) => {
      // scene.add(player.model);
      // this.players[i].position.x = player.x;

      
      const pieceLoader = new STLLoader();
      pieceLoader.load("/assets/gameBoard3D/piece.stl", object => {
        var material = new THREE.MeshPhongMaterial({
          color: player.color
        });
        var mesh = new THREE.Mesh(object, material);
        mesh.rotation.x = 4.78;
        playersPiecesModel.push(
          {mesh}
        );
        const piece = new Player(0, i * 0.3, mesh);
        return {...player, piece};
      });
    });

    this.container.appendChild(this.renderer.domElement);
    // var axesHelper = new THREE.AxesHelper(50);
    // var size = 100;
    // var divisions = 100;

    // var gridHelper = new THREE.GridHelper(size, divisions);
    // gridHelper.position.y = 0.1;
    // scene.add(gridHelper);
    // scene.add(axesHelper);
    // LIGHTS;
    var directionalLight = new THREE.DirectionalLight(0xe6ffe6, 2.5);
    directionalLight.position.y = 20;
    directionalLight.position.x = 20;

    scene.add(directionalLight);
    scene.add(camera);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
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
  animate = time => {
    TWEEN.update(time);
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    renderer.render(scene, camera);
  };

  render() {
    const width = "100%";
    const height = "100%";
    return (
      <div>
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
        <Cards />
        <Answers/>
      </div>
    );
  }
}

export default Scene;
