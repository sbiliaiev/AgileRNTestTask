export default function requestMiddleware(api: Object) {
  return ({ dispatch, getState }: { dispatch: Function, getState: Function }) =>
    (next: Function) => (action: Object) => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, types = [null, null, null], ...rest } = action;
      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      const nextIfHaveAction = (subAction) => {
        if (subAction && subAction.type) {
          return next(subAction);
        }
        return null;
      };
      next({ ...rest, type: REQUEST });

      return promise.then(
        (result) => nextIfHaveAction({ ...rest, result, type: SUCCESS }),
        (error) => {
         nextIfHaveAction({ ...rest, error, type: FAILURE });
        }
      ).catch((error) => {
        nextIfHaveAction({ ...rest, error, type: FAILURE });

        throw error;
      });
    };


function someActionCreator() {
  return {
    types: [startAction, succesAction, failAction],
    promise: {}
  };
}