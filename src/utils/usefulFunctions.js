export const getDirectRuleOfThree = (hundredBase, hundredReturn, numberToConvert) => {
  //1920 => 1280
  //125 => x
  //hundredBase => hundredReturn
  //numberToConvert => x
  return (numberToConvert * hundredReturn) / hundredBase;
};

export const getPolylinePoints = (data, selectedId) => {
  const selectedObject = data.find(dot => dot.id === selectedId);
  let arrayOfArrays = selectedObject.related;
  arrayOfArrays = arrayOfArrays.map(array => [selectedId, ...array]);
  const arrayOfStrings = arrayOfArrays.map(item => {
    const string = getStringOfPointFromArray(data, item);
    return string;
  });
  return arrayOfStrings;
};

const getStringOfPointFromArray = (data, idArray) => {
  const arrayOfPositions = idArray.map(id => {
    const object = data.find(pos => pos.id === id);
    const positionOnbject = object.position;
    return `${positionOnbject.x + object.radius},${positionOnbject.y + object.radius}`;
  });
  return arrayOfPositions.join(' ');
};
