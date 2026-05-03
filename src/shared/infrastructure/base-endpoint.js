/**
 * Generic infrastructure helper that wraps an Axios instance for a single REST endpoint.
 * Each bounded-context API gateway composes one or more instances of this class.
 *
 * @class BaseEndpoint
 */
export class BaseEndpoint {
    /**
     * @param {import('./base-api.js').BaseApi} baseApi - Shared API instance that provides the Axios client.
     * @param {string} endpointPath - URL path segment for this endpoint (e.g. `/categories`).
     */
    constructor(baseApi, endpointPath) {
        this.http = baseApi.http;
        this.endpointPath = endpointPath;
    }

    /**
     * Retrieves all resources from the endpoint.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the collection response.
     */
    getAll() {
        return this.http.get(this.endpointPath);
    }

    /**
     * Retrieves a single resource by its identifier.
     * @param {number|string} id - Resource identifier.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the resource response.
     */
    getById(id) {
        return this.http.get(`${this.endpointPath}/${id}`);
    }

    /**
     * Creates a new resource at the endpoint.
     * @param {Object} resource - Resource payload to send.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the created resource response.
     */
    create(resource) {
        return this.http.post(this.endpointPath, resource);
    }

    /**
     * Replaces an existing resource identified by its ID.
     * @param {number|string} id - Resource identifier.
     * @param {Object} resource - Updated resource payload.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the updated resource response.
     */
    update(id, resource) {
        return this.http.put(`${this.endpointPath}/${id}`, resource);
    }

    /**
     * Removes a resource by its identifier.
     * @param {number|string} id - Resource identifier.
     * @returns {Promise<import('axios').AxiosResponse>} Promise resolving to the delete response.
     */
    delete(id) {
        return this.http.delete(`${this.endpointPath}/${id}`);
    }
}