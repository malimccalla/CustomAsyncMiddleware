# Async Middleware

A little app built to expand knowledge of building custom middle in React/Redux.

```
export default function ({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then(responce => {
      const newAction = { ...action, payload: responce };
      dispatch(newAction);
    });
  };
}
```
