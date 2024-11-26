export const fetchSinglePost = async (id) => {
    const response = await fetch(`/api/posts/${id}`);
    if (!response.ok) throw new Error();
    return response.json();
};

export const createPost = async (formData, token) => {
    const postData = new FormData();
    postData.append("title", formData.title);
    postData.append("category", formData.category);
    postData.append("body", formData.body);

    if (formData.image) {
        postData.append("image", formData.image);
    }

    const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: postData,
    });
    return res.json();
};
