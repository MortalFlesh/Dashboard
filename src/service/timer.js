export function createDelay() {
    let timer = 0;

    return (callback, ms) => {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
}
