"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto py-4 px-4 flex items-center justify-between relative">
        <div className="text-[#0a4b78] font-bold text-2xl relative">
          <span className="text-[#0a4b78]">CLASS</span>
          <span className="text-[#14b8a6]">DENT</span>

          {/* Etiqueta animada - desktop */}
          <div className="absolute -right-20 top-14 transform rotate-6 animate-swing origin-top-left z-20 hidden md:block">
            <div className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-white px-4 py-2 rounded-md shadow-lg relative border border-white/20 w-52">
              <div className="absolute -top-2 left-2 w-3 h-3 bg-[#0a4b78] rounded-full border-2 border-white"></div>
              <p className="text-base font-extrabold">Parcelamos em</p>
              <p className="text-base font-extrabold">36x o seu tratamento</p>
            </div>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#inicio" className="text-gray-700 hover:text-[#0a4b78] font-bold">
            Início
          </Link>
          <Link href="#sobre" className="text-gray-700 hover:text-[#0a4b78] font-bold">
            Quem somos
          </Link>
          <Link href="#servicos" className="text-gray-700 hover:text-[#0a4b78] font-bold">
            Serviços
          </Link>
          <Link href="#contato" className="text-gray-700 hover:text-[#0a4b78] font-bold">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white">Agendar Consulta</Button>
          </a>
          <button onClick={toggleMenu} className="md:hidden text-[#0a4b78]">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Etiqueta animada - mobile (abaixo do logo) */}
      <div className="relative md:hidden">
        <div className="absolute left-4 top-0 transform rotate-6 animate-swing origin-top-left z-20">
          <div className="bg-gradient-to-r from-[#4ade80] to-[#22c55e] text-white px-3 py-2 rounded-md shadow-lg relative border border-white/20 w-48">
            <div className="absolute -top-2 left-2 w-3 h-3 bg-[#0a4b78] rounded-full border-2 border-white"></div>
            <p className="text-base font-extrabold">Parcelamos em</p>
            <p className="text-base font-extrabold">36x o seu tratamento</p>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-[#0a4b78] font-bold text-2xl">
                <span className="text-[#0a4b78]">CLASS</span>
                <span className="text-[#14b8a6]">DENT</span>
              </div>
              <button onClick={toggleMenu} className="text-[#0a4b78]">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              <Link
                href="#inicio"
                className="text-xl text-gray-700 hover:text-[#0a4b78] py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Início
              </Link>

              <Link
                href="#sobre"
                className="text-xl text-gray-700 hover:text-[#0a4b78] py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Quem somos
              </Link>
              <Link
                href="#servicos"
                className="text-xl text-gray-700 hover:text-[#0a4b78] py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link
                href="#contato"
                className="text-xl text-gray-700 hover:text-[#0a4b78] py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                Contato
              </Link>
              <div className="pt-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full py-4">Agendar Consulta</Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section - Adaptado da quarta imagem */}
        <section id="inicio" className="bg-[#0a4b78] relative overflow-hidden">
          <div className="container mx-auto px-4 py-8 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6 md:space-y-8 z-10 pt-16 md:pt-16">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-8 md:mt-0">
                  Seu <span className="text-[#4ade80]">sorriso saudável</span> começa com um clique!
                </h1>
                <p className="text-lg md:text-xl">
                  Tratamentos de qualidade para toda a família, com parcelamento acessível
                </p>
                <div className="pt-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#4ade80] hover:bg-[#22c55e] text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto">
                      Agende sua avaliação agora
                    </Button>
                  </a>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 md:h-5 md:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm md:text-base">Mais de 2000 pacientes atendidos com excelência</span>
                </div>
              </div>
              <div className="relative z-10 flex justify-center md:justify-end mt-6 md:mt-0">
                <div className="p-2 border-4 border-[#0a4b78] rounded-lg bg-white shadow-xl max-w-xs md:max-w-xl">
                  <Image
                    src="/images/equipe.jpeg"
                    alt="Equipe de profissionais dentistas"
                    width={700}
                    height={540}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós Section - Adaptado da terceira imagem */}
        <section id="sobre" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-[#0a4b78]">
                  Por trás de cada sorriso, existe confiança. Conheça a Class Dent.
                </h2>
                <p className="text-gray-700 text-base md:text-lg">
                  Na Class Dent, acreditamos que um sorriso saudável vai além da estética — ele transforma vidas.
                </p>
                <p className="text-gray-700 text-base md:text-lg">
                  Oferecemos um atendimento próximo, com profissionais altamente qualificados, tecnologia de ponta e
                  planos acessíveis.
                </p>
                <p className="text-gray-700 text-base md:text-lg">
                  Estamos ao seu lado em cada etapa, com clareza, cuidado e compromisso.
                </p>
                <div className="pt-4 md:pt-6">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto">
                      Agendar minha avaliação gratuita
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative mt-6 md:mt-0">
                <div className="p-2 border-4 border-[#0a4b78] rounded-lg max-w-xs md:max-w-lg mx-auto">
                  <Image
                    src="/images/recepcao.png"
                    alt="Recepção da clínica"
                    width={650}
                    height={650}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Adaptado da segunda imagem */}
        <section id="servicos" className="py-12 md:py-16 bg-[#f8fafc]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-[#0a4b78] mb-3 md:mb-4">Nossos Serviços</h2>

              {/* Linha decorativa laranja */}
              <div className="flex justify-center items-center">
                <div className="h-1 w-16 bg-[#f97316] rounded-full mx-2"></div>
                <div className="h-1 w-32 bg-[#f97316] opacity-70 rounded-full mx-2"></div>
                <div className="h-1 w-16 bg-[#f97316] rounded-full mx-2"></div>
              </div>

              <p className="text-center text-gray-700 text-base md:text-lg mt-6 mb-8 md:mb-12">
                Oferecemos uma ampla gama de tratamentos odontológicos para cuidar da sua saúde bucal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#f97316] border-b border-x border-[#e2e8f0]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="text-[#0a4b78] text-4xl">🦷</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0a4b78]">Clínica Geral</h3>
                <p className="text-gray-700 mb-5 md:mb-6">
                  Aqui cuidamos da sua saúde bucal no dia a dia, com limpezas, aplicação de flúor, restaurações e outros
                  tratamentos básicos. É a área responsável por prevenir e tratar os problemas garantindo um sorriso
                  saudável e funcional!
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full md:w-auto">Quero saber</Button>
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#f97316] border-b border-x border-[#e2e8f0]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="text-[#0a4b78] text-4xl">😁</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0a4b78]">Ortodontia</h3>
                <p className="text-gray-700 mb-5 md:mb-6">
                  Corrigimos o alinhamento dos dentes com aparelhos convencionais ou alinhadores transparentes. Além de
                  melhorar a estética do sorriso, a ortodontia também contribui para uma mastigação mais eficiente e uma
                  boa higiene.
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full md:w-auto">Quero saber</Button>
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#f97316] border-b border-x border-[#e2e8f0]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="text-[#0a4b78] text-4xl">✨</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0a4b78]">Estética Dental</h3>
                <p className="text-gray-700 mb-5 md:mb-6">
                  Oferecemos procedimentos como clareamento dental, facetas e remodelação com resinas para valorizar o
                  seu sorriso. A estética dental é ideal para quem busca mais harmonia e confiança na hora de sorrir!
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full md:w-auto">Quero saber</Button>
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#f97316] border-b border-x border-[#e2e8f0]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="text-[#0a4b78] text-4xl">🔬</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0a4b78]">Endodontia</h3>
                <p className="text-gray-700 mb-5 md:mb-6">
                  Tratamos a parte interna do dente, especialmente quando há dor ou infecção. Com tecnologia avançada,
                  realizamos o tratamento de canal de forma segura e confortável, preservando o dente e alivanto o
                  desconforto!
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full md:w-auto">Quero saber</Button>
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#f97316] border-b border-x border-[#e2e8f0]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="text-[#0a4b78] text-4xl">🦷</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0a4b78]">Implantes</h3>
                <p className="text-gray-700 mb-5 md:mb-6">
                  Trabalhamos com implantes dentários, uma solução segura e duradoura para repor dentes perdidos. Com
                  técnicas modernas, devolvemos a estética, a mastigação e a autoestima do paciente!
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full md:w-auto">Quero saber</Button>
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-[#f97316] border-b border-x border-[#e2e8f0]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center">
                    <span className="text-[#0a4b78] text-4xl">💉</span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0a4b78]">Exodontia de Siso</h3>
                <p className="text-gray-700 mb-5 md:mb-6">
                  Cuidar dos sisos é essencial para manter o alinhamento e a saúde do seu sorriso. Avaliamos se há
                  espaço suficiente para o nascimento desses dentes e acompanhamos possíveis impactos na arcada
                  dentária. Quando necessário, indicamos a extração para prevenir dores, apinhamentos ou problemas
                  futuros.
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white w-full md:w-auto">Quero saber</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Adaptado da primeira imagem */}
        <section id="contato" className="py-12 md:py-16 bg-[#0a4b78] text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4">Fale com a gente agora mesmo!</h2>
            <p className="text-center text-lg md:text-xl mb-8 md:mb-12">Estamos prontos para cuidar do seu sorriso.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#14b8a6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a4b78]">Telefone</h3>
                <p className="text-gray-700 mb-4">(43) 3354-9453</p>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a4b78] font-medium hover:underline"
                >
                  Enviar mensagem
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#14b8a6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a4b78]">Endereço</h3>
                <p className="text-gray-700 mb-1">Av. Paraná, 287 Sobre Loja</p>
                <p className="text-gray-700">Centro, Londrina/PR</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a4b78]">Horário de Atendimento</h3>
                <p className="text-gray-700 mb-1">Segunda a Sexta: 8h às 18h</p>
                <p className="text-gray-700 mb-1">Sábado: 8h às 13h</p>
                <p className="text-gray-700">Domingos: Fechado</p>
              </div>
            </div>

            <div className="text-center mt-10 md:mt-12">
              <p className="text-lg md:text-xl mb-4 md:mb-6">Prefere falar por WhatsApp?</p>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#f97316] hover:bg-[#ea580c] text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full md:w-auto">
                  Falar com um atendente agora
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0f172a] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-white">CLASS</span>
                <span className="text-[#14b8a6]">DENT</span>
              </h3>
              <p className="text-gray-400">Cuidados odontológicos de alta qualidade para toda a família.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#sobre" className="text-gray-400 hover:text-white">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link href="#servico" className="text-gray-400 hover:text-white">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-gray-400 hover:text-white">
                    Contato
                  </Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 13h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ClassDent. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B554388739148&text=Ol%C3%A1%21+Vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <Phone className="h-6 w-6 md:h-7 md:w-7 text-white" />
          <span className="sr-only">Falar no WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
