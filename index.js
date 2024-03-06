// EXAMPLE 1 - Mark the directly enclosing function as `async`

// ✅ now marked as async
async function getNum() {
  const num = await Promise.resolve(100);

  return num;
}

getNum().then(result => {
  console.log(result);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using top-level await

// const result = await Promise.resolve(42);

// console.log(result); // 👉️ 42
