import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    rampingArrivalRate: {
      executor: 'ramping-arrival-rate',
      startRate: 0,    // Start at 0 iterations per second
      timeUnit: '1s',  // Rate is per second
      stages: [
        { duration: '30s', target: 50 }, // Ramp to 50 iterations/s in 30 seconds
        { duration: '1m', target: 100 }, // Then to 100 iterations/s for 1 minute
        { duration: '30s', target: 0 },  // Ramp down to 0 in 30 seconds
      ],
      preAllocatedVUs: 50, // Initial VUs
      maxVUs: 200,     // Maximum VUs
    },
  },
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
