import { actionHandler } from "../api";

const InitialRegUrl = `/api/method/frappe.core.doctype.user.user.sign_up`

export const createUser = async (payload) => {
    try {
        const { data } = await actionHandler({
            url: InitialRegUrl,
            method: 'POST',
            data: payload,
        });
        return data;
    } catch (error) {
        throw error;
    }
}

