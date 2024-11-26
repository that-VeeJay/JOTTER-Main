export const logout = async (token) => {
    const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.json();
};

export const register = async (formData) => {
    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    if (!response.ok) {
        throw new Error();
    }
    return response.json();
};

export const login = async (formData) => {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
    if (!response.ok) throw new Error();

    return response.json();
};
