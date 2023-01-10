import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')
export class AppController{
   

    // @Get('1')
    // getuser(){return {'name':'Hridoy','email':'hridoycse.eng@gmail.com'};}

    // @Get('2')
    // getuser1(){return {'name':'Sumaiya','email':'sumaiya.eng@gmail.com'};}
    @Get('/:userId')
    getuser2(@Param() params:{userId:number}){return params;}

    
    @Post()
    posts(@Req() req:Request){
        console.log(req.body)
        return req.body;}
}