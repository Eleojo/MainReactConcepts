import { useReducer } from "react";

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    balance: 0,
    amount: 0,
  });
  function reducer(state, action) {
    if (action.type == "withdraw") {
      return { ...state, balance: state.balance - state.amount };
    }
    if (action.type == "deposit") {
      return { ...state, balance: state.balance + state.amount };
    }

    if (action.type == "amount") {
      return { ...state, amount: action.payload };
    }
  }
  return (
    <div>
      {/* <UseReducer /> */}
      <h1>Balance: {state.balance}</h1>
      choose amount to withdraw or deposit:
      <input
        onChange={(e) =>
          dispatch({ type: "amount", payload: Number(e.target.value) })
        }
        value={state.amount}
        type="text"
      />
      <button
        onClick={() => dispatch({ type: "withdraw", payload: state.amount })}
      >
        Withdraw
      </button>
      <button
        onClick={() => dispatch({ type: "deposit", payload: state.amount })}
      >
        Deposit
      </button>
    </div>
  );
}
