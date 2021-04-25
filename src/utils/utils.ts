import {
  FUNCTION_BASE_URL
} from '../const';

export function getBaseURL(serviceId: string): string {
  return FUNCTION_BASE_URL.replace('{serviceId}', serviceId);
}
