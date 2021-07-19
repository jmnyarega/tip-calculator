const round = (num, precision = 2) => {
  const precisionV = 10 ** precision;
  return Math.ceil(num * precisionV) / precisionV;
};

const tipWithCustom = ({ bill, custom, number }) => ({
  tip: round(custom / number),
  amount: round((bill + custom) / number),
});

const tipWithPercentage = ({ bill, percentage, number }) => ({
  tip: round(((percentage / 100) * bill) / number),
  amount: round((bill + (percentage / 100) * bill) / number),
});

const tipCalc = (arg) => {
  let res;
  if (arg.percentage > 0) res = tipWithPercentage(arg);
  if (arg.custom > 0) res = tipWithCustom(arg);
  return res;
};

export default tipCalc;
