import React from "react";

const Onama = () => {
    return (
      <div className="wrapper">
        <div className="@apply absolute w-full h-[70%] flex justify-center items-center;">
          <div className="@apply absolute not-italic font-normal text-5xl leading-[58px] text-black left-16 top-16">
            <h1>O nama</h1>
          </div>
          <div className="@apply flex items-center absolute box-border w-[80rem] h-80 p-8 rounded-[10px] border-[3px] border-solid border-[#F60201] top-40">
            <h1 className="@apply absolute w-fit h-fit not-italic font-normal text-[35px] leading-[42px] text-black">
              Društvo je osnovala nekolicina entuzijasta koji su svoje planinarsko
              iskustvo stjecali unutar svojih obitelji, raznih drugih planinarskih
              društava, unutar crkvene zajednice, te planinarskih škola, vodičkih
              tečajeva, po europskim, pa i svjetskim planinama. Družeći se tako,
              skupio se dovoljno veliki krug istomišljenika koji su jednoglasno
              prihavatili prijedlog da krenemo u pričanje vlastite planinarske
              priče. Društvo se isprofiliralo za izlete primarno namjenjene
              obiteljima s djecom.
            </h1>
          </div>
        </div>
      </div>
    );
  };

export default Onama;
