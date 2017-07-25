const controller = require('../src/controller');

const instructions = '53\n11E\nRFRFRFRF\n32N\nFRRFLLFFRRFLL\n03W\nLLFFFLFLFL';
const results = '1 1 E\n3 3 N LOST\n2 3 S';

test('can get end robot positions', () => {
  expect(controller.main(instructions)).toEqual(results);
});

test('can remove unnecessary spaces and tabs', () => {
  const moves = '53\n\n\n11   E\nRF RF RFRF\n32N\n\nFR RFLL  FFRRFLL\n';
  expect(controller.main(moves)).toEqual('1 1 E\n3 3 N LOST');
});
