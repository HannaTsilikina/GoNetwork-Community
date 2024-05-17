const findCompany = (array, idOfComp) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === +idOfComp) return array[i];
  }
};
const findMembers = (array, idOfComp) => {
  const members = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].companies.length; j++) {
      if (array[i].companies[j].id === +idOfComp) {
        members.push(array[i]);
      }
    }
  }
  return members;
};
export { findMembers, findCompany };
