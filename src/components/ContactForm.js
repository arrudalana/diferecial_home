import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, CheckCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="section contact">
      <div className="container">
        
        <div className="form-wrapper">
          {/* Lado Esquerdo: Infos */}
          <div className="contact-sidebar">
            <h3>Fale Conosco</h3>
            <p>Estamos prontos para transformar seu ambiente.</p>
            
            <div className="info-items">
              <div className="item">
                <div className="icon"><Phone size={20} /></div>
                <div>
                  <span>Telefone / WhatsApp</span>
                  <p>(65) 99318-0004</p>
                </div>
              </div>
              <div className="item">
                <div className="icon"><Mail size={20} /></div>
                <div>
                  <span>E-mail</span>
                  <p>diferencialhomecba@gmail.com</p>
                </div>
              </div>
              <div className="item">
                <div className="icon"><MapPin size={20} /></div>
                <div>
                  <span>Área de Atuação</span>
                  <p>Cuiabá e região</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="form-content">
            {submitStatus === 'success' ? (
              <div className="success-box">
                <CheckCircle size={48} color="#25D366" />
                <h3>Mensagem Enviada!</h3>
                <p>Em breve nossa equipe entrará em contato.</p>
                <button onClick={() => setSubmitStatus(null)} className="btn-reset">Enviar nova mensagem</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Nome Completo</label>
                  <input {...register('name', { required: true })} placeholder="Digite seu nome" />
                  {errors.name && <span className="error">Obrigatório</span>}
                </div>

                <div className="form-group">
                  <label>Telefone / WhatsApp</label>
                  <input {...register('phone', { required: true })} placeholder="(65) 99999-9999" />
                  {errors.phone && <span className="error">Obrigatório</span>}
                </div>

                <div className="form-group">
                  <label>Como podemos ajudar?</label>
                  <textarea rows="4" {...register('message')} placeholder="Descreva seu projeto..." />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : <>Enviar Mensagem <Send size={18} /></>}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
      <style jsx>{`
        .contact { background-color: var(--light); padding: 80px 0; }
        
        .form-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        }

        /* Sidebar */
        .contact-sidebar {
          background: var(--primary);
          color: white;
          padding: 50px 40px;
        }
        .contact-sidebar h3 { font-size: 1.8rem; margin-bottom: 10px; color: white; }
        .contact-sidebar p { opacity: 0.8; margin-bottom: 40px; }
        
        .info-items .item { display: flex; gap: 15px; margin-bottom: 30px; align-items: center; }
        .item .icon { 
          width: 40px; height: 40px; background: rgba(255,255,255,0.1); 
          border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--accent); 
        }
        .item span { display: block; font-size: 0.8rem; opacity: 0.7; text-transform: uppercase; letter-spacing: 1px; }
        .item p { margin: 0; font-weight: 600; font-size: 1.1rem; }

        /* Form */
        .form-content { padding: 50px 40px; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 8px; color: var(--dark); font-size: 0.9rem; }
        
        input, textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          font-family: inherit;
          font-size: 1rem;
          transition: 0.3s;
          background: #fafafa;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 3px rgba(74, 93, 94, 0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: 0.3s;
        }
        .submit-btn:hover { background: var(--primary-dark, #3a4a4b); transform: translateY(-2px); }

        .success-box { text-align: center; padding: 40px; }
        .btn-reset { background: none; border: none; text-decoration: underline; cursor: pointer; color: var(--gray); margin-top: 20px; }
        .error { color: #e74c3c; font-size: 0.8rem; margin-top: 5px; display: block; }

        @media (max-width: 768px) {
          .form-wrapper { grid-template-columns: 1fr; }
          .contact-sidebar, .form-content { padding: 30px 20px; }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;