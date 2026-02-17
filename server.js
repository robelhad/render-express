import express from "express";
import cors from "cors";
import dotenv from "dotenv";
//import { Prisma } from "./prisma.js";
import { PrismaClient } from "@prisma/client";
import routes from "./routes/index.js";

dotenv.config();

//const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

 async function connectDB()  {
  try {
    await prisma.$connect();
    console.log("Neon Database connected successfully.");
  } catch (error) {
    console.log(error);
  }
}

connectDB();
//export default prisma;

app.use("/api",routes);

app.get("/", (req,res) =>{

        res.send('Server is running and connected at PORT    ' + PORT);
    }
);

app.post("/user", async (req, res) => { 
  try { 
    const { email, password } = req.body; 
    const user = await prisma.user.create({ 
      data: { email, password }, 
    }); 
    res.json(user); 
  } catch (error) { 
    console.error(error); 
    res.status(500).json({ error: "Failed to create user" }); 
  } 
});

app.listen(PORT, () => {
    console.log('Server started and running at PORT     ' + PORT)
});



  app.use(
    cors({
      origin:
        process.env.NODE_ENV === "production"
          ? ["https://ecommerce-sepia-iota-43.vercel.app/"]
          : ["https://ecommerce-sepia-iota-43.vercel.app/", "http://192.168.161.140:3000" , "http://192.168.161.140:5173",   "http://localhost:5173"],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Apollo-Require-Preflight", // For GraphQL
      ],
    })
  );