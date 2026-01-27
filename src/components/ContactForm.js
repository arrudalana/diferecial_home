import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulação de envio (substitua pelo seu backend ou EmailJS)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aqui você pode integrar com:
      // 1. EmailJS: https://www.emailjs.com/
      // 2. Formspree: https://formspree.io/
      // 3. Seu próprio backend
      
      console.log('Dados do formulário:', data);
      
      setSubmitStatus('success');
      setSubmitMessage('Orçamento solicitado com sucesso! Entraremos em contato em até 24 horas.');
      reset();
      
      // Google Analytics Event (se tiver)
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          'event_category': 'contact',
          'event_label': 'budget_request'
        });
      }
      
      // Facebook Pixel (se tiver)
      if (window.fbq) {
        window.fbq('track', 'Lead');
      }
      
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setSubmitStatus('error');
      setSubmitMessage('Erro ao enviar solicitação. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      title: 'WhatsApp',
      description: 'Atendimento rápido e direto',
      details: '(11) 99999-9999',
      icon: <MessageCircle size={24} />,
      action: () => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para móveis planejados.', '_blank'),
      color: '#25D366'
    },
    {
      title: 'Telefone',
      description: 'Horário comercial',
      details: '(11) 3333-3333',
      icon: <Phone size={24} />,
      action: () => window.location.href = 'tel:+551133333333',
      color: '#007AFF'
    },
    {
      title: 'E-mail',
      description: 'Resposta em até 24h',
      details: 'contato@diferencialhome.com.br',
      icon: <Mail size={24} />,
      action: () => window.location.href = 'mailto:contato@diferencialhome.com.br?subject=Solicitação de Orçamento - Diferencial Home',
      color: '#EA4335'
    }
  ];

  const projectTypes = [
    'Cozinha Planejada',
    'Closet/Guarda-roupas',
    'Home Office/Escritório',
    'Sala de Estar/TV',
    'Quarto Infantil',
    'Área Gourmet',
    'Móveis Comerciais',
    'Projeto Completo'
  ];

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Vamos Conversar Sobre Seu Projeto?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Entre em contato e solicite um orçamento personalizado. Resposta em até 24 horas.
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* Formulário */}
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <h3>Solicite Seu Orçamento</h3>
              <p>Preencha o formulário e receba uma proposta personalizada</p>
            </div>

            {submitStatus && (
              <motion.div 
                className={`alert ${submitStatus}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{submitMessage}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nome Completo *</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { 
                    required: 'Nome é obrigatório',
                    minLength: {
                      value: 3,
                      message: 'Nome deve ter pelo menos 3 caracteres'
                    }
                  })}
                  placeholder="Seu nome completo"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido'
                      }
                    })}
                    placeholder="seu@email.com"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone/WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone', { 
                      required: 'Telefone é obrigatório',
                      pattern: {
                        value: /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/,
                        message: 'Telefone inválido (use: (11) 99999-9999)'
                      }
                    })}
                    placeholder="(11) 99999-9999"
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Tipo de Projeto *</label>
                <select
                  id="projectType"
                  {...register('projectType', { required: 'Selecione um tipo de projeto' })}
                  className={errors.projectType ? 'error' : ''}
                >
                  <option value="">Selecione o tipo de projeto...</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.projectType && <span className="error-message">{errors.projectType.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Detalhes do Projeto 
                  <span className="optional"> (Opcional)</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  {...register('message', {
                    maxLength: {
                      value: 500,
                      message: 'Máximo de 500 caracteres'
                    }
                  })}
                  placeholder="Descreva seu projeto, medidas aproximadas, preferências de estilo e materiais desejados..."
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="error-message">{errors.message.message}</span>}
              </div>

              <div className="form-footer">
                <motion.button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Orçamento Grátis
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
                <p className="form-note">
                  * Campos obrigatórios. Seus dados estão seguros conosco e nunca serão compartilhados.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Contatos Rápidos */}
          <motion.div 
            className="contact-methods"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="contact-info">
              <h3>Outras Formas de Contato</h3>
              <p>Escolha a forma que preferir para falar conosco</p>
              
              {contactMethods.map((method, index) => (
                <motion.div 
                  key={index}
                  className="contact-method-card"
                  onClick={method.action}
                  style={{ '--method-color': method.color }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="method-icon" style={{ backgroundColor: method.color }}>
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h4>{method.title}</h4>
                    <p className="method-description">{method.description}</p>
                    <p className="method-details">{method.details}</p>
                  </div>
                  <div className="method-action">
                    →
                  </div>
                </motion.div>
              ))}

              <div className="business-info">
                <h4>Informações Comerciais</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Atendimento:</span>
                    <span className="info-value">Seg - Sex: 8h às 18h</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Sábado:</span>
                    <span className="info-value">9h às 14h (com agendamento)</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Área de Atuação:</span>
                    <span className="info-value">Grande São Paulo e região</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Tipo de Projeto:</span>
                    <span className="info-value">Residencial & Comercial</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Garantia:</span>
                    <span className="info-value">12 meses contra defeitos</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Formas de Pagamento:</span>
                    <span className="info-value">À vista, parcelado, cartão</span>
                  </div>
                </div>
              </div>

              <div className="social-media">
                <h4>Siga-nos nas Redes</h4>
                <div className="social-links">
                  <button 
                    className="social-btn instagram"
                    onClick={() => window.open('https://instagram.com/moveisplanejados', '_blank')}
                  >
                    Instagram
                  </button>
                  <button 
                    className="social-btn facebook"
                    onClick={() => window.open('https://facebook.com/diferencialhome', '_blank')}
                  >
                    Facebook
                  </button>
                  <button 
                    className="social-btn pinterest"
                    onClick={() => window.open('https://pinterest.com/diferencialhome', '_blank')}
                  >
                    Pinterest
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: var(--white);
          position: relative;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        
        .contact-form-container {
          background: var(--light);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .form-header {
          margin-bottom: 30px;
        }
        
        .form-header h3 {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 10px;
        }
        
        .form-header p {
          color: var(--gray);
          font-size: 1rem;
        }
        
        .alert {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 25px;
          font-weight: 500;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .alert.success {
          background: rgba(46, 204, 113, 0.1);
          color: #27ae60;
          border: 1px solid rgba(46, 204, 113, 0.2);
        }
        
        .alert.error {
          background: rgba(231, 76, 60, 0.1);
          color: #c0392b;
          border: 1px solid rgba(231, 76, 60, 0.2);
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group label {
          font-weight: 600;
          color: var(--dark);
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .optional {
          font-weight: 400;
          color: var(--gray);
          font-size: 0.85rem;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 16px;
          border: 2px solid #e1e8ed;
          border-radius: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: var(--white);
          width: 100%;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--secondary);
          box-shadow: 0 0 0 4px rgba(212, 165, 116, 0.15);
        }
        
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
          border-color: #e74c3c;
          background-color: rgba(231, 76, 60, 0.02);
        }
        
        .error-message {
          color: #e74c3c;
          font-size: 0.85rem;
          margin-top: 4px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .form-footer {
          margin-top: 20px;
        }
        
        .submit-btn {
          width: 100%;
          padding: 18px;
          font-size: 1.1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--secondary), var(--accent));
          position: relative;
          overflow: hidden;
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .form-note {
          font-size: 0.85rem;
          color: var(--gray);
          text-align: center;
          margin-top: 15px;
          line-height: 1.4;
        }
        
        .contact-methods {
          position: sticky;
          top: 100px;
        }
        
        .contact-info h3 {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 10px;
        }
        
        .contact-info > p {
          color: var(--gray);
          margin-bottom: 30px;
          font-size: 1rem;
        }
        
        .contact-method-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px;
          background: var(--light);
          border-radius: 14px;
          margin-bottom: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          text-align: left;
          width: 100%;
        }
        
        .contact-method-card:hover {
          border-color: var(--method-color);
          transform: translateX(5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        
        .method-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .method-content {
          flex: 1;
        }
        
        .method-content h4 {
          font-size: 1.2rem;
          margin-bottom: 6px;
          color: var(--dark);
        }
        
        .method-description {
          font-size: 0.9rem;
          color: var(--gray);
          margin-bottom: 6px;
          line-height: 1.4;
        }
        
        .method-details {
          font-size: 1rem;
          font-weight: 600;
          color: var(--method-color);
        }
        
        .method-action {
          font-size: 1.5rem;
          color: var(--gray);
          transition: all 0.3s ease;
          opacity: 0.7;
        }
        
        .contact-method-card:hover .method-action {
          color: var(--method-color);
          transform: translateX(5px);
          opacity: 1;
        }
        
        .business-info {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid var(--light-gray);
        }
        
        .business-info h4 {
          font-size: 1.3rem;
          color: var(--primary);
          margin-bottom: 20px;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }
        
        .info-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 12px 0;
          border-bottom: 1px solid var(--light-gray);
        }
        
        .info-item:last-child {
          border-bottom: none;
        }
        
        .info-label {
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        .info-value {
          color: var(--dark);
          font-weight: 500;
          font-size: 0.95rem;
        }
        
        .social-media {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid var(--light-gray);
        }
        
        .social-media h4 {
          font-size: 1.3rem;
          color: var(--primary);
          margin-bottom: 20px;
        }
        
        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        
        .social-btn {
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        
        .social-btn.instagram {
          background: linear-gradient(45deg, #405DE6, #833AB4, #C13584, #E1306C, #FD1D1D);
          color: white;
        }
        
        .social-btn.facebook {
          background: #1877F2;
          color: white;
        }
        
        .social-btn.pinterest {
          background: #E60023;
          color: white;
        }
        
        .social-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .contact-methods {
            position: static;
          }
          
          .info-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .contact-form-container {
            padding: 30px 20px;
          }
          
          .contact-info {
            padding: 0 10px;
          }
          
          .social-links {
            flex-direction: column;
          }
          
          .social-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;