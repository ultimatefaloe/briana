// strorage key
const key = "post:key";

// utilss
export const getLocal = () => {
  const data = localStorage.getItem(key);
  if (!data) return [];
  return JSON.parse(data);
};

export const saveLocal = (data) => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
};
