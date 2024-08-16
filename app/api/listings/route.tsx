import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { title, description, imageSrc, roomCount, category, bathroomCount, guestCount, location, price } = body
        const client = await MongoClient.connect("mongodb://localhost:27017/Expedia")
        const db = client.db()
        const property = db.collection("property")
        const newProperty = await property.insertOne({
            data: {
                title,
                description,
                imageSrc,
                roomCount,
                category,
                bathroomCount,
                guestCount,
                locationValue: location.value,
                price: parseInt(price, 10),
            },
        });
        return NextResponse.json(newProperty);
    } catch (error) {
        console.log(error);

    }
}
