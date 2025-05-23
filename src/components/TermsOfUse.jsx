"use client"

export default function TermsOfUse({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Termos de Uso</h2>
          <button className="modal-close" onClick={onClose}>
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar os serviços oferecidos pela TechSanca, você concorda com estes Termos de Uso. Se
              você não concordar com qualquer parte destes termos, por favor, não utilize nossos serviços.
            </p>

            <h2>2. Descrição dos Serviços</h2>
            <p>
              A TechSanca oferece serviços de marketing digital e desenvolvimento web, incluindo, mas não se limitando
              a: criação de websites, landing pages, estratégias de marketing digital, otimização para mecanismos de
              busca (SEO), gestão de redes sociais e campanhas de tráfego pago.
            </p>

            <h2>3. Uso dos Serviços</h2>
            <p>Ao utilizar nossos serviços, você concorda em:</p>
            <ul>
              <li>Fornecer informações precisas e completas quando solicitado;</li>
              <li>Utilizar os serviços de acordo com todas as leis e regulamentos aplicáveis;</li>
              <li>Não utilizar os serviços para fins ilegais ou não autorizados;</li>
              <li>Não interferir ou interromper a integridade ou o desempenho dos serviços;</li>
              <li>Manter a segurança de qualquer senha ou método de acesso aos serviços.</li>
            </ul>

            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado através dos serviços da TechSanca, incluindo, mas não se limitando a
              textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados,
              é propriedade da TechSanca ou de seus fornecedores de conteúdo e está protegido pelas leis de direitos
              autorais brasileiras e internacionais.
            </p>

            <h2>5. Limitação de Responsabilidade</h2>
            <p>
              A TechSanca não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais,
              consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, dados, uso, boa vontade
              ou outras perdas intangíveis, resultantes do uso ou da impossibilidade de usar os serviços.
            </p>

            <h2>6. Modificações dos Termos</h2>
            <p>
              A TechSanca reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As modificações
              entrarão em vigor imediatamente após a publicação dos termos atualizados. O uso continuado dos serviços
              após tais modificações constitui sua aceitação dos novos termos.
            </p>

            <h2>7. Lei Aplicável</h2>
            <p>
              Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa
              decorrente ou relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>

            <h2>8. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco pelo e-mail:
              contato@techsanca.com.br
            </p>

            <p>Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
