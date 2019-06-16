import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {
  it('create an instance', () => {
    const pipe = new RoundPipe();
    expect(pipe).toBeTruthy();
  });

  it('value equal to undefined or null', () => {
    const pipe = new RoundPipe();
    const mock1 = pipe.transform(0);
    expect(mock1).toEqual(0);
    const mock2 = pipe.transform(null);
    expect(mock2).toBeNull();
  });
});
