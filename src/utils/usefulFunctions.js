export const getDirectRuleOfThree = (hundredBase, hundredReturn, numberToConvert) => {
  //1920 => 1280
  //125 => x
  //hundredBase => hundredReturn
  //numberToConvert => x
  return Math.floor((numberToConvert * hundredReturn) / hundredBase);
};

export const getPolylinePoints = (data, selectedId) => {
  const selectedObject = data.find(dot => dot.id === selectedId);
  let arrayOfArrays = selectedObject.related;
  for (let array of arrayOfArrays) {
    array.unshift(selectedId);
  }
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
