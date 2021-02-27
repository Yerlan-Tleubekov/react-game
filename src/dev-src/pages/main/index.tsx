import React, { useState } from "react";
import TicTacToeImg from "../../assets/images/tic-tac-toe.png";
import TicTacToeTitle from "../../assets/images/title.png";
import { MAIN_PAGE_BUTTONS } from "../../constants";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const [userName, setUserName] = useState("");

  const history = useHistory();

  function inputChangeHandler(e) {
    const { value } = e.target;

    setUserName(e.target.value);
  }

  function buttonClickHandler(path = "") {
    history.push(path);
  }

  return (
    <div className="main-page">
      <div className="main-page-container">
        <div className="main-page-img-cnt">
          <img className="main-page-img" src={TicTacToeImg} alt="tic-tac-toe" />
        </div>

        <div>
          <img className="w-100" src={TicTacToeTitle} alt="title" />
        </div>

        <div className="main-page__action-cnt">
          <div className="mb-1">
            <p className="title">Enter your name</p>
            <input
              value={userName}
              onChange={inputChangeHandler}
              type="text"
              placeholder="start input"
            />
          </div>

          <div className="main-page__buttons-group">
            {MAIN_PAGE_BUTTONS.map(([btnTitle, path], index) => (
              <Button
                title={btnTitle}
                key={index}
                onClick={() => buttonClickHandler(path)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
