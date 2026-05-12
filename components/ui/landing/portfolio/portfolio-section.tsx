// "use client"
// // import { Card, CardContent } from "@/components/ui/manual/"
// import { Carousel, CarouselContent, CarouselItem } from "../../manual/carousel"
// import Image from "next/image"



// export function Portfolio() {
//     const images = [
//         "/images/landing/pic-1.jpg",
//         "/images/landing/pic-2.jpg",
//         "/images/landing/pic-3.jpg",
//     ]
//     return (
//         <Carousel
//             opts={{
//                 align: "start",
//             }}
//             className="w-full  sm:max-w-xs md:max-w-sm"
//         >
//             <CarouselContent>
//                 {Array.from({ length: 5 }).map((_, index) => (
//                     <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
//                         <div className="p-1">
//                             {/* <Card>
//                                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                                     <span className="text-3xl font-semibold">{index + 1}</span>
//                                 </CardContent>

//                                 {}
//                             </Card> */}
//                             <div className="relative w-full flex items-center justify-center gap-6 aspect-square rounded-xl overflow-hidden">
//                                     <Image className="aspect-4/3 mx-4" width={200} height={350} src={images[index % images.length]} alt={`Portfolio item ${index + 1}`} />
//                             </div>
//                             <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
//                             <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
//                         </div>

//                     </CarouselItem>
//                 ))}
//             </CarouselContent>

//         </Carousel>
//     )
// }
