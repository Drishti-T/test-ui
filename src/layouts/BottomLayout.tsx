import { Graph } from "components/Graph"
import { HorizontalLine } from "components/HorizontalLine"
import { useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "utils/cn"
import type { ReactNode } from "react"

export const BottomLayout = () => {

    const [selectedPath, setSelectedPath] = useState('')
    const [selectedPath2, setSelectedPath2] = useState('')


    const handleClick = (path: string) => {
        setSelectedPath(prev => (prev === path ? '' : path))
    }

    const handleClick2 = (path: string) => {
        setSelectedPath2(prev => (prev === path ? '' : path))
    }


    return <div className="p-[1px] bg-gradient-to-b from-[#1d1c22] to-zinc-900 rounded-xl w-full h-full">
        <div className={cn('w-full h-full bg-[#14111a] flex rounded-xl p-8 overflow-hidden gap-8')}>
            {/* left */}
            <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#1d1c22]  to-transparent w-[28%] overflow-hidden">
                <div className="rounded-[12px] w-full h-full bg-[#101015] overflow-hidden border border-transparent">


                    <div className="bg-[#120f17] flex flex-col  px-6 py-5 flex justify-center font-bold text-[16px] mt-1">
                        Gang Learderboard
                    </div>

                    <HorizontalLine />

                    <div className="px-6 pt-9 flex flex-col gap-1 bg-[#0f0d14] h-full">
                        <div className="text-[11px] font-bold text-zinc-500">OVERVIEW</div>
                        <div className="border-l border-zinc-900 px-2 h-fit flex flex-col gap-2">

                            <Link
                                to="/"
                                onClick={() => handleClick('/')}
                                className={cn(
                                    'p-[1px] rounded-[4px] bg-gradient-to-b from-[#312c38] to-transparent text-gray-400 hover:text-white',
                                    'group' // Add group for group-hover
                                )}
                            >
                                <div className={cn('flex items-center gap-4 p-2 rounded-[4px] bgcolor', selectedPath === '/' && 'bgColorSelected text-white')}>
                                    <div className="my-1 mx-1 flex items-center gap-2">
                                        <div className="h-6 w-6">
                                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.83268 18.6667V12.1667H13.166V18.6667H18.5827V10H21.8327L10.9993 0.25L0.166016 10H3.41602V18.6667H8.83268Z"
                                                    fill={selectedPath === '/' ? '#a259ff' : '#a3a3a3'}
                                                    className="transition-colors duration-200 group-hover:fill-[#a259ff]"
                                                />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold">Home</div>
                                    </div>
                                </div>
                            </Link>

                            <Link
                                to="/tuf"
                                onClick={() => handleClick('/tuf')}
                                className={cn(
                                    'p-[1px] rounded-[4px] bg-gradient-to-b from-[#1a1920] to-transparent text-gray-400 hover:text-white'

                                )}
                            >
                                <div className={cn('flex items-center gap-4 p-2 rounded-[4px] bgcolor', selectedPath === '/tuf' && 'bgColorSelected text-white')}>
                                    <div className="my-1 mx-1 flex justify-center items-center gap-2">
                                        <div className="h-6 w-6 flex items-center">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="7.74837" height="7.74837" fill={selectedPath === '/tuf' ? '#a259ff' : '#a3a3a3'} fillOpacity="0.6" className="transition-colors duration-200 group-hover:fill-[#a259ff]" />
                                                <rect x="10.252" width="7.74837" height="7.74837" fill={selectedPath === '/tuf' ? '#a259ff' : '#a3a3a3'} fillOpacity="0.6" className="transition-colors duration-200 group-hover:fill-[#a259ff]" />
                                                <rect x="10.252" y="10.2517" width="7.74837" height="7.74837" fill={selectedPath === '/tuf' ? '#a259ff' : '#a3a3a3'} fillOpacity="0.6" className="transition-colors duration-200 group-hover:fill-[#a259ff]" />
                                                <rect y="10.2517" width="7.74837" height="7.74837" fill={selectedPath === '/tuf' ? '#a259ff' : '#a3a3a3'} fillOpacity="0.6" className="transition-colors duration-200 group-hover:fill-[#a259ff]" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold">Tufs</div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>  </div>


            {/* mid */}
            <div className={cn('flex flex-col w-[44%]  overflow-hidden  justify-between gap-4')}>
                <div className="p-[1px] rounded-[17px] bg-gradient-to-br from-[#48474a] via-zinc-900 to-gray-900 w-full">
                    <div className="h-fit rounded-[17px] border border-transparent px-4 py-5 bg-[rgb(20,18,23)]">
                        <div className="flex justify-between items-center  ">
                            <div>
                                <div className="font-semibold text-xl">Total Wars</div>
                                <div className="text-zinc-500 font-semibold text-[13px]">Total number of wars winned over a peroid of time</div>
                            </div>

                            <div className="bg-[#19181d] px-4 py-1 rounded-full">
                                <div className="text-sm text-purple-500">+150 ▲</div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <HorizontalLine />

                        </div>

                        <div className="">
                            <div>
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-[1px] h-full rounded-[12px] bg-gradient-to-br from-transparent via-zinc-800  to-[#7d7b7e] ">
                    <div className="h-full flex flex-col rounded-[12px] bg-[#141217] ">
                        <div className="mx-5 my-5 flex flex-col gap-4 h-full justify-center">
                            <ReportCard />
                            <ReportCard />
                            <ReportCard />
                        </div>
                    </div>  </div>
            </div>


            {/* right */}
            <div className={cn('w-[28%]  rounded-[12px] flex flex-col gap-2')}>
                <div className="flex justify-end gap-2">

                    <Link
                        to="/gang"
                        onClick={() => handleClick2('/gang')}
                        className=""
                    >
                        <div
                            className={cn(
                                'leader-btn-inner',
                                selectedPath2 === '/gang' && 'selected'
                            )}
                        >
                            <div className="text-md font-semibold mx-3 my-[3px]">Gang Leaderboard</div>
                        </div>
                    </Link>


                    <Link
                        to="/player"
                        onClick={() => handleClick2('/player')}
                        className=""
                    >
                        <div
                            className={cn(
                                'leader-btn-inner',
                                selectedPath2 === '/player' && 'selected'
                            )}
                        >
                            <div className="text-md font-semibold mx-3 my-[3px]">Player Leaderboard</div>
                        </div>
                    </Link>
                </div>

                <div className="mt-4 p-[1px] bg-gradient-to-tr from-[#4d4c51] via-transparent to-gray-900 rounded-[12px] h-full">
                    <div className="rounded-[12px] py-4 flex flex-col h-full bg-[#131017]">

                        <div className="p-[1px] bg-gradient-to-b from-zinc-800 to-transparent rounded-2xl mx-6 my-3 h-full">
                            <div className="bg-[#141218] rounded-2xl h-full w-full">
                                <div className=" flex flex-col items-center gap-1">
                                    <div className="h-24 w-24 bg-zinc-800 rounded-full flex justify-center items-center mt-6">
                                        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.58596 1.66969L7.47199 5.96888L11.8251 0.609018C11.947 0.459176 12.1011 0.338764 12.276 0.256749C12.4509 0.174735 12.642 0.133232 12.8352 0.13533C13.0283 0.137428 13.2185 0.183073 13.3916 0.268867C13.5647 0.354661 13.7161 0.478393 13.8347 0.630848L17.9888 5.9676L23.0328 1.60677C23.2309 1.43587 23.4764 1.32954 23.7366 1.30203C23.9968 1.27451 24.2591 1.32712 24.4886 1.4528C24.718 1.57849 24.9036 1.77126 25.0205 2.00531C25.1374 2.23936 25.18 2.50353 25.1426 2.76247L23.2164 16.0491H2.42288L0.467185 2.82282C0.428337 2.56245 0.470452 2.29643 0.587827 2.06079C0.705202 1.82515 0.892164 1.63128 1.12339 1.50544C1.35462 1.3796 1.61893 1.32786 1.88054 1.35724C2.14215 1.38662 2.38841 1.49569 2.58596 1.66969ZM2.52304 17.3332H23.0688V18.6173C23.0688 18.9579 22.9335 19.2845 22.6927 19.5253C22.4518 19.7662 22.1252 19.9014 21.7847 19.9014H3.80715C3.46658 19.9014 3.13996 19.7662 2.89915 19.5253C2.65833 19.2845 2.52304 18.9579 2.52304 18.6173V17.3332Z" fill="#AD53F2" />
                                        </svg>
                                    </div>

                                    <div className="flex justify-center items-center flex-col  font-bold ">
                                        <div className="text-lg">Alex</div>
                                        <div className="text-[11px] text-zinc-400 font-semibold">Slaughter Gang</div>
                                    </div>
                                    <div className="mt-3 mb-5 border border-[#3f234e] bg-[#2b0e3b] px-[65px] py-[6px] rounded-[4px]">LEADER</div>

                                </div>
                                <HorizontalLine></HorizontalLine>

                                <div className=" flex flex-col  h-full mt-8 mx-4">
                                    <div className="flex flex-col w-full gap-1">

                                        <div className="text-[11px] text-zinc-400 w-full">Your Statistics</div>
                                        <div className="flex flex-col w-full gap-2">

                                            <div className="p-[1px] bg-gradient-to-b from-[#585061] to-transparent rounded-md w-full">
                                                <div className="text-sm bg-gradient-to-b from-[#231b2d] to-[#141218] text-white px-4 py-2 rounded-md">
                                                    <div className="my-1 mx-2 flex justify-between">
                                                        <div>
                                                            Total kills
                                                        </div>
                                                        <div className="font-semibold">
                                                            32
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-[1px] bg-gradient-to-b from-[#3d3c3f] to-transparent rounded-md w-full">
                                                <div className="text-sm bg-gradient-to-b from-[#1e1e23] to-[#141218] text-white px-4 py-2 rounded-md">
                                                    <div className="my-1 mx-2 flex justify-between">
                                                        <div>
                                                            Total Deaths
                                                        </div>
                                                        <div className="font-semibold">
                                                            32
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col h-fit ">

                                        <div className="text-[11px] text-zinc-400 w-full mt-6">Personal</div>
                                        <div className="flex flex-col gap-1">

                                            <PersonalCard svgIcon={
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.3023 18.3541C7.41301 18.3541 4.24902 15.1901 4.24902 11.3008C4.24902 7.41154 7.41301 4.24756 11.3023 4.24756C15.1916 4.24756 18.3556 7.41154 18.3556 11.3008C18.3556 15.1901 15.1916 18.3541 11.3023 18.3541ZM11.3023 5.65821C8.19101 5.65821 5.65968 8.18954 5.65968 11.3008C5.65968 14.4121 8.19101 16.9435 11.3023 16.9435C14.4136 16.9435 16.9449 14.4121 16.9449 11.3008C16.9449 8.18954 14.4136 5.65821 11.3023 5.65821Z" fill="white" fillOpacity="0.6" />
                                                    <path d="M11.3023 12.7114C12.0813 12.7114 12.7129 12.0799 12.7129 11.3008C12.7129 10.5217 12.0813 9.89014 11.3023 9.89014C10.5232 9.89014 9.8916 10.5217 9.8916 11.3008C9.8916 12.0799 10.5232 12.7114 11.3023 12.7114Z" fill="white" fillOpacity="0.6" />
                                                    <path d="M11.303 8.71477C10.9135 8.71477 10.5977 8.39896 10.5977 8.00945V1.42627C10.5977 1.03676 10.9135 0.720947 11.303 0.720947C11.6925 0.720947 12.0083 1.03676 12.0083 1.42627V8.00945C12.0083 8.39896 11.6925 8.71477 11.303 8.71477Z" fill="white" fillOpacity="0.6" />
                                                    <path d="M11.303 21.8808C10.9135 21.8808 10.5977 21.565 10.5977 21.1755V14.5923C10.5977 14.2028 10.9135 13.887 11.303 13.887C11.6925 13.887 12.0083 14.2028 12.0083 14.5923V21.1755C12.0083 21.565 11.6925 21.8808 11.303 21.8808Z" fill="white" fillOpacity="0.6" />
                                                    <path d="M8.01116 12.0061H1.42798C1.03847 12.0061 0.722656 11.6903 0.722656 11.3008C0.722656 10.9113 1.03847 10.5955 1.42798 10.5955H8.01116C8.40067 10.5955 8.71648 10.9113 8.71648 11.3008C8.71648 11.6903 8.40067 12.0061 8.01116 12.0061Z" fill="white" fillOpacity="0.6" />
                                                    <path d="M21.1772 12.0061H14.594C14.2045 12.0061 13.8887 11.6903 13.8887 11.3008C13.8887 10.9113 14.2045 10.5955 14.594 10.5955H21.1772C21.5667 10.5955 21.8825 10.9113 21.8825 11.3008C21.8825 11.6903 21.5667 12.0061 21.1772 12.0061Z" fill="white" fillOpacity="0.6" />
                                                </svg>
                                            } />
                                            <HorizontalLine />
                                            <PersonalCard svgIcon={
                                                <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.7062 0.37793H1.89747C0.858684 0.37793 0.0166016 1.22001 0.0166016 2.2588V13.544C0.0166016 14.5824 0.858684 15.4249 1.89747 15.4249H20.7062C21.745 15.4249 22.5871 14.5828 22.5871 13.544V2.2588C22.5871 1.22001 21.7446 0.37793 20.7062 0.37793ZM1.89747 13.544V11.0362C3.28383 11.0362 4.40531 12.1577 4.40531 13.544H1.89747ZM1.89747 4.76663V2.2588H4.40531C4.40531 3.64595 3.28383 4.76663 1.89747 4.76663ZM11.3018 11.6632C9.57065 11.6632 8.16705 9.979 8.16705 7.90142C8.16705 5.82384 9.57065 4.13968 11.3018 4.13968C13.033 4.13968 14.4366 5.82384 14.4366 7.90142C14.4366 9.97822 13.0338 11.6632 11.3018 11.6632ZM20.7062 13.544H18.1984C18.1984 12.1577 19.3198 11.0362 20.7062 11.0362V13.544ZM20.7062 4.76663C19.3198 4.76663 18.1984 3.64516 18.1984 2.2588H20.7062V4.76663Z" fill="white" fillOpacity="0.6" />
                                                </svg>
                                            } />
                                            <HorizontalLine />
                                            <PersonalCard svgIcon={
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.3009 4.86038C7.18958 4.86038 4.65824 7.39173 4.65824 10.503C4.65824 13.6143 7.18958 16.1456 10.3009 16.1456C13.4121 16.1456 15.9435 13.6143 15.9435 10.503C15.9435 7.39173 13.4121 4.86038 10.3009 4.86038ZM10.3009 13.6378C8.56967 13.6378 7.16607 12.2342 7.16607 10.503C7.16607 8.77182 8.56888 7.36821 10.3009 7.36821C12.032 7.36821 13.4356 8.77182 13.4356 10.503C13.4356 12.2342 12.0328 13.6378 10.3009 13.6378ZM10.3009 9.24909C9.6112 9.24909 9.04694 9.81335 9.04694 10.503C9.04694 11.1927 9.60963 11.7569 10.3009 11.7569C10.9921 11.7569 11.5548 11.1942 11.5548 10.503C11.5548 9.81178 10.9905 9.24909 10.3009 9.24909ZM10.3009 0.47168C4.76795 0.47168 0.269531 4.9701 0.269531 10.503C0.269531 16.0359 4.76795 20.5343 10.3009 20.5343C15.8338 20.5343 20.3322 16.0359 20.3322 10.503C20.3322 4.9701 15.8338 0.47168 10.3009 0.47168ZM10.3009 18.0265C6.14726 18.0265 2.77736 14.6582 2.77736 10.503C2.77736 6.34784 6.14569 2.97951 10.3009 2.97951C14.456 2.97951 17.8243 6.34784 17.8243 10.503C17.8243 14.6582 14.4544 18.0265 10.3009 18.0265Z" fill="white" fillOpacity="0.6" />
                                                </svg>
                                            } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

const ReportCard = () => {
    return <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#201d23] to-zinc-900">
        <div className="flex items-center justify-between p-5 bg-gradient-to-b from-[#151318] to-[#131015] rounded-[12px]">
            <div className="flex items-center gap-3 my-1">
                <div className="h-12 w-12 bg-[#1d1b20] flex items-center justify-center ">
                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.58596 1.66969L7.47199 5.96888L11.8251 0.609018C11.947 0.459176 12.1011 0.338764 12.276 0.256749C12.4509 0.174735 12.642 0.133232 12.8352 0.13533C13.0283 0.137428 13.2185 0.183073 13.3916 0.268867C13.5647 0.354661 13.7161 0.478393 13.8347 0.630848L17.9888 5.9676L23.0328 1.60677C23.2309 1.43587 23.4764 1.32954 23.7366 1.30203C23.9968 1.27451 24.2591 1.32712 24.4886 1.4528C24.718 1.57849 24.9036 1.77126 25.0205 2.00531C25.1374 2.23936 25.18 2.50353 25.1426 2.76247L23.2164 16.0491H2.42288L0.467185 2.82282C0.428337 2.56245 0.470452 2.29643 0.587827 2.06079C0.705202 1.82515 0.892164 1.63128 1.12339 1.50544C1.35462 1.3796 1.61893 1.32786 1.88054 1.35724C2.14215 1.38662 2.38841 1.49569 2.58596 1.66969ZM2.52304 17.3332H23.0688V18.6173C23.0688 18.9579 22.9335 19.2845 22.6927 19.5253C22.4518 19.7662 22.1252 19.9014 21.7847 19.9014H3.80715C3.46658 19.9014 3.13996 19.7662 2.89915 19.5253C2.65833 19.2845 2.52304 18.9579 2.52304 18.6173V17.3332Z" fill="#AD53F2" />
                    </svg>
                </div>
                <div className="font-semibold">
                    <div className="text-[20px]">Alex</div>
                    <div className="text-[13px] text-zinc-400">Slaughter Gang</div>
                </div>
            </div>
            <div className="p-[1px] bg-gradient-to-bl from-gray-700 via-gray-900 to-gray-900 rounded-full w-fit h-fit">
                <div className="bg-[#15101b] bg-gradient-to-r from-[#160f1d] to-[#131016] h-14 w-14 rounded-full flex items-center justify-center">
                    #1
                </div>
            </div>
        </div>
    </div >
}


const PersonalCard = ({ svgIcon }: { svgIcon: ReactNode }) => {
    return <div>

        <div className="flex justify-between items-center">

            <div className="flex items-center gap-2">
                <div className="w-9 h-9  bg-zinc-800 flex justify-center items-center">
                    {svgIcon}
                </div>
                <div>
                    <div className="text-sm">Kill Death Ratio  </div>
                    <div className="text-[11px] text-zinc-400">All time  </div>

                </div>
            </div>

            <div className="text-[11px]">
                32
            </div>
        </div>

    </div>
}