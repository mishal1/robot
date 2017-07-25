const robot = require('../src/robot');

const bounds = { maxX: 5, maxY: 3 };
const lostPosition = { xCoordinate: 3, yCoordinate: 2, orientation: 'N' };
const lostCommands = ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'];
const lostInstructions = { position: lostPosition, commands: lostCommands };
const lostEndResult = {
  xCoordinate: 3,
  yCoordinate: 3,
  orientation: 'N',
  lost: true,
};
const skipPosition = { xCoordinate: 0, yCoordinate: 3, orientation: 'W' };
const skipCommands = ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'];
const skipInstructions = { position: skipPosition, commands: skipCommands };
const skipEndResult = {
  xCoordinate: 2,
  yCoordinate: 3,
  orientation: 'S',
  lost: false,
};


test('can get end position', () => {
  const position = { xCoordinate: 1, yCoordinate: 1, orientation: 'E' };
  const commands = ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'];
  const endResult = {
    xCoordinate: 1,
    yCoordinate: 1,
    orientation: 'E',
    lost: false,
    scents: [],
  };
  expect(robot.executeMoves({ position, commands }, bounds, [], {})).toEqual(endResult);
});

test('can get lost', () => {
  const endResult = {
    ...lostEndResult,
    scents: [{ xCoordinate: 3, yCoordinate: 3, orientation: 'N' }],
  };
  expect(robot.executeMoves(lostInstructions, bounds, [], {})).toEqual(endResult);
});

test('can skip', () => {
  const scents = [{ xCoordinate: 3, yCoordinate: 3, orientation: 'N' }];
  const endResult = {
    ...skipEndResult,
    scents,
  };
  expect(robot.executeMoves(skipInstructions, bounds, scents, {})).toEqual(endResult);
});

test('can get end position for multiple sets', () => {
  const instructions = [lostInstructions, skipInstructions];
  const endResult = [lostEndResult, skipEndResult];
  expect(robot.runInstructions(instructions, bounds, [], {})).toEqual(endResult);
});
