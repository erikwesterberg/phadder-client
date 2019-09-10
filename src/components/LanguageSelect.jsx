import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import "../css/style.css";

import { I18nContext } from "../i18n/index";

const LanguageSelect = props => {
  const { langCode, dispatch } = useContext(I18nContext);

  const onLanguageSelect = e =>
    dispatch({ type: "setLanguage", payload: e.target.value });

  const renderOption = (code, display) => (
    <button
      id="language-button"
      onClick={onLanguageSelect}
      value={code}
      selected={code === langCode}
    >
      {display}
    </button>
  );

  return (
    <div id="language-select">
      <Button id="drop-button">Language</Button>
      <div id="language-options">
        {renderOption("EN", "English")}
        {renderOption("SV", "Swedish")}
      </div>
    </div>
  );
};

export default LanguageSelect;
