import React, { useState } from "react";

export default function Index() {
    const [show, setshow] = useState(true);

    return (
        <div className="bg-gray-800">
            <div id="button" className={`${show ? "hidden" : "flex"} container mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <button onClick={() => setshow(true)} className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded">
                    Open Modal
                </button>
            </div>
            <div id="modal" className={`${show ? "flex" : "hidden"} container mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                    <div role="img" aria-label="Luxe. Logo.">
                        <svg width={54} height={24} viewBox="0 0 54 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.9521 20.3965C4.9521 21.1843 5.12115 21.7319 5.45924 22.0394C5.79734 22.3276 6.38403 22.4717 7.21933 22.4717V23.077C5.38964 23.0001 4.18642 22.9617 3.60966 22.9617C3.03291 22.9617 1.82969 23.0001 0 23.077V22.4717C0.835294 22.4717 1.42199 22.3276 1.76008 22.0394C2.09818 21.7319 2.26723 21.1843 2.26723 20.3965V3.93912C2.26723 3.05524 2.09818 2.41155 1.76008 2.00804C1.42199 1.60453 0.835294 1.40277 0 1.40277V0.797511C0.616527 0.855155 1.23305 0.883977 1.84958 0.883977C3.10252 0.883977 4.13669 0.749475 4.9521 0.480469V20.3965Z" fill="#18181B" />
                            <path
                                d="M22.2884 19.9642C22.2884 20.8481 22.4575 21.4917 22.7956 21.8953C23.1337 22.2988 23.7204 22.5005 24.5556 22.5005V23.1058C23.9391 23.0481 23.3226 23.0193 22.7061 23.0193C21.4531 23.0193 20.419 23.1538 19.6035 23.4228V20.0218C19.1262 21.2131 18.45 22.0874 17.575 22.6446C16.6999 23.2019 15.7453 23.4805 14.7111 23.4805C13.3587 23.4805 12.3246 23.1154 11.6086 22.3852C11.2506 22.0009 10.9921 21.511 10.833 20.9153C10.6937 20.3197 10.6241 19.5511 10.6241 18.6095V11.3752C10.6241 10.4913 10.4551 9.84764 10.117 9.44413C9.77889 9.04062 9.1922 8.83887 8.3569 8.83887V8.2336C8.97343 8.29125 9.58996 8.32007 10.2065 8.32007C11.4594 8.32007 12.4936 8.18557 13.309 7.91656V19.2436C13.309 19.9738 13.3488 20.5694 13.4283 21.0306C13.5278 21.4725 13.7366 21.8376 14.0548 22.1258C14.3929 22.4141 14.9 22.5582 15.5762 22.5582C16.332 22.5582 17.0181 22.3276 17.6346 21.8664C18.2512 21.4053 18.7285 20.7808 19.0666 19.993C19.4246 19.186 19.6035 18.3021 19.6035 17.3414V11.3752C19.6035 10.4913 19.4345 9.84764 19.0964 9.44413C18.7583 9.04062 18.1716 8.83887 17.3363 8.83887V8.2336C17.9528 8.29125 18.5694 8.32007 19.1859 8.32007C20.4388 8.32007 21.473 8.18557 22.2884 7.91656V19.9642Z"
                                fill="#18181B"
                            />
                            <path
                                d="M38.459 21.0306C38.8169 21.511 39.1153 21.8568 39.3539 22.0682C39.6125 22.2603 39.9307 22.3948 40.3085 22.4717V23.077C39.2744 23.0001 38.5683 22.9617 38.1905 22.9617C37.5143 22.9617 36.3409 23.0001 34.6703 23.077V22.4717C34.9885 22.4717 35.257 22.4141 35.4758 22.2988C35.7144 22.1835 35.8337 22.0298 35.8337 21.8376C35.8337 21.7031 35.794 21.5878 35.7144 21.4917L32.3136 16.7073L30.1359 19.4454C29.579 20.1563 29.3006 20.7328 29.3006 21.1747C29.3006 21.5782 29.4895 21.8953 29.8674 22.1258C30.2651 22.3372 30.812 22.4621 31.5081 22.5005V23.077C30.4739 23.0193 29.3403 22.9905 28.1073 22.9905C27.2322 22.9905 26.4765 23.0193 25.84 23.077V22.5005C26.2378 22.4621 26.6356 22.2892 27.0333 21.9817C27.451 21.6743 27.9283 21.1747 28.4653 20.483L31.8959 16.1308L27.7493 10.28C27.3515 9.72274 27.0333 9.35766 26.7947 9.18473C26.556 8.99258 26.2577 8.87729 25.8997 8.83887V8.2336C26.9339 8.31046 27.6399 8.34889 28.0178 8.34889C28.694 8.34889 29.8674 8.31046 31.538 8.2336V8.83887C31.2197 8.83887 30.9413 8.89651 30.7027 9.0118C30.4839 9.12709 30.3745 9.2808 30.3745 9.47295C30.3745 9.60745 30.4143 9.72274 30.4938 9.81882L33.6859 14.3151L35.7443 11.5193C36.3409 10.6931 36.6392 10.0878 36.6392 9.70353C36.6392 9.43452 36.5 9.23277 36.2216 9.09826C35.963 8.94455 35.5354 8.84847 34.9388 8.81004V8.2336C35.973 8.29125 36.8083 8.32007 37.4447 8.32007C38.3197 8.32007 39.0755 8.29125 39.7119 8.2336V8.81004C38.8965 8.90612 38.0214 9.57863 37.0867 10.8276L34.0737 14.8627L38.459 21.0306Z"
                                fill="#18181B"
                            />
                            <path
                                d="M54 19.6183C53.642 20.6751 52.9658 21.5878 51.9714 22.3564C50.9969 23.1058 49.8136 23.4805 48.4214 23.4805C47.0094 23.4805 45.7863 23.173 44.7521 22.5582C43.7179 21.9241 42.9224 21.0498 42.3655 19.9354C41.8286 18.8017 41.5601 17.4951 41.5601 16.0156C41.5601 14.3439 41.8385 12.8932 42.3954 11.6634C42.9522 10.4337 43.7378 9.49217 44.7521 8.83887C45.7664 8.16635 46.9497 7.83009 48.3021 7.83009C50.092 7.83009 51.4643 8.3585 52.4189 9.41531C53.3934 10.4529 53.8807 12.0381 53.8807 14.1709H44.5433C44.4836 14.709 44.4538 15.3238 44.4538 16.0156C44.4538 17.2837 44.6626 18.3886 45.0802 19.3301C45.5178 20.2716 46.0846 21.0018 46.7807 21.5206C47.4966 22.0202 48.2424 22.2699 49.0181 22.2699C49.9727 22.2699 50.8179 22.049 51.5538 21.607C52.2896 21.1651 52.9062 20.4253 53.4034 19.3877L54 19.6183ZM48.1828 8.37771C47.248 8.37771 46.4426 8.81965 45.7664 9.70353C45.0902 10.5874 44.6725 11.894 44.5134 13.6233H51.0168C51.0566 12.1246 50.8279 10.8756 50.3307 9.87646C49.8534 8.87729 49.1374 8.37771 48.1828 8.37771Z"
                                fill="#18181B"
                            />
                        </svg>
                    </div>
                    <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">Welcome to the coveted family of luxe!</h1>
                    <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12">A confirmation email has been sent to your account, johndoe@gmail.com, with the details of shipping and delivery.</p>
                    <div className="mt-12 md:mt-14 w-full flex justify-center">
                        <button onClick={() => setshow(false)} className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white">
                            Back to store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
