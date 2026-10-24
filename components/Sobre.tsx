"use client";
import React from "react";
import Image from "next/image";
import { Bed, House, Briefcase, Check, ChevronDown } from "lucide-react";

const sejaUm = [
  {
    nome: "Anfitrião",
    desc: "Ganhe uma renda extra alugando seu imóvel.",
    icone: <House />,
  },
  {
    nome: "Hóspede",
    desc: "Encontre o lugar perfeito para ficar em Angola.",
    icone: <Bed />,
  },
  {
    nome: "Funcionário",
    desc: "Trabalhe conosco e contribua para o crescimento do turismo em Angola.",
    icone: <Briefcase />,
  },
];

const faqs = [
  {
    pergunta: "Como posso me tornar um anfitrião na Acomoda?",
    resposta:
      "Para se tornar um anfitrião, basta criar uma conta na plataforma e seguir as instruções para cadastrar seu imóvel.",
  },
  {
    pergunta: "Quais são os benefícios de ser um anfitrião na Acomoda?",
    resposta:
      "Como anfitrião, você pode ganhar uma renda extra alugando seu imóvel e ter acesso a uma comunidade de hóspedes interessados em sua localização.",
  },
  {
    pergunta:
      "Como posso encontrar o lugar perfeito para minha estadia em Angola?",
    resposta:
      "Você pode usar a barra de pesquisa na página inicial da Acomoda para procurar imóveis disponíveis em diferentes cidades e regiões de Angola.",
  },
];

export default function Sobre() {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="flex flex-col p-1 gap-3 sm:p-2">
      <section className="p-1 sm:p-2 rounded-4xl bg-fundo text-white">
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 sm:gap-12 p-6 sm:p-10 ">
          <div className="flex flex-col gap-4 ">
            <span className="text-destaque text-xs uppercase font-medium">
              {" "}
              Acomoda{" "}
            </span>
            <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
              Acomoda, 100% nacional
            </h1>
            <p className="text-cinza font-serif">
              A <span>Acomoda</span> é uma plataforma de origem Angolana, criada
              para propulsionar o mercado de turismo em Angola. Encontre casas,
              apartamentos, hotéis e vários lugares para se hospedar em
              Angola.{" "}
            </p>
            
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/hotel.avif"
              alt="Sobre a Acomoda"
              width={500}
              height={300}
              className="h-auto w-full rounded-2xl"
            />

            <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/70 to-transparent p-4 sm:p-6">
              <div className="max-w-xs rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                <p className="font-serif text-sm">Acomode-se em Angola</p>
                <h2 className=" text-2xl font-semibold text-destaque">
                  Conforto sempre.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 sm:gap-12 p-6 sm:p-10 ">
          <div className="flex flex-col gap-4 ">
            <span className="text-destaque text-xs uppercase font-medium">
              {" "}
              Seja um{" "}
            </span>
            <div className="flex flex-col gap-2 sm:flex-row">
              {sejaUm.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 sm:gap-1 p-2 sm:p-2 rounded-2xl"
                >
                  <span className="w-fit text-fundo bg-destaque p-1 rounded-full">
                    {item.icone}
                  </span>
                  <h2 className="font-serif ">{item.nome}</h2>
                  <p className="text-cinza font-serif text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
              Uma mensagem nossa
            </h1>
            <p className='text-cinza font-serif'>A <span>Acomoda</span> é uma plataforma que conecta hóspedes a imóveis para alugueis de curta estadia. Totalmente nacional, veio como forma de modernizar o mercado de turismo em Angola e demonstrar a nossa essencia.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 sm:gap-12 p-6 sm:p-10 ">
          <div className="flex flex-col gap-4 ">
            <span className="text-destaque text-xs uppercase font-medium">
              Cobertura Acomoda
            </span>
            <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
              Uma proteçãos completa para anfitriões e hóspedes
            </h1>
            <p className="text-cinza font-serif">
              A proteção ao anfitrião contra danos reembolsa certos danos
              causados pelos hóspedes durante as estadias no Airbnb. A proteção
              não é um seguro e pode ser aplicada caso os hóspedes não paguem. O
              seguro de responsabilidade civil é fornecido por terceiros.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center border border-white/15 bg-white/5 p-4 rounded-2xl">
              <p className="text-branco font-serif font-medium">
                Proteção contra danos de até 100mil kzs
              </p>
              <Check className="text-destaque" />
            </div>
            <div className="flex flex-row justify-between items-center border border-white/15 bg-white/5 p-4 rounded-2xl">
              <p className="text-branco font-serif font-medium">
                Seguro de responsabilidade civil de até 100mil kzs
              </p>
              <Check className="text-destaque" />
            </div>
            <div className="flex flex-row justify-between items-center border border-white/15 bg-white/5 p-4 rounded-2xl">
              <p className="text-branco font-serif font-medium">
                Proteção contra perdas financeiras
              </p>
              <Check className="text-destaque" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-1 sm:p-2 rounded-4xl border border-white/15 bg-white text-fundo backdrop-blur-md">
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-2 sm:gap-12 p-6 sm:p-10 ">
          <div className="flex flex-col gap-4 ">
            <span className="bg-destaque p-1 px-2 w-fit rounded-2xl text-fundo text-xs uppercase font-medium">
              Perguntas frequentes
            </span>
            <h1 className="font-serif text-fundo text-3xl leading-tight sm:text-4xl">
              Respostas para as perguntas mais frequentes feitas à Acomoda
            </h1>
            <p className="text-fundo/60 font-serif">
              Algumas respostas para as perguntas mais frequentes feitas à
              Acomoda. Se você tiver alguma dúvida, não hesite em entrar em
              contato conosco.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className="flex flex-col justify-between border border-white/15 bg-fundo/5 p-4 rounded-2xl cursor-pointer"
              >
                <div className="flex flex-row justify-between items-center gap-2">
                  <p className="text-fundo font-serif font-medium">
                    {faq.pergunta}
                  </p>
                  <ChevronDown
                    className="text-destaque"
                  />
                </div>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === index ? "max-h-40 border-t border-cinza-ink pt-2 " : "max-h-0"}`}>
                  {activeFaq === index && (
                    <p className="text-fundo/60 font-serif">{faq.resposta}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-1 sm:p-2 rounded-4xl bg-fundo text-white">
        <div className="flex flex-col gap-6 sm:gap-12 p-6 sm:p-10 ">
            <div className="flex flex-col gap-4 max-w-2xl">
                <span className="text-destaque text-xs uppercase font-medium">
                    Entre em contato
                </span>
                <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
                    Fale conosco a fim de tirar suas dúvidas
                </h1>
                <p className="text-cinza font-serif">
                    Se você tiver alguma dúvida, não hesite em entrar em contato conosco. Estamos sempre disponíveis para ajudá-lo.
                </p>

                <div className="flex flex-row gap-4">
                    <button className="bg-white text-fundo w-fit hover:bg-white/80 py-2 px-4 rounded-2xl font-medium transition-colors duration-300">
                        Entrar em contato
                    </button>
                    <button className="bg-destaque text-white w-fit hover:bg-destaque/90 py-2 px-4 rounded-2xl font-medium transition-colors duration-300">
                        Publicar uma casa
                    </button>
                </div>
                
            </div>
            
        </div>
      </section>
    </main>
  );
}
