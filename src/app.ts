import express from "express";
import { connectDB } from "./config/db";
import studentRoute from "./router/student.router"
import teacherRoute from "./router/teacher.router"
import classroomRoute from "./router/classroom.router"

const app = express();
const port = 3008;

connectDB();
app.use(express.json())
app.use('/student', studentRoute)
app.use('/teacher', teacherRoute)
app.use('/classroom', classroomRoute)

app.listen(port, ()=>{
    console.log(`I connecting on port (${port}).`);
});
