// SEND FOR MESSAGE TO INJECT SCRIPT
// var slider = document.getElementById("slider");
// var output = document.getElementById("value-preview");
// output.innerHTML = slider.value + "px";

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function () {
//   const width = this.value;
//   output.innerHTML = width + "px";

//   console.log("input value: ", width);

//   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { message: "set-property-panel-width", value: width });
//   });
// };
