const setMargin = (i) => {
  switch (i) {
    case 0:
      return 'mr-4';
    case 1:
      return 'mx-3';
    case 2:
      return 'ml-4';
    default:
      return '';
  }
};

export default setMargin;
