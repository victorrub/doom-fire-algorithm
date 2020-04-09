import fireStructure from "./fire-structure.js";
import fireEffect from "./fire-effect.js";

const { createFireDataStructure } = fireStructure();
const { createFireSource, calculateFirePropagation } = fireEffect(document);

function start() {
  createFireDataStructure();
  createFireSource();

  setInterval(calculateFirePropagation, 50);
}

start();
