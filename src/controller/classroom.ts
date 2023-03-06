import { prisma } from "../config/db";
import { Request, Response } from "express";

const add = async (req:Request, res:Response) => {
    try {
        await prisma.classroom.create({data: req.body})
        res.json({message:`added is done !`})
    } 
    catch (err) {console.log(err)}
}

const all = async (req:Request, res:Response) => {
    try { res.json(await prisma.classroom.findMany({})) } 
    catch (err) {console.log(err)}
}

const byId = async (req:Request, res:Response) => {
    try {res.json(await prisma.classroom.findFirst({where:{id:req.params.id}}))} 
    catch (err) {console.log(err)}
}

export default {
    add,
    all,
    byId,
}