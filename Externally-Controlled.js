import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    externallyControlled: {
      executor: 'externally-controlled',
      vus: 10,       // Starting VUs
      maxVUs: 50,    // Maximum VUs allowed
      duration: '5m', // Run for 5 minutes
    },
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
