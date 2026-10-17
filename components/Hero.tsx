"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "99,9%", label: "Confiável" },
  { value: "150+", label: "Imóveis disponíveis" },
];

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Imóveis", href: "/imoveis" },
  { label: "Contactos", href: "/contactos" },
];

export default function Hero() {

  // const [isOpen, setIsOpen] = useState(false);
  // const menuButtonRef = useRef<HTMLButtonElement>(null);
  // const closeButtonRef = useRef<HTMLButtonElement>(null);
  // const panelRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   if (!isOpen) return;

  //   const previousOverflow = document.body.style.overflow;
  //   document.body.style.overflow = "hidden";
  //   closeButtonRef.current?.focus();

  //   function handleKeyDown(event: KeyboardEvent) {
  //     if (event.key === "Escape") {
  //       setIsOpen(false);
  //       return;
  //     }

  //     if (event.key !== "Tab") return;

  //     const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
  //       'a[href], button:not([disabled])',
  //     );
  //     if (!focusableElements?.length) return;

  //     const firstElement = focusableElements[0];
  //     const lastElement = focusableElements[focusableElements.length - 1];
  //     const focusIsInsidePanel = panelRef.current?.contains(document.activeElement);

  //     if (event.shiftKey && (!focusIsInsidePanel || document.activeElement === firstElement)) {
  //       event.preventDefault();
  //       lastElement.focus();
  //     } else if (!event.shiftKey && (!focusIsInsidePanel || document.activeElement === lastElement)) {
  //       event.preventDefault();
  //       firstElement.focus();
  //     }
  //   }

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //     document.body.style.overflow = previousOverflow;
  //     menuButtonRef.current?.focus();
  //   };
  // }, [isOpen]);

  return (
    // Moldura exterior: borda arredondada com margem à volta
    <section className="p-1 sm:p-2">
      <div className="relative min-h-[88vh] overflow-hidden rounded-[2rem] bg-neutral-900 text-white">
        {/* 1. Imagem de fundo (coloca em /public/hero.jpg) */}
        <Image
          src="/hero.jpg"
          alt="Casa moderna ao entardecer"
          fill
          priority
          className="object-cover"
        />

        {/* 2. Overlay escuro para dar contraste ao texto */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/70" />

        {/* 3. Navbar */}
        {/* <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-serif text-lg tracking-wide">Acomoda</span>

          <nav aria-label="Navegação principal" className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  i === 0
                    ? "rounded-full bg-white px-4 py-1.5 font-medium text-black"
                    : "transition hover:text-white"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 text-white md:hidden"
          >
            <span aria-hidden="true" className="text-2xl leading-none">☰</span>
          </button>

          <Link
            href="/contactos"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black sm:inline-flex"
          >
            Consulta
          </Link>
        </header> */}

        {/* 4. Título gigante com degradê a desvanecer (o truque da referência) */}
        <h1
          className="pointer-events-none absolute inset-x-0 top-24 z-10 select-none text-center text-[22vw] font-semibold leading-none tracking-tight bg-linear-to-b from-white/90 to-white/0 bg-clip-text text-transparent sm:top-20"
        >
          Acomoda Angola
        </h1>

        {/* 5. Texto + CTA em baixo à esquerda */}
        <div className="absolute bottom-0 left-0 z-20 max-w-sm p-6 sm:p-10">
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            Acomodamos-te. <br /> Sempre no melhor conforto.
          </h2>
          <p className="mt-3 text-sm text-white/70">
            Imóveis que refletem o nosso interior
          </p>

          <Link
            href="/imoveis"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-sm font-medium text-black"
          >
            Ver acomodações
            <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
              →
            </span>
          </Link>
        </div>

        {/* 6. Cartões de estatísticas com glassmorphism */}
        <div className="absolute bottom-6 right-6 z-20 hidden w-44 flex-col gap-3 sm:flex sm:bottom-10 sm:right-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
            >
              <p className="font-serif text-3xl">{s.value}</p>
              <p className="text-xs text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <button
        type="button"
        aria-label="Fechar menu"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-50 bg-black/55 transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-label="Menu de navegação"
        aria-modal="true"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed right-0 top-0 z-[60] flex h-[100dvh] w-[80vw] max-w-sm flex-col bg-white px-7 py-6 text-gray-900 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-12 flex items-center justify-between">
          <span className="font-serif text-xl">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2 text-2xl leading-none text-gray-700 hover:bg-gray-100"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav aria-label="Navegação móvel" className="flex flex-col gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium transition-colors hover:text-gray-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside> */}
    </section>
  );
}
