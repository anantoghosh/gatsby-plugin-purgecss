const findLoader = (useArray, loaderNamesRegex) => {
  const index = useArray.findIndex(loaderObject => {
    let loaderName = '';

    if (typeof loaderObject === 'string') {
      loaderName = loaderObject;
    } else {
      loaderName = loaderObject.loader || '';
    }

    return loaderName.match(loaderNamesRegex);
  });

  return index === -1 ? null : index;
};

const insertLoader = (useArray, index, loader) => {
  if (index === null) {
    return
  }
  useArray.splice(index, 0, loader);
};

export { findLoader, insertLoader };
