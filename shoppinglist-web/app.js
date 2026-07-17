document.addEventListener("DOMContentLoaded", () => {
  const items = [];

  const shoppingItemUi = (item) => {
    const { id, title, timestamp } = item;

    return `
      <div class="item bg-gray-300 rounded p-2 flex align-center justify-between">
        <div class="">
          <h2>${title}</h2>
          <span class="text-[10px] text-gray-500">${timestamp}</span>
        </div>
        <div class="flex justify-center align-center p-3 leading-tight">
          <button id="delete-${id}" onclick="">
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
  items.forEach((item) => {
    itemContainer.innerHTML += shoppingItemUi(item);
  });

  const form = document.getElementById("createList")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("item");
    const title = input.value;

    if (title) {
      const newItem = {
        id: items.length + 1,
        title,
        timestamp: new Date().toLocaleString(),
      };
      items.unshift(newItem);
      itemContainer.innerHTML += shoppingItemUi(newItem);
      input.value = "";
    }

  });

  // items.forEach((item) => {
  //   const deleteButton = document.getElementById(`delete-${item.id}`);
  //   deleteButton.addEventListener("click", () => {
  //     itemContainer.removeChild(deleteButton.parentElement.parentElement);
  //   });
  // });

});


// const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// console.log(fruits.map(fruits => fruits.toUpperCase()));

// fruits.forEach(fruit => console.log(fruit));