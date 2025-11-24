// 클릭 시 Sphere + UI 표시
function startAR() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("arSphere").setAttribute("visible", true);
  document.querySelector(".controls").style.display = "block";
}

// 질감 변경
function setTexture(type) {
  const sphere = document.getElementById("arSphere");

  switch(type){
    case "smooth":
      sphere.setAttribute("material",
        "src: #textSmoothColor; " +
        "normalMap: none; roughnessMap: none; metalnessMap: none; displacementMap: none;"
      );
      break;

    case "rough":
      sphere.setAttribute("material",
        "src: #texRoughColor; " +
        "normalMap: none; roughnessMap: none; metalnessMap: none; displacementMap: none;"
      );
      break;

    case "reflect":
      sphere.setAttribute("material",
        "src: #textReflectColor; " +
        "normalMap: #textReflectNormalGL; " +
        "roughnessMap: #textReflectRoughness; " +
        "metalnessMap: #textReflectMetalness; " +
        "displacementMap: #textReflectDisplacement; " +
        "displacementScale: 0.05;"
      );
      break;
  }
}


// noUiSlider 생성 (두 핸들)
var slider = document.getElementById('lightRange');
noUiSlider.create(slider, {
  start: [0.5, 2],
  connect: true,
  range: { min: 0, max: 3 },
  step: 0.1
});

slider.noUiSlider.on('update', function(values){
  const light = document.getElementById("sceneLight");
  const intensity = (parseFloat(values[0]) + parseFloat(values[1])) / 2;
  light.setAttribute("light","intensity", intensity);
});
