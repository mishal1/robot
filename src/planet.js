const _ = require('lodash');

const greaterThan50 = value => value > 50;

const lessThan0 = value => value < 0;

const size = (coordinates) => {
  if (_.some(coordinates, lessThan0) || _.some(coordinates, greaterThan50)) {
    throw new Error('Coordinate values cannot be less than 0 or greater than 50');
  }
  return coordinates;
};

const scents = (currentScent, position) =>
  [...currentScent, position];

const inBounds = (bounds, position) => position.xCoordinate <= bounds.maxX &&
  position.yCoordinate <= bounds.maxY &&
  !lessThan0(position.xCoordinate) &&
  !lessThan0(position.yCoordinate);

const scentsMatch = (scentsList, position) =>
  scentsList.some(scent => _.isEqual(scent, position));

module.exports = {
  size,
  inBounds,
  scents,
  scentsMatch,
};

