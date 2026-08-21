const apiUrl = "https://jsonplaceholder.typicode.com";

// get all post
export const getAllPost = async () => {
  try {
    const response = await fetch(`${apiUrl}/posts`);
    if (!response.ok) {
      throw new Error("Failed to fecth fetch post", response.message);
    }

    const result = await response.json();
    return {
      success: true,
      message: "fetch post successfully",
      data: result
    };
  } catch (error) {
    console.error("Error meesage", error);
    return {
      success: false,
      message: error.message ?? "Error fetching post",
      data: null,
    };
  }
};

// get post by id
export const getPostById = async (postId) => {
   try {
    const response = await fetch(`${apiUrl}/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`Failed to fecth fetch post ${postId}`, response.message);
    }

    const result = await response.json();
    return {
      success: true,
      message: "fetch post successfully",
      data: result,
    };
  } catch (error) {
    console.error("Error meesage", error);
    return {
      success: false,
      message: error.message ?? "Error fetching post",
      data: null,
    };
  }
};

// create post
export const createPost = async (data) => {
  try{
    const { title, body, userId } = data;

    if(!title || !body || !userId){
      throw new Error("Title, body and userId are required");
    }

    const payload = {
      title,
      body,
      userId,
    }

    const response  = await fetch(`${apiUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if(!response.ok){
      throw new Error(result.message ?? "Error creating post");
    }

    return {
      success: true,
      message: "Post created successfully",
      data: result,
    }

  } catch (err){
    console.error(err)
    return {
      success: false,
      message: err.message ?? "Error creating post",
      data: null,
    }
  }
};

// update post
export const updatePost = () => {};

// delete post
export const deletePost = () => {};

// Http method
// - GET
// - POST
// - PATCH
// - PUT
// - DELETE

// getAllPost()
// getPostById()

// console.log()

// getAllPost()
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const result = await getAllPost()
// const result = await getPostById(999)

const post = {
  title: "My new post",
  body: "This is my new post",
  userId: 1,
}

const result = await createPost(post)
console.log(result)