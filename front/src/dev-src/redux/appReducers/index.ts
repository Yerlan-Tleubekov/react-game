import { clone, objectClone } from "src/dev-src/utils";
import {
  SET_APP_SETTINGS,
  SET_APP_SETTINGS_ICON,
  SET_APP_SETTINGS_PLAYGROUND,
  SET_APP_SETTINGS_PLAYGROUND_SIZE,
  SET_RESTART,
} from "../appActions";

type settingsType = {
  size: string;
  playground: number;
  icons: number;
  music: number;
  sound: number;
};

type initialStateType = {
  restart: boolean;
  settings: settingsType;
};

type actionType = {
  type: string;
  payload?: any;
};

const initialState: initialStateType = {
  restart: false,
  settings: {
    size: "medium",
    playground: 0,
    icons: 0,
    music: 0,
    sound: 0,
  },
};

const appReducer = (
  state: initialStateType = initialState,
  action: actionType
) => {
  const { type, payload } = action;
  let newState: initialStateType;

  switch (type) {
    case SET_APP_SETTINGS:
      newState = objectClone(state);
      newState.settings = payload;
      return newState;

    case SET_APP_SETTINGS_ICON:
      newState = objectClone(state);
      console.log("newState", newState);
      newState.settings.icons = payload;
      return newState;
    case SET_APP_SETTINGS_PLAYGROUND:
      newState = objectClone(state);
      newState.settings.playground = payload;
      return newState;
    case SET_APP_SETTINGS_PLAYGROUND_SIZE:
      newState = objectClone(state);
      newState.settings.size = payload;
      return newState;
    case SET_RESTART:
      newState = objectClone(state);
      newState.restart = payload;
      return newState;

    default:
      return state;
  }
};

export default appReducer;
