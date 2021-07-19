import tipCalc from '@/lib/calculator';

describe('Tip Calculator', () => {
  it('total amount/tip per person with percentage tip', () => {
    const arg = {
      bill: 142.55,
      percentage: 15,
      number: 5,
      custom: 0,
    };
    // tip
    expect(tipCalc(arg).tip).toBe(4.28);

    // amount
    expect(tipCalc(arg).amount).toBe(32.79);
  });

  it('total amount/tip per person with custom tip', () => {
    const arg = {
      bill: 142.55,
      percentage: 0,
      number: 5,
      custom: 15,
    };
    // tip
    expect(tipCalc(arg).tip).toBe(3.00);

    // amount
    expect(tipCalc(arg).amount).toBe(31.51);
  });
});
