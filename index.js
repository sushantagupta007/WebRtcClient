console.log("hello ");

//First make a constraint variable

let constrainsts = { video: true, audio: true };

navigator.mediaDevices
  .getUserMedia(constrainsts)
  .then((stream) => {
    //Here stram can be conveted to file
    let video = document.querySelector("video");
    video.srcObject = stream;
    video.play();
    console.log(stream);
  }) //Success //Stream
  .catch((err) => {
    console.log(err);
  }); //Not Success

//For sharing Scrren

navigator.mediaDevices
  .getDisplayMedia(constrainsts)
  .then((media) => {
    let video = document.querySelector("video");
    video.srcObject = media;
    video.play();
    console.log(video);
  })
  .catch();

//Capture Media Devices

navigator.mediaDevices
  .enumerateDevices()
  .then((devices) => {
    //Here stram can be conveted to file

    console.log(devices);
  }) //Success //Stream
  .catch((err) => {
    console.log(err);
  }); //Not Success

//Connection WebRTC using JS
//Different language implementation of JS
//Among them
//WebRTC JS library = peer Js

//To implement webrtc in browser we use peer js
// It is easy.
