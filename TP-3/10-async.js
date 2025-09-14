
// A

function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), ms)
    )
  ]);
}


// B

function allSettledLite(promises) {
  return Promise.all(
    promises.map(p =>
      Promise.resolve(p)
        .then(value => ({ status: "fulfilled", value }))
        .catch(reason => ({ status: "rejected", reason }))
    )
  );
}

// helpers
const ok = () => Promise.resolve(42);
const falla = () => Promise.reject("boom");

// A) withTimeout
withTimeout(ok(), 1000)
  .then(res => console.log("OK:", res))
  .catch(err => console.error("ERR:", err.message));

withTimeout(new Promise(r => setTimeout(() => r("tarde"), 2000)), 1000)
  .then(res => console.log(res))
  .catch(err => console.error(err.message)); 

// B) allSettledLite
allSettledLite([ok(), falla()]).then(console.log);


