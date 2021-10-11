let scene, camera, renderer;

let cylinder;
let createObject = function() {
    let geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 20);
    // let material = new THREE.MeshBasicMaterial({color: #0xffff00});
    let material = new THEE.MeshLambertMaterial({
        
    })
}

// set up the environment - 
// initiallize scene, camera, objects and renderer
let init = function () {
    // 1. create the scene
    // ...

    // 2. create an locate the camera       
    // ...

    // 3. create an locate the object on the scene           
    // ...

    // 4. create the renderer     
    // ...

};


// main animation loop - calls 50-60 in a second.
let mainLoop = function () {
    renderer.render(scene, camera);
    requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();