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
            console.log(response)
            // localStorage.setItem('accessToken', '2dae90c706fcdf6:7f916282f919b36');
        }
        return response?.data
    } catch (error) {
        throw error;
    }
};
