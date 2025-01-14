import { actionHandler } from "../api";

const loginUrl = 'api/method/develop.rest.custom_login';

export const login = async (payload) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await actionHandler({
            url: loginUrl,
            method: 'POST',
            data: payload,
        });
        if (response) {
            localStorage.setItem('accessToken', `${response?.data?.message?.api_key}:${response?.data?.message?.api_secret}`);
        }
        return response?.data
    } catch (error) {
        throw error;
    }
};
