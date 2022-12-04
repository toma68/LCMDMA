<template>
  <v-row>
    <v-col cols="8">
      <canvas id="map-canvas" width="800%" height="600%" style="border:1px solid #d3d3d3;">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "InteractiveMap",
  mounted() {

    //function to get the mouse position
    function getMousePos(canvas, evt) {
      let rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }

    //function to draw the map
    let canvas = document.getElementById("map-canvas");
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "images/carteLCMDMAv1.png";
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };// canvas hover event
    canvas.addEventListener("mousemove", function (evt) {
      let mousePos = getMousePos(canvas, evt);
      interprateMousePos(mousePos);
    }, false);
    //click listener
    canvas.addEventListener("click", function (evt) {
      let mousePos = getMousePos(canvas, evt);
      console.log(mousePos);
      }, false);

    //function to interprate the mouse position
    function interprateMousePos(mousePos) {
      //if the mouse is on a specific polygon area, change color of the area
      if (mousePos.x>367 && mousePos.x<429 && mousePos.y>240 && mousePos.y<283) {
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.beginPath();
        ctx.moveTo(382, 235);
        ctx.lineTo(367, 269);
        ctx.lineTo(418, 280);
        ctx.lineTo(432, 242);
        ctx.fill();
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        }
    }
  }
}
</script>

<style scoped>
canvas{
  z-index: 100;
}
</style>