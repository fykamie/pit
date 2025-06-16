import { PitBoard } from './pit-board';

describe('PitBoard', () => {
  it('should create an instance', () => {
    expect(new PitBoard({width: 5, height: 6},3)).toBeTruthy();
  });
});
