"use client"

import { useState, useEffect } from "react"
import "../styles/landing-page-builder.css"

export default function LandingPageBuilder() {
  const [step, setStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [basePrice, setBasePrice] = useState(0)
  const [options, setOptions] = useState({
    design: "simple",
    animations: "minimal",
    responsive: true,
    seo: false,
    forms: false,
    analytics: false,
    maintenance: false,
  })
  const [totalPrice, setTotalPrice] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Calculate total price based on selected package and options
  useEffect(() => {
    let price = basePrice

    // Only add costs for features that aren't included in the selected package
    if (selectedPackage === "Landing Page Básica") {
      if (options.design === "custom") price += 50
      if (options.design === "premium") price += 100
      if (options.animations === "moderate") price += 50
      if (options.animations === "advanced") price += 100
      if (options.seo) price += 80
      if (options.forms) price += 50
      if (options.analytics) price += 70
      if (options.maintenance) price += 100
    } else if (selectedPackage === "Landing Page Intermediária") {
      // Design custom is included
      if (options.design === "premium") price += 50 // Only charge the difference
      // Animations moderate is included
      if (options.animations === "advanced") price += 50 // Only charge the difference
      // SEO and forms are included
      if (options.analytics) price += 70
      if (options.maintenance) price += 100
    }
    // For Premium package, everything is included

    setTotalPrice(price)
  }, [basePrice, options, selectedPackage])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Update the handlePackageSelect function to set appropriate default options based on the selected package
  const handlePackageSelect = (packageName, price) => {
    setSelectedPackage(packageName)
    setBasePrice(price)

    // Set default options based on the selected package
    if (packageName === "Landing Page Intermediária") {
      setOptions({
        ...options,
        design: "custom", // Design personalizado included
        animations: "moderate", // Animações moderadas included
        responsive: true, // Always true
        seo: true, // SEO básico included
        forms: true, // Formulário included
      })
    } else if (packageName === "Landing Page Premium") {
      setOptions({
        ...options,
        design: "premium", // Design premium included
        animations: "advanced", // Animações avançadas included
        responsive: true, // Always true
        seo: true, // SEO included
        forms: true, // Formulários included
        analytics: true, // Analytics included
        maintenance: true, // Manutenção included
      })
    } else {
      // Basic package
      setOptions({
        design: "simple",
        animations: "minimal",
        responsive: true, // Always true
        seo: false,
        forms: false,
        analytics: false,
        maintenance: false,
      })
    }

    setTimeout(() => setStep(2), 500)
  }

  // Update the handleOptionChange function to prevent downgrading included features
  const handleOptionChange = (option, value) => {
    // Prevent downgrading included features based on package
    if (selectedPackage === "Landing Page Intermediária") {
      // Don't allow downgrading design below "custom" for intermediate package
      if (option === "design" && value === "simple") return

      // Don't allow downgrading animations below "moderate" for intermediate package
      if (option === "animations" && value === "minimal") return

      // Don't allow disabling SEO or forms for intermediate package
      if ((option === "seo" || option === "forms") && value === false) return
    } else if (selectedPackage === "Landing Page Premium") {
      // Don't allow downgrading design below "premium" for premium package
      if (option === "design" && (value === "simple" || value === "custom")) return

      // Don't allow downgrading animations below "advanced" for premium package
      if (option === "animations" && (value === "minimal" || value === "moderate")) return

      // Don't allow disabling included features for premium package
      if (
        (option === "seo" || option === "forms" || option === "analytics" || option === "maintenance") &&
        value === false
      )
        return
    }

    // For responsive, always keep it true
    if (option === "responsive") return

    setOptions((prev) => ({
      ...prev,
      [option]: value,
    }))
  }

  const handleSubmit = () => {
    // Format the message for WhatsApp
    const message = `
Olá! Estou interessado em uma landing page com as seguintes especificações:

*Pacote selecionado:* ${selectedPackage}
*Preço base:* R$ ${basePrice}

*Personalizações:*
- Design: ${options.design === "simple" ? "Simples" : options.design === "custom" ? "Personalizado" : "Premium"}
- Animações: ${options.animations === "minimal" ? "Mínimas" : options.animations === "moderate" ? "Moderadas" : "Avançadas"}
- Responsivo: ${options.responsive ? "Sim" : "Não"}
- SEO Básico: ${options.seo ? "Sim" : "Não"}
- Formulários: ${options.forms ? "Sim" : "Não"}
- Analytics: ${options.analytics ? "Sim" : "Não"}
- Manutenção: ${options.maintenance ? "Sim" : "Não"}

*Valor total estimado:* R$ ${totalPrice}

Gostaria de mais informações sobre este orçamento.
    `.trim()

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/5511982262859?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="builder-container">
      {/* Background */}
      <div className="grid-bg"></div>

      <div className="container">
        <div className={`builder-header ${isVisible ? "visible" : ""}`}>
          <h1 className="builder-title">
            <span className="gradient-text">Monte sua Landing Page</span>
          </h1>
          <p className="builder-description">
            Escolha o pacote ideal para o seu negócio e personalize de acordo com suas necessidades
          </p>
        </div>

        {/* Step indicator */}
        <div className="step-indicator">
          <div className="step-line">
            <div className={`step-circle ${step >= 1 ? "active" : ""}`}>
              <span>1</span>
            </div>
            <div className={`step-connector ${step >= 2 ? "active" : ""}`}></div>
            <div className={`step-circle ${step >= 2 ? "active" : ""}`}>
              <span>2</span>
            </div>
            <div className={`step-connector ${step >= 3 ? "active" : ""}`}></div>
            <div className={`step-circle ${step >= 3 ? "active" : ""}`}>
              <span>3</span>
            </div>
          </div>
        </div>

        {/* Step 1: Package Selection */}
        {step === 1 && (
          <div className={`package-grid ${isVisible ? "visible" : ""}`}>
            <PackageCard
              color="blue"
              title="Landing Page Básica"
              price={150}
              features={[
                "Página simples e objetiva",
                "Link direto pro WhatsApp",
                "Visual moderno e responsivo",
                "Entrega rápida (até 3 dias)",
              ]}
              description="Perfeita pra divulgação de serviços, promoções e produtos"
              onSelect={() => handlePackageSelect("Landing Page Básica", 150)}
              selected={selectedPackage === "Landing Page Básica"}
            />

            <PackageCard
              color="yellow"
              title="Landing Page Intermediária"
              price={300}
              features={[
                "Design personalizado",
                "Formulário de contato ou captação de leads",
                "Animações e carrossel de imagens",
                "Otimização pra Google (SEO básico)",
              ]}
              description="Ideal pra quem quer aumentar conversões com estilo"
              onSelect={() => handlePackageSelect("Landing Page Intermediária", 300)}
              selected={selectedPackage === "Landing Page Intermediária"}
            />

            <PackageCard
              color="red"
              title="Landing Page Premium"
              price={500}
              features={[
                "Copy profissional que vende",
                "Integrações com e-mail marketing, pixel do Meta, Google Analytics",
                "Design avançado, moderno e responsivo",
                "Suporte e manutenção pós-lançamento",
              ]}
              description="Perfeita pra lançamentos, campanhas pagas e empresas"
              onSelect={() => handlePackageSelect("Landing Page Premium", 500)}
              selected={selectedPackage === "Landing Page Premium"}
            />
          </div>
        )}

        {/* Step 2: Customization */}
        {step === 2 && (
          <div className="customization-panel">
            <div className="panel-glow"></div>
            <div className="panel-content">
              <h2 className="panel-title">Personalize sua Landing Page</h2>

              <div className="options-grid">
                <div className="options-column">
                  <OptionSelector
                    title="Design"
                    type="radio"
                    options={[
                      {
                        value: "simple",
                        label:
                          selectedPackage === "Landing Page Intermediária" || selectedPackage === "Landing Page Premium"
                            ? "Simples (Não disponível)"
                            : "Simples",
                        description: "Design básico e funcional",
                      },
                      {
                        value: "custom",
                        label:
                          selectedPackage === "Landing Page Intermediária"
                            ? "Personalizado (Incluído)"
                            : selectedPackage === "Landing Page Premium"
                              ? "Personalizado (Não disponível)"
                              : "Personalizado (+R$50)",
                        description: "Design adaptado à sua marca",
                      },
                      {
                        value: "premium",
                        label: selectedPackage === "Landing Page Premium" ? "Premium (Incluído)" : "Premium (+R$100)",
                        description: "Design exclusivo e sofisticado",
                      },
                    ]}
                    value={options.design}
                    onChange={(value) => handleOptionChange("design", value)}
                  />

                  <OptionSelector
                    title="Animações"
                    type="radio"
                    options={[
                      {
                        value: "minimal",
                        label:
                          selectedPackage === "Landing Page Intermediária" || selectedPackage === "Landing Page Premium"
                            ? "Mínimas (Não disponível)"
                            : "Mínimas",
                        description: "Animações sutis e leves",
                      },
                      {
                        value: "moderate",
                        label:
                          selectedPackage === "Landing Page Intermediária"
                            ? "Moderadas (Incluído)"
                            : selectedPackage === "Landing Page Premium"
                              ? "Moderadas (Não disponível)"
                              : "Moderadas (+R$50)",
                        description: "Animações interativas",
                      },
                      {
                        value: "advanced",
                        label:
                          selectedPackage === "Landing Page Premium" ? "Avançadas (Incluído)" : "Avançadas (+R$100)",
                        description: "Animações complexas e imersivas",
                      },
                    ]}
                    value={options.animations}
                    onChange={(value) => handleOptionChange("animations", value)}
                  />
                </div>

                <div className="options-column">
                  <OptionSelector
                    title="Recursos Adicionais"
                    type="checkbox"
                    options={[
                      {
                        value: "responsive",
                        label: "Design Responsivo (Incluído em todos os planos)",
                        description: "Adaptado para todos os dispositivos",
                      },
                      {
                        value: "seo",
                        label:
                          selectedPackage === "Landing Page Intermediária" || selectedPackage === "Landing Page Premium"
                            ? "SEO Básico (Incluído)"
                            : "SEO Básico (+R$80)",
                        description: "Otimização para mecanismos de busca",
                      },
                      {
                        value: "forms",
                        label:
                          selectedPackage === "Landing Page Intermediária" || selectedPackage === "Landing Page Premium"
                            ? "Formulários (Incluído)"
                            : "Formulários (+R$50)",
                        description: "Formulários de contato ou captação",
                      },
                      {
                        value: "analytics",
                        label:
                          selectedPackage === "Landing Page Premium" ? "Analytics (Incluído)" : "Analytics (+R$70)",
                        description: "Integração com Google Analytics",
                      },
                      {
                        value: "maintenance",
                        label:
                          selectedPackage === "Landing Page Premium" ? "Manutenção (Incluído)" : "Manutenção (+R$100)",
                        description: "Suporte e manutenção por 1 mês",
                      },
                    ]}
                    value={options}
                    onChange={(option, value) => handleOptionChange(option, value)}
                  />
                </div>
              </div>

              <div className="panel-actions">
                <button onClick={() => setStep(1)} className="back-button">
                  Voltar
                </button>
                <button onClick={() => setStep(3)} className="next-button">
                  Continuar
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Summary and Quote */}
        {step === 3 && (
          <div className="summary-panel">
            <div className="panel-glow"></div>
            <div className="panel-content">
              <h2 className="panel-title">Resumo do Orçamento</h2>

              <div className="summary-grid">
                <div className="summary-column">
                  <h3 className="summary-section-title">Pacote Selecionado</h3>
                  <div className="summary-box">
                    <div className="summary-item">
                      <span className="summary-item-name">{selectedPackage}</span>
                      <span className="summary-item-value">R$ {basePrice}</span>
                    </div>
                  </div>

                  <h3 className="summary-section-title">Personalizações</h3>
                  <div className="summary-box">
                    <div className="summary-item-list">
                      <div className="summary-item">
                        <span>
                          Design:{" "}
                          {options.design === "simple"
                            ? "Simples"
                            : options.design === "custom"
                              ? "Personalizado"
                              : "Premium"}
                          {(selectedPackage === "Landing Page Intermediária" && options.design === "custom") ||
                          (selectedPackage === "Landing Page Premium" && options.design === "premium") ? (
                            <span className="included-tag">Incluído</span>
                          ) : (
                            ""
                          )}
                        </span>
                        <span>
                          {options.design === "simple" ||
                          (selectedPackage === "Landing Page Intermediária" && options.design === "custom") ||
                          (selectedPackage === "Landing Page Premium" && options.design === "premium")
                            ? ""
                            : options.design === "custom"
                              ? "+R$50"
                              : "+R$100"}
                        </span>
                      </div>
                      <div className="summary-item">
                        <span>
                          Animações:{" "}
                          {options.animations === "minimal"
                            ? "Mínimas"
                            : options.animations === "moderate"
                              ? "Moderadas"
                              : "Avançadas"}
                          {(selectedPackage === "Landing Page Intermediária" && options.animations === "moderate") ||
                          (selectedPackage === "Landing Page Premium" && options.animations === "advanced") ? (
                            <span className="included-tag">Incluído</span>
                          ) : (
                            ""
                          )}
                        </span>
                        <span>
                          {options.animations === "minimal" ||
                          (selectedPackage === "Landing Page Intermediária" && options.animations === "moderate") ||
                          (selectedPackage === "Landing Page Premium" && options.animations === "advanced")
                            ? ""
                            : options.animations === "moderate"
                              ? "+R$50"
                              : "+R$100"}
                        </span>
                      </div>
                      <div className="summary-item">
                        <span>
                          Design Responsivo <span className="included-tag">Incluído</span>
                        </span>
                        <span className="check-icon">{options.responsive ? "✓" : ""}</span>
                      </div>
                      {options.seo && (
                        <div className="summary-item">
                          <span>
                            SEO Básico
                            {selectedPackage === "Landing Page Intermediária" ||
                            selectedPackage === "Landing Page Premium" ? (
                              <span className="included-tag">Incluído</span>
                            ) : (
                              ""
                            )}
                          </span>
                          <span>
                            {selectedPackage === "Landing Page Intermediária" ||
                            selectedPackage === "Landing Page Premium"
                              ? ""
                              : "+R$80"}
                          </span>
                        </div>
                      )}
                      {options.forms && (
                        <div className="summary-item">
                          <span>
                            Formulários
                            {selectedPackage === "Landing Page Intermediária" ||
                            selectedPackage === "Landing Page Premium" ? (
                              <span className="included-tag">Incluído</span>
                            ) : (
                              ""
                            )}
                          </span>
                          <span>
                            {selectedPackage === "Landing Page Intermediária" ||
                            selectedPackage === "Landing Page Premium"
                              ? ""
                              : "+R$50"}
                          </span>
                        </div>
                      )}
                      {options.analytics && (
                        <div className="summary-item">
                          <span>
                            Analytics
                            {selectedPackage === "Landing Page Premium" ? (
                              <span className="included-tag">Incluído</span>
                            ) : (
                              ""
                            )}
                          </span>
                          <span>{selectedPackage === "Landing Page Premium" ? "" : "+R$70"}</span>
                        </div>
                      )}
                      {options.maintenance && (
                        <div className="summary-item">
                          <span>
                            Manutenção
                            {selectedPackage === "Landing Page Premium" ? (
                              <span className="included-tag">Incluído</span>
                            ) : (
                              ""
                            )}
                          </span>
                          <span>{selectedPackage === "Landing Page Premium" ? "" : "+R$100"}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="summary-column">
                  <div className="total-box">
                    <h3 className="summary-section-title">Valor Total</h3>
                    <div className="total-price">R$ {totalPrice}</div>

                    <p className="total-description">
                      Este é um pré-orçamento baseado nas opções selecionadas. Ao enviar, você será redirecionado para o
                      WhatsApp para finalizar seu pedido.
                    </p>

                    <button onClick={handleSubmit} className="whatsapp-button">
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
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      Enviar para WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              <div className="panel-actions">
                <button onClick={() => setStep(2)} className="back-button">
                  Voltar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function PackageCard({ color, title, price, features, description, onSelect, selected }) {
  const colorClasses = {
    blue: {
      bg: "blue-glow",
      border: "blue-border",
      text: "blue-text",
      button: "blue-button",
    },
    yellow: {
      bg: "yellow-glow",
      border: "yellow-border",
      text: "yellow-text",
      button: "yellow-button",
    },
    red: {
      bg: "red-glow",
      border: "red-border",
      text: "red-text",
      button: "red-button",
    },
  }

  return (
    <div className={`package-card ${colorClasses[color].border} ${selected ? "selected" : ""}`}>
      <div className={`package-glow ${colorClasses[color].bg}`}></div>

      <div className="package-content">
        <div className="package-header">
          <h3 className={`package-title ${colorClasses[color].text}`}>{title}</h3>
          {selected && <div className="package-badge">SELECIONADO</div>}
        </div>

        <div className="package-price">
          <span>R$ {price}</span>
        </div>

        <ul className="package-features">
          {features.map((feature, index) => (
            <li key={index} className="package-feature">
              <span className={`feature-icon ${colorClasses[color].text}`}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="package-description">{description}</p>

        <button
          onClick={onSelect}
          className={`package-button ${colorClasses[color].button} ${selected ? "selected" : ""}`}
        >
          {selected ? "Selecionado" : "Selecionar"}
        </button>
      </div>
    </div>
  )
}

function OptionSelector({ title, type, options, value, onChange }) {
  const handleRadioChange = (optionValue) => {
    onChange(optionValue)
  }

  const handleCheckboxChange = (optionValue) => {
    if (optionValue === "responsive") {
      // Responsive is always true for this example
      return
    }

    onChange(optionValue, !value[optionValue])
  }

  return (
    <div className="option-selector">
      <h3 className="option-title">{title}</h3>

      <div className="option-list">
        {type === "radio" &&
          options.map((option) => (
            <div
              key={option.value}
              className={`option-item ${value === option.value ? "selected" : ""}`}
              onClick={() => handleRadioChange(option.value)}
            >
              <div className="option-radio">
                <div className="radio-outer">{value === option.value && <div className="radio-inner"></div>}</div>
                <div className="option-text">
                  <div className="option-label">{option.label}</div>
                  <div className="option-description">{option.description}</div>
                </div>
              </div>
            </div>
          ))}

        {type === "checkbox" &&
          options.map((option) => (
            <div
              key={option.value}
              className={`option-item ${value[option.value] ? "selected" : ""} ${
                option.value === "responsive" ? "disabled" : ""
              }`}
              onClick={() => handleCheckboxChange(option.value)}
            >
              <div className="option-checkbox">
                <div className="checkbox-outer">
                  {value[option.value] && (
                    <svg className="checkbox-check" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="option-text">
                  <div className="option-label">{option.label}</div>
                  <div className="option-description">{option.description}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
