import React, { useState } from "react";
import app_config from "../../config";

const Preview = ({ selDesign, selTheme, blockData }) => {
  const { pageDesigns, colorThemes } = app_config;
  
  console.log(pageDesigns[selDesign].name);

  return pageDesigns[selDesign].content(colorThemes[selTheme], blockData);
};

export default Preview;