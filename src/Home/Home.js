import React from "react";

export const Home = () => {
    return (
        <div className="bg-gradient-to-r from-slate-500 to-slate-700 h-screen bg-fixed bg-cover">
            <div className="container mx-auto text-slate-200 content-center">
                <div className="flex flex-row gap-10 text-center">
                    <div className="basis-1/3 flex flex-col gap-3 bg-gradient-to-br from-slate-100 to-slate-300">
                        <h1 className="text-slate-800 text-6xl">
                            Kaamraan Raboobee
                        </h1>
                    </div>

                </div>
                <p>
                    Hello
                </p>
            </div>
        </div>
    )
}