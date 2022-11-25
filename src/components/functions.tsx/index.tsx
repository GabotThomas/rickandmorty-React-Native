export const renameTitle = (title = '') => {
    console.log(title)
    if (title.length > 15) {
        return title.slice(0, 15) + '...';
    }
    return title;
}