export function measurePerformance(func, funcParams) {
  const startTime = performance.now();
  const result = func(funcParams);
  const endTime = performance.now();

  console.info('---------------------------');
  console.info(`Function: ${func.name}`);
  console.info('-------------');
  console.info(`Result: ${result}`);
  console.info('-------------');
  console.info(`Time taken: ${endTime - startTime} milliseconds`);
  console.info('---------------------------');

  return 0;
}
