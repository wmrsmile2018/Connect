// import React from 'react';
//
// const W_video = () => {
//
//   let a = (e) => {
//     let controls = {
//       video: document.getElementById("myvideo"),
//       playpause: document.getElementById("controls")
//     };
//     let video = controls.video;
//     let playpause = controls.playpause;
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause();
//     }
//     console.log(video);
//   }
//
//   return (
//     <div className="W_video">
//       <div>
//           <video id="myvideo" width="480" height="270" poster="poster.gif" >
//               <source src="./test.MOV"/>
//               <source src="./test.MOV"/>
//           </video>
//       </div>
//       <div id="controls">
//           <span id="playpause" class="paused" onClick={a}>Play</span>
//       </div>
//     </div>
//   );
// }
//
// export default W_video;
//
// //
// // $(function() {
// //     $(document).ready(function(){
//
// //       window.a = controls;
// //       var video = controls.video[0];
// //
// //       controls.playpause.click(function(){
// //           if (video.paused) {
// //               video.play();
// //               $(this).text("Pause");
// //           } else {
// //               video.pause();
// //               $(this).text("Play");
// //           }
// //
// //           $(this).toggleClass("paused");
// //       });
// //   });
// // });
