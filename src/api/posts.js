export async function getAll() {
  try {
    const response = await fetch("http://127.0.0.1:5000/post/user", {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();
    if (response.ok) {
      return {
        error: null,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: error.message,
      data: null,
    };
  }
}

export async function getPost(id) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/post/${id}`, {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();
    if (response.ok) {
      return {
        error: null,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: error.message,
      data: null,
    };
  }
}

export async function createPost(data) {
  try {
    const response = await fetch("http://127.0.0.1:5000/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return {
        error: null,
        data: null,
      };
    } else {
      const error = await response.json();
      return {
        error: error.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}

export async function removePost(id) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/post/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const result = await response.json();

    if (response.ok) {
      return {
        error: null,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}

export async function updatePost(id, dto) {
  try {
    const response = await fetch(`http://127.0.0.1:5000/post/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    const result = await response.json();

    if (response.ok) {
      return {
        error: null,
        data: result.data,
      };
    } else {
      return {
        error: result.error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}

