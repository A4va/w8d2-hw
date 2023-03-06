import { prisma } from "../config/db";
import { Request, Response } from "express";

const add = async (req:Request, res:Response) => {
    try {
        await prisma.student.create({data: req.body})
        res.json({message:`Hi ${req.body.name}, added is done !`})
    } 
    catch (err) {console.log(err)}
}

const all = async (req:Request, res:Response) => {
    try { res.json(await prisma.student.findMany({})) } 
    catch (err) {console.log(err)}
}

const byId = async (req:Request, res:Response) => {
    try {res.json(await prisma.student.findFirst({where:{id:req.params.id}}))} 
    catch (err) {console.log(err)}
}

export default {
    add,
    all,
    byId,
}