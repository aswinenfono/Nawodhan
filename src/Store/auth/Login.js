import { actionHandler } from "../api";

const loginUrl = `/api/method/login`;

export const login = async (payload) => {
    try {
        const { data } = await actionHandler({
            url: loginUrl,
            method: 'POST',
            data: payload,
        });
        if (data?.token) {
            const token = data.token
            localStorage.setItem("accessToken", token)
        }
        return data;
    } catch (error) {
        throw error;
    }
};