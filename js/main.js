const panorama = new PANOLENS.ImagePanorama( 'images/aitgate.jpeg' );
const panorama2 = new PANOLENS.ImagePanorama('images/reception.jpeg');
const panorama3 = new PANOLENS.ImagePanorama('images/receptionmid.jpeg');
const panorama4 = new PANOLENS.ImagePanorama('images/parking.jpeg');
const panorama5 = new PANOLENS.ImagePanorama('images/leftentry.jpeg');
const panorama6 = new PANOLENS.ImagePanorama('images/acadcentre.jpeg');
const panorama7 = new PANOLENS.ImagePanorama('images/towardsoac.jpeg');
const panorama8 = new PANOLENS.ImagePanorama('images/xerox.jpeg');
const panorama9 = new PANOLENS.ImagePanorama('images/oactree.jpeg');
const panorama10 = new PANOLENS.ImagePanorama('images/oac.jpeg');
const panorama11 = new PANOLENS.ImagePanorama('images/trial.jpeg');
let imageContainer = document.querySelector('.image-container');


var infospotPositions = [
    new THREE.Vector3(2500.386,50.669,200),
    new THREE.Vector3(1681.414, -4000.661, -985.730),  
    new THREE.Vector3(-2136, 16, 890), 
    new THREE.Vector3(-1500, 30, 890), //parking right
    new THREE.Vector3(1676.9529786428825, 5800.410002336587, 2032.907649701389),
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

panorama.link( panorama2, infospotPositions[0]); //ait to recp
panorama2.link( panorama3, infospotPositions[1]); //recp to recpmid
panorama3.link( panorama2 , infospotPositions[1]); //recpmid to recp
panorama3.link( panorama4 ,infospotPositions[3] ); //recpmid to park
panorama4.link( panorama3 ,infospotPositions[1]);
panorama3.link(panorama5 , infospotPositions[2]); //mid to left entry
panorama5.link(panorama6, infospotPositions[1] ); //leftentry to acadc
panorama5.link(panorama7 , infospotPositions[0]);//leftentry to xeroxmid
panorama7.link( panorama5 , infospotPositions[2]);//xeroxmid to left
panorama7.link(panorama8 , infospotPositions[1]);//xeroxmid to xerox
panorama8.link(panorama7 , infospotPositions[1]);//xerox to xeroxmid
panorama8.link(panorama9 , infospotPositions[0]);//xerox to oactree
panorama9.link( panorama8, infospotPositions[1]);//oactree to xerox
panorama9.link( panorama10 ,  infospotPositions[0]);//oactree to oac
panorama10.link(panorama9,infospotPositions[1]);

//hello

panorama.link(panorama11 , infospotPositions[1] );
panorama11.link(panorama,infospotPositions[4]);
viewer.add( panorama,panorama2,panorama3,panorama4,panorama5,panorama6 ,panorama7,panorama8,panorama9,panorama10,panorama11);

//To enable the rotation according to the orientation
let currentQuaternion = new THREE.Quaternion(); // Holds the current rotation
let targetQuaternion = new THREE.Quaternion(); // Target rotation quaternion
let needsUpdate = false; // Flag to indicate if an update is required

const dampingFactor = 0.1; // Controls the smoothness of the rotation (lower value = smoother)
const threshold = 0.001; // Minimum change required to trigger an update

// Function to handle device orientation and calculate the rotation
function handleOrientationEvent(event) {
  const alpha = event.alpha ? THREE.Math.degToRad(event.alpha) : 0;
  const beta = event.beta ? THREE.Math.degToRad(event.beta) : 0;
  const gamma = event.gamma ? THREE.Math.degToRad(event.gamma) : 0;

  // Create a quaternion based on the current orientation
  const newQuaternion = new THREE.Quaternion();
  newQuaternion.setFromEuler(new THREE.Euler(beta, alpha, -gamma, 'YXZ'));

  // Set the target rotation quaternion
  targetQuaternion.copy(newQuaternion);

  // Trigger an update if the rotation change is significant
  if (currentQuaternion.angleTo(targetQuaternion) > threshold) {
    needsUpdate = true;
  }
}

// Event listener to capture device orientation changes
window.addEventListener('deviceorientation', (event) => {
  handleOrientationEvent(event);
}, true);

// Function to animate and apply smooth rotation
function animate() {
  requestAnimationFrame(animate);

  if (needsUpdate) {
    // Smoothly interpolate between the current and target rotations
    THREE.Quaternion.slerp(currentQuaternion, targetQuaternion, currentQuaternion, dampingFactor);

    // Apply the interpolated rotation to the panorama
    panorama.rotation.setFromQuaternion(currentQuaternion);

    // Stop updating if the change is minimal
    if (currentQuaternion.angleTo(targetQuaternion) < threshold) {
      needsUpdate = false;
    }
  }
}

// Start the animation loop
animate();







