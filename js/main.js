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
const rightentrymid = new PANOLENS.ImagePanorama('images/rightentrymid.jpeg');
const kch = new PANOLENS.ImagePanorama('images/kch.jpeg');
const jdhouse = new PANOLENS.ImagePanorama('images/jdhouse.jpeg');
const basketball = new PANOLENS.ImagePanorama('images/basketball.jpeg');
const park = new PANOLENS.ImagePanorama('images/87987.jpeg');
const obhturn = new PANOLENS.ImagePanorama('images/obhturn.jpeg');
const aryabhattamid = new PANOLENS.ImagePanorama('images/aryabhattamidle.jpeg');
const aryabhatta = new PANOLENS.ImagePanorama('images/aryabhatta.jpeg');
const acadright = new PANOLENS.ImagePanorama('images/acadright.jpeg');
const gurbirhostelmid = new PANOLENS.ImagePanorama('images/gurbirhostelmid.jpeg');
const gurbirhostel = new PANOLENS.ImagePanorama('images/gurbirhostel.jpeg');
const newhostel = new PANOLENS.ImagePanorama('images/newhostel.jpeg');
const gym = new PANOLENS.ImagePanorama('images/gym.jpeg');
const squashcourt = new PANOLENS.ImagePanorama('images/squashcourt.jpeg');
const entc = new PANOLENS.ImagePanorama('images/798.jpeg');
const entcmid = new PANOLENS.ImagePanorama( 'images/124.jpeg');
const fc = new PANOLENS.ImagePanorama('images/oac.jpeg');
const juiceshop = new PANOLENS.ImagePanorama('images/juiceshop.jpeg');
const kchgate = new PANOLENS.ImagePanorama('image/kchgate.jpeg');
let imageContainer = document.querySelector('.image-container');


var infospotPositions = [
    new THREE.Vector3(2500.386,50.669,200),
    new THREE.Vector3(1000, -50, -100), //recp to gate
    new THREE.Vector3(-2136, 16, -300), //recp to recpmid 2
    new THREE.Vector3(-3000,-300,-4000),//recpmid to recp 3
    new THREE.Vector3(3000,-300,-100),//recpmid to parking 4
    new THREE.Vector3(800,-200,1000),//recpmid to leftentry 5
    new THREE.Vector3(-4000.386,100,-1700),//park to recpmid 6
    new THREE.Vector3(500,-100,-1000),//leftentry to rightentry 7
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
    new THREE.Vector3(-2500.386,-100,-1700),//nhtl to gym 23
    new THREE.Vector3(-1500,-100,2000),//nhtl to mg 24
    new THREE.Vector3(1000,-100,300),//nhtl to squash 25
    new THREE.Vector3(-4000.386,-100,-1200),//gym to juice 26
    new THREE.Vector3(-4000.386,-100,4000),//gym to fc 27
    new THREE.Vector3(2500,-100,-1000),//gym to nhtl 28
    new THREE.Vector3(4000.386,100,-2000),//js to gym 29
    new THREE.Vector3(-4000.386,100,1500),//fc to gym 30
    new THREE.Vector3(4000.386,100,11000),//fc to js 31
    new THREE.Vector3(2500.386,50,200),//squash to nhtl 32
    new THREE.Vector3(2000.386,100,0),//mid to AB 33
    new THREE.Vector3(-4000.386,100,0),//mid to mgstart 34
    new THREE.Vector3(5000.386,100,500),//Ab to xerox 35
    new THREE.Vector3(-1200.386,100,-2000),//AB to mid 36
    new THREE.Vector3(3200.386,100,7000),//AB to ABmid  37
    new THREE.Vector3(4000.386,100,400),//gmid to AB 38
    new THREE.Vector3(-4000.386,100,1600),//gmid to g 39
    new THREE.Vector3(2000.386,100,400),//g to gmid 40
    new THREE.Vector3(-2500.386,-100,-1700),//rentry to jd 41
    new THREE.Vector3(2000,-500,-100),//rentry to mid 42
    new THREE.Vector3(-1000,-100,1000),//rentry to lentry 43
    new THREE.Vector3(-2500.386,-100,100),//mid to rentry 44
    new THREE.Vector3(3000,-1000,500),//mid to gate 45
    new THREE.Vector3(250.386, 100.669, 1000),//jd to rentry 46
    new THREE.Vector3(-500,-100,-2500),//jd to acad right 47
    new THREE.Vector3(4000.386,100,100),//aright to jd 48
    new THREE.Vector3(700.386,100,4000),//aright to entc 49
    new THREE.Vector3(-3500.386,100,4000),//aright to kch 50
    new THREE.Vector3(+2000.386, -150.669, -300),//mid to entc 51
    new THREE.Vector3(-2000.386, -150.669, -300),//mid to aright 52
    new THREE.Vector3(2500,-100,-50),//entc to park 53
    new THREE.Vector3(-1500,-100,-500),//entc to acad right 54
    new THREE.Vector3(-1500,-100,1500),//entc to kchgate 55
    new THREE.Vector3(-3000.386,100,-700),//park to entc 56
    new THREE.Vector3(500,-100,2000),//kchgate to kch 57
    new THREE.Vector3(2000,-100,-500),//kchgate to soil 58
    new THREE.Vector3(-1000,-100,-50 ),//kchgate to acadright 59
    new THREE.Vector3(-2000.386, 10.669, -300),//kch to kchgate

    
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
obhturn.link(newhostel , infospotPositions[21]);//obhturn to thapa
obhturn.link(basketball , infospotPositions[22]);//obh turn to BB

//new hostel
newhostel.link( gym,infospotPositions[23]);//nhtl to gym
newhostel.link( obhturn,infospotPositions[24]);//nhtl to mg
newhostel.link( squashcourt ,infospotPositions[25]);//nhtl to squashcourt

//squashcourt
squashcourt.link( newhostel , infospotPositions[32]);//squash to nhtl

//gym
gym.link( juiceshop , infospotPositions[26]);//gym to juice shop
gym.link(fc,infospotPositions[27]); //gym to fc
gym.link( newhostel, infospotPositions[28]);//gym to nhtl

//juiceshop
juiceshop.link( gym , infospotPositions[29]);//js to gym

//fc 
fc.link( gym ,infospotPositions[30]);//fc to gym
fc.link( juiceshop, infospotPositions[31]);//fc to juiceshop

//aryabhattamid
aryabhattamid.link( aryabhatta, infospotPositions[33]);//mid to AB
aryabhattamid.link( mgstart , infospotPositions[34]);//mid to mgstart

//aryabhatta
aryabhatta.link(xerox , infospotPositions[35]);//AB to xerox
aryabhatta.link( gurbirhostelmid , infospotPositions[36]);//AB to mid
aryabhatta.link( aryabhattamid,infospotPositions[37]);//AB to ABmid

//gurbirhostel mid
gurbirhostelmid.link(aryabhatta,infospotPositions[38]);//gurbirmid to AB
gurbirhostelmid.link( gurbirhostel, infospotPositions[39]);//gmid to g

//gurbirhostel
gurbirhostel.link( aryabhatta , infospotPositions[40]);//ghostel to gmid

//rightentry
rightentry.link(jdhouse , infospotPositions[41]);//rentry to jdhouse 
rightentry.link( rightentrymid , infospotPositions[42]);//rentry to mid
rightentry.link(leftentry , infospotPositions[43]);//rentry to mid

//rightentrymid
rightentrymid.link(rightentry,infospotPositions[44]);//mid to rentry
rightentrymid.link( aitgate , infospotPositions[45])//mid to gate

//jdhouse
jdhouse.link(rightentry , infospotPositions[46]);//jd to rentry
jdhouse.link(acadright , infospotPositions[47]);//jd to acadright

//acadright
acadright.link(jdhouse,infospotPositions[48]);//jd to acadright
acadright.link( entcmid , infospotPositions[49]);//aright to entc
acadright.link( kchgate , infospotPositions[50]);//aright to kchright

//entc mid
entcmid.link( entc, infospotPositions[51]);//mid to entc
entcmid.link( acadright ,infospotPositions[52]);//entcmid to aright

//entc
entc.link( park , infospotPositions[53]);//entc to park
entc.link( kchgate , infospotPositions[55]);//entc to kchgate
entc.link( entcmid , infospotPositions[54]);//entc to entc mid

//park

park.link(entc,infospotPositions[56]);//park to entc

//kchgate
kchgate.link( kch ,infospotPositions[57]);//kchgate to kch
kchgate.link( entcmid ,infospotPositions[58]);//kchgate to kch
kchgate.link( acadright ,infospotPositions[59]);//kchgate to kch

//kch
kch.link(kchgate,infospotPositions[60]);//kch to kchgate


viewer.add( aitgate,reception,receptionmid,parking,leftentry,acadcentre ,towardsoac,xerox,oactree,mgstart,rightentry,obhturn,basketball,aryabhattamid,rightentrymid,park,aryabhatta,acadright,gurbirhostel,gurbirhostelmid,newhostel,gym,squashcourt,entc,entcmid,juiceshop,fc,kchgate,jdhouse,kch);









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
