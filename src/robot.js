const _ = require('lodash');
const instruction = require('./instruction');
const planet = require('./planet');

const nextPosition = (commands, position, index) =>
  instruction.movesList(commands[index], position);

const endPosition = (position, scents, lost) => ({ ...position, lost, scents });

const endOfList = commands => _.size(commands) === 0;

const lost = (scents, previousPosition) => {
  const newScents = planet.scents(scents, previousPosition);
  return endPosition(previousPosition, newScents, true);
};

const notInBounds = (bounds, position) => !planet.inBounds(bounds, position);

const skipMove = (scents, position) => planet.scentsMatch(scents, position);

const move = (position, commands, bounds, scents, previousPosition) => {
  if (endOfList(commands)) {
    return endPosition(position, scents, false);
  }
  if (skipMove(scents, position)) {
    const skippedMove = nextPosition(commands, position, 1);
    return move(skippedMove, _.drop(commands, 2), bounds, scents, position);
  }
  if (notInBounds(bounds, position)) {
    return lost(scents, previousPosition);
  }
  const nextMove = nextPosition(commands, position, 0);
  return move(nextMove, _.drop(commands), bounds, scents, position);
};

const executeMoves = (instructions, bounds, scents, previousPosition) =>
  move(instructions.position, instructions.commands, bounds, scents, previousPosition);

const runInstructions = (instructions, bounds, scents, result) => {
  if (endOfList(instructions)) {
    return result;
  }
  const next = executeMoves(instructions[0], bounds, scents, {});
  const position = _.pick(next, ['orientation', 'lost', 'xCoordinate', 'yCoordinate']);
  const newResult = [...result, position];
  return runInstructions(_.drop(instructions), bounds, next.scents, newResult);
};

module.exports = {
  executeMoves,
  runInstructions,
};
