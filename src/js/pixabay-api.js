import axios from "axios";
import { query, showLoader, currentPage, pageLimit} from "../main";

const apiClient = axios.create ({
    baseURL: "https://pixabay.com/api/",
})

export async function getImages() {
    const params = {
        key: "43022038-5a6e0a87a795a8bbaa0a62c30",
        q: query,
        per_page: pageLimit,
        page: currentPage,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    };

    showLoader();

    const response = await apiClient.get("", { params })
    return response.data;
};
