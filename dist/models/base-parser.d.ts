import { AxiosInstance } from 'axios';
import { BaseProvider, ProxyConfig } from '.';
declare abstract class BaseParser extends BaseProvider {
    constructor(baseUrl?: string, proxy?: ProxyConfig);
    private validUrl;
    /**
     * Set or Change the proxy config
     */
    setProxy(proxy: ProxyConfig): void;
    private rotateProxy;
    private toMap;
    protected client: AxiosInstance;
    /**
     * Search for books/anime/manga/etc using the given query
     *
     * returns a promise resolving to a data object
     */
    abstract search(query: string, ...args: any[]): Promise<unknown>;
}
export default BaseParser;
