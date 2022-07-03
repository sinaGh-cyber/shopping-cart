const modularClassNamer = (styleRef) => {
  return (classString) => {
    const classArray = classString[0].split(' ');
    const className = classArray
      .map((classSrt) => styleRef[classSrt])
      .toString()
      .replace(',', ' ');
    return className;
  };
};

export default modularClassNamer;
