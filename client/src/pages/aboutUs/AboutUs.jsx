import React from "react";

export default function AboutUs() {
  return (
    <div className="w-screen min-h-screen flex flex-col m-0 p-0 bg-purple-50 text-purple-800">
      
      <main className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
        <h2 className="text-4xl font-bold mb-4">Kdo jsme?</h2>
        <p className="max-w-2xl text-lg text-center">
          Jsme tým kreativců zaměřený na tvorbu unikátních triček. Naše mise je pomoci lidem vyjádřit svou osobnost prostřednictvím designu na míru.
        </p>
      </main>
     
    </div>
  );
}