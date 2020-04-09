import fireColorsPalette from "./fire-colors-palette.js";

export default function fireStructure() {
  const state = {
    firePixelsArray: [],
    fireWidth: 40,
    fireHeight: 40,
    fireColorsPalette,
  };

  function createFireDataStructure() {
    const numberOfPixels = state.fireWidth * state.fireHeight;
    state.firePixelsArray = new Array(numberOfPixels).fill(0);
  }

  return {
    state,
    createFireDataStructure,
  };
}
