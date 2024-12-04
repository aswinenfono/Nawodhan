import { actionHandler } from "../api";

const loginUrl = 'api/method/frappe.core.doctype.user.user.login';

export const login = async (payload) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await actionHandler({
            url: loginUrl,
            method: 'POST',
            data: payload,
        });
        if (response) {
            localStorage.setItem('accessToken', 'df9bc3921c8c000:22534a6d74a03e4');
        }
        return response?.data
    } catch (error) {
        throw error;
    }
};
