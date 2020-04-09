export default function renderFire({ document, state }) {
  const screen = document.querySelector("#screen");
  const context = screen.getContext("2d");

  screen.height = state.fireHeight;
  screen.width = state.fireWidth;

  context.clearRect(0, 0, state.fireHeight, state.fireWidth);

  for (let row = 0; row < state.fireHeight; row++) {
    for (let cell = 0; cell < state.fireWidth; cell++) {
      const pixelIndex = cell + state.fireWidth * row;
      const fireIntensity = state.firePixelsArray[pixelIndex];

      const color = state.fireColorsPalette[fireIntensity];

      if (!color) return;

      const colorString = `${color.r},${color.g},${color.b}`;
      context.fillStyle = `rgb(${colorString})`;
      context.fillRect(cell, row, 1, 1);
    }
  }
}
