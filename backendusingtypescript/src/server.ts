 import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { setupSwagger } from "./config/swagger";
// Import routes
//import userfeedback from "./routes/userfeedback";
//import pharmacyfeedback from "./routes/pharmacyfeedback";
//import getuserfeedback from "./routes/getuserfeedbackroute";
//import getpharmacyfeedback from "./routes/getpharmacyfeedback";
// import userInformation from "./routes/postUserInformation";
// import pharmacyinformation from "./routes/postPharmacyinformation";
// import unifiedfeedback from "./routes/unifiedFeedbackroute";
import {
  getpharmacyfeedback,
  getuserfeedback,
  savepharmacy,
  saveuser,
  unifiedfeedbacks,
  deletefeedbacks,
} from './routes';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
// Connect to database
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
setupSwagger(app);
// Grouped routes
const routes = [
 // { path: "/user", handler: userfeedback },
  //{ path: "/pharmacy", handler: pharmacyfeedback },
  { path: "/getuser", handler: getuserfeedback },
  { path: "/getpharmacy", handler: getpharmacyfeedback },
  {path:"/saveuser", handler:saveuser},
  {path:"/pharmacy", handler:savepharmacy},
  {path:"/unifiedfeedbacks",handler:unifiedfeedbacks},
  {path:'/delete',handler:deletefeedbacks},
];
routes.forEach(({ path, handler }) => app.use(path, handler));

app.get("/", (req: Request, res: Response) => {
  res.send("hello using TypeScript");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});