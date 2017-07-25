const forward = (current) => {
  const forwardXCoordinate = { N: 0, E: 1, S: 0, W: -1 };
  const forwardYCoordinate = { N: 1, E: 0, S: -1, W: 0 };
  return {
    xCoordinate: current.xCoordinate + forwardXCoordinate[current.orientation],
    yCoordinate: current.yCoordinate + forwardYCoordinate[current.orientation],
    orientation: current.orientation,
  };
};

const right = (current) => {
  const rightRules = { N: 'E', E: 'S', S: 'W', W: 'N' };
  return {
    xCoordinate: current.xCoordinate,
    yCoordinate: current.yCoordinate,
    orientation: rightRules[current.orientation],
  };
};

const left = (current) => {
  const leftRules = { N: 'W', W: 'S', S: 'E', E: 'N' };
  return {
    xCoordinate: current.xCoordinate,
    yCoordinate: current.yCoordinate,
    orientation: leftRules[current.orientation],
  };
};

const invalidInstruction = (command) => {
  throw new Error(`Invalid instruction: ${command}`);
};

const movesList = (command, position) => {
  const moves = {
    F: forward,
    R: right,
    L: left,
  };
  return moves[command] ? moves[command](position) : invalidInstruction(command);
};

const validLength = instructions => instructions.length <= 100;

module.exports = {
  forward,
  right,
  left,
  movesList,
  validLength,
};
