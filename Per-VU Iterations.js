import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    perVuIterations: {
      executor: 'per-vu-iterations',
      vus: 10,        // 10 virtual users
      iterations: 5,  // Each VU performs 5 iterations
    },
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
