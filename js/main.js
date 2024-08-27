const aitgate = new PANOLENS.ImagePanorama( 'images/aitgate.jpeg' );
const reception = new PANOLENS.ImagePanorama('images/reception.jpeg');
const receptionmid = new PANOLENS.ImagePanorama('images/receptionmid.jpeg');
const parking = new PANOLENS.ImagePanorama('images/parking.jpeg');
const leftentry = new PANOLENS.ImagePanorama('images/leftentry.jpeg');
const acadcentre = new PANOLENS.ImagePanorama('images/acadcentre.jpeg');
const towardsoac = new PANOLENS.ImagePanorama('images/towardsoac.jpeg');
const xerox = new PANOLENS.ImagePanorama('images/xerox.jpeg');
const oactree = new PANOLENS.ImagePanorama('images/oactree.jpeg');
const mgstart = new PANOLENS.ImagePanorama('images/mgstart.jpeg');
const rightentry = new PANOLENS.ImagePanorama('images/rightentry.jpeg');
const basketball = new PANOLENS.ImagePanorama('images/basketball.jpeg');
const obhturn = new PANOLENS.ImagePanorama('images/obhturn.jpeg');
const aryabhattamid = new PANOLENS.ImagePanorama('images/aryabhattamidle.jpeg');
let imageContainer = document.querySelector('.image-container');


var infospotPositions = [
    new THREE.Vector3(2500.386,50.669,200),
    new THREE.Vector3(1000, -50, -100), //recp to gate
    new THREE.Vector3(-2136, 16, -300), //recp to recpmid 2
    new THREE.Vector3(-3000,-300,-4000),//recpmid to recp 3
    new THREE.Vector3(3000,-300,-100),//recpmid to parking 4
    new THREE.Vector3(3000,-300,4000),//recpmid to leftentry 5
    new THREE.Vector3(-4000.386,100,-1700),//park to recpmid 6
    new THREE.Vector3(-500,-500,-3000),//leftentry to rightentry 7
    new THREE.Vector3(5000,-500,-50),//left entry to recptmid 8
    new THREE.Vector3(-2000,-100,3000),//lentry towards oac 9
    new THREE.Vector3(-2000,-100,50),//acadcentre to lentry 10
    new THREE.Vector3(1000,-100,50),//acadcentre to xerox 11
    new THREE.Vector3(-2000,100,-50),//xerox to towardsgate 12
    new THREE.Vector3(2500.386,50.669,200),//xerox to oac 13
    new THREE.Vector3(1000,-100,-1500),//oactree to xerox 14
    new THREE.Vector3(-1000,-100,1000),//oactree to oac 15
    new THREE.Vector3(-4000.386,100,-1400),//mgstart to oactree 16
    new THREE.Vector3(4000.386,10,0),//mgstart to mg road 17
    new THREE.Vector3(-1200.386,100,3000),//mgstart to aryabhatta 18
    new THREE.Vector3(600.386,100,-3000),//BB to mgstart 19
    new THREE.Vector3(200.386,100,5000),//BB to thapa shop 20
    new THREE.Vector3(-4000.386,100,-100),//obht to thapa 21
    new THREE.Vector3(4000.386,100,0 ),//obht to BB 22
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),
    new THREE.Vector3(-3000,-300,-4000),

    
  ];

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: false,
    autoRotateSpeed: 0.3,
    controlBar: true,
});

aitgate.link( reception, infospotPositions[0]); //ait to recp
reception.link( aitgate , infospotPositions[1] ); //recp to ait
reception.link( receptionmid, infospotPositions[2]); //recp to recpmid
receptionmid.link( reception , infospotPositions[3]); //recpmid to recp
receptionmid.link( parking ,infospotPositions[4] ); //recpmid to park
parking.link( receptionmid ,infospotPositions[6]);
receptionmid.link(leftentry , infospotPositions[5]); //mid to left entry
//left entry

leftentry.link(receptionmid, infospotPositions[6]);//lentry to recpmid
leftentry.link(rightentry, infospotPositions[7] );//lentry to rentry
leftentry.link(towardsoac , infospotPositions[9]);//leftentry to xeroxmid
//towards OAC

towardsoac.link( leftentry , infospotPositions[10]);//xeroxmid to left
towardsoac.link(xerox , infospotPositions[11]);//xeroxmid to xerox

//xerox

xerox.link(towardsoac , infospotPositions[12]);//xerox to xeroxmid
xerox.link(oactree , infospotPositions[13]);//xerox to oactree

//oactree
oactree.link( xerox, infospotPositions[14]);//oactree to xerox
oactree.link( mgstart ,  infospotPositions[15]);//oactree to oac


//oac

mgstart.link(oactree,infospotPositions[16]);//mg start to oactree
mgstart.link(basketball , infospotPositions[17]);//mgstart to BB
mgstart.link(aryabhattamid ,infospotPositions[18]);//mgstart to aryabhatta

//basktetball
basketball.link( mgstart , infospotPositions[19]);//BB to mgstart
basketball.link( obhturn , infospotPositions[20]);//BB to obh turn

//obh turn
// obhturn.link(thapa , infospotPositions[21]);//obhturn to thapa
obhturn.link(basketball , infospotPositions[22]);//obh turn to BB

//

viewer.add( aitgate,reception,receptionmid,parking,leftentry,acadcentre ,towardsoac,xerox,oactree,mgstart,rightentry,obhturn,basketball,aryabhattamid);









// let currentQuaternion = new THREE.Quaternion(); // Holds the current rotation
// let targetQuaternion = new THREE.Quaternion(); // Target rotation quaternion
// let needsUpdate = false; // Flag to indicate if an update is required

// const dampingFactor = 0.1; // Controls the smoothness of the rotation (lower value = smoother)
// const threshold = 0.001; // Minimum change required to trigger an update

// // Function to handle device orientation and calculate the rotation
// function handleOrientationEvent(event) {
//   const alpha = event.alpha ? THREE.Math.degToRad(event.alpha) : 0;
//   const beta = event.beta ? THREE.Math.degToRad(event.beta) : 0;
//   const gamma = event.gamma ? THREE.Math.degToRad(event.gamma) : 0;

//   // Create a quaternion based on the current orientation
//   const newQuaternion = new THREE.Quaternion();
//   newQuaternion.setFromEuler(new THREE.Euler(beta, alpha, -gamma, 'YXZ'));

//   // Set the target rotation quaternion
//   targetQuaternion.copy(newQuaternion);

//   // Trigger an update if the rotation change is significant
//   if (currentQuaternion.angleTo(targetQuaternion) > threshold) {
//     needsUpdate = true;
//   }
// }

// // Event listener to capture device orientation changes
// window.addEventListener('deviceorientation', (event) => {
//   handleOrientationEvent(event);
// }, true);

// // Function to animate and apply smooth rotation
// function animate() {
//   requestAnimationFrame(animate);

//   if (needsUpdate) {
//     // Smoothly interpolate between the current and target rotations
//     THREE.Quaternion.slerp(currentQuaternion, targetQuaternion, currentQuaternion, dampingFactor);

//     // Apply the interpolated rotation to the aitgate
//     aitgate.rotation.setFromQuaternion(currentQuaternion);

//     // Stop updating if the change is minimal
//     if (currentQuaternion.angleTo(targetQuaternion) < threshold) {
//       needsUpdate = false;
//     }
//   }
// }

// // Start the animation loop
// animate();
