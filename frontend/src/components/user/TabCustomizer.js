import React, { useState } from 'react'
import app_config from '../../config';

const TabCustomizer = () => {

    const { pageDesigns, colorThemes } = app_config;
    const [selDesign, setSelDesign] = useState(0);
    const [selTheme, setSelTheme] = useState(2);



  return (
    <div></div>
  )
}

export default TabCustomizer;