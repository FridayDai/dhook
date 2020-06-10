// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
//
// export default () => {
//   const [count, setCount] = useState(0);
//
//   console.log('render');
//
//   return (
//     <div>
//       <div>{`count: ${count}`}</div>
//       <button onClick={() => {
//         setTimeout(() => {
//           setCount(count + 1);
//           setCount(count + 1);
//         }, 0);
//       }}>click to add</button>
//     </div>
//   )
// }

const coins = [1,2,5];
function dp(target) {
  if(target === 1) return 1;
  if(target === 0) return 0;
  if(target < -1) return -1;
  let res;
  for(let i = 0; i < coins.length; i++) {
    res = Math.min(dp(target - coins[i]) + 1, dp(target));
  }

  return res;
}

console.log(dp(9));
