import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,       // 10 virtual users
  duration: '1m', // Run for 1 minute
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
