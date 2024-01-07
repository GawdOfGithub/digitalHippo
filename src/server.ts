import express from "express"
const app = express()
const Port = Number(process.env.PORT) || 3000
const start = async()=>
{
    const payload = await getPayloadClient()

}
start()