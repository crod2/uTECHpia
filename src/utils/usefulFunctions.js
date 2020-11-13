export const getDirectRuleOfThree = (hundredBase, hundredReturn, numberToConvert) => {
  //1920 => 1280
  //125 => x
  //hundredBase => hundredReturn
  //numberToConvert => x
  return (numberToConvert * hundredReturn) / hundredBase;
};
