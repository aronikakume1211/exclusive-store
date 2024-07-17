const trimmedTitle = (title, maxLength = 20) => {
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
};

export { trimmedTitle };