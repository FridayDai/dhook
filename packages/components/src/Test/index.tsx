function request1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('request1');
    }, 1000);
  });
}

function request2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('request2');
    }, 1200);
  }).catch(err => 'request2 err');
}

Promise.all([request1(), request2()]).then((res) => {
  console.log(res);
});
