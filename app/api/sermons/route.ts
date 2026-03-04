import { NextResponse } from "next/server";

const mockSermons = [
    {
        id: "s1",
        title: "The Power of Faith in Hard Times",
        description: "A moving sermon on trusting God's plan when things get difficult.",
        videoUrl: "https://www.youtube.com/watch?v=mock1",
        thumbnail: "/assets/biblical_landscape_cinematic_1772525803435.png",
        publishedAt: new Date().toISOString()
    },
    {
        id: "s2",
        title: "Walking with Jesus Daily",
        description: "Practical steps to deepen your relationship with Christ every day.",
        videoUrl: "https://www.youtube.com/watch?v=mock2",
        thumbnail: "/assets/stained_glass_reflections_1772525788785.png",
        publishedAt: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: "s3",
        title: "The Meaning of Grace",
        description: "Exploring the depth of God's unmerited favor toward us.",
        videoUrl: "https://www.youtube.com/watch?v=mock3",
        thumbnail: "/assets/rosary_cathedral_light_1772525530668.png",
        publishedAt: new Date(Date.now() - 172800000).toISOString()
    }
];

export async function GET() {
    return NextResponse.json(mockSermons);
}
