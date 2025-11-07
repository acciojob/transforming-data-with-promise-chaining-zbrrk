//your JS code here. If required.
//your JS code here
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  let num = Number(input.value);
  output.innerText = ""; // clear previous output

  // Step 1: show initial number after 2 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      output.innerText = `Result: ${num}`;
      resolve(num);
    }, 2000);
  })
    // Step 2: multiply by 2
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val * 2;
          output.innerText = `Result: ${val}`;
          resolve(val);
        }, 2000);
      });
    })
    // Step 3: subtract 3
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val - 3;
          output.innerText = `Result: ${val}`;
          resolve(val);
        }, 1000);
      });
    })
    // Step 4: divide by 2
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val / 2;
          output.innerText = `Result: ${val}`;
          resolve(val);
        }, 1000);
      });
    })
    // Step 5: add 10 (final result)
    .then((val) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          val = val + 10;
          output.innerText = `Final Result: ${val}`;
          resolve(val);
        }, 1000);
      });
    });
});
