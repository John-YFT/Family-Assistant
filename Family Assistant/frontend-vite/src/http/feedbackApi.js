import { $authHost } from "./index";

export const createFeedback = async (feedback) => {
    const { data } = await $authHost.post('api/feedback/about', feedback);
    return data;
}; 