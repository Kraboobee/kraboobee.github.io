import React from "react";
import Generic from "../Generic/Generic";
import ContactSection from "../SelectSection/Contact";

export const Home = () => {
    return (
        <div className="bg-gradient-to-r md:bg-gradient-to-br from-neutral-700 to-neutral-800 md:from-neutral-600 md:to-neutral-900 text-slate-200 md:h-screen bg-local bg-cover">
            <div className="container mx-auto content-center">
                <Generic />                
            </div>
            <div className="md:hidden container text-left font-extralight px-3 py-3 bg-neutral-900">
                <ContactSection />
            </div>
        </div>
    )
}