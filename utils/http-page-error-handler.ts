export default function httpPageErrorHandler(error: any): any {
    const httpError = ((error || {}).response || {}) || error || null;

    if (!httpError) {
        return error || null;
    }

    return {
        ...httpError,
        statusCode: httpError.status
    };
}
