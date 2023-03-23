const minWidth = 240;

const setupEdge = () => {
  // SETUP DRAGGABLE EDGE
  // add edge to property panel
  const propertyPanel = document.querySelector('div[name="propertiesPanelContainer"');
  const edge = document.createElement("div");
  edge.classList.add("property_panel--edge");
  propertyPanel.appendChild(edge);

  // add event listener to edge div
  edge.addEventListener("mousedown", function (e) {
    // get the current width of the property panel
    const width = propertyPanel.offsetWidth;
    // get the current mouse position
    const startX = e.clientX;
    // add event listeners
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);

    // mousemove event handler
    function mouseMove(e) {
      // get the new mouse position
      const x = e.clientX;
      // calculate the new width
      const newWidth = width - (x - startX);

      // set the new width
      if (newWidth <= minWidth) {
        setPanelWidth(minWidth);
      } else {
        setPanelWidth(newWidth);
      }
    }

    // mouseup event handler
    function mouseUp(e) {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    }
  });
};

// wait for the property panel to be added to the DOM
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        if (mutation.addedNodes[i].nodeType === 1) {
          if (mutation.addedNodes[i].getAttribute("name") === "propertiesPanelContainer") {
            // call the setupEdge function
            setupEdge();
            // stop observing the DOM
            observer.disconnect();
          }
        }
      }
    }
  });
});

// start observing the DOM
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

const setPanelWidth = (width) => {
  // set the style attribute of :root to override the styles.css value for --ptwidth
  document.documentElement.style.setProperty("--properties-panel-width", width + "px");
};

// LISTEN FOR MESSAGES FROM POPUP
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   // check to see if the message received is something that needs to be acted on
//   if (request.message === "set-property-panel-width") {
//     // pull the width data from the message
//     setPanelWidth(request.value);
//   }
//   // send a response to avoid errors in popup.js
//   sendResponse("Width updated");
// });
