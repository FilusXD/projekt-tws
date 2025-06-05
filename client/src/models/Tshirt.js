const API_URL = "http://localhost:3000/tshirts";

const processResponse = async (response) => {

  if (!response.ok) {
    const errorText = await response.text();
    return {
      status: response.status,
      message: errorText || "Došlo k chybě na serveru.",
      payload: null,
    };
  }

  if (response.status === 204) {
      return { status: response.status, payload: {} };
  }

  const data = await response.json();
  return {
    status: response.status,
    payload: data.payload,
    message: data.message,
  };
};

export const getAllTshirts = async () => {
  const response = await fetch(API_URL);
  return processResponse(response);
};

export const getTshirtById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return processResponse(response);
};

export const createTshirt = async (formData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return processResponse(response);
};

export const updateTshirt = async (id, formData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return processResponse(response);
};

export const deleteTshirt = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return processResponse(response);
};