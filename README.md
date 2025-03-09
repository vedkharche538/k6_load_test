# k6 Load Test Options
## Introduction of K6

k6 is an open source tool for performance testing and load testing, primarily used to evaluate and validate the performance and stability of applications. Here are some key features and information about k6:

1. **Open Source:** k6 is a completely open source performance testing tool with code stored on GitHub. This means that users are free to access, use and modify the tool's source code.

2. **JavaScript scripting:** k6 uses the JavaScript language to write test scripts, which makes writing test cases relatively easy and more developer-friendly. Scripts can contain HTTP requests, WebSocket connections, script execution logic, and more.

3. **Support for multiple protocols:** k6 supports a variety of common protocols, including HTTP, WebSocket, Socket.IO, gRPC and so on, so it can be widely used in various types of applications. 4.

4. **Distributed Testing:** k6 has distributed testing capabilities, allowing tests to be run on multiple nodes to simulate a more realistic production environment load.

5. **Real-time results and reports:** k6 provides real-time results, including request response time, throughput, etc., and is able to generate detailed HTML reports to help users better understand the performance status of their applications.

6. **Containerization Support:** k6 adapts to containerized environments, can be easily integrated into CI/CD pipelines, and works with common container orchestration tools such as Kubernetes.

7. **Plugin ecosystem:** k6 supports plugins that allow users to extend its functionality to meet specific needs.

8. **Active Community:** Since k6 is an open source project, there is an active community that provides support, documentation, and examples to make it easier for users to get started and solve problems.

Overall, k6 is a flexible, powerful and easy-to-use performance testing tool for applications and systems of all sizes.

## Official website and documentation

- [Official website](https://k6.io/)
- [Official Documentation](https://k6.io/docs/)

## Installation

### Installation on Mac systems

Mac systems can install k6 via Homebrew:

```bash
brew install k6
```

### Windows installation

Windows systems can install k6 via Chocolatey:

```bash
choco install k6
```

Or you can install k6 via winget:

```bash
winget install k6
```

### Docker installation

k6 can also be installed via Docker:

```bash
docker pull grafana/k6
```

### Installation on other systems

In addition to the above systems, K6 also supports Linux (Debian/Ubuntu/Fedora/CentOS), and can be installed by downloading the K6 binaries and K6 extensions, please refer to the [official documentation](https://k6.io/docs/get-started/ For details on how to install K6, please refer to the official documentation ().

### Confirming a successful K6 installation

After the installation is complete, you can confirm that K6 has been installed successfully by using the following command:

```bash
k6 version
```

If the installation was successful, the k6 version information will be displayed:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/QR8wKb.png)

## First k6 test script

### Write the first test script

#### Create a new K6 performance testing project directory and go to

```bash
mkdir k6-demo
cd k6-demo
```

#### Create a file named `demo.js` for writing test scripts

- A test script file can be created with the `k6 new` command:

```bash
k6 new demo.js
```

- You can also create a test script file called demo.js directly

```bash
touch demo.js
```

#### Editing Test Scripts

If the test script file is created with the `k6 new` command, a simple test script is automatically generated as shown below:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 10,
  // A string specifying the total duration of the test run.
  duration: '30s',

  // The following section contains configuration options for execution of this
  // test script in Grafana Cloud.
  //
  // See https://grafana.com/docs/grafana-cloud/k6/get-started/run-cloud-tests-from-the-cli/
  // to learn about authoring and running k6 test scripts in Grafana k6 Cloud.
  //
  // ext: {
  //   loadimpact: {
  //     // The ID of the project to which the test is assigned in the k6 Cloud UI.
  //     // By default tests are executed in default project.
  //     projectID: "",
  //     // The name of the test in the k6 Cloud UI.
  //     // Test runs with the same name will be grouped.
  //     name: "demo.js"
  //   }
  // },

  // Uncomment this section to enable the use of Browser API in your tests.
  //
  // See https://grafana.com/docs/k6/latest/using-k6-browser/running-browser-tests/ to learn more
  // about using Browser API in your test scripts.
  //
  // scenarios: {
  //   // The scenario name appears in the result summary, tags, and so on.
  //   // You can give the scenario any name, as long as each name in the script is unique.
  //   ui: {
  //     // Executor is a mandatory parameter for browser-based tests.
  //     // Shared iterations in this case tells k6 to reuse VUs to execute iterations.
  //     //
  //     // See https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ for other executor types.
  //     executor: 'shared-iterations',
  //     options: {
  //       browser: {
  //         // This is a mandatory parameter that instructs k6 to launch and
  //         // connect to a chromium-based browser, and use it to run UI-based
  //         // tests.
  //         type: 'chromium',
  //       },
  //     },
  //   },
  // }
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function() {
  http.get('https://test.k6.io');
  sleep(1);
}
```

If the test script file was created directly, you can copy the above into the `demo.js` file.

#### Running the Test Script

In the directory where the `demo.js` file is located, run the following command:

```bash
k6 run demo.js
```

#### Check the test results

If all is well, you will see output similar to the following:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/a4vK69.png)

Contains the following information:

- **execution:** execution information, including start time, end time, duration, number of VUs, number of iterations, etc.
- **scenarios:** Scenario information, including scenario name, number of VUs, number of iterations, duration, average response time, throughput, and so on.
- **http_reqs:** HTTP request information, including request name, number of requests, number of failures, average response time, throughput, and so on.

#### Parsing demo test script

- `import http from 'k6/http';`: import k6's HTTP module, used to send HTTP request.

- `import { sleep } from 'k6';`: Import k6's sleep method to wait for script execution.

- `export const options = { ... }`: Define the configuration items of the test script, including the number of VUs, duration, etc.

- `vus: 10,`: define the number of VUs to be 10 (specify the number of VUs running concurrently).

- `duration: '30s',`: define the duration as 30 seconds (specify the total duration of the test run).

- `export default function() { ... }`: defines the logic of the test script, including sending HTTP requests, executing waits, and so on.

- `http.get('https://test.k6.io');`: send a GET request to `https://test.k6.io`.

- `sleep(1);`: wait 1 second for execution.

> The other comments can be ignored, they are about some advanced features of k6, which will be introduced later.

## K6 common function

### HTTP Requests

The first step in performance testing with K6 is to define the HTTP requests to be tested.

#### GET Request Example

A simple HTTP request for the GET method is already included in the demo test script created with the `k6 new` command:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function() {
  http.get('https://test.k6.io');
  sleep(1);
}
```

#### POST Request Example

This POST request example shows the application of some complex scenarios (POST request with email/password authentication load)

```javascript
import http from 'k6/http';

export default function () {
  const url = 'http://test.k6.io/login';
  const payload = JSON.stringify({
    email: 'aaa',
    password: 'bbb',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}

```

> The above is taken from [K6 Official Documentation](https://k6.io/docs/using-k6/http-requests)

#### Supported HTTP Methods

The HTTP module provided by K6 can handle various HTTP requests and methods. The following is a list of supported HTTP methods:

| NAME | VALUE |
| ------- | ------- |
| batch() | makes multiple HTTP requests in parallel (like e.g. browsers tend to do).|
| del() | makes an HTTP DELETE request.|
| get() | makes an HTTP GET request.|
| head()|  makes an HTTP HEAD request.|
| options()|  makes an HTTP OPTIONS request.|
| patch()|  makes an HTTP PATCH request.|
| post()|  makes an HTTP POST request.|
| put() | makes an HTTP PUT request.|
| request() | makes any type of HTTP request.|

#### HTTP Request Tags

K6 allows you to add tags to each HTTP request. Combining tags and grouping makes it easy to better organize in test results, group requests and filter results to organize analysis.

The following is a list of supported tags:

| NAME | DESCRIPTION |
| ------- | ------- |
| expected_response | By default, response statuses between 200 and 399 are true. Change the default behavior with `setResponseCallback`.|
| group | When the request runs inside a `group`, the tag value is the group name. Default is empty.|
| name | Defaults to URL requested|
| method | Request method (GET, POST, PUT etc.)|
| scenario|  When the request runs inside a `scenario`, the tag value is the scenario name. Default is `default`.|
| status|  response status|
| url | defaults to URL requested|

Examples of HTTP requests using tag and group tags will be shown in subsequent demos.

You can also refer to the official examples:[https://grafana.com/docs/k6/latest/using-k6/http-requests/](https://grafana.com/docs/k6/latest/using-k6/http-requests/)

### Metrics

The metrics are used to measure the performance of the system under test conditions. By default, k6 automatically collects built-in metrics. In addition to the built-in metrics, you can create custom metrics.

Metrics generally fall into four categories:

1. Counters: Summing values.
2. Gauges: Tracking the smallest, largest, and most recent values.
3. Rates: Tracking how often non-zero values occur.
4. Trends: Calculating statistical information (such as mean, mode, or percentile) for multiple values.

To ensure that test assertions meet the criteria, thresholds can be written based on the conditions of the metrics required by the performance test (the specifics of the expression depend on the type of metric).

For subsequent filtering of metrics, labels and groupings can be used, allowing for better organization of test results.

> The test results output file can export metrics in a variety of summary and fine-grained formats. For more information, refer to the results output documentation. (This section will be covered in more detail in the later part of the test results output documentation.)

#### K6 Built-in Metrics

Every k6 test execution emits both built-in and custom metrics. Each supported protocol also has its specific metrics.

##### Standard Built-in Metrics

Regardless of the protocol used in the test, k6 always collects the following metrics:

| Metric Name  | Type | Description |
| ------- | ------- | -------|
|vus |Gauge |Current number of active virtual users|
|vus_max| Gauge| Max possible number of virtual users (VU resources are pre-allocated, to avoid affecting performance when scaling up load )|
|iterations |Counter| The aggregate number of times the VUs execute the JS script (the default function).|
|iteration_duration |Trend |The time to complete one full iteration, including time spent in setup and teardown. To calculate the duration of the iteration’s function for the specific scenario, try this workaround|
|dropped_iterations| Counter| The number of iterations that weren’t started due to lack of VUs (for the arrival-rate executors) or lack of time (expired maxDuration in the iteration-based executors). About dropped iterations|
|data_received| Counter| The amount of received data. This example covers how to track data for an individual URL.|
|data_sent |Counter| The amount of data sent. Track data for an individual URL to track data for an individual URL.|
|checks| Rate |The rate of successful checks.|

##### HTTP-specific built-in metrics

HTTP-specific built-in metrics are generated only when the test makes HTTP requests.Other types of requests, such as WebSocket, do not generate these metrics.

> Note: For all http_req_* metrics, the timestamp is emitted at the end of the request. In other words, the timestamp occurs when k6 receives the end of the response body or when the request times out.

The following table lists HTTP-specific built-in metrics:

| Metric Name  | Type | Description |
| ------- | ------- | -------|
|http_reqs |Counter| How many total HTTP requests k6 generated.|
|http_req_blocked |Trend| Time spent blocked (waiting for a free TCP connection slot) before initiating the request. float|
|http_req_connecting |Trend |Time spent establishing TCP connection to the remote host. float|
|http_req_tls_handshaking| Trend| Time spent handshaking TLS session with remote host|
|http_req_sending |Trend| Time spent sending data to the remote host. float|
|http_req_waiting |Trend| Time spent waiting for response from remote host (a.k.a. “time to first byte”, or “TTFB”). float|
|http_req_receiving |Trend| Time spent receiving response data from the remote host. float|
|http_req_duration |Trend| Total time for the request. It’s equal to http_req_sending + http_req_waiting + http_req_receiving (i.e. how long did the remote server take to process the request and respond, without the initial DNS lookup/connection times). float|
|http_req_failed |Rate| The rate of failed requests according to setResponseCallback.|

##### Other built-in metrics

In addition to the standard built-in metrics and HTTP-specific built-in metrics, K6 built-in metrics also have other built-in metrics:

- Browser metrics : <https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#browser>
- Built-in WebSocket metrics : <https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#websockets>
- Built-in gRPC metrics : <https://grafana.com/docs/k6/latest/using-k6/metrics/reference/#grpc>

#### custom metrics

Besides the built-in metrics, you can create custom metrics. For example, you can compute a metric for your business logic, or use the Response.timings object to create a metric for a specific set of endpoints.

Each metric type has a constructor to create a custom metric. The constructor creates a metric object of the declared type. Each type has an add method to take metric measurements.

> Note: Custom metrics must be created in the init context. This limits memory and ensures that K6 can verify that all thresholds evaluate the defined metrics.

##### custom metrics demo

The following example demonstrates how to create a custom trend metrics for wait time:

> The demo_custom_metrics.js file in the project file already contains this demo example, which can be run directly to view the results.

###### 1.Import the Trend constructor from the k6/metrics module

```javascript
import { Trend } from 'k6/metrics';
```

> > The waiting time trend metrics is a Trends metrics, so the Trend constructor needs to be introduced from the k6/metrics module.

###### 2.Constructs a new custom metric Trend object in the init context

```javascript
const myTrend = new Trend('waiting_time');
```

> Construct a new custom metric Trend object in the init context, the object in the script is myTrend, and its metric is displayed as `waiting_time` in the resulting output.

###### 3.Use the add method in a script to record metric measurements

```javascript
export default function() {
  const res = http.get('https://test.k6.io');
  myTrend.add(res.timings.waiting);
}
```

> Use the add method in the script to record the metric measurement values. Here, `res.timings.waiting` is used, which is the waiting time.

###### 4.demo_custom_metrics.js Complete code of custom metric

```javascript
import http from 'k6/http';
import { Trend } from 'k6/metrics';

const myTrend = new Trend('waiting_time');

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  myTrend.add(res.timings.waiting);
  console.log(myTrend.name); // waiting_time
}
```

###### 5.Run demo_custom_metrics.js and view automated trending metrics

```bash
k6 run demo_custom_metrics.js
```

The running results are as follows:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/4tbqVc.png)

> As you can see, the custom metric `waiting_time` has been displayed in the result output.

For more information about custom metrics, please refer to the official documentation: [https://k6.io/docs/using-k6/metrics/#custom-metrics](https://k6.io/docs/using-k6/metrics/#custom-metrics)

### Checks

> This can also be understood as assertions, which verify the test results.

Checks are used to verify whether specific test conditions in different tests are correctly responded to, similar to how we conventionally verify test results in other types of tests to ensure that the system responds as expected.

For example, a check can ensure that the response status of a POST request is 201, or that the size of the response body matches expectations.

Checks are similar to the concept of assertions in many testing frameworks, but **K6 does not abort the test or end it in a failed state when verifications fail. Instead, k6 tracks the failure rate of failed verifications as the test continues to run**.

> Each check creates a rate metric. To make a check abort or cause the test to fail, it can be combined with thresholds.

Below, we will introduce how to use different types of checks and how to view check results in test results.

#### 1. Check HTTP Response Status

K6 checks are particularly useful for response assertions related to HTTP requests.

For example, the following code snippet checks that the HTTP response code is 200:

```javascript
import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  check(res, {
    'HTTP response code is status 200': (r) => r.status === 200,
  });
}
```

Running this script, you can see the following results:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/aTXnpy.png)

> When a script contains checks, the summary report shows how many test checks have passed.

In this example, note that the check "HTTP response code is status 200" is 100% successful when called.

#### 2. Check HTTP Response Body

In addition to checking the HTTP response status, you can also check the HTTP response body.

For example, the following code snippet checks that the HTTP response body size is 9591 bytes:

```javascript
import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  check(res, {
    'HTTP response body size is 9591 bytes': (r) => r.body.length == 9591,
  });
}
```

Running this script, you can see the following results:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/AmbL0E.png)

> When a script contains checks, the summary report shows how many test checks have passed.

In this example, note that the check "HTTP response body size is 9591 bytes" is 100% successful when called.

#### 3. Adding Multiple Checks

Sometimes, multiple checks need to be added in a single test script. You can directly add multiple checks in a single check() statement, as shown in the script below:

```javascript
import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('https://httpbin.test.k6.io');
  check(res, {
    'HTTP response code is status 200': (r) => r.status === 200,
    'HTTP response body size is 9591 bytes': (r) => r.body.length == 9591,
  });
}
```

Running this script, you can see the following results:

![ ](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/5yJyBw.png)

In this example, both checks pass successfully (the call is 100% successful).

> Note: When a check fails, the script will continue to execute successfully and will not return a "failed" exit status. If you need to fail the entire test based on check results, you must combine checks with thresholds. This is particularly useful in specific environments, such as integrating k6 into a CI pipeline or receiving alerts when scheduling performance tests.

### Thresholds

## References

- [Official K6 documentation: https://k6.io/docs/](https://k6.io/docs/)
- [Official website: https://k6.io/](https://k6.io/)








Up until now, you've been running the same script with a single VU and a single iteration. In this section, you'll learn how to scale that out and run a full-sized load test against your application.

Test options are configuration values that affect how your test script is executed, such as the number of VUs or iterations, the duration of your test, and more. They are also sometimes called "test parameters".

k6 comes with some default test options, but there are four different ways to change the test parameters for a script:
1. You can include command-line flags when running a k6 script (such as `k6 run --vus 10 --iterations 30`).
2. You can define [environment variables](https://k6.io/docs/using-k6/environment-variables/) on the command-line that are passed to the script.
3. You can define them within the test script itself.
4. You can include a configuration file.

For now, you'll learn to do the third option: defining test parameters within the script itself. The advantages of this approach are:
- Simplicity: no extra files or commands are required.
- Repeatability: Adding these parameters to the script make it easier for a colleague to run tests you've written.
- Version controllability: Changes to the test parameters can be tracked along with test code.

To use test options within a script, add the following lines to your script. By convention, it's best to add it after the import statements and before the default function, so that the options are easily read upon opening the script:

```js
export let options = {
  vus: 10,
  iterations: 40,
};
```

If you set multiple options, make sure you end each one with  `,`.

## VUs

```js
vus: 10,
```

In this line, you can change the number of virtual users that k6 will run.

Note that if you only define VUs and no other test options, you may get the following error:

```plain
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

WARN[0000] the `vus=10` option will be ignored, it only works in conjunction with `iterations`, `duration`, or `stages` 
  execution: local
     script: test.js
     output: -
```

If you set the number of VUs, you need to additionally specify how long those users should be executed for, using one of the following options:
- iterations
- durations
- stages

## Iterations

```js
  vus: 10,
  iterations: 40,
```

Setting the number of iterations in test options defines it for *all* users. In the example above, the test will run for a total of 40 iterations, with each of the 10 users executing the script exactly 4 times.

## Duration

```js
  vus: 10,
  duration: '2m'
```

Setting the duration instructs k6 to repeat (iterate) the script for each of the specified number of users until the duration is reached.

Duration can be set using `h` for hours, `m` for minutes, and `s` for seconds, like these examples:
- `duration: '1h30m'`
- `duration: '30s'`
- `duration: '5m30s'`

If you set duration but don't specify a number of VUs, k6 will use the default VU number of 1.

If you set the duration in conjunction with setting the number of iterations, the value that ends earlier is used. For example, given the following options:

```js
  vus: 10,
  duration: '5m',
  iterations: 40,
```

k6 will execute the test for 40 iterations or 5 minutes, *whichever ends earlier*. If it takes 1 minute to finish 40 total iterations, the test will end after 1 minute. If it takes 10 minutes to finish 40 total iterations, the test will end after 5 minutes.

### Stages

Defining iterations and durations both cause k6 to execute your test script using a [simple load profile](../XX-Future-Ideas/Parameters-of-a-load-test.md#Simple-load-profile): VUs are started, sustained for a certain time or number of iterations, and then ended.

![A simple load profile](../../images/load_profile-no_ramp-up_or_ramp-down.png)

_Simple load profile_

What if you want to add a [ramp-up or ramp-down](../XX-Future-Ideas/Parameters-of-a-load-test.md#ramp-up-and-ramp-down-periods), so that the profile looks more like this?

![Constant load profile, with ramps](../../images/load_profile-constant.png.png)

_Constant load profile, with ramps_

In that case, you may want to use [stages](https://k6.io/docs/using-k6/options/#stages).

```js
export let options = {
  stages: [
    { duration: '30m', target: 100 },
    { duration: '1h', target: 100 },
    { duration: '5m', target: 0 },
  ],
};
```

The stages option lets you define different steps or phases for your load test, each of which can be configured with a number of VUs and duration. The example above consists of three steps (but you can add more if you'd like).

1. The first step is a gradual ramp-up from 0 VUs to 100 VUs.
2. The second step defines the [steady state](../XX-Future-Ideas/Parameters-of-a-load-test.md#Steady-state). The load is held constant at 100 VUs for 1 hour.
3. Then, the third step is a gradual ramp-down from 100 VUs back to 0, at which point the test ends.

Stages are the most versatile way to define test parameters for a single scenario. They give you flexibility in shaping the load of your test to match the situation in production that you're trying to simulate.

## The full script so far

If you're using stages, here's what your script should look like so far:

```js
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30m', target: 100 },
    { duration: '1h', target: 100 },
    { duration: '5m', target: 0 },
  ],
};

export default function() {
  let url = 'https://httpbin.test.k6.io/post';
  let response = http.post(url, 'Hello world!');
  check(response, {
      'Application says hello': (r) => r.body.includes('Hello world!')
  });

  sleep(Math.random() * 5);
}
```

## Test your knowledge

### Question 1

You've been instructed to create a script that sends the same HTTP request exactly 100 times. Which of the following test options is the best way to accomplish this task?

A: Iterations

B: Stages

C: Duration


### Question 2

Given the test options as specified below, how long will the test be executed?

```js
export let options = {
  vus: 10,
  iterations: 3,
  duration: '1h',
};
```

A: 10 hours

B: As long as it takes to finish 3 iterations or 1h, whichever is shorter

C: 1 hour plus as long as it takes to finish 3 iterations


### Question 3

Which of the following test options will yield a stepped load pattern that adds 100 users within 10 minutes, holds that load steady for 30 minutes, and then continues that pattern until 300 VUs have been running for 30 minutes?

A: 
```js
export let options = {
  stages: [
    { duration: '10m', target: 100 },
    { duration: '30m', target: 100 },
    { duration: '10m', target: 200 },
    { duration: '30m', target: 200 },
    { duration: '10m', target: 300 },
    { duration: '30m', target: 300 },	  
  ],
};
```

B: 

```js
export let options = {
  stages: [
    { duration: '30m', target: 300 },
};
```

C: 

```js
export let options = {
  vus: 300,
  duration: '30m',
};
```


### Answers

1. A. Setting the number of iterations to 100 would be the best way to accomplish this task. Stages for [some executors](https://k6.io/docs/using-k6/scenarios/executors/ramping-arrival-rate) do allow you to do this as well, but not for all of them. Duration only changes how long the test will run for, not specifically how many times it iterates.
2. B. In the case of contradicting parameters, k6 will run for the shorter amount of time. In this case, 3 iterations will likely take less time than 1 hour, so the test will finish in less time than an hour.
3. A. B and C are incorrect because they both describe a test that will gradually and evenly add virtual users until there are 300 running. That is, the rate of increase is steady. A is the only correct one because it's the only one that includes a steady state (a period of no VU increases) between periods of ramp-up.
