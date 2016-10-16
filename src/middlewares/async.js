export default function ({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) { // .then is a specific property of a promise
      return next(action);
    }

    action.payload.then(responce => {
      //keep existing type and change payload to resolved promise
      const newAction = { ...action, payload: responce };
      dispatch(newAction);
    });
  };
}
