import React from "react";

export default function Contact() {
  return (
    
    <div className="w-screen min-h-screen flex flex-col m-0 p-0 bg-purple-50 text-purple-800">
      
      <main className="flex-1 flex flex-col justify-center items-center p-8 md:p-16">
        <h2 className="text-4xl font-bold mb-4">Spojte se s námi</h2>
        <p className="max-w-2xl text-lg text-center">
          Máte dotazy? Napište nám na <a href="mailto:info@trickodesign.cz" className="text-orange-500 underline">info@trickodesign.cz</a> nebo nás sledujte na sociálních sítích.
        </p>
      </main>
      
    </div>
  );
}