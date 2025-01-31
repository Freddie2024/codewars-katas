export function sameCase(a : string, b : string): number {
    const regex = /[a-zA-Z]/;
    if (regex.test(a) === false || regex.test(b) === false) {
    return -1;
    }
    if (a === a.toUpperCase() && b === b.toUpperCase() ||
        a === a.toLowerCase() && b === b.toLowerCase()) {
    return 1;
    } else {
    return 0;
    }
}