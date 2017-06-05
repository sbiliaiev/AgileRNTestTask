const signIn = ({ username, password }) =>
new Promise((resolve, reject) => {
  if (username === 'batman' && password === 'alfredonelove') {
    resolve({
      status: '200',
      username,
      password,
    });
  }
  reject({
    status: '404',
    message: 'Wrong credentials',
  });
});

export default {
  signIn,
};
