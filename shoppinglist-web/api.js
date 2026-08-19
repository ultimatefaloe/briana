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
