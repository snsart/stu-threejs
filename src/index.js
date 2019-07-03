var THREE = require('three');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;
camera.lookAt(0,0,0);

/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/

/*var material=new THREE.LineBasicMaterial({color:0x00ffff});
var geometry=new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-1,0,0));
geometry.vertices.push(new THREE.Vector3(0,1,0));
geometry.vertices.push(new THREE.Vector3(1,0,0));
var line=new THREE.Line(geometry,material);
scene.add(line);*/

var geometry = new THREE.PlaneGeometry( 1, 2, 3);
var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
scene.add( plane );

var animate = function () {
	requestAnimationFrame( animate );

	/*cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;*/
	plane.rotation.x+=0.02;
	renderer.render( scene, camera );
};

animate();

