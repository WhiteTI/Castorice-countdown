import Timer from "@/components/Timer";

export default function Home() {


    return (
        <div className='min-h-screen w-full bg-slate-900 bgImage'>
            <div className='min-h-screen w-full backdrop-blur-sm flex items-center justify-center text-amber-50 bg-slate-900/30'>
                <div className='py-8 px-10 bg-slate-800/40 font-bold text-4xl lg:text-5xl xl:text-6xl rounded'>
                    <Timer/>
                </div>
            </div>
        </div>
    );
}
