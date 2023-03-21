import React, { useState, useEffect } from "react";
import "./styles.css";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [todoText, setTodoText] = useState("")
  const [incompleteTodos, setIncompleteTODOs] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTODOs] = useState(["ううう"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [ ...incompleteTodos, todoText];
    setIncompleteTODOs(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTODOs(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTODOs(newIncompleteTodos);
    setCompleteTODOs(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.slice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTODOs(newIncompleteTodos);
    setCompleteTODOs(newCompleteTodos);

  }
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" calue={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="incomplete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};