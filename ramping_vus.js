import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 VUs in 30 seconds
    { duration: '1m', target: 20 },  // Stay at 20 VUs for 1 minute
    { duration: '30s', target: 0 },  // Ramp down to 0 VUs in 30 seconds
  ],
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
