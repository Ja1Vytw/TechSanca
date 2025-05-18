"use client"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm({ selectedSubject, setSelectedSubject }) {
  const [state, handleSubmit] = useForm("mwpoozvr")

  if (state.succeeded) {
    return (
      <div className="form-success">
        <div className="form-success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="form-success-title">Mensagem Enviada!</h3>
        <p className="form-success-message">Obrigado pelo contato! Retornarei o mais breve possível.</p>
        <button className="form-success-button" onClick={() => window.location.reload()}>
          Enviar nova mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nome
        </label>
        <input id="name" type="text" name="name" placeholder="Seu nome completo" className="form-input" required />
        <ValidationError prefix="Nome" field="name" errors={state.errors} className="error-message" />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input id="email" type="email" name="email" placeholder="seu@email.com" className="form-input" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="error-message" />
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">
          Assunto
        </label>
        <select
          id="subject"
          name="subject"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="form-select"
          required
        >
          <option value="Websites de Alta Conversão">Websites de Alta Conversão</option>
          <option value="Marketing Digital">Marketing Digital</option>
          <option value="Desenvolvimento Web">Desenvolvimento Web</option>
          <option value="SEO Avançado">SEO Avançado</option>
          <option value="Gestão de Redes Sociais">Gestão de Redes Sociais</option>
          <option value="Tráfego Pago">Tráfego Pago</option>
          <option value="Outros">Outros</option>
        </select>
        <ValidationError prefix="Assunto" field="subject" errors={state.errors} className="error-message" />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Como posso ajudar você?"
          className="form-textarea"
          required
        ></textarea>
        <ValidationError prefix="Mensagem" field="message" errors={state.errors} className="error-message" />
      </div>

      <button type="submit" className="form-submit" disabled={state.submitting}>
        {state.submitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Enviando...
          </span>
        ) : (
          <>
            Enviar Mensagem
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
              className="form-submit-icon"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
