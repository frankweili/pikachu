const string = `
.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
.skin *::before,
 .skin *::after {
    box-sizing: border-box;
 }
 .skin {
    background-color: #ffe600;
    width: 100%;
    height: 100vh;
    position: relative;
 }
 .nose {
    border: 10px red solid;
    border-color: black transparent transparent;
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -10px;
 }
 .yuan {
    position: absolute;
 
    background-color: black;
    top: -18px;
    width: 20px;
    height: 8px;
    margin-left: -10px;
    border-radius: 20px 20px 0 0;
 }
 .eye {
   border: 1px black solid;
   position: absolute;
   border-radius: 50%;
   background-color: #2e2e2e;
   width: 64px;
   height: 64px;
   left: 50%;
   top: 150px;
   margin-left: -32px;
 }
 .eye::before {
   content: "";
   background-color: #fff;
   display: inline-block;
   border-radius: 50%;
   width: 30px;
   height: 30px;
   position: absolute;
   left: 10px;
   top: 5px;
 }
 .left {
   transform: translateX(-100px);
 }
 .right {
   transform: translateX(100px);
 }
 .mouth {
   position: relative;
 
   width: 200px;
   height: 200px;
   left: 50%;
   top: 220px;
   margin-left: -100px;
   overflow: hidden;
 }
 .lip {
   background-color: #ffe600;
   border: 3px black solid;
   width: 100px;
   height: 33px;
   border-top-color: transparent;
   z-index: 1;
 }
 .le {
   position: absolute;
   border-right-color: transparent;
   left: 3px;
   top: -5px;
   border-radius: 0 0 0 30px;
   transform: rotate(-15deg);
 }
 .ri {
   position: absolute;
   right: 3px;
   top: -4px;
   border-left-color: transparent;
   border-radius: 0 0 30px 0;
   transform: rotate(15deg);
 }
 .bottom {
   position: absolute;
   border: 2px solid black;
   width: 120px;
   height: 500px;
   bottom: 0;
   margin-left: 50%;
   transform: translate(-60px);
   border-radius: 60px/200px;
   background-color: #9b000a;
   overflow: hidden;
 }
 .yuan1 {
   position: absolute;
 
   background-color: #ff485f;
   width: 180px;
   height: 180px;
   bottom: 0;
   border-radius: 50%;
   margin-left: 50%;
   transform: translate(-90px);
 }
 .face {
   border: 2px solid black;
   background-color: red;
   position: absolute;
   left: 50%;
   top: 300px;
   border-radius: 50%;
 
   width: 100px;
   height: 100px;
 }
 .face.left {
   margin-left: -100px;
 }
 @keyframes wave {
   0% {
     transform: rotate(0deg);
   }
   33% {
     transform: rotate(15deg);
   }
   66% {
     transform: rotate(-15deg);
   }
   100% {
     transform: rotate(15deg);
   }
 }
 .nose:hover {
   transform: center bottom;
   animation: wave 300ms infinite;
 }
 .face > img {
   position: relative;
   top: 50%;
   left: 50%;
 }
 .face.left > img {
   transform-origin: 0 0;
   transform: rotateY(180deg);
 }
 `;
export default string; //模块化
