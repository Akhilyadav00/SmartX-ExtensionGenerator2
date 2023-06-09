const app_config = {
  apiUrl: "http://localhost:5000",
  title: "SmartX",
  themeColor: "#8a0086",
  themeColorLight: "#e1bbff",
  status: {
    login: {
      success: 200,
      fail: 401,
    },
  },
  pageDesigns: [
    {
      name: "Design1",
      content: (theme, blockData) => (
        <div className="vh-100">
          <div className="container p-4">
            <div className="row">
              <div className="col-md-4 mb-4">
                {/* <a href={blockData[0].link}> */}
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                  {blockData[0].jsx}
                  </div>
                </div>
                {/* </a> */}
              </div>
              <div className="col-md-4 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                  {blockData[1].jsx}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                  {blockData[2].jsx}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                  {blockData[3].jsx}
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                  {blockData[4].jsx}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Design2",
      content: (theme) => (
        <div className="vh-100">
          <div className="container p-4">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 2</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 4</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 6</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Design3",
      content: (theme) => (
        <div className="vh-100">
          <div className="container p-4">
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 4</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 5</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-4">
                <div
                  className="card h-500"
                  style={{
                    border: `2px solid ${theme.dark}`,
                    backgroundColor: theme.background,
                    color: theme.text,
                  }}
                >
                  <div className="card-body">
                    <p className="display-4 text-center">Block 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ],
  colorThemes: [
    {
      name: "theme1",
      background: "lightblue",
      dark: "darkblue",
      light: "lightblue",
      text: "black",
    },
    {
      name: "theme2",
      background: "#ffbdbd",
      dark: "#970000",
      light: "#ffbdbd",
      text: "#970000",
    },
    {
      name: "theme3",
      background: "#ffffb4",
      dark: "#ffe600",
      light: "#ffffb4",
      text: "#373200",
    },
  ],
};

export default app_config;
