"use client"

export default function PrivacyPolicy({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Política de Privacidade</h2>
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
            <h2>1. Introdução</h2>
            <p>
              A TechSanca está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como
              coletamos, usamos, divulgamos, transferimos e armazenamos suas informações. Por favor, reserve um momento
              para se familiarizar com nossas práticas de privacidade.
            </p>

            <h2>2. Coleta de Informações</h2>
            <p>Podemos coletar os seguintes tipos de informações:</p>
            <ul>
              <li>
                <strong>Informações pessoais:</strong> Nome, endereço de e-mail, número de telefone, endereço e outras
                informações que você fornece voluntariamente através de formulários em nosso site.
              </li>
              <li>
                <strong>Informações de uso:</strong> Dados sobre como você interage com nosso site, incluindo páginas
                visitadas, tempo gasto no site, links clicados e preferências de navegação.
              </li>
              <li>
                <strong>Informações técnicas:</strong> Endereço IP, tipo de navegador, provedor de serviços de Internet,
                páginas de referência/saída, sistema operacional, data/hora e dados de clickstream.
              </li>
            </ul>

            <h2>3. Uso das Informações</h2>
            <p>Utilizamos as informações coletadas para:</p>
            <ul>
              <li>Fornecer, manter e melhorar nossos serviços;</li>
              <li>Processar e completar transações;</li>
              <li>
                Enviar informações relacionadas aos serviços, incluindo confirmações, faturas, avisos técnicos e
                atualizações;
              </li>
              <li>Responder a comentários, perguntas e solicitações;</li>
              <li>Comunicar sobre promoções, eventos e outras notícias sobre serviços oferecidos por nós;</li>
              <li>Monitorar e analisar tendências, uso e atividades relacionadas aos nossos serviços;</li>
              <li>Personalizar e melhorar a experiência do usuário.</li>
            </ul>

            <h2>4. Compartilhamento de Informações</h2>
            <p>
              Não vendemos, comercializamos ou transferimos suas informações pessoais identificáveis a terceiros, exceto
              nas seguintes circunstâncias:
            </p>
            <ul>
              <li>Com fornecedores de serviços que nos auxiliam em nossas operações comerciais;</li>
              <li>
                Quando necessário para cumprir com a lei, fazer cumprir nossas políticas ou proteger direitos,
                propriedade ou segurança;
              </li>
              <li>Com seu consentimento ou a seu pedido.</li>
            </ul>

            <h2>5. Segurança das Informações</h2>
            <p>
              Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações
              pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhum método de
              transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
            </p>

            <h2>6. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Utilizamos cookies e tecnologias semelhantes para melhorar a experiência do usuário, analisar tendências,
              administrar o site e coletar informações demográficas sobre nossa base de usuários como um todo. Você pode
              controlar o uso de cookies no nível do navegador individual, mas se você optar por desativar os cookies,
              isso pode limitar o uso de certos recursos ou funções em nosso site.
            </p>

            <h2>7. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul>
              <li>Acessar, corrigir ou excluir suas informações pessoais;</li>
              <li>Restringir ou opor-se ao processamento de suas informações pessoais;</li>
              <li>
                Receber suas informações pessoais em um formato estruturado, comumente usado e legível por máquina;
              </li>
              <li>
                Retirar seu consentimento a qualquer momento, quando o processamento for baseado em seu consentimento.
              </li>
            </ul>

            <h2>8. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações
              publicando a nova Política de Privacidade nesta página. Recomendamos que você revise esta Política de
              Privacidade periodicamente para quaisquer alterações.
            </p>

            <h2>9. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco pelo e-mail:
              pereirajoaovitor.741@gmail.com
            </p>

            <p>Última atualização: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
