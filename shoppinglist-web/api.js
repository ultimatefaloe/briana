// get our document first, for latest update
// get out post container by id
// create reusable function to render our post card
// ensure postcard ui takes in props

// use innerHTML to render our post card

const fetchPost = async () => {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
  return data || [];
};

const deletePost = async (id) => {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
  return data || [];
};

const updatePost = async (id, data) => {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
  return data || [];
};

const createPost = async (data) => {
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
  return data || [];
};

const postCard = (post) => {
  const { id, title, body } = post;
  return `
     <div
  class="item bg-red-50 border border-red-200 rounded-xl p-4 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row sm:justify-between gap-4"
  data-id="${id}"
>
  <!-- Content -->
  <div class="flex-1 min-w-0">
    <h2 class="text-base sm:text-lg font-semibold text-red-800 mb-2 break-words">
      ${title}
    </h2>

    <p class="text-sm text-red-600 break-words">
      ${body}
    </p>
  </div>

  <!-- Actions -->
  <div class="flex gap-2 sm:flex-col sm:w-auto w-full">
    <button
      class="flex-1 sm:flex-none px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
    >
      Edit
    </button>

    <button
      class="flex-1 sm:flex-none px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition font-medium"
      onclick="deletePost(${id})"
    >
      Delete
    </button>
  </div>
</div>
          `;
};

document.addEventListener("DOMContentLoaded", async () => {
  const postContainer = document.getElementById("post_container");
  const posts = await fetchPost();

  posts.forEach((post) => {
    postContainer.innerHTML += postCard(post);
  });
});
