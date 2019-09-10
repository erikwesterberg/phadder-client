import React, { useContext } from "react";

import { I18nContext } from "../i18n/index";

const LanguageSelect = props => {
  const { langCode, dispatch } = useContext(I18nContext);

  
  const onLanguageSelect = e =>
    dispatch({ type: "setLanguage", payload: e.target.value });

  const renderOption = code => (
    <option value={code} selected={code === langCode}>
      {code}
    </option>
  );

  return (
    <select id="language-select" onChange={onLanguageSelect}>
      {renderOption("EN")}
      {renderOption("SV")}
    </select>
  );
};

export default LanguageSelect;
