require('dotenv').config()
const config = {
  apiKey: process.env.REACT_APP_AK,
  authDomain: process.env.REACT_APP_AD,
  // databaseURL: process.env.<APIKEY>,
  projectId: process.env.REACT_APP_PJI,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MSI,
  appId: process.env.REACT_APP_AI,
  measurementId: process.env.REACT_APP_MMI,
}
export default config