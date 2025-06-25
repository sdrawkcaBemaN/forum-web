export async function getAuthenticatedUser() {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/user", {
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
      error: {
        message: error.message,
      },
      data: null,
    };
  }
}

export async function login(data) {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // allow HTTP Only Set-Cookie to be forwarded from API Server to client and from client to API Server
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

export async function register(data) {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    console.log(response.status);
    console.log(response.headers.entries());

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

export async function logout() {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/user/logout", {
      method: "POST",
      credentials: "include",
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

export async function forgetPassword(data) {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/auth/user/forget-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    if (response.ok) {
      return {
        error: null,
        data: null,
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

export async function resetPassword(data) {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/auth/user/reset-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    // response.ok false only when the status is 400.
    if (response.ok) {
      return {
        error: null,
        data: null,
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

export async function resendVerificationLink(data) {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/auth/user/resent-verification-link",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (response.ok) {
      return {
        error: null,
        data: null,
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
