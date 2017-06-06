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

const signOut = () =>
  new Promise((resolve, reject) => {
    resolve({
      status: '200',
      message: 'successfully signed out',
    });
    reject({
      status: '404',
      message: 'error at signed out',
    });
  });

export default {
  signIn,
  signOut,
};
