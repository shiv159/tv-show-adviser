import axios from "axios";
import { base_url, api_key } from "../config";
export class TvShowAPI {
    static async fetchPopulars() {
        try {
            const response = await axios.get(`${base_url}tv/popular${api_key}`);
            return response.data.results;
        } catch (error) {
            alert("Fetch populer tv shows not working")
        }


    }
    static async fetchRecommendations(tvShowId) {
        try {
            const response = await axios.get(`${base_url}tv/${tvShowId}/recommendations${api_key}`);
            return response.data.results;
        } catch (error) {

            alert("fetchRecommendations shows not working")
        }
    }

    static async fetchByTitle(title) {
        try {
            const response = await axios.get(`${base_url}search/tv${api_key}&query=${title}`);
            return response.data.results;
        } catch (error) {
            alert("fetchByTitle tv shows not working")
        }


    }


}