export async function makeLogin({ email, password }) {
  console.log({
    email,
    password,
  });
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve(true);
    }, 1500);
  });
}
