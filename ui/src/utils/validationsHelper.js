export const trimValidator = (value) => {
    const getValue = value.trim();
    if (!getValue) {
        return false;
    } else {
        return true;
    }
};