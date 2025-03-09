import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    sharedIterations: {
      executor: 'shared-iterations',
      vus: 10,        // 10 virtual users
      iterations: 100, // Total of 100 iterations
    },
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
