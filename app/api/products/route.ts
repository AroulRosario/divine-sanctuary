import { NextResponse } from "next/server";

const mockProducts = [
    {
        id: "p1",
        name: "Classic Olive Wood Rosary",
        description: "Hand-carved in Bethlehem, this rosary feels smooth and divine in prayer.",
        price: 1200,
        category: "Rosaries",
        image: "/assets/rosary_cathedral_light_1772525530668.png"
    },
    {
        id: "p2",
        name: "Golden-Leaf Bible (Limited Edition)",
        description: "A premium leather-bound Bible with gold-leaf edges and study markers.",
        price: 4500,
        category: "Bibles",
        image: "/assets/premium_bible_product_1772525818617.png"
    },
    {
        id: "p3",
        name: "Sacred Altar Beeswax Candles",
        description: "Thick beeswax candles for a holy atmosphere and long-lasting light.",
        price: 850,
        category: "Candles",
        image: "/assets/premium_candle_product_1772525834625.png"
    }
];

export async function GET() {
    return NextResponse.json(mockProducts);
}
