import { CLIENT_VERSION_HEADER } from './const';
import request from './utils/request';
import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { getBaseURL } from './utils/utils';
import FileModule from './file';

const { version } = require('../package.json');
export type Config = {
  serviceId: string;
  baseURL?: string;
};

export type Headers = {
  [key: string]: string;
};

export type RunOptions = AxiosRequestConfig;

export interface IInspireCloud {}

export default class InspireCloud {
  public configs: Config;

  public version: string;

  public httpInstance: AxiosInstance;

  public file: FileModule;

  constructor(configs: Config) {
    if (!configs.serviceId) {
      throw new Error('Please specify serviceId');
    }

    this.configs = {
      serviceId: configs.serviceId,
      baseURL:
        configs.baseURL ||
        // @ts-ignore configs.baseUrl 为了兼容开发者输错的情况
        configs.baseUrl ||
        getBaseURL(configs.serviceId)
    };

    this.version = version;

    this.httpInstance = request.create({
      baseURL: this.configs.baseURL,
      timeout: 30 * 1000,
      headers: {
        'Content-Type': 'application/json',
        [CLIENT_VERSION_HEADER]: version
      }
    });

    this.file = new FileModule(this);
  }

  public async run(
    fnName: string,
    params: object = {},
    options: RunOptions = {}
  ) {
    try {
      const headers = options.headers || {};
      const resp = await this.httpInstance.request({
        params: {},
        method: 'POST',
        ...options,
        headers,
        maxContentLength: Infinity,
        url: `/${fnName}`,
        data: params || {}
      });
      return resp.data;
    } catch (error) {
      throw error;
    }
  }
}
