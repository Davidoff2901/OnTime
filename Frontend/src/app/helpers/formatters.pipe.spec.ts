import { FormatDatePipe, FormatTimePipe } from './formatters.pipe';

describe('FormattersPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });
});
