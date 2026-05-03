import axios from "axios";

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

/**
 * Base infrastructure class that creates and exposes a pre-configured Axios instance.
 * All bounded-context API gateways extend this class.
 *
 * @class BaseApi
 */
export class BaseApi {
    /** @type {import('axios').AxiosInstance} */
    #http;

    /**
     * Initialises the Axios instance with the platform base URL and default headers.
     */
    constructor() {
        this.#http = axios.create({
            baseURL: platformApi,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

    /**
     * The shared Axios HTTP client.
     * @returns {import('axios').AxiosInstance}
     */
    get http() {
        return this.#http;
    }
}