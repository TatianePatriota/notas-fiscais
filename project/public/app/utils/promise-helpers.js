export function handleStatus(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.statusText);
  }
}

export const log = (param) => {
  console.log(param);
  return param;
};

export const timeoutPromisse = (milliseconds, promise) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Limite da promise excedido (limite: ${milliseconds} ms)`),
        milliseconds;
    });
  });
  return Promise.race([timeout, promise]);
};

export const delay = (milliseconds) => (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), milliseconds);
  });
};

export const retry = (retries, milliseconds, fn) =>
  fn().catch((err) => {
    console.log(retries);
    return delay(milliseconds)().then(() =>
      retries > 1 ? retry(retries - 1, milliseconds, fn) : Promise.reject(err)
    );
  });
