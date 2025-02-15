import Timer from "@/components/Timer";

export default function Home() {


    return (
        <>
            <div className='h-screen w-full bg-slate-900 fixed inset-0'>
                <video autoPlay loop muted playsInline className='min-h-screen object-cover object-center'>
                    <source src='/castorice-honkai-star-rail-dream-butterfly-dance-moewalls-com.mp4' type='video/mp4' />
                </video>
            </div>

            <div className='w-full backdrop-blur-sm text-purple-500 bg-slate-900/30 relative overflow-x-auto flex flex-col'>
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='py-6 px-4 bg-slate-50/50 font-semibold text-4xl rounded lg:text-5xl lg:py-8 lg:px-10 xl:text-6xl '>
                        <Timer/>
                    </div>
                </div>

                <div className='pb-4 flex flex-col items-center gap-4'>
                    <picture className='w-2/3'>
                        <source media="(max-width: 768px)" srcSet='/castorice-768.jpg'/>
                        <source media="(max-width: 1024px)" srcSet='/castorice-1024.jpg'/>
                        <img src='/castorice-full.jpg' alt="abc" className='h-full'/>
                    </picture>

                    <iframe className='w-80 h-[36rem] lg:w-[26rem] lg:h-[48rem]' width="470" height="836" src="https://www.youtube.com/embed/oFTJbtE2G1k"
                            title="Honkai: Star Rail Version 3.0 Paean of Era Nova is about to arrive." frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </>
    );
}
