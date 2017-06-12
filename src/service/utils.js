// @flow

export function number(string: string): number {
    return parseInt(string, 10);
}

export function inArray<T>(needle: T, haystack: Array<T>): boolean {
    return haystack.indexOf(needle) !== -1;
}
