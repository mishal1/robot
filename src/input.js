const _ = require('lodash');

const separate = (string, separator) => string.split(separator);

const getBounds = (string) => {
  const [maxX, maxY] = _.map(separate(string, ''), Number);
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

const separateByCharacters = instructions => separate(instructions, '');

const create = (couple) => {
  const separated = couple.map(separateByCharacters);
  const [xCoordinate, yCoordinate, orientation] = separated[0];
  return instruction(xCoordinate, yCoordinate, orientation, separated[1]);
};

const formInstructions = instructions => instructions.map(create);

const splitIntoPairs = instructions => _.chunk(instructions, 2);

const getInstructions = _.flow([
  _.drop,
  splitIntoPairs,
  formInstructions,
]);

const removeSpaces = instructions => separate(instructions, ' ').join('');

const separateByIndent = instructions => separate(instructions, '\n');

const formatData = _.flow([
  removeSpaces,
  separateByIndent,
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
