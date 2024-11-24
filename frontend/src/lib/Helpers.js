export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
