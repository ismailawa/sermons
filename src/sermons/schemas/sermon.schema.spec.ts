import { SermonSchema } from './sermon.schema';

describe('SermonSchema', () => {
  it('should be defined', () => {
    expect(new SermonSchema()).toBeDefined();
  });
});
