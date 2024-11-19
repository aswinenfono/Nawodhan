import { actionHandler } from "../api";

const loginUrl = '/api/method/login';

export const login = async (payload) => {
    const response = await actionHandler({
        url: loginUrl,
        method: 'POST',
        data: payload,
    });
    return response?.data;
} 