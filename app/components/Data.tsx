"use client"
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";

export const properties = [{
    id:1,
    describtion:"Family-friendly hotel with 2 restaurants connected to a shopping center in Berlin",
    Img: ["https://images.trvl-media.com/lodging/3000000/3000000/2994700/2994641/bc218425.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/3000000/3000000/2994700/2994641/b71e4f5c.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/3000000/3000000/2994700/2994641/b0f94a78.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/2000000/1690000/1683800/1683718/84357514.jpg?impolicy=resizecrop&rw=455&ra=fit", "https://images.trvl-media.com/lodging/4000000/3910000/3907600/3907597/184753f4.jpg?impolicy=resizecrop&rw=455&ra=fit", "https://images.trvl-media.com/lodging/1000000/530000/526000/525947/426401c1.jpg?impolicy=resizecrop&rw=455&ra=fit", "https://images.trvl-media.com/lodging/1000000/700000/691700/691695/350a129f.jpg?impolicy=resizecrop&rw=455&ra=fit", "https://images.trvl-media.com/lodging/1000000/610000/607200/607136/2e2d4c25.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    Name: "Sofitel Munich Bayerpost",
    Stars: 4,
    City: "Munich",
    HasPool: true,
    Policy: "Refundable",
    Payment: "pay now",
    Review: 9,
    NumberOfReviews: 1050,
    AvailableRooms: 3,
    Rooms:[{Img:["https://images.trvl-media.com/lodging/1000000/10000/600/541/ec794c95.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://thumbnails.trvl-media.com/lodging/1000000/10000/600/541/b324f28e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://images.trvl-media.com/lodging/1000000/10000/600/541/e5f748ba.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"]
        ,type:"Room,1 king Bed",id:1
        ,review:10,Rating:"Exceptional",
        Wifi:true,capacity:2,NumberOfBeds:1,Cancellation:[{"Partially refundable":50, "Refundable":100,"Non-refundable":0}],
        Extras:[{"Breakfast":50,"Dinner":100,"All inclusive":150}],Discout:15,originalPrice:1000,taxes:"included"},{Img:["https://images.trvl-media.com/lodging/1000000/10000/600/541/ec794c95.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://thumbnails.trvl-media.com/lodging/1000000/10000/600/541/b324f28e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://images.trvl-media.com/lodging/1000000/10000/600/541/e5f748ba.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"]
            ,type:"Room,1 king Bed",id:2
            ,review:10,Rating:"Exceptional",
            Wifi:true,capacity:2,NumberOfBeds:1,Cancellation:[{"Partially refundable":50, "Refundable":100,"Non-refundable":0}],
            Extras:[{"Breakfast":50,"Dinner":100,"All inclusive":150}],Discout:15,originalPrice:1000,taxes:"included"},{Img:["https://images.trvl-media.com/lodging/1000000/10000/600/541/ec794c95.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://thumbnails.trvl-media.com/lodging/1000000/10000/600/541/b324f28e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://images.trvl-media.com/lodging/1000000/10000/600/541/e5f748ba.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"]
                ,type:"Room,1 king Bed",id:3
                ,review:10,Rating:"Exceptional",
                Wifi:true,capacity:2,NumberOfBeds:1,Cancellation:[{"Partially refundable":50, "Refundable":100,"Non-refundable":0}],
                Extras:[{"Breakfast":50,"Dinner":100,"All inclusive":150}],Discout:15,originalPrice:1000,taxes:"included"},{Img:["https://images.trvl-media.com/lodging/1000000/10000/600/541/ec794c95.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://thumbnails.trvl-media.com/lodging/1000000/10000/600/541/b324f28e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://images.trvl-media.com/lodging/1000000/10000/600/541/e5f748ba.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"]
                    ,type:"Room,1 king Bed",id:4
                    ,review:10,Rating:"Exceptional",
                    Wifi:true,capacity:2,NumberOfBeds:1,Cancellation:[{"Partially refundable":50, "Refundable":100,"Non-refundable":0}],
                    Extras:[{"Breakfast":50,"Dinner":100,"All inclusive":150}],Discout:15,originalPrice:1000,taxes:"included"},{Img:["https://images.trvl-media.com/lodging/1000000/10000/600/541/ec794c95.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://thumbnails.trvl-media.com/lodging/1000000/10000/600/541/b324f28e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://images.trvl-media.com/lodging/1000000/10000/600/541/e5f748ba.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"]
                        ,type:"Room,1 king Bed",id:5
                        ,review:10,Rating:"Exceptional",
                        Wifi:true,capacity:2,NumberOfBeds:1,Cancellation:[{"Partially refundable":50, "Refundable":100,"Non-refundable":0}],
                        Extras:[{"Breakfast":50,"Dinner":100,"All inclusive":150}],Discout:15,originalPrice:1000,taxes:"included"},{Img:["https://images.trvl-media.com/lodging/1000000/10000/600/541/ec794c95.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://thumbnails.trvl-media.com/lodging/1000000/10000/600/541/b324f28e.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium","https://images.trvl-media.com/lodging/1000000/10000/600/541/e5f748ba.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium"]
                            ,type:"Room,1 king Bed",id:6
                            ,review:10,Rating:"Exceptional",
                            Wifi:true,capacity:2,NumberOfBeds:1,Cancellation:[{"Partially refundable":50, "Refundable":100,"Non-refundable":0}],
                            Extras:[{"Breakfast":50,"Dinner":100,"All inclusive":150}],Discout:15,originalPrice:1000,taxes:"included"}],
    Price: 300,
    Currency: "EGP",
    Taxes: "included taxes and fees",
    Rating: "excellent",
    Reviews:[
        {
            name: 'Simona',
            date: 'August 10, 2024',
            rating: 4.5,
            comment: 'This product exceeded my expectations. The quality is top-notch and the service was excellent!'
        },
        {
            name: 'Sayed',
            date: 'August 11, 2024',
            rating: 3.0,
            comment: 'The product is decent, but it could use some improvements in terms of durability.'
        },{
            name: 'Harvey',
            date: 'August 12, 2024',
            rating: 5.0,
            comment: 'Awasome'
        }
    ]
}, {
    id:2,
    Img: ["https://images.trvl-media.com/lodging/5000000/4400000/4399900/4399822/c55f3732.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/3000000/3000000/2994700/2994641/8b686352.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/10000000/9280000/9278100/9278014/70dfc675.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/10000000/9280000/9278100/9278014/b2d8bf20.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/10000000/9280000/9278100/9278014/5943bb4e.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/10000000/9280000/9278100/9278014/f97e915e.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    Name: "TiTanic",
    Stars: 4,
    City: "Munich",
    HasPool: true,
    Policy: "Refundable",
    Payment: "pay later",
    Review: 9,
    NumberOfReviews: 1050,
    AvailableRooms: 5,
    Price: 400,
    Currency: "EGP",
    Taxes: "Excluded",
    Rating: "good"


}, {
    id:3,
    Img: ["https://images.trvl-media.com/lodging/23000000/22880000/22877800/22877763/3333a2b3.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/5000000/4400000/4399900/4399822/a64c59f3.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/10000/6600/6596/96cf93be.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/10000/6600/6596/96884af8.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/10000/6600/6596/1fc447d6.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/10000/6600/6596/91cc7ba4.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    Name: "Hotel Berlin",
    Stars: 4,
    City: "Munich",
    HasPool: true,
    Policy: "Refundable",
    Payment: "pay later",
    Review: 9,
    NumberOfReviews: 1050,
    AvailableRooms: 5,
    Price: 500,
    Currency: "EGP",
    Taxes: "included taxes and fees",
    Breakfast: "included",
    Rating: "wonderful"

}, {
    id:4,
    Img: ["https://images.trvl-media.com/lodging/23000000/22880000/22877800/22877763/1c071e08.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/14000000/13270000/13267100/13267018/5f910b83.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/37000000/36640000/36636800/36636765/a8947f12.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/14000000/13270000/13267100/13267018/8e5fe6bd.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/14000000/13270000/13267100/13267018/4259bc9d.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/14000000/13270000/13267100/13267018/bddf01e6.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    Name: "Leonardo Hotel",
    Stars: 4,
    City: "Munich",
    HasPool: true,
    Policy: "Refundable",
    Payment: "pay later",
    Review: 9,
    NumberOfReviews: 1050,
    AvailableRooms: 5,
    Price: 600,
    Currency: "EGP",
    Taxes: "included taxes and fees",
    Rating: "very-good"

}, {
    id:5,
    Img: ["https://images.trvl-media.com/lodging/58000000/57240000/57232600/57232524/17041894.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/58000000/57240000/57232600/57232524/919c2937.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/58000000/57240000/57232600/57232524/b4d1d2ea.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/58000000/57240000/57232600/57232524/3dab574c.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/4000000/3780000/3775700/3775664/30caf2a1.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    Name: "Sofitel Munich Bayerpost",
    Stars: 4,
    City: "Munich",
    HasPool: true,
    Policy: "Refundable",
    Payment: "pay later",
    Review: 9,
    NumberOfReviews: 1050,
    AvailableRooms: 5,
    Price: 700,
    Currency: "EGP",
    Taxes: "included taxes and fees"
}, {
    id:6,
    Img: ["https://images.trvl-media.com/lodging/1000000/30000/28200/28151/8e906c31.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/30000/28200/28151/ac330866.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/30000/28200/28151/513a578c.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/3000000/2500000/2496300/2496209/4e2423f8.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/10000/3400/3350/166aa2f9.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/4000000/3780000/3775700/3775664/7c55aaed.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/4000000/3780000/3775700/3775664/379529b2.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    Name: "Maritim Hotel",
    Stars: 4,
    City: "Munich",
    HasPool: true,
    Policy: "Refundable",
    Payment: "pay later",
    Review: 9,
    NumberOfReviews: 1050,
    AvailableRooms: 5,
    Price: 800,
    Currency: "EGP",
    Taxes: "included taxes and fees",
    Breakfast: "included"

}, {
    id:7,
    Img: ["https://images.trvl-media.com/lodging/17000000/16660000/16655900/16655874/c490abcc.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/17000000/16660000/16655900/16655874/1278e0ec.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/17000000/16660000/16655900/16655874/d83c6583.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/56000000/55320000/55318700/55318671/c00a45fc.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/50000/45200/45112/d8a400f5.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    Name: "Sofitel Munich Bayerpost",
    Stars: 4,
    City: "Munich",
    HasPool: true,
    Policy: "Refundable",
    Payment: "pay later",
    Review: 9,
    NumberOfReviews: 1050,
    AvailableRooms: 5,
    Price: 900,
    Currency: "EGP",
    Taxes: "included taxes and fees",
    Breakfast: "included",
    Parking: "free"

}
]

export const Deals=[{
    
    Img:["https://images.trvl-media.com/lodging/1000000/50000/45200/45112/9fcbe94e.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/3000000/2370000/2369700/2369606/578eb581.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/20000/14100/14069/7f27afbe.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/1000000/30000/28200/28177/8942e50c.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/3000000/2820000/2816800/2816731/83d7cf64.jpg?impolicy=resizecrop&rw=455&ra=fit","https://images.trvl-media.com/lodging/19000000/18620000/18611500/18611403/1305c5a8.jpg?impolicy=resizecrop&rw=455&ra=fit"],
    City:'Düsseldorf',
    Name:"Steigenberger",
    rate:8.8,
    Stay:2,
    PricePernight:100,
    discount:20,
    taxes:"included"

},{
    Img:["https://images.trvl-media.com/lodging/1000000/10000/1500/1443/8bb8fde4_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/10000/1500/1443/9e15b31b_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/10000/1500/1443/00c02d40_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/10000/1500/1443/7bdb499c_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"],
    City:'Berlin',
    Name:"ette Hotel",
    rate:9.8,
    Stay:3,
    PricePernight:200,
    discount:20,
    taxes:"included"
},{
    Img:["https://images.trvl-media.com/lodging/71000000/70110000/70100300/70100240/b0dc020b_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/71000000/70110000/70100300/70100240/cc2288f3_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/71000000/70110000/70100300/70100240/624ef5cd_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/71000000/70110000/70100300/70100240/517b5598_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"],
    City:'Tokyo',
    Name:"Imperial Hotel",
    rate:7.6,
    Stay:4,
    PricePernight:150,
    discount:20,
    taxes:"included"
},{
    Img:["https://images.trvl-media.com/lodging/1000000/870000/861800/861709/62c3c005_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/870000/861800/861709/f5e72077_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/870000/861800/861709/5e57ffcc_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/870000/861800/861709/27bb92c0_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"],
    City:'Düsseldorf',
    Name:"Steigenberger",
    rate:8.8,
    Stay:7,
    PricePernight:320,
    discount:20,
    taxes:"included"
},{
    Img:["https://images.trvl-media.com/lodging/2000000/1060000/1058300/1058226/3c811ac2_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/2000000/1060000/1058300/1058226/87b46010_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/2000000/1060000/1058300/1058226/0ce22e51_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/2000000/1060000/1058300/1058226/0d3a9583_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"],
    City:'Düsseldorf',
    Name:"Steigenberger",
    rate:8.8,
    Stay:2,
    PricePernight:120,
    discount:20,
    taxes:"included"
},{
    Img:["https://images.trvl-media.com/lodging/1000000/20000/13400/13381/d04657ee_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/20000/13400/13381/d9df3360_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/20000/13400/13381/cd7b3d02_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/20000/13400/13381/91f06567_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"],
    City:'Düsseldorf',
    Name:"Steigenberger",
    rate:8.8,
    Stay:5,
    PricePernight:225,
    discount:20,
    taxes:"included"
},{
    Img:["https://images.trvl-media.com/lodging/1000000/20000/13300/13295/c40a6103_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/20000/13300/13295/a617bbb9_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/20000/13300/13295/da61737e_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high","https://images.trvl-media.com/lodging/1000000/20000/13300/13295/47c191d1_w.jpg?impolicy=fcrop&w=600&h=400&p=1&q=high"],
    City:'Düsseldorf',
    Name:"Steigenberger",
    rate:8.8,
    Stay:14,
    PricePernight:600,
    discount:20,
    taxes:"included"
}]

export const Discover = [
    {
        Img: "https://mediaim.expedia.com/destination/1/f6b389e95c1a90ead45a9098388c18ee.jpg?impolicy=fcrop&w=1000&h=563&p=1&q=medium",
        city: "Hamburg",
        Country: "Germany"
    },
    {
        Img: "https://mediaim.expedia.com/destination/1/1f30df92b9972453b409318ac6441431.jpg?impolicy=fcrop&w=1000&h=563&p=1&q=medium",
        city: "San Diego",
        Country: "USA"
    },
    {
        Img: "https://mediaim.expedia.com/destination/1/71710a9aa0e4781ed3ccab1fa7846d37.jpg?impolicy=fcrop&w=1000&h=563&p=1&q=medium",
        city: "Amsterdam",
        Country: "Netherlands"
    },
    {
        Img: "https://mediaim.expedia.com/destination/1/6eb23daa6222ce692f15c6477fab30cb.jpg?impolicy=fcrop&w=1000&h=563&p=1&q=medium",
        city: "Cairo",
        Country: "Egypt"
    },
    {
        Img: "https://traveltext.id/wp-content/uploads/2022/07/venice.jpg",
        city: "Venice",
        Country: "Italy"
    },{
        Img: "https://mediaim.expedia.com/destination/1/71710a9aa0e4781ed3ccab1fa7846d37.jpg?impolicy=fcrop&w=1000&h=563&p=1&q=medium",
    },{
        Img: "https://mediaim.expedia.com/destination/1/1f30df92b9972453b409318ac6441431.jpg?impolicy=fcrop&w=1000&h=563&p=1&q=medium",
    },{
        Img: "https://mediaim.expedia.com/destination/1/f6b389e95c1a90ead45a9098388c18ee.jpg?impolicy=fcrop&w=1000&h=563&p=1&q=medium",
    },
    {
        Img: "https://traveltext.id/wp-content/uploads/2022/07/venice.jpg",
    }
];

export const categories=[{
    label:"Beach",
    icon:TbBeach,
    describtion:"this Property is close to the beach"
},{
    label:"windsmill",
    icon:GiWindmill,
    describtion:"this Property has windmills"
},{
    label:"modern",
    icon:MdOutlineVilla,
    describtion:"this Property is modern"
},{
    label:"Countryside",
    icon:TbMountain,
    describtion:"this Property is in the countryside"
},{
    label:"Pool",
    icon:TbPool,
    describtion:"this Property has a pool"
},{
    label:"Island",
    icon:GiIsland,
    describtion:"this Property is on an Island"
},{
    label:"Lake",
    icon:GiBoatFishing,
    describtion:"this Property is close to a Lake"
},{
    label:"Skiing",
    icon:FaSkiing,
    describtion:"this Property has a skiing activities"
},{
    label:"castle",
    icon:GiCastle,
    describtion:"this Property is a castle"
},{
    label:"Camping",
    icon:GiForestCamp,
    describtion:"this Property has a camping activities"
},{
    label:"Arctic",
    icon:BsSnow,
    describtion:"this Property is in the countryside"
},{
    label:"Cave",
    icon:TbMountain,
    describtion:"this Property is in a cave"
},{
    label:"Desert",
    icon:GiCactus,
    describtion:"this Property is in the desert"
},{
    label:"Barns",
    icon:GiBarn,
    describtion:"this Property is in the barn"
},{
    label:"Lux",
    icon:IoDiamond,
    describtion:"this Property is Luxurious"
}
]