const API_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const getElement = (selector) => document.querySelector(selector);

const escapeHTML = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatTitle = (title = "") =>
  title.charAt(0).toUpperCase() + title.slice(1);

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers
    },
    ...options
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
};

const getPostIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
};

const initializePostList = async () => {
  const postGrid = getElement("#postGrid");
  const loadingState = getElement("#loadingState");
  const errorState = getElement("#errorState");
  const emptyState = getElement("#emptyState");
  const postCount = getElement("#postCount");
  const resultText = getElement("#resultText");
  const searchInput = getElement("#searchInput");
  const userFilter = getElement("#userFilter");
  const retryButton = getElement("#retryButton");
  const postDialog = getElement("#postDialog");
  const closeDialogButton = getElement("#closeDialogButton");

  let allPosts = [];
  let visiblePosts = [];

  const createPostCard = (post) => `
    <article class="post-card" data-post-id="${post.id}">
      <div class="post-card-header">
        <span class="post-id">POST #${post.id}</span>
        <span class="post-meta">User ${post.userId}</span>
      </div>

      <h3 class="post-title">${escapeHTML(formatTitle(post.title))}</h3>
      <p class="post-excerpt">${escapeHTML(post.body)}</p>

      <div class="post-actions">
        <button class="card-action view-button" type="button" data-id="${post.id}">
          View
        </button>
        <a class="card-action" href="./create.html?id=${post.id}">
          Edit
        </a>
        <button class="card-action delete delete-button" type="button" data-id="${post.id}">
          Delete
        </button>
      </div>
    </article>
  `;

  const renderPosts = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedUser = userFilter.value;

    visiblePosts = allPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm) ||
        post.body.toLowerCase().includes(searchTerm);

      const matchesUser =
        selectedUser === "all" || post.userId === Number(selectedUser);

      return matchesSearch && matchesUser;
    });

    postGrid.innerHTML = visiblePosts.map(createPostCard).join("");
    postCount.textContent = allPosts.length;
    resultText.textContent = `${visiblePosts.length} post${visiblePosts.length === 1 ? "" : "s"} shown`;

    emptyState.classList.toggle("hidden", visiblePosts.length !== 0);
  };

  const populateUserFilter = () => {
    const userIds = [...new Set(allPosts.map((post) => post.userId))].sort(
      (a, b) => a - b
    );

    userFilter.innerHTML = `
      <option value="all">All users</option>
      ${userIds
        .map((userId) => `<option value="${userId}">User ${userId}</option>`)
        .join("")}
    `;
  };

  const showPostDialog = (postId) => {
    const post = allPosts.find((item) => item.id === Number(postId));

    if (!post) return;

    getElement("#dialogTitle").textContent = formatTitle(post.title);
    getElement("#dialogBody").textContent = post.body;
    getElement("#dialogMeta").textContent = `Post #${post.id} · User ${post.userId}`;
    getElement("#dialogEditLink").href = `./create.html?id=${post.id}`;

    postDialog.showModal();
  };

  const deletePost = async (postId) => {
    const post = allPosts.find((item) => item.id === Number(postId));

    if (!post) return;

    const approved = window.confirm(
      `Delete "${formatTitle(post.title)}"? JSONPlaceholder will simulate this action.`
    );

    if (!approved) return;

    try {
      await request(`${API_URL}/${postId}`, {
        method: "DELETE"
      });

      allPosts = allPosts.filter((item) => item.id !== Number(postId));
      renderPosts();
    } catch (error) {
      window.alert("Could not delete this post. Please try again.");
    }
  };

  const loadPosts = async () => {
    loadingState.classList.remove("hidden");
    errorState.classList.add("hidden");
    emptyState.classList.add("hidden");
    postGrid.innerHTML = "";

    try {
      allPosts = await request(API_URL);
      populateUserFilter();
      renderPosts();
    } catch (error) {
      errorState.classList.remove("hidden");
      resultText.textContent = "Could not load posts";
    } finally {
      loadingState.classList.add("hidden");
    }
  };

  searchInput.addEventListener("input", renderPosts);
  userFilter.addEventListener("change", renderPosts);

  postGrid.addEventListener("click", (event) => {
    const viewButton = event.target.closest(".view-button");
    const deleteButton = event.target.closest(".delete-button");

    if (viewButton) {
      showPostDialog(viewButton.dataset.id);
    }

    if (deleteButton) {
      deletePost(deleteButton.dataset.id);
    }
  });

  closeDialogButton.addEventListener("click", () => postDialog.close());

  postDialog.addEventListener("click", (event) => {
    if (event.target === postDialog) {
      postDialog.close();
    }
  });

  retryButton.addEventListener("click", loadPosts);

  await loadPosts();
};

const initializePostForm = async () => {
  const postForm = getElement("#postForm");
  const userSelect = getElement("#userId");
  const titleInput = getElement("#title");
  const bodyInput = getElement("#body");
  const pageTitle = getElement("#pageTitle");
  const pageDescription = getElement("#pageDescription");
  const submitButton = getElement("#submitButton");
  const characterCount = getElement("#characterCount");
  const formMessage = getElement("#formMessage");
  const formLoading = getElement("#formLoading");
  const postId = getPostIdFromUrl();

  const updateCharacterCount = () => {
    characterCount.textContent = `${bodyInput.value.length} / 1000`;
  };

  const showMessage = (message, type = "success") => {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type === "error" ? "error" : ""}`;
  };

  const populateUsers = async () => {
    const users = await request(USERS_URL);

    userSelect.innerHTML = `
      <option value="">Select a user</option>
      ${users
        .map(
          (user) =>
            `<option value="${user.id}">${escapeHTML(user.name)} (User ${user.id})</option>`
        )
        .join("")}
    `;
  };

  const loadPostForEditing = async () => {
    if (!postId) return;

    pageTitle.textContent = "Update your post";
    pageDescription.textContent = "Edit the post details and save your changes.";
    submitButton.textContent = "Save changes";
    formLoading.classList.remove("hidden");

    try {
      const post = await request(`${API_URL}/${postId}`);

      userSelect.value = post.userId;
      titleInput.value = post.title;
      bodyInput.value = post.body;
      updateCharacterCount();
    } catch (error) {
      showMessage("Could not load this post. Return to the post list and try again.", "error");
      submitButton.disabled = true;
    } finally {
      formLoading.classList.add("hidden");
    }
  };

  bodyInput.addEventListener("input", updateCharacterCount);

  postForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!postForm.checkValidity()) {
      postForm.reportValidity();
      return;
    }

    const postData = {
      userId: Number(userSelect.value),
      title: titleInput.value.trim(),
      body: bodyInput.value.trim()
    };

    const isEditing = Boolean(postId);
    const requestUrl = isEditing ? `${API_URL}/${postId}` : API_URL;
    const method = isEditing ? "PUT" : "POST";

    submitButton.disabled = true;
    submitButton.textContent = isEditing ? "Saving..." : "Publishing...";
    formMessage.classList.add("hidden");

    try {
      const savedPost = await request(requestUrl, {
        method,
        body: JSON.stringify({
          ...postData,
          ...(isEditing && { id: Number(postId) })
        })
      });

      const savedId = savedPost.id || postId;

      showMessage(
        isEditing
          ? `Post #${savedId} was updated successfully. JSONPlaceholder simulated the request.`
          : `Post #${savedId} was created successfully. JSONPlaceholder simulated the request.`
      );

      if (!isEditing) {
        postForm.reset();
        updateCharacterCount();
      }
    } catch (error) {
      showMessage(
        "Something went wrong while saving your post. Please try again.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = isEditing ? "Save changes" : "Publish post";
    }
  });

  try {
    await populateUsers();
    await loadPostForEditing();
  } catch (error) {
    showMessage("Could not load users from the API. Please refresh the page.", "error");
    submitButton.disabled = true;
  }

  updateCharacterCount();
};

if (getElement("#postGrid")) {
  initializePostList();
}

if (getElement("#postForm")) {
  initializePostForm();
}