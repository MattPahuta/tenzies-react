import { DICE_ARRAY_LENGTH, DIE_SIDE_COUNT } from "./constants";

// Generate a new die object
export const generateNewDie = () => {
  return {
    value: Math.ceil(Math.random() * DIE_SIDE_COUNT),
    isHeld: false,
    id: crypto.randomUUID()
  }
}

// generate an array of die objects
export const generateNewDice = () => [...new Array(DICE_ARRAY_LENGTH)]
  .map(() => generateNewDie());