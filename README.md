# Figma Properties Panel Drag (Chrome Extension)

This is a Chrome extension that enables click and drag to change the width of the properties panel in Figma.

## How to install

### Installing from the Chrome Web Store

1. Go to the [Chrome Web Store page](https://chrome.google.com/webstore/detail/figma-properties-panel-dr/chikifjmjonijmhkkaomnnmhigbclfio) and click `Add to Chrome`.
2. Now the extension should be installed. 💫

### Installing manually

1. Download the latest package from [the release page](https://github.com/caroillemann/figma-properties-panel-drag/releases). You should download the `figma-properties-panel-drag-chrome-extension.zip`.
2. Unzip the file.
3. Open Chrome and go to `chrome://extensions/`.
4. Enable `Developer mode` in the top right corner.
5. Click `Load unpacked` and select the unzipped folder. Now the extension should be installed. 💫

## How to use

1. Make sure the extension is installed and enabled.
2. Open your file on www.figma.com in Chrome.
3. Hover the edge of the properties panel to start dragging. See the demo below for more information.

## Package files

- `manifest.json` is the manifest file for Chrome extension
- `src/inject` contains `js` and `css` that will be injected on Figma.com
- `src/popup` contains the popup page that will be shown when the extension icon is clicked

## Demo

![demo 1][demo1]
![demo 2][demo2]
![demo 3][demo3]

[demo1]: /docs/demo1.png "hover the edge of the properties panel to start dragging"
[demo2]: /docs/demo2.png "drag to the desired width"
[demo3]: /docs/demo3.png "information about the extension"
