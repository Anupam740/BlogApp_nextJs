import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import fetcher from '../lib/fetcher';
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function Section1() {

    const { data, isLoading, isError } = fetcher('api/trending');

    if (isLoading) return <Spinner />;
    if (isError) return <Error />;

    SwiperCore.use([Autoplay]);

    
    return (
        <section className="py-16" >
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay= {{
                        delay: 2000
                    }}
                >
                    {data.map((value, index) => (
                        <SwiperSlide key={index}><Slide data={value} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

function Slide({ data }) {

    const { id, title, category, img, published, description, author } = data;

    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={`/posts/${id}`}>
                    <Image src={img || "/"} width={600} height={600} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}>
                        <span className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</span>
                    </Link>
                    <Link href={`/posts/${id}`}>
                        <span className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</span>
                    </Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}>
                        <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</span>
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                    {description || "description"}
                </p>
                {author ? <Author {...author} /> : <></>}
            </div>
        </div>
    );
}
