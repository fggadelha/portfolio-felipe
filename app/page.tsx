"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-200 dark:from-black dark:to-zinc-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full px-10 py-4 flex justify-between items-center bg-black bg-opacity-70 backdrop-blur-md z-50" data-aos="fade-down">
  <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
    Felipe.dev 🚀
  </h1>
  <nav className="hidden md:flex space-x-8 text-lg font-semibold">
    <a href="#projetos" className="hover:text-blue-400 transition">Projetos</a>
    <a href="#habilidades" className="hover:text-blue-400 transition">Habilidades</a>
    <a href="#sobre" className="hover:text-blue-400 transition">Sobre</a>
    <a href="#contato" className="hover:text-blue-400 transition">Contato</a>
  </nav>
  <button className="md:hidden text-white text-2xl">☰</button>
</header>



      {/* Hero */}
<section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-black">
  <div className="flex flex-col md:flex-row items-center gap-12 z-10" data-aos="fade-up">
    <Image
      src="/felipe.jpg"
      alt="Foto de Felipe"
      width={200}
      height={200}
      className="rounded-full border-4 border-blue-500 shadow-xl hover:scale-105 transition"
    />
    <div data-aos="fade-left">
      <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
        Olá, me chamo Felipe
      </h2>
      <p className="mt-6 text-xl text-zinc-200 max-w-2xl">
        Desenvolvedor apaixonado por tecnologia, criando soluções modernas e buscando uma oportunidade para aplicar minhas habilidades em grandes projetos.
      </p>
    </div>
  </div>
</section>


      {/* Projetos */}
      <section id="projetos" className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-white mb-12" data-aos="fade-down">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group bg-zinc-900 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105" data-aos="zoom-in">
            <Image src="/mtelsite.png" alt="App de Tarefas" width={600} height={300} className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">Site de dedetizadora</h3>
              <p className="mt-2 text-zinc-400">Desenvolvimento completo de uma Landing Page para uma empresa de controle de pragas. Implementei uma interface moderna e responsiva, manipulação de DOM nativa para o menu mobile e otimização avançada de SEO utilizando dados estruturados (JSON-LD Schema.org) e metatags Open Graph.</p>
              <div className="flex gap-4 mt-4">
                <a href="https://mtelservicos.com" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" target="_blank">Site na Web</a>
             </div>
            </div>
          </div>
          <div className="group bg-zinc-900 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105" data-aos="zoom-in">
            <Image src="/portifolio.png" alt="Site Portfólio" width={600} height={300} className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white">Site Portfólio</h3>
              <p className="mt-2 text-zinc-400">Este próprio site, feito com Next.js , Tailwind CSS e React.</p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/fggadelha/portfolio-felipe" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-6 max-w-5xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-white mb-12" data-aos="fade-down">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12" data-aos="zoom-in">
          <Image src="/java.png" alt="Java" width={80} height={80} className="mx-auto hover:scale-110 transition"/>
          <Image src="/javascript.png" alt="JavaScript" width={80} height={80} className="mx-auto hover:scale-110 transition"/>
          <Image src="/html5.png" alt="HTML5" width={80} height={80} className="mx-auto hover:scale-110 transition"/>
          <Image src="/css3.png" alt="CSS3" width={80} height={80} className="mx-auto hover:scale-110 transition"/>
          <Image src="/react.png" alt="React" width={80} height={80} className="mx-auto hover:scale-110 transition"/>
          <Image src="/nextjs.jpg" alt="Next.js" width={80} height={80} className="mx-auto hover:scale-110 transition"/>
        </div>
        <p className="mt-6 text-lg text-zinc-300" data-aos="fade-up">
          Experiência com Java, JavaScript, HTML5, CSS3 e React. Atualmente explorando Next.js e Tailwind para criar interfaces modernas e responsivas.
        </p>
      </section>

      {/* Sobre mim */}
      <section id="sobre" className="py-20 px-6 max-w-4xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-white mb-8" data-aos="fade-down">Sobre mim</h2>
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto" data-aos="fade-up">
          Sou desenvolvedor focado em aprender e evoluir constantemente. Tenho experiência com projetos web e estou sempre buscando novas tecnologias para melhorar minhas soluções.
        </p>
      </section>

      {/* Contato */}
<section id="contato" className="py-20 px-6 max-w-3xl mx-auto" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center text-white mb-8" data-aos="fade-down">Contato</h2>
  
  <form action="https://formspree.io/f/xvzyzawk" method="POST" className="space-y-4" data-aos="zoom-in">
    {/* Campo oculto para assunto */}
    <input type="hidden" name="_subject" value="Novo contato pelo portfólio!" />

    <input 
      type="text" 
      name="nome" 
      placeholder="Nome" 
      required 
      className="w-full p-3 border rounded bg-zinc-800 text-white"
    />

    <input 
      type="email" 
      name="email" 
      placeholder="Email" 
      required 
      className="w-full p-3 border rounded bg-zinc-800 text-white"
    />

    <textarea 
      name="mensagem" 
      placeholder="Mensagem" 
      required 
      className="w-full p-3 border rounded bg-zinc-800 text-white"
    ></textarea>

    <button 
      type="submit" 
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded hover:opacity-90 transition"
    >
      Enviar
    </button>
  </form>

  <div className="flex justify-center gap-6 mt-6" data-aos="fade-up">
    <a href="https://github.com/fggadelha" className="text-xl text-blue-400 hover:underline" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/fgadelha/" className="text-xl text-blue-400 hover:underline" target="_blank">LinkedIn</a>
  </div>
</section>


            {/* Footer */}
      <footer className="w-full text-center py-6 bg-transparent" data-aos="fade-up">
        <p className="text-zinc-400">© 2026 Felipe.dev - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
