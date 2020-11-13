import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LenghtenResponse, ShortenResponse } from './types';

export class ApiService {
  private headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    apikey: process.env.NEXT_PUBLIC_API_KEY || '',
  };

  protected client: AxiosInstance;

  public constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://localhost:8000/',
      headers: this.headers,
    });
  }

  public async shortenUrl(
    url: string
  ): Promise<AxiosResponse<ShortenResponse>> {
    return await this.client.post('short_url/hash', {
      long_url: url,
    });
  }

  public async getLongUrl(
    hash: string
  ): Promise<AxiosResponse<LenghtenResponse>> {
    return await this.client.get(`short_url/hash/${hash}`)
  }
}
