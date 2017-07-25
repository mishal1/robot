const controller = require('../src/controller');

const instructions = '53\n11E\nRFRFRFRF\n32N\nFRRFLLFFRRFLL\n03W\nLLFFFLFLFL';
const results = '11E\n33NLOST\n23S';

test('can get end robot positions', () => {
  expect(controller.main(instructions)).toEqual(results);
});
