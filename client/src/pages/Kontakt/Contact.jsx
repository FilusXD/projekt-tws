export default function Contact() {
  return (

    <div className="w-screen min-h-screen flex flex-col m-0 p-0 bg-purple-50 text-purple-800">

      <main className="flex-1 flex flex-col justify-start items-center p-8 md:p-16">

        <div 
          className="bgcontainer text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg text-lg md:text-xl"
          style={{ marginBottom: '2rem' }} 
        >
          CONTACT US
        </div>
        
        <p className="max-w-3xl text-lg md:text-xl text-black text-center mb-6 leading-relaxed">
          V TričkoDesignu si velmi vážíme vaší zpětné vazby a snažíme se zajistit vaši maximální spokojenost. Ať už máte jakékoli dotazy, připomínky, stížnosti nebo potřebujete řešit reklamaci, jsme tu pro vás. Vaše spokojenost je naší prioritou a každý podnět bereme vážně.
        </p>

        <p className="max-w-3xl text-lg md:text-xl text-black text-center mb-6 leading-relaxed">
          Pro veškerou komunikaci nás prosím kontaktujte prostřednictvím e-mailu. Snažíme se odpovědět co nejrychleji, obvykle do 24-48 hodin v pracovních dnech. Pro efektivní vyřízení vašeho požadavku nám prosím uveďte co nejpodrobnější informace, včetně čísla objednávky, pokud se dotaz týká konkrétního nákupu.
        </p>

        <p className="max-w-3xl text-lg md:text-xl text-black text-center leading-relaxed">
          Náš kontaktní e-mail: <a href="mailto:info@trickodesign.cz" className="text-orange-500 underline hover:no-underline transition duration-200">info@trickodesign.cz</a>
        </p>

        <p className="max-w-3xl text-lg md:text-xl text-black text-center leading-relaxed">
          Děkujeme, že jste si vybrali TričkoDesign. Těšíme se na vaši zprávu!
        </p>
      </main>

    </div>
  );
}