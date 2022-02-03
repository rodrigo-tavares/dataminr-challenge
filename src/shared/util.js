export const NormalizeOptions = (maxValue, frequency) => {
  return Array.from(Array(maxValue + 1).keys()).map((item) => ({
    label: item,
    value: item,
  })).filter(item => item.value % frequency === 0 && item.value !== 0);
};
