import React from "react";
import app_config from "../../config";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import ReactDomServer from "react-dom/server";
import Preview from "./Preview";
import { Link } from "react-router-dom";

const ExtCreator = () => {
  const { themeColor, colorThemes, pageDesigns, apiUrl, themeColorLight } =
    app_config;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );


  const [driveLink, setDriveLink] = useState('');
  const [sheetLink, setSheetLink] = useState('');
  const [calenderLink, setCalenderLink] = useState('');

  const [blockData, setBlockData] = useState([
    {
      link: "http://mail.google.com",
      text: "Gmail",
      jsx: <div>
        <h3>Recording Tool</h3>
        <hr />
        <button className="btn btn-primary my-3" id="startrec">Start Recording</button>
        <button className="btn btn-primary my-3" disabled id="stoprec">Stop Recording</button>
      </div>,
      image: "",
    },
    {
      link: "http://mail.google.com",
      text: "Gmail",
      image: "",
      jsx: <div>
        <h3>Drive Folder</h3>
        <hr />
        <iframe style={{backgroundColor: '#fff', width: '100%', height: '130%'}} src={driveLink} width="600" height="500" frameborder="0"></iframe>
      </div>
    },
    {
      link: "http://mail.google.com",
      text: "Google Sheet",
      image: "",
      jsx: <div>
      <h3>Google Sheet</h3>
      <hr />
      <iframe style={{backgroundColor: '#fff', width: '100%', height: '130%'}} src={sheetLink}></iframe>
    </div>
    },
    {
      link: "http://mail.google.com",
      text: "Manage Clipboard",
      image: "",
      jsx : <div>
      <h3>Manage Clipboard</h3>
      <hr />
      {/* <iframe src="https://calendar.google.com/calendar/embed?src=triplem656%40gmail.com&ctz=Asia%2FKolkata" style={{border: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
    </div>
    },
    {
      link: "http://mail.google.com",
      text: "Google Calender",
      image: "",
      jsx: <div>
      <h3>Google Calender</h3>
      <hr />
      <iframe src={calenderLink} style={{border: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
    },
  ]);

  const [showSidebar, setShowSidebar] = useState(true);

  const widgets = [
    {
      name: "DriveFolder",
    },
    {
      name: "ScreenRecorder",
    },
    {
      name: "GoogleSheet",
    },
    {
      name: "ClipBoard",
    },
    {
      name: "GoogleCalendar",
    },
  ];

  const [usedWidgets, setUsedWidgets] = useState([]);
  const [selWidget, setSelWidget] = useState(null);

  const [downloadLink, setDownloadLink] = useState("");
  // Define the contents of the manifest.json file
  const manifest = {
    name: "My Custom Tab Extension",
    version: "1.0",
    manifest_version: 2,
    description: "Opens a new custom tab inside the browser",
    permissions: ["tabs"],
    background: {
      scripts: ["background.js"],
      persistent: false,
    },
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [selDesign, setSelDesign] = useState(0);
  const [selTheme, setSelTheme] = useState(0);

  // Define the contents of the background.js file
  const background = `
  chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({url: "https://www.example.com"});
  });
  `;

  const exportExtension = async () => {
    // console.log(pageDesigns[0].content(colorThemes[0]));
    const jsxText = ReactDomServer.renderToStaticMarkup(
      pageDesigns[0].content(colorThemes[0], blockData)
    );
    console.log(jsxText);
    const res = await fetch(`${apiUrl}/extension/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename: "custom_filename",
        imagesData: ["default_icon48.png", "default_icon128.png"],
        manifestData: "",
        scriptData: "",
        features : usedWidgets,
        htmlData: jsxText,
      }),
    });

    console.log(res.status);
    const { downloadLink, filename } = await res.json();
    saveExtensionData(filename);
    console.log(downloadLink);
    setDownloadLink(downloadLink);
  };

  const showThemes = () => {
    return colorThemes.map(({ name, background, dark, text }, index) => (
      <div className="col-md-2">
        <div
          className="card"
          onClick={(e) => setSelTheme(index)}
          style={{
            backgroundColor: background,
            border: `2px solid ${dark}`,
            color: text,
          }}
        >
          <div className="card-body">
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    ));
  };

  const showDesigns = () => {
    return pageDesigns.map(({ name }, index) => (
      <div className="col-md-2">
        <div className="card" onClick={(e) => setSelDesign(index)}>
          <div className="card-body">{name}</div>
        </div>
      </div>
    ));
  };

  const Step1 = () => {
    return (
      <>
        <p className="step-num">01</p>
        <div className="card">
          <div className="card-header">
            <span className="h5 fw-bold m-0">
              Select Page Design for your Extension
            </span>
            <button
              onClick={(e) => setCurrentStep(2)}
              className="btn btn-success float-end"
            >
              Next Step&nbsp;<i class="fas fa-arrow-right"></i>{" "}
            </button>
          </div>
          <div className="card-body">
            <h1>Select Color Theme</h1>
            <div className="row my-3">{showThemes()}</div>
            <h1>Select Page Layout</h1>
            <div className="row my-3">{showDesigns()}</div>
          </div>
        </div>
        <h3 className="mt-5">Preview</h3>
        <Preview
          selDesign={selDesign}
          selTheme={selTheme}
          blockData={blockData}
        />
      </>
    );
  };

  const toggleWidget = (widgetName) => {
    if (usedWidgets.includes(widgetName)) {
      setUsedWidgets(usedWidgets.filter((w) => w !== widgetName));
    } else {
      setUsedWidgets([...usedWidgets, widgetName]);
    }
  };

  const displayWidgetOptions = () => {
    return widgets.map(({ name }, index) => (
      <div className="col-md-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id={name}
            checked={usedWidgets.includes(name)}
            onChange={(e) => toggleWidget(name)}
          />
          <label class="form-check-label" for={name}>
            {name}
          </label>
        </div>
      </div>
    ));
  };

  const showUsedWidgets = () => {
    return usedWidgets.map((widgetName, index) => (
      <button
        className={`btn btn-${
          selWidget === index ? "secondary" : "primary"
        } my-2`}
        onClick={(e) => setSelWidget(index)}
      >
        {widgetName}
      </button>
    ));
  };

  const Step2 = () => {
    return (
      <>
        <p className="step-num">02</p>
        <div className="card">
          <div className="card-header">
            <span className="h5 fw-bold m-0">
              Select Widgets for your Extension
            </span>
            <button
              onClick={(e) => setCurrentStep(3)}
              className="btn btn-success float-end"
            >
              Next Step&nbsp;<i class="fas fa-arrow-right"></i>
            </button>
            <button
              onClick={(e) => setCurrentStep(1)}
              className="btn btn-success float-end"
            >
              Prev Step&nbsp;<i class="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className="card-body">
            <label>Drive Link</label>
            <input className="form-control mb-3" onChange={e => setDriveLink(e.target.value)} />
            <label>Sheet Link</label>
            <input className="form-control mb-3" onChange={e => setSheetLink(e.target.value)} />
            <label>Calender Link</label>
            <input className="form-control mb-3" onChange={e => setCalenderLink(e.target.value)} />
            <div className="row my-2">
              {displayWidgetOptions()}
              <hr />
              <div className="row">
                <div className="col-md-2">{showUsedWidgets()}</div>
                <div className="col-md-8"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Step3 = () => {
    return (
      <>
        <p className="step-num">03</p>
        <div className="card">
          <div className="card-header">
            <span className="h5 fw-bold m-0">Export Extension</span>
            {/* <button onClick={e=> setCurrentStep(3)} className="btn btn-success float-end">Next Step&nbsp;<i class="fas fa-arrow-right"></i> </button> */}
            <button
              onClick={(e) => setCurrentStep(2)}
              className="btn btn-success float-end"
            >
              Prev Step&nbsp;<i class="fas fa-arrow-left"></i>{" "}
            </button>
          </div>
          <div className="card-body">
            <div className="row mt-4">
              <div className="col-md">
                <button
                  className="btn btn-success btn-lg"
                  onClick={exportExtension}
                >
                  <i class="fas fa-file-export"></i> &nbsp; Get Extension File
                </button>
                &nbsp;&nbsp;&nbsp;
                {downloadLink && (
                  <Link className="btn btn-secondary btn-lg" to={downloadLink}>
                    <i class="fas fa-download"></i> &nbsp; Download
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const displayStep = () => {
    if (currentStep === 1) return Step1();
    else if (currentStep === 2) return Step2();
    else if (currentStep === 3) return Step3();
  };

  const saveExtensionData = async (filename) => {
    const res = await fetch(apiUrl + "/extension/add", {
      method: "POST",
      body: JSON.stringify({
        user: currentUser,
        extensionData: {},
        zipfile: filename,
        created_at: new Date(),
        updated_at: new Date(),
      }),
    });

    console.log(res);
  };

  return (
    <div style={{ backgroundColor: themeColorLight, minHeight: "100vh", backgroundAttachment: 'fixed' }}>
      <div className="container-fluid">
        {showSidebar ? (
          <button
            className="btn btn-secondary"
            onClick={(e) => setShowSidebar(false)}
          >
            Hide
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={(e) => setShowSidebar(true)}
          >
            Show
          </button>
        )}
        <div className="row">
          {showSidebar && (
            <div className="col-md-2">
              <button
                className={`btn btn-${
                  currentStep === 1 ? "secondary" : "primary"
                } btn-lg w-100 my-2`}
                onClick={(e) => setCurrentStep(1)}
              >
                Step 1
              </button>
              <button
                className={`btn btn-${
                  currentStep === 2 ? "secondary" : "primary"
                } btn-lg w-100 my-2`}
                onClick={(e) => setCurrentStep(2)}
              >
                Step 2
              </button>
              <button
                className={`btn btn-${
                  currentStep === 3 ? "secondary" : "primary"
                } btn-lg w-100 my-2`}
                onClick={(e) => setCurrentStep(3)}
              >
                Step 3
              </button>
              {/* <button
                className={`btn btn-${
                  currentStep === 4 ? "secondary" : "primary"
                } btn-lg w-100 my-2`}
                onClick={(e) => setCurrentStep(4)}
              >
                Step 4
              </button> */}
            </div>
          )}

          <div className="col-md">{displayStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default ExtCreator;
