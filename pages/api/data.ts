// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient, Double } from "mongodb"
import type { NextApiRequest, NextApiResponse } from "next"

interface Response {
    name: string
    description: string
    address: string
    latitude: Double
    longitude: Double
    phoneNumber: string
    website: string
    inclusions: Array<string>
    exclusions: Array<string>
    schedule: Array<number>
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    const client = new MongoClient(process.env.MONGODB_URI)
    // res.status(200).json({ name: 'John Doe' })
}
