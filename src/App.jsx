import React, { useState, useEffect } from "react";
import "./styles.css";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
          <li>あああああ</li>
          <button>完了</button>
          <button>削除</button>
          </div>
          <div>
          <li>いいいい</li>
          <button>完了</button>
          <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了したTODO</p>
        <ul>
        </ul>
      </div>
    </>
  );
};