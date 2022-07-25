export const partialize = (fn, ...args) => {
  return fn.bind(null, ...args)
};


export const compose = (...fns) => value => {
  return fns.reduceRight((previousValue, fn) => 
    fn(previousValue), value);
}

export const pipe = (...fns) => value => {
  return fns.reduce((previousValue, fn) => 
    fn(previousValue), value);
};

export const takeUntil = (times, fn) => {
  return () => {
    if(times-- > 0){
      fn();
    };
  };
}

export const debounceTime = (milliseconds, fn) => {
  let timer = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, milliseconds);
  }
}