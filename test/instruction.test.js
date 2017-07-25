const instruction = require('../src/instruction');

test('instruction moves forward in east orientation', () => {
  expect(instruction.forward({ xCoordinate: 1, yCoordinate: 2, orientation: 'E' })).toEqual({ xCoordinate: 2, yCoordinate: 2, orientation: 'E' });
});

test('instruction moves forward in west orientation', () => {
  expect(instruction.forward({ xCoordinate: 1, yCoordinate: 2, orientation: 'W' })).toEqual({ xCoordinate: 0, yCoordinate: 2, orientation: 'W' });
});

test('instruction moves forward in north orientation', () => {
  expect(instruction.forward({ xCoordinate: 1, yCoordinate: 2, orientation: 'N' })).toEqual({ xCoordinate: 1, yCoordinate: 3, orientation: 'N' });
});

test('instruction moves forward in south orientation', () => {
  expect(instruction.forward({ xCoordinate: 1, yCoordinate: 2, orientation: 'S' })).toEqual({ xCoordinate: 1, yCoordinate: 1, orientation: 'S' });
});

test('instruction moves right from north orientation', () => {
  expect(instruction.right({ xCoordinate: 1, yCoordinate: 2, orientation: 'N' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'E' });
});

test('instruction moves right from east orientation', () => {
  expect(instruction.right({ xCoordinate: 1, yCoordinate: 2, orientation: 'E' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'S' });
});

test('instruction moves right from south orientation', () => {
  expect(instruction.right({ xCoordinate: 1, yCoordinate: 2, orientation: 'S' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'W' });
});

test('instruction moves right from west orientation', () => {
  expect(instruction.right({ xCoordinate: 1, yCoordinate: 2, orientation: 'W' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'N' });
});

test('instruction moves left from north orientation', () => {
  expect(instruction.left({ xCoordinate: 1, yCoordinate: 2, orientation: 'N' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'W' });
});

test('instruction moves left from east orientation', () => {
  expect(instruction.left({ xCoordinate: 1, yCoordinate: 2, orientation: 'E' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'N' });
});

test('instruction moves left from south orientation', () => {
  expect(instruction.left({ xCoordinate: 1, yCoordinate: 2, orientation: 'S' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'E' });
});

test('instruction moves left from west orientation', () => {
  expect(instruction.left({ xCoordinate: 1, yCoordinate: 2, orientation: 'W' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'S' });
});

test('instruction string must be less than 100 characters long', () => {
  expect(instruction.validLength('A'.repeat(101))).toBe(false);
});

test('instruction string can move forward', () => {
  expect(instruction.movesList('F', { xCoordinate: 1, yCoordinate: 2, orientation: 'E' })).toEqual({ xCoordinate: 2, yCoordinate: 2, orientation: 'E' });
});

test('instruction string can move right', () => {
  expect(instruction.movesList('R', { xCoordinate: 1, yCoordinate: 2, orientation: 'E' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'S' });
});

test('instruction string can move left', () => {
  expect(instruction.movesList('L', { xCoordinate: 1, yCoordinate: 2, orientation: 'E' })).toEqual({ xCoordinate: 1, yCoordinate: 2, orientation: 'N' });
});

test('instruction string must be valid', () => {
  expect(() => {
    instruction.movesList('M');
  }).toThrowError('Invalid instruction: M');
});
