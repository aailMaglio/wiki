
---

### 📄 `redux.md`

```md
# Redux

Redux is a **state management** library often used with React.

## Concepts

- Store: holds the state
- Actions: describe what happened
- Reducers: handle actions and update the state

## Example

```js
const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + 1;
  return state;
};
