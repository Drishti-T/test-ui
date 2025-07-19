
export const ReportCard = () => {
    return <div className="p-[1px] rounded-[12px] bg-gradient-to-b from-[#201d23] to-zinc-900">
        <div className="flex items-center justify-between p-5 bg-gradient-to-b from-[#151318] to-[#131015] rounded-[12px]">
            <div className="flex items-center gap-3 my-2">
                <div className="h-12 w-12 bg-gray-600 flex items-center justify-center ">
                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.58596 1.66969L7.47199 5.96888L11.8251 0.609018C11.947 0.459176 12.1011 0.338764 12.276 0.256749C12.4509 0.174735 12.642 0.133232 12.8352 0.13533C13.0283 0.137428 13.2185 0.183073 13.3916 0.268867C13.5647 0.354661 13.7161 0.478393 13.8347 0.630848L17.9888 5.9676L23.0328 1.60677C23.2309 1.43587 23.4764 1.32954 23.7366 1.30203C23.9968 1.27451 24.2591 1.32712 24.4886 1.4528C24.718 1.57849 24.9036 1.77126 25.0205 2.00531C25.1374 2.23936 25.18 2.50353 25.1426 2.76247L23.2164 16.0491H2.42288L0.467185 2.82282C0.428337 2.56245 0.470452 2.29643 0.587827 2.06079C0.705202 1.82515 0.892164 1.63128 1.12339 1.50544C1.35462 1.3796 1.61893 1.32786 1.88054 1.35724C2.14215 1.38662 2.38841 1.49569 2.58596 1.66969ZM2.52304 17.3332H23.0688V18.6173C23.0688 18.9579 22.9335 19.2845 22.6927 19.5253C22.4518 19.7662 22.1252 19.9014 21.7847 19.9014H3.80715C3.46658 19.9014 3.13996 19.7662 2.89915 19.5253C2.65833 19.2845 2.52304 18.9579 2.52304 18.6173V17.3332Z" fill="#AD53F2"/>
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