import fireStructure from "./fire-structure.js";
import renderFire from "./render-fire.js";

export default function fireEffect(document) {
  const { state } = fireStructure();
  const { firePixelsArray, fireWidth, fireHeight } = state;

  function createFireSource() {
    for (let column = 0; column <= fireWidth; column++) {
      const overflowPixelIndex = fireWidth * fireHeight;
      const pixelIndex = overflowPixelIndex - fireWidth + column;

      firePixelsArray[pixelIndex] = 36;
    }
  }

  function calculateFirePropagation() {
    for (let column = 0; column < fireWidth; column++) {
      for (let row = 0; row < fireHeight; row++) {
        const pixelIndex = column + fireWidth * row;

        updateFireIntensityPerPixel(pixelIndex);
      }
    }

    renderFire({ document, state });
  }

  function updateFireIntensityPerPixel(currentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fireWidth;

    if (belowPixelIndex >= fireWidth * fireHeight) return;

    const decay = Math.floor(Math.random() * 3);
    const belowPixelFireIntensity = firePixelsArray[belowPixelIndex];
    const newFireIntensity =
      belowPixelFireIntensity - decay >= 0
        ? belowPixelFireIntensity - decay
        : 0;

    firePixelsArray[currentPixelIndex - decay] = newFireIntensity;
  }

  return {
    createFireSource,
    calculateFirePropagation,
  };
}
