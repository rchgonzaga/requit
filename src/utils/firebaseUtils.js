export const mergeArrayObjectWithKey = objects => {
  const newObjects = [];
  for (const key in objects) {
    const object = Object.assign(objects[key], { id: key });
    newObjects.push(object);
  }
  return newObjects;
};

export const mergeObjectWithKey = (object, key) => {
  return Object.assign(object, { id: key });
};
