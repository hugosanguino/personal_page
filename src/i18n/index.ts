import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      contact: 'Contact'
    },
    hero: {
      title: 'Hugo Sanguino',
      subtitle: 'ERP Systems Developer',
      description: 'Specialized in developing and implementing enterprise resource planning solutions'
    },
    about: {
      title: 'About Me',
      content: 'I am a passionate ERP systems developer with extensive experience in designing and implementing business solutions. My expertise lies in creating efficient and scalable systems that help businesses streamline their operations.'
    },
    skills: {
      title: 'Skills',
      erp: 'ERP Systems',
      development: 'Software Development',
      integration: 'System Integration',
      business: 'Business Analysis'
    },
    contact: {
      title: 'Get in Touch',
      message: 'Interested in working together? Let\'s talk!'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      contact: 'Contacto'
    },
    hero: {
      title: 'Hugo Sanguino',
      subtitle: 'Desarrollador de Sistemas ERP',
      description: 'Especializado en el desarrollo e implementación de soluciones de planificación de recursos empresariales'
    },
    about: {
      title: 'Sobre Mí',
      content: 'Soy un desarrollador apasionado de sistemas ERP con amplia experiencia en el diseño e implementación de soluciones empresariales. Mi especialidad es crear sistemas eficientes y escalables que ayuden a las empresas a optimizar sus operaciones.'
    },
    skills: {
      title: 'Habilidades',
      erp: 'Sistemas ERP',
      development: 'Desarrollo de Software',
      integration: 'Integración de Sistemas',
      business: 'Análisis de Negocios'
    },
    contact: {
      title: 'Contacto',
      message: '¿Interesado en trabajar juntos? ¡Hablemos!'
    }
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});