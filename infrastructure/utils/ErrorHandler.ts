export const ErrorHandler = async (res: any, status: any, message: any) => {
    switch (status) {
        case 400:
            return await res.status(400).json({
                status: status,
                message: message,
            });
        default:
            break;
    }
};
