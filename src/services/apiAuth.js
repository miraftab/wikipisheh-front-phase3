import { API_URL } from "../utils/constants.js";

export async function login(username, password) {
  username = username.trim().toLowerCase();
  const res = await fetch(`${API_URL}/users/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: username, password: password })
  });
  if (!res.ok) throw new Error("Failed getting login");
  return res.json();
}

export async function tokenRefresh(rToken) {
  const res = await fetch(`${API_URL}/users/token/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ refresh: rToken })
  });
  if (!res.ok) throw new Error("Failed getting refresh token");
  // console.log('res.json:', res.json());
  console.log('res.status:', res.status)
  return res.json();
}

export async function register({first_name, last_name, email, password, password2}) {
  email = email.trim().toLowerCase();
  const res = await fetch(`${API_URL}/users/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({first_name, last_name, email, password, password2}),
  });
  if (!res.ok) {
    const errorData = await res.json(); // Extract the error response data
    const error = new Error("An error occurred");
    error.response = errorData; // Attach the error response data
    error.status = res.status; // Optionally, attach the status code
    throw error;
  }
  return res.json();
}

export async function requestOTP({email}) {
  email = email.trim().toLowerCase();
  const res = await fetch(`${API_URL}/users/request-otp/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: email})
  });
  if (!res.ok) {
    const errorData = await res.json(); // Extract the error response data
    const error = new Error("An error occurred");
    error.response = errorData; // Attach the error response data
    error.status = res.status; // Optionally, attach the status code
    throw error;
  }
  return res.json();
}

export async function verifyOTP({email, otp_code}) {
  email = email.trim().toLowerCase();
  const res = await fetch(`${API_URL}/users/verify-otp/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, otp_code})
  });
  if (!res.ok) {
    const errorData = await res.json(); // Extract the error response data
    const error = new Error("An error occurred");
    error.response = errorData; // Attach the error response data
    error.status = res.status; // Optionally, attach the status code
    throw error;
  }
  return res.json();
}

export async function requestPasswordReset({email}) {
  email = email.trim().toLowerCase();
  const res = await fetch(`${API_URL}/users/password-reset/request/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: email})
  });
  if (!res.ok) {
    const errorData = await res.json(); // Extract the error response data
    const error = new Error("درخواست ارسال کد فعال‌سازی به ایمیل موفق نبود!");
    error.response = errorData; // Attach the error response data
    error.status = res.status; // Optionally, attach the status code
    throw error;
  }
  return res.json();
}

export async function verifyPasswordReset({email, otp_code}) {
  email = email.trim().toLowerCase();
  const res = await fetch(`${API_URL}/users/password-reset/verify-otp/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, otp_code})
  });
  if (!res.ok) {
    const errorData = await res.json(); // Extract the error response data
    const error = new Error("بررسی رمز عبور و کد فعال‌سازی موفق نبود!");
    error.response = errorData; // Attach the error response data
    error.status = res.status; // Optionally, attach the status code
    throw error;
  }
  return res.json();
}

export async function resetPassword({temp_token, new_password, confirm_password}) {
  const res = await fetch(`${API_URL}/users/password-reset/reset-password/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${temp_token}`
    },
    body: JSON.stringify({new_password, confirm_password})
  });
  if (!res.ok) {
    const errorData = await res.json(); // Extract the error response data
    const error = new Error("تغییر رمز عبور موفق نبود!");
    error.response = errorData; // Attach the error response data
    error.status = res.status; // Optionally, attach the status code
    throw error;
  }
  return res.json();
}