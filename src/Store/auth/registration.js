import { actionHandler } from "../api";

const createUserUrl = `/api/method/frappe.core.doctype.user.user.sign_up`

export const createUser = async (payload) => {
    try {
        const { data } = await actionHandler({
            url: createUserUrl,
            method: 'POST',
            data: payload,
        });
        return data;
    } catch (error) {
        throw error;
    }
}

