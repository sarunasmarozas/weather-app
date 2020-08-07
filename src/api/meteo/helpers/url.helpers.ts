export const makeUrl = <T extends Record<string, any>>(path: string, params: T): string => {
    return Object.entries(params).reduce((acc, [key, value]) => {
        return acc.replace(`{${key}}`, value);
    }, path);
};
