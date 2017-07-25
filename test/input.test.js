const input = require('../src/input');

const singleInput = '5 3\n1 1 E\nRFRFRFRF';
const multipleInput = '5 3\n1 1 E\nRFRFRFRF\n32N\nFRRFLLFF';
const bounds = { maxX: 5, maxY: 3 };
const instructions1 = { position: { xCoordinate: 1, yCoordinate: 1, orientation: 'E' }, commands: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'] };
const instructions2 = { position: { xCoordinate: 3, yCoordinate: 2, orientation: 'N' }, commands: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F'] };

test('gets planet size from input data', () => {
  expect(input.getBounds('53')).toEqual(bounds);
});

test('gets instructions from input data', () => {
  expect(input.getInstructions(['53', '11E', 'RFRFRFRF'])).toEqual([instructions1]);
});

test('gets multiple instructions from input data', () => {
  expect(input.getInstructions(['53', '11E', 'RFRFRFRF', '32N', 'FRRFLLFF'])).toEqual([instructions1, instructions2]);
});

test('format data from input data', () => {
  expect(input.formatInputData(singleInput)).toEqual({ bounds, instructions: [instructions1] });
});

test('format multiple instructions', () => {
  const multipleInstructions = { bounds, instructions: [instructions1, instructions2] };
  expect(input.formatInputData(multipleInput)).toEqual(multipleInstructions);
});
