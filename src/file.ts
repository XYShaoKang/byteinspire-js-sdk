import base64Arraybuffer from 'base64-arraybuffer';
import { getType } from 'mime';

import Module from './module';
import InspireCloud, { Headers } from './inspirecloud';
import filePreprocesser from './utils/file-preprocesser';

import { MAX_FILE_SIZE } from './const';

interface FileUploadOptions {
  token: string;
  region?: string;
}

export default class FileModule extends Module {
  constructor(inspirecloud: InspireCloud) {
    super(inspirecloud);
    this.name = 'file';
  }

  async upload(
    filename: string,
    file: string | object | Blob | Uint8Array,
    options: FileUploadOptions
  ) {
    // eslint-disable-next-line no-console
    console.warn(
      'Direct file transfer from the client does not guarantee security. It is recommended to migrate file uploading to the cloud function in the production environment.'
    );
    if (!filename) {
      throw new Error('Please specify the filename');
    }
    if (!options) {
      throw new Error('Please specify the options');
    }
    const { region = 'cn', token } = options;

    if (!token) {
      throw new Error('Please specify token to invoke upload');
    }

    let data: ArrayBuffer | string;

    try {
      data = await filePreprocesser(file);

      if ((data as ArrayBuffer).byteLength > MAX_FILE_SIZE) {
        throw new Error('Exceed max file size 10 MB');
      }

      const headers: Headers = {
        'x-tt-file-name': encodeURIComponent(filename),
        'Content-Type': getType(filename) || 'application/octet-stream',
        'x-tt-region': region,
        'x-ic-client-upload-token': token
      };

      if (typeof wx !== 'undefined' || typeof tt !== 'undefined') {
        headers['x-tt-base64-encoded'] = 'true';
        data = base64Arraybuffer.encode(data as ArrayBuffer);
      }

      const res = await this.inspirecloud.httpInstance.request({
        headers,
        data,
        url: '/--file',
        method: 'POST'
      });

      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
