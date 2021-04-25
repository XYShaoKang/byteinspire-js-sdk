import InspireCloud from '../src';
import {
  VALID_SERVICE_ID,
  VALID_FUNC_NAME,
  HOST_PATH,
  TEXT_RETURN_FUNC_NAME,
  FUNCTION_BASE_URL,
  SERVICE_ID
} from './const';

describe('InspireCloud', () => {
  test('Create a service with valid serviceId', () => {
    const inspirecloud = new InspireCloud({
      serviceId: VALID_SERVICE_ID,
      baseURL: HOST_PATH
    });
    expect(inspirecloud).toBeDefined();
  });

  test('Throw error when not specify serviceId', () => {
    function foo() {
      // eslint-disable-next-line
      new InspireCloud({
        serviceId: '',
        baseURL: HOST_PATH
      });
    }
    expect(foo).toThrow();
  });

  test('Run an exist function', async () => {
    const inspirecloud = new InspireCloud({
      serviceId: VALID_SERVICE_ID,
      baseURL: HOST_PATH
    });
    expect.assertions(1);
    const data = await inspirecloud.run(VALID_FUNC_NAME);
    expect(data).toMatchObject({ test: 'Hello World!' });
  });

  test('Reject when running invalid function', async () => {
    const inspirecloud = new InspireCloud({
      serviceId: VALID_SERVICE_ID,
      baseURL: HOST_PATH
    });
    expect.assertions(1);
    try {
      await inspirecloud.run('invalid_function');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  test('Should handle the text return of function', async () => {
    const inspirecloud = new InspireCloud({
      serviceId: VALID_SERVICE_ID,
      baseURL: HOST_PATH
    });
    expect.assertions(1);
    const data = await inspirecloud.run(TEXT_RETURN_FUNC_NAME);
    expect(data).toEqual('Some Text');
  });

  test('Set prod invoke base url when created by normal service id', async () => {
    const inspirecloud = new InspireCloud({
      serviceId: SERVICE_ID
    });
    expect(inspirecloud.configs.baseURL).toBe(
      `${FUNCTION_BASE_URL.replace('{serviceId}', SERVICE_ID)}`
    );
  });
});
