export default function AboutUs() {
  return (
    <div className="w-screen min-h-screen flex flex-col m-0 p-0 bg-purple-50 text-purple-800">
      <main className="flex-1 flex flex-col justify-start items-center p-8 md:p-16">
        <div
          className="bgcontainer text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-2xl shadow-lg text-lg md:text-xl"
          style={{ marginBottom: "2rem" }}
        >
          ABOUT US
        </div>

        <p className="max-w-3xl text-lg md:text-xl text-black text-center mb-6 leading-relaxed">
          Jsme Tým TričkoDesign, váš partner pro kreativní vyjádření
          prostřednictvím módy. Věříme, že každé tričko může vyprávět příběh.
        </p>

        <p className="max-w-3xl text-lg md:text-xl text-black text-center mb-6 leading-relaxed">
          Naše platforma je navržena tak, aby bylo vytváření vlastního designu
          trička zábavné a intuitivní. Od výběru základní barvy a ideální
          velikosti, až po přidání osobního textu nebo unikátního loga – dáváme
          vám plnou kontrolu. Chceme, abyste si mohli vytvořit tričko, které
          nejen skvěle vypadá, ale také dokonale odráží vaši osobnost, náladu
          nebo zprávu, kterou chcete sdílet se světem.
        </p>

        <p className="max-w-3xl text-lg md:text-xl text-black text-center leading-relaxed">
          Nezáleží na tom, zda hledáte jedinečný dárek, firemní oblečení, tričko
          pro speciální událost nebo jen chcete oživit svůj šatník něčím
          originálním. Jsme tu, abychom vám pomohli vaše nápady proměnit ve
          skutečnost. Kvalita a vaše spokojenost jsou pro nás prioritou, proto
          používáme jen ty nejlepší materiály a tiskové techniky. Připojte se k
          nám a začněte tvořit trička, která mluví za vás!
        </p>
      </main>
    </div>
  );
}
