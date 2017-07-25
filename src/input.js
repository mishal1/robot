const _ = require('lodash');

const seperate = (string, seperator) => string.split(seperator);

const getBounds = (string) => {
  const [maxX, maxY] = _.map(seperate(string, ''), Number);
  return { maxX, maxY };
};

const instruction = (xCoordinate, yCoordinate, orientation, commands) => ({
  position: {
    xCoordinate: Number(xCoordinate),
    yCoordinate: Number(yCoordinate),
    orientation,
  },
  commands,
});

const seperateByCharacters = instructions => seperate(instructions, '');

const create = (couple) => {
  const seperated = couple.map(seperateByCharacters);
  const [xCoordinate, yCoordinate, orientation] = seperated[0];
  return instruction(xCoordinate, yCoordinate, orientation, seperated[1]);
};

const formInstructions = instructions => instructions.map(create);

const splitIntoPairs = instructions => _.chunk(instructions, 2);

const getInstructions = _.flow([
  _.drop,
  splitIntoPairs,
  formInstructions,
]);

const removeSpaces = instructions => seperate(instructions, ' ').join('');

const seperateByIndent = instructions => seperate(instructions, '\n');

const formatData = _.flow([
  removeSpaces,
  seperateByIndent,
  _.compact,
]);

const formatInputData = (input) => {
  const formattedData = formatData(input);
  const bounds = getBounds(formattedData[0]);
  const instructions = getInstructions(formattedData);
  return { bounds, instructions };
};

module.exports = {
  getBounds,
  getInstructions,
  formatInputData,
};
