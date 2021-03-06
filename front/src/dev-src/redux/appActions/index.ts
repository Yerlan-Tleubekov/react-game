export const SET_APP_SETTINGS = "app:setAppSettings";
export const SET_APP_SETTINGS_ICON = "app:setAppSettingsIcon";
export const SET_APP_SETTINGS_PLAYGROUND = "app:setAppSettingsPlayground";
export const SET_APP_SETTINGS_PLAYGROUND_SIZE =
  "app:setAppSettingsPlaygroundSize";
export const SET_RESTART = "app:setRestartGame";

export const setAppSettings = (payload: any) => {
  return {
    type: SET_APP_SETTINGS,
    payload,
  };
};

export const setAppSettingsIcon = (payload: any) => {
  return {
    type: SET_APP_SETTINGS_ICON,
    payload,
  };
};

export const setAppSettingsPlayground = (payload: any) => {
  return {
    type: SET_APP_SETTINGS_PLAYGROUND,
    payload,
  };
};

export const setAppSettingsPlaygroundSize = (payload: any) => {
  return {
    type: SET_APP_SETTINGS_PLAYGROUND_SIZE,
    payload,
  };
};

export const setRestartGame = (payload: boolean) => {
  return {
    type: SET_RESTART,
    payload,
  };
};
