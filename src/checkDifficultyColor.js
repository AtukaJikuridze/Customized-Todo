export const checkDifficultyColor = (colorName) => {
  let correctColor;
  switch (colorName) {
    case "Hard":
      correctColor = "#ff0000";
      break;
    case "Medium":
      correctColor = "#ffff00";
      break;
    case "Easy":
      correctColor = "#00ff00";
      break;
    case "Light":
      correctColor = "#4169e1";
      break;
  }
  return correctColor;
};
