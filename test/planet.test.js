const planet = require('../src/planet');

const position1 = { xCoordinate: 1, yCoordinate: 1, orientation: 'N' };
const position2 = { xCoordinate: 1, yCoordinate: 2, orientation: 'N' };

test('can set planet size', () => {
  expect(planet.size({ maxX: 5, maxY: 3 })).toEqual({ maxX: 5, maxY: 3 });
});

test('cannot set planet x coordinate greater than 50', () => {
  expect(() => {
    planet.size({ maxX: 51, maxY: 3 });
  }).toThrowError('Coordinate values cannot be less than 0 or greater than 50');
});

test('cannot set planet y coordinate greater than 50', () => {
  expect(() => {
    planet.size({ maxX: 5, maxY: 51 });
  }).toThrowError('Coordinate values cannot be less than 0 or greater than 50');
});

test('cannot set planet x coordinate less than 0', () => {
  expect(() => {
    planet.size({ maxX: -1, maxY: 3 });
  }).toThrowError('Coordinate values cannot be less than 0 or greater than 50');
});

test('cannot set planet y coordinate less than 0', () => {
  expect(() => {
    planet.size({ maxX: 5, maxY: -1 });
  }).toThrowError('Coordinate values cannot be less than 0 or greater than 50');
});

test('x and y coordinate is in bounds', () => {
  expect(planet.inBounds({ maxX: 5, maxY: 3 }, { xCoordinate: 1, yCoordinate: 1 })).toBe(true);
});

test('x is out of bounds', () => {
  expect(planet.inBounds({ maxX: 5, maxY: 3 }, { xCoordinate: 6, yCoordinate: 1 })).toBe(false);
});

test('y is out of bounds', () => {
  expect(planet.inBounds({ maxX: 5, maxY: 3 }, { xCoordinate: 1, yCoordinate: 4 })).toBe(false);
});

test('negative x is out of bounds', () => {
  expect(planet.inBounds({ maxX: 5, maxY: 3 }, { xCoordinate: -1, yCoordinate: 1 })).toBe(false);
});

test('negative y is out of bounds', () => {
  expect(planet.inBounds({ maxX: 5, maxY: 3 }, { xCoordinate: 1, yCoordinate: -1 })).toBe(false);
});

test('lower edge is in bound', () => {
  expect(planet.inBounds({ maxX: 5, maxY: 3 }, { xCoordinate: 0, yCoordinate: 0 })).toBe(true);
});

test('upper edge is in bound', () => {
  expect(planet.inBounds({ maxX: 5, maxY: 3 }, { xCoordinate: 5, yCoordinate: 3 })).toBe(true);
});

test('can have scents', () => {
  expect(planet.scents([], position1)).toEqual([position1]);
});

test('can update scents', () => {
  expect(planet.scents([position1], position2)).toEqual([position1, position2]);
});

test('check if scent is in scent list', () => {
  const scents = [position1];
  expect(planet.scentsMatch(scents, position1)).toBe(true);
});

test('check if scent is not in scent list', () => {
  expect(planet.scentsMatch([position2], position1)).toBe(false);
});
