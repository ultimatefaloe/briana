// strorage key
const key = "post:key";

// utilss
const getLocal = () => {
  const data = localStorage.getItem(key);
  if (!data) return [];
  return JSON.parse(data);
};

const saveLocal = (data) => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
};

// api call

// for getting all item save in local storage
const getItem = () => {
  return getLocal();
};

// to create new item and save in local storage
const createItem = (data) => {
  const existingData = getLocal();
  const newData = [...existingData, data];
  saveLocal(newData);
  return newData;
};

// to uodate existing item and save in local storage
const updateItem = (id, data) => {
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
const deleteItem = (id) => {
  const existingData = getLocal();
  const newData = existingData.filter((item) => item.id !== id);
  saveLocal(newData);
  return newData;
};

document.addEventListener("DOMContentLoaded", () => {
  const items = getItem();

  const shoppingItemUi = (item) => {
    const { id, title, timestamp } = item;

    return `
      <div class="item bg-gray-300 rounded p-2 flex align-center justify-between" data-id="${id}">
        <div class="">
          <h2>${title}</h2>
          <span class="text-[10px] text-gray-500">${timestamp}</span>
        </div>
        <div class="flex justify-center align-center p-3 leading-tight">
          <button class="delete-btn cursor-pointer" data-id="${id}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#dc0000"
                d="M6 7h2v2H6zm14 0h2v10h-2zM8 5h12v2H8zM4 9h2v2H4zm-2 2h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm2 2h12v2H8zm6-6h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm0-4h2v2h-2z"
              />
            </svg>
          </button>
        </div>
      </div>`;
  };

  const itemContainer = document.getElementById("itemContainer");

  // Render existing items
  items.forEach((item) => {
    itemContainer.innerHTML += shoppingItemUi(item);
  });

  // Add event listener for delete buttons (event delegation)
  itemContainer.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
      const id = parseInt(deleteBtn.dataset.id);
      deleteItem(id);
    }
  });

  // Delete function
  function deleteItem(id) {
    // Remove from items array
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }

    // Remove from DOM
    const itemElement = document.querySelector(`.item[data-id="${id}"]`);
    if (itemElement) {
      itemElement.remove();
    }
  }

  const form = document.getElementById("createList");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("item");
    const title = input.value.trim();

    if (title) {
      const newItem = {
        id: items.length + 1,
        title,
        timestamp: new Date().toLocaleString(),
      };
      // items.unshift(newItem);
      createItem(newItem);
      itemContainer.innerHTML =
        shoppingItemUi(newItem) + itemContainer.innerHTML;
      input.value = "";
    }
  });
});
