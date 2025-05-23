"use client"

import { useEffect, useRef, useState } from "react"
import "../styles/landing-page.css"
import developerCat from "../assets/developer-cat.png"
import LandingPageBuilder from "./LandingPageBuilder"
import ContactForm from "./ContactForm"
import TermsOfUse from "./TermsOfUse"
import PrivacyPolicy from "./PrivacyPolicy"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState("Outros")
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)
  const builderRef = useRef(null)

  const scrollToSection = (refOrFunction) => {
    if (typeof refOrFunction === "function") {
      refOrFunction()
    } else if (refOrFunction && refOrFunction.current) {
      refOrFunction.current?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    // Cursor light effect
    const cursorLight = document.querySelector(".cursor-light")
    if (cursorLight) {
      const handleMouseMove = (e) => {
        cursorLight.style.opacity = "1"
        cursorLight.style.transform = `translate(${e.clientX - 128}px, ${e.clientY - 128}px)`
      }

      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="landing-container">
      {/* Cursor light effect */}
      <div className="cursor-light"></div>

      {/* Grid background */}
      <div className="grid-bg"></div>

      {/* Modals */}
      {showTerms && <TermsOfUse onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-text glitch-text">
              Tech<span className="logo-highlight">Sanca</span>
            </div>
          </div>

          <nav className="nav-menu">
            <button onClick={() => scrollToSection(heroRef)} className="nav-link">
              Início
            </button>
            <button onClick={() => scrollToSection(servicesRef)} className="nav-link">
              Serviços
            </button>
            <button onClick={() => scrollToSection(builderRef)} className="nav-link">
              Monte sua Landing
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link">
              Contato
            </button>
          </nav>

          <button onClick={() => scrollToSection(contactRef)} className="cta-button">
            Fale Comigo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className={`hero-section ${isVisible ? "visible" : ""}`}>
        <div className="hero-bg">
          <div className="hero-gradient-1"></div>
          <div className="hero-gradient-2"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-on-scroll">
              <div className="hero-badge glitch-subtle">MARKETING DIGITAL & DESENVOLVIMENTO WEB</div>
              <h1 className="hero-title glitch-text">
                Transforme sua <span className="gradient-text">presença digital</span> em resultados reais
              </h1>
              <p className="hero-description">
                Estratégias inovadoras e sites de alta conversão que impulsionam seu negócio para o futuro.
              </p>

              <div className="hero-buttons">
                <button onClick={() => scrollToSection(contactRef)} className="primary-button neon-button">
                  Iniciar Projeto
                </button>
                <button onClick={() => scrollToSection(builderRef)} className="outline-button">
                  Monte sua Landing
                </button>
              </div>

              <div className="hero-stats">
                <div className="stats-avatars">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="stat-avatar">
                      <span>{i}</span>
                    </div>
                  ))}
                </div>
                <div className="stats-text">
                  <span className="stats-highlight">+35</span> projetos entregues e aprovados pelos clientes!
                </div>
              </div>
            </div>

            <div className="hero-image-container animate-on-scroll">
              <div className="image-glow"></div>
              <div className="image-frame">
                <img
                  src={developerCat || "/placeholder.svg"}
                  alt="Desenvolvedor com gato em ambiente cyberpunk"
                  className="hero-image"
                />
                <div className="image-overlay"></div>
                <div className="image-status">
                  <div className="status-indicator"></div>
                  <span className="status-text">Online agora</span>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <button onClick={() => scrollToSection(servicesRef)} className="scroll-button">
              <span>Descubra mais</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title glitch-text">
              Serviços <span className="gradient-text">Especializados</span>
            </h2>
            <p className="section-description">
              Soluções completas para transformar sua presença digital e maximizar seus resultados
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                ),
                title: "Websites de Alta Conversão",
                description:
                  "Sites otimizados para converter visitantes em clientes, com design futurista e experiência imersiva.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                ),
                title: "Marketing Digital",
                description:
                  "Estratégias avançadas de marketing digital para aumentar sua visibilidade e gerar leads qualificados.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ),
                title: "Desenvolvimento Web",
                description:
                  "Desenvolvimento de aplicações web personalizadas com as tecnologias mais modernas do mercado.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"></path>
                  </svg>
                ),
                title: "SEO Avançado",
                description:
                  "Otimização para mecanismos de busca que coloca sua marca nas primeiras posições do Google.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                ),
                title: "Gestão de Redes Sociais",
                description:
                  "Estratégias de conteúdo e engajamento para fortalecer sua marca nas principais redes sociais.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 13h3a3 3 0 0 0 0-6h-.025L13 5"></path>
                    <path d="M11 11H8a3 3 0 0 0 0 6h.025L11 19"></path>
                    <path d="M8 11h8"></path>
                  </svg>
                ),
                title: "Tráfego Pago",
                description: "Campanhas de anúncios otimizadas para maximizar seu ROI e atrair clientes qualificados.",
              },
            ].map((service, index) => (
              <div key={index} className="service-card animate-on-scroll">
                <div className="service-card-glow"></div>
                <div className="service-card-content">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button
                    className="service-link"
                    onClick={() => {
                      scrollToSection(contactRef)
                      setSelectedSubject(service.title)
                    }}
                  >
                    Saiba mais
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title glitch-text">
              O que <span className="gradient-text">Dizem</span> Sobre Mim
            </h2>
            <p className="section-description">
              Depoimentos de clientes que transformaram seus negócios com minhas soluções
            </p>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: "Bruno S",
                company: "Empresa de Informatica",
                gradient: "from-blue-500 to-purple-600",
                text: "Excelente trabalho! O site desenvolvido superou todas as nossas expectativas. A estratégia de marketing digital implementada aumentou significativamente nosso tráfego e conversões.",
              },
              {
                name: "Renata A",
                company: "Advogada Autônoma",
                gradient: "from-pink-500 to-orange-400",
                text: "Meu site ficou incrível! Profissionalismo e resultados reais. As estratégias de SEO me colocaram nas primeiras posições do Google para as principais palavras-chave do meu nicho.",
              },
              {
                name: "Carlos Mendes",
                company: "Inovação Digital",
                gradient: "from-green-400 to-cyan-500",
                text: "Profissionalismo e resultados reais. As campanhas de marketing digital superaram todas as nossas expectativas. Recomendo fortemente para qualquer empresa que queira crescer online.",
              },
              {
                name: "Mariana Costa",
                company: "TriploPay",
                gradient: "from-purple-500 to-red-500",
                text: "O redesign do nosso site transformou completamente a experiência dos nossos clientes. As vendas aumentaram em 35% no primeiro mês após o lançamento do novo site.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card animate-on-scroll">
                <div className="testimonial-card-glow"></div>
                <div className="testimonial-card-content">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar-container">
                      <div className="testimonial-avatar-glow"></div>
                      <div className={`testimonial-avatar bg-gradient-to-br ${testimonial.gradient}`}>
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div className="testimonial-author">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-company">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="testimonial-star" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landing Page Builder  */}
      <section ref={builderRef} className="builder-section">
        <LandingPageBuilder />
      </section>

      {/* Contact Section - Novo Design */}
      <section ref={contactRef} className="contact-section">
        <div className="contact-background"></div>
        <div className="contact-grid-pattern"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,41,170,0.3)_0,rgba(0,0,0,0)_50%)]"></div>

        <div className="contact-container">
          <div className="contact-header animate-on-scroll">
            <h2 className="contact-title glitch-text">
              Vamos <span className="gradient-text">Conversar</span>
            </h2>
            <p className="contact-description">
              Estou pronto para transformar sua presença digital. Entre em contato e vamos começar!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-card animate-on-scroll">
              <div className="contact-card-header">
                <h3 className="contact-card-title">Informações de Contato</h3>
              </div>
              <div className="contact-card-body">
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <div className="contact-info-label">Email</div>
                      <div className="contact-info-value">contato@techsanca.com.br</div>
                    </div>
                  </li>
                  <li className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <div className="contact-info-label">Telefone</div>
                      <div className="contact-info-value">+55 11 98226-2859</div>
                    </div>
                  </li>
                  <li className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <div className="contact-info-label">Localização</div>
                      <div className="contact-info-value">São Caetano do Sul, SP - Brasil</div>
                    </div>
                  </li>
                  <li className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="contact-info-content">
                      <div className="contact-info-label">Horário de Atendimento</div>
                      <div className="contact-info-value">Segunda a Sexta: 9h às 18h</div>
                    </div>
                  </li>
                </ul>

                <div className="contact-social">
                  <h4 className="contact-social-title">Redes Sociais</h4>
                  <div className="contact-social-icons">
                    <a
                      href="www.linkedin.com/in/joao-vitor-pereira21102003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-icon linkedin"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/techsanca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-icon instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/5511982262859"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-icon whatsapp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper animate-on-scroll">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Envie uma Mensagem</h3>
              </div>
              <div className="contact-form-body">
                <ContactForm selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Redesenhado */}
      <footer className="footer">
        <div className="footer-waves">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="footer-wave"
          >
            <path
              fill="rgba(79, 70, 229, 0.1)"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="footer-wave footer-wave-2"
          >
            <path
              fill="rgba(168, 85, 247, 0.1)"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="footer-content">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-text glitch-text">
                    Tech<span className="logo-highlight">Sanca</span>
                  </div>
                </div>
                <p className="footer-tagline">
                  Transformando ideias em experiências digitais memoráveis. Soluções de marketing digital e
                  desenvolvimento web que impulsionam seu negócio.
                </p>
                <div className="footer-social">
                  <a
                    href="www.linkedin.com/in/joao-vitor-pereira21102003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/techsanca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/5511982262859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-links-group">
                <h3 className="footer-links-title">Links Rápidos</h3>
                <ul className="footer-links-list">
                  <li>
                    <button onClick={() => scrollToSection(heroRef)} className="footer-link">
                      Início
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection(servicesRef)} className="footer-link">
                      Serviços
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection(builderRef)} className="footer-link">
                      Monte sua Landing
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection(contactRef)} className="footer-link">
                      Contato
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-links-group">
                <h3 className="footer-links-title">Serviços</h3>
                <ul className="footer-links-list">
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection(contactRef)
                        setSelectedSubject("Websites de Alta Conversão")
                      }}
                      className="footer-link"
                    >
                      Websites de Alta Conversão
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection(contactRef)
                        setSelectedSubject("Marketing Digital")
                      }}
                      className="footer-link"
                    >
                      Marketing Digital
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection(contactRef)
                        setSelectedSubject("Desenvolvimento Web")
                      }}
                      className="footer-link"
                    >
                      Desenvolvimento Web
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        scrollToSection(contactRef)
                        setSelectedSubject("SEO Avançado")
                      }}
                      className="footer-link"
                    >
                      SEO Avançado
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-links-group">
                <h3 className="footer-links-title">Legal</h3>
                <ul className="footer-links-list">
                  <li>
                    <button onClick={() => setShowTerms(true)} className="footer-link">
                      Termos de Uso
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setShowPrivacy(true)} className="footer-link">
                      Política de Privacidade
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-copyright">
                &copy; {new Date().getFullYear()} TechSanca. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
