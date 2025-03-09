import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    constantArrivalRate: {
      executor: 'constant-arrival-rate',
      rate: 100,       // 100 iterations per second
      timeUnit: '1s',  // Rate is per second
      duration: '1m',  // Run for 1 minute
      preAllocatedVUs: 50, // Initial VUs available
      maxVUs: 100,     // Maximum VUs if needed
    },
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
