export function number(string) {
    return parseInt(string, 10);
}

export function inArray(needle, haystack) {
    return haystack.indexOf(needle) !== -1;
}
