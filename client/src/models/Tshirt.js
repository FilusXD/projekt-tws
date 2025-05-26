

export const getAllTshirts = async () => {
    const req = await fetch("http://localhost:3000/tshirts", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const getTshirtById = async (id) => {
    const req = await fetch(`http://localhost:3000/tshirts/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const createTshirt = async (formData) => {
    const req = await fetch(`http://localhost:3000/tshirts`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const updateTshirt = async (formData, id) => {
    const req = await fetch(`http://localhost:3000/tshirts/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}
export const deleteTshirt = async (id) => {
    const req = await fetch(`http://localhost:3000/tshirts/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE"
    });
    const data = await req.json();
    return {
        status: req.status,
        payload: data.payload,
        message: data.message
    }
}