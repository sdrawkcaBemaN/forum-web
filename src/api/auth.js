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
      error: error.message,
      data: null,
    };
  }
}

export async function logout(){
    try{
        const response = await fetch("http://127.0.0.1:5000/auth/user/logout",{
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
            error: error.message,
            data: null,
          };
    }
}


export async function forgetPassword() {
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/user/forget-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
              },
        credentials: "include",
        body: JSON.stringify(data),
    });

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
      error: error.message,
      data: null,
    };
  }
}