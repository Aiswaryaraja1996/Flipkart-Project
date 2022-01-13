export const loadData = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
  } catch (e) {
    return null;
  }
};

export const saveData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return 1;
  } catch (e) {
    return -1;
  }
};
