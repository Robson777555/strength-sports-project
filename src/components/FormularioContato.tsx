import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, AlertCircle } from 'lucide-react';

const FormularioContato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({});

  // Função auxiliar para abrir WhatsApp
  const openWhatsApp = (phoneNumber: string, message: string) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    console.log('Tentando abrir WhatsApp:', whatsappUrl); // Debug
    
    // Tentar abrir o WhatsApp com diferentes métodos
    try {
      const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        // Se popup foi bloqueado, redirecionar na mesma aba
        console.log('Popup bloqueado, redirecionando na mesma aba');
        window.location.href = whatsappUrl;
      } else {
        console.log('WhatsApp aberto em nova aba');
      }
    } catch (error) {
      // Fallback: redirecionar na mesma aba
      console.log('Erro ao abrir popup, redirecionando na mesma aba:', error);
      window.location.href = whatsappUrl;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Limpar erros anteriores
    setFieldErrors({});
    
    // Validar formulário antes de enviar
    if (!validateForm()) {
      return; // Impede o envio se houver erros
    }

    // Iniciar processo de envio
    setIsSubmitting(true);

    // Simular delay de envio (mesma lógica do projeto de carros)
    setTimeout(() => {
      // Abrir WhatsApp (mesma lógica do projeto de carros)
      const whatsappNumber = "5551996940564"; // Formato: 55 + DDD + número (mesma lógica do projeto de carros)
      const assunto = "Contato Site - Strength Sports";
      const whatsappMessage = 
        `💪 *Nova Mensagem de Contato - Site de Strength Sports*\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📞 *Telefone:* ${formData.phone}\n` +
        `📝 *Assunto:* ${formData.subject || assunto}\n\n` +
        `💬 *Mensagem:*\n${formData.message || 'Nenhuma mensagem adicional.'}`;
      
      openWhatsApp(whatsappNumber, whatsappMessage);
      
      alert("✅ Redirecionando para WhatsApp! Complete o envio da mensagem lá.");
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  // Validação completa do formulário
  const validateForm = () => {
    let isValid = true;
    const errors: {[key: string]: string} = {};

    // Validar campos obrigatórios
    if (!formData.name.trim()) {
      errors.name = 'Este campo é obrigatório';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Este campo é obrigatório';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Por favor, insira um email válido';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Este campo é obrigatório';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Por favor, insira um telefone válido (ex: (11) 99999-9999 ou (11) 3333-4444)';
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneValue = phone.replace(/\D/g, '');
    
    // DDDs válidos do Brasil
    const validDDDs = ['11','12','13','14','15','16','17','18','19','21','22','24','27','28','31','32','33','34','35','37','38','41','42','43','44','45','46','47','48','49','51','53','54','55','61','62','63','64','65','66','67','68','69','71','73','74','75','77','79','81','82','83','84','85','86','87','88','89','91','92','93','94','95','96','97','98','99'];
    
    if (phoneValue.length === 11) {
      // Celular: 9 dígitos após DDD
      const ddd = phoneValue.substring(0, 2);
      const number = phoneValue.substring(2);
      return validDDDs.includes(ddd) && number.length === 9 && number.startsWith('9');
    } else if (phoneValue.length === 10) {
      // Fixo: 8 dígitos após DDD
      const ddd = phoneValue.substring(0, 2);
      const number = phoneValue.substring(2);
      return validDDDs.includes(ddd) && number.length === 8;
    } else if (phoneValue.length === 13) {
      // Telefone com código do país (55 + DDD + número)
      const countryCode = phoneValue.substring(0, 2);
      const ddd = phoneValue.substring(2, 4);
      const number = phoneValue.substring(4);
      if (countryCode === '55' && validDDDs.includes(ddd)) {
        return (number.length === 9 && number.startsWith('9')) || number.length === 8;
      }
    }
    
    return false;
  };

  const formatPhone = (value: string) => {
    const phoneValue = value.replace(/\D/g, '');
    let formattedValue = '';
    
    if (phoneValue.length > 0) {
      if (phoneValue.length <= 2) {
        formattedValue = '(' + phoneValue;
      } else if (phoneValue.length <= 6) {
        formattedValue = '(' + phoneValue.substring(0, 2) + ') ' + phoneValue.substring(2);
      } else if (phoneValue.length <= 10) {
        formattedValue = '(' + phoneValue.substring(0, 2) + ') ' + phoneValue.substring(2, 6) + '-' + phoneValue.substring(6);
      } else if (phoneValue.length <= 11) {
        formattedValue = '(' + phoneValue.substring(0, 2) + ') ' + phoneValue.substring(2, 7) + '-' + phoneValue.substring(7);
      } else {
        // Telefone com código do país
        if (phoneValue.startsWith('55') && phoneValue.length <= 13) {
          const ddd = phoneValue.substring(2, 4);
          const number = phoneValue.substring(4);
          if (number.length <= 8) {
            formattedValue = '+55 (' + ddd + ') ' + number;
          } else if (number.length <= 9) {
            formattedValue = '+55 (' + ddd + ') ' + number.substring(0, 5) + '-' + number.substring(5);
          }
        }
      }
    }
    
    return formattedValue;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Aplicar máscara de formatação para telefone
    if (name === 'phone') {
      const formattedValue = formatPhone(value);
      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ''
      });
    }
  };

  // Validação em tempo real
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'email' && value && !validateEmail(value)) {
      setFieldErrors({
        ...fieldErrors,
        [name]: 'Por favor, insira um email válido'
      });
    } else if (name === 'phone' && value && !validatePhone(value)) {
      setFieldErrors({
        ...fieldErrors,
        [name]: 'Por favor, insira um telefone válido (ex: (11) 99999-9999)'
      });
    } else if (name === 'name' && !value.trim()) {
      setFieldErrors({
        ...fieldErrors,
        [name]: 'Este campo é obrigatório'
      });
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={fieldErrors.name ? 'border-red-500 focus:border-red-500' : ''}
            />
            {fieldErrors.name && (
              <div className="flex items-center space-x-1 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{fieldErrors.name}</span>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={fieldErrors.email ? 'border-red-500 focus:border-red-500' : ''}
            />
            {fieldErrors.email && (
              <div className="flex items-center space-x-1 text-red-600 text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{fieldErrors.email}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={fieldErrors.phone ? 'border-red-500 focus:border-red-500' : ''}
          />
          {fieldErrors.phone && (
            <div className="flex items-center space-x-1 text-red-600 text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{fieldErrors.phone}</span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Sobre o que você gostaria de falar?"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensagem *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Escreva sua mensagem aqui..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={isSubmitting}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
        </Button>
      </form>

      <Card className="bg-green-50 border-green-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-green-800 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Envio via WhatsApp
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 text-sm">
            Sua mensagem será enviada diretamente para o WhatsApp (51) 99694-0564. 
            Você pode conversar conosco em tempo real! Todos os campos marcados com * são obrigatórios.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormularioContato;
