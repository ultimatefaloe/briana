import { getLocal, saveLocal } from "./storage.utils.js";

// for getting all item save in local storage
export const getPost = () => {
  return getLocal();
};

// to create new item and save in local storage
export const createPost = (data) => {
  const existingData = getLocal();
  const newData = [...existingData, data];
  saveLocal(newData);
  return newData;
};


// to uodate existing item and save in local storage
export const updatePost = (id, data) => {
  const existingData = getLocal();
  const newData = existingData.map((item) => {
    if (item.id === id) {
      return { ...item, ...data };
    }
    return item;
  });
  saveLocal(newData);
  return newData;
};

// delete item from local storage
export const deletePost = (id) => {
  const existingData = getLocal();
  const newData = existingData.filter((item) => item.id !== id);
  saveLocal(newData);
  return newData;
};


const unit = "80px 60"
const cleanedUnit = parseInt(unit)
console.log(typeof unit)
console.log(typeof cleanedUnit)

const num = "12345678"
const cleanedNum = Number(num)
console.log(typeof num)
console.log(typeof cleanedNum)