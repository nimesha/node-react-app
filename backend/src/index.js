import App from "./app.js";

import { PORT } from "./config/index.js";

App.listen(PORT, () => {
  console.log(` App is running on PORT ${PORT} `);
});

App.use((error, req, res, next) => {
  if (error instanceof Error) {
    res.send({
      errorType: "Internal server Error",
      errorMessage: error.message,
      errorCode: 500,
    });
  }
});
