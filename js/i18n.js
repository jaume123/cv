/* ================================================
   i18n — ES / EN / PL
   ================================================ */

const I18N = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.exp': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.edu': 'Formación',
    'nav.contact': 'Contacto',

    'hero.available': 'Open to work · Junior Developer',
    'hero.desc': 'Desarrollador full stack junior con base en Valencia. Recién titulado en DAM, con prácticas profesionales completadas en una multinacional tecnológica y proyectos reales en producción. Especializado en <strong>Angular, React y NestJS</strong>.',
    'hero.btn1': 'Ver proyectos',
    'hero.btn2': 'Contactar →',
    'hero.stat1': 'Proyectos reales',
    'hero.stat2': 'Tecnologías',
    'hero.stat3': 'Titulaciones',

    'typed.0': 'Junior Full Stack Developer',
    'typed.1': 'Angular · React · TypeScript',
    'typed.2': 'Backend: NestJS, Java & Spring',
    'typed.3': 'Open to relocate to Poland 🇵🇱',

    'about.tag': '// about_me',
    'about.title.a': 'Sobre',
    'about.title.b': 'mí',
    'about.p1': 'Soy <strong>Jaime Juan Ferrer Haro</strong>, desarrollador full stack junior con base en Valencia. Recién titulado en el <strong>Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</strong>, con experiencia práctica en una multinacional del sector tecnológico.',
    'about.p2': 'Mi enfoque es construir productos digitales de calidad: desde interfaces modernas con <strong>Angular, React y TypeScript</strong>, hasta APIs robustas con <strong>NestJS, Java y Spring Boot</strong>. Cuento con proyectos reales en producción y código publicado.',
    'about.p3': 'Busco mi primer puesto junior en una empresa donde crecer técnicamente — <strong>abierto a oportunidades en España, remoto en Europa o relocate a Polonia</strong>.',
    'about.chip.loc': 'Valencia · Open to relocate',
    'about.chip.car': 'Carnet B · Vehículo propio',
    'about.card1.t': 'Formación',
    'about.card1.d': 'Grado Superior DAM<br>(Recién titulado)',
    'about.card2.t': 'Experiencia',
    'about.card2.d': 'Prácticas en multinacional<br>+ proyectos reales',
    'about.card3.t': 'Idiomas',
    'about.card3.d': 'Español · Valenciano<br>Inglés Avanzado',
    'about.card4.t': 'Disponibilidad',
    'about.card4.d': 'Inmediata<br>Presencial · Remoto · Relocate',

    'skills.tag': '// tech_stack',
    'skills.title.a': 'Stack',
    'skills.title.b': 'Técnico',
    'skills.cat1': 'Frontend',
    'skills.cat2': 'Backend & APIs',
    'skills.cat3': 'Bases de Datos',
    'skills.cat4': 'Cloud & Herramientas',
    'skills.bars.t': 'Nivel de competencia',

    'exp.tag': '// professional_experience',
    'exp.title.a': 'Experiencia',
    'exp.title.b': 'Profesional',
    'exp.1.role': 'Prácticas — Desarrollo de Software',
    'exp.1.date': '2025',
    'exp.1.current': 'En curso',
    'exp.1.desc': 'Prácticas profesionales en empresa multinacional referente mundial en sistemas de audio profesional. Participación en el desarrollo de un <strong>portal web empresarial interno full stack</strong>: frontend con Angular, React, TypeScript y Bootstrap; backend con NestJS; despliegue en infraestructura cloud (Render, Vercel y Azure).',
    'exp.2.role': 'Prácticas — Soporte Técnico IT',
    'exp.2.date': '2021',
    'exp.2.desc': 'Primer contacto profesional con el sector tecnológico. <strong>Reparación de equipos informáticos, soporte técnico a clientes e instalación/configuración de software</strong>. Base sólida sobre infraestructura y mantenimiento de sistemas.',

    'proj.tag': '// featured_projects',
    'proj.title.a': 'Proyectos',
    'proj.title.b': 'destacados',
    'proj.sub': 'Proyectos reales — código publicado y aplicaciones en producción.',
    'proj.1.t': 'Villas Juan Vich',
    'proj.1.role': 'Web en producción · Cliente real',
    'proj.1.desc': 'Sitio web corporativo en producción para negocio familiar de alquiler de villas en Ibiza. <strong>Frontend en React con Vite, backend en PHP</strong>, integración con WhatsApp para reservas directas y Google Analytics. Hospedado en Hostinger. Sitio activo recibiendo tráfico real.',
    'proj.1.cta': 'Ver web en vivo →',
    'proj.2.t': 'Aplicación de Escritorio NFC',
    'proj.2.role': 'Electron + integración hardware NFC',
    'proj.2.desc': 'Aplicación de escritorio multiplataforma desarrollada con <strong>Electron</strong>, integrada con tecnología <strong>NFC (PC/SC)</strong> para lectura/escritura de tarjetas. Backend en <strong>Spring Boot</strong> con autenticación <strong>JWT</strong> y persistencia en <strong>MongoDB Atlas</strong>. Sistema completo cliente-servidor con autenticación dual (DNI o NFC) y registro automático de asistencias.',
    'proj.2.cta': 'Ver en GitHub →',
    'proj.3.t': 'Portal Web Empresarial',
    'proj.3.role': 'Práctica DAS Audio · Repo privado',
    'proj.3.desc': 'Portal web interno corporativo desarrollado durante mis prácticas. Stack full stack con <strong>Angular y React</strong> en frontend (TypeScript + Bootstrap), <strong>backend con NestJS</strong> y despliegue distribuido en <strong>Render, Vercel y Azure</strong>. Arquitectura cliente-servidor moderna en entorno empresarial real.',
    'proj.3.cta': 'Repositorio privado',
    'proj.live': 'En producción',
    'proj.public': 'Código público',
    'proj.private': 'Privado',

    'edu.tag': '// education',
    'edu.title.a': 'Formación',
    'edu.title.b': 'Académica',
    'edu.1.sub': 'Desarrollo de Aplicaciones Multiplataforma',
    'edu.1.desc': 'Formación superior en programación orientada a objetos, desarrollo full stack web y multiplataforma, bases de datos relacionales y NoSQL, control de versiones y despliegue en la nube. Proyecto final con stack profesional moderno.',
    'edu.2.sub': 'Sistemas Microinformáticos y Redes',
    'edu.2.desc': 'Hardware, arquitectura de redes, sistemas operativos Linux/Windows y administración de servidores. Base técnica para entender la infraestructura sobre la que corren las aplicaciones modernas.',
    'edu.3.sub': 'IES Quarto del Rey · Valencia',
    'edu.3.desc': 'Educación Secundaria Obligatoria. Donde nació mi interés por la tecnología y la programación, que me llevó a elegir la informática como vocación profesional.',

    'contact.tag': '// get_in_touch',
    'contact.title.a': 'Hablemos',
    'contact.sub': '¿Tienes una oferta junior interesante o un proyecto en mente? Respondo rápido — vía email, LinkedIn o teléfono.',
    'contact.c1': 'Teléfono',
    'contact.c2': 'Email',
    'contact.c3': 'Ubicación',
    'contact.c3.v': 'Valencia · Open to relocate',
    'contact.note': 'También puedes encontrarme en',

    'footer.copy': 'Hecho con ❤ por <strong>Jaime Juan Ferrer Haro</strong> · 2025',
    'footer.tech': 'HTML · CSS · JavaScript Vanilla — sin frameworks',
  },

  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.exp': 'Experience',
    'nav.projects': 'Projects',
    'nav.edu': 'Education',
    'nav.contact': 'Contact',

    'hero.available': 'Open to work · Junior Developer',
    'hero.desc': 'Junior full stack developer based in Valencia, Spain. Just graduated in DAM, with completed professional internships at a tech multinational and real projects in production. Specialized in <strong>Angular, React and NestJS</strong>.',
    'hero.btn1': 'See projects',
    'hero.btn2': 'Contact →',
    'hero.stat1': 'Real projects',
    'hero.stat2': 'Technologies',
    'hero.stat3': 'Degrees',

    'typed.0': 'Junior Full Stack Developer',
    'typed.1': 'Angular · React · TypeScript',
    'typed.2': 'Backend: NestJS, Java & Spring',
    'typed.3': 'Open to relocate to Poland 🇵🇱',

    'about.tag': '// about_me',
    'about.title.a': 'About',
    'about.title.b': 'me',
    'about.p1': "I'm <strong>Jaime Juan Ferrer Haro</strong>, a junior full stack developer based in Valencia, Spain. Recently graduated from the <strong>Higher Technical Degree in Multi-platform Application Development (DAM)</strong>, with hands-on internship experience at a tech multinational.",
    'about.p2': "My focus is building quality digital products: from modern interfaces with <strong>Angular, React and TypeScript</strong>, to robust APIs with <strong>NestJS, Java and Spring Boot</strong>. I have real projects in production and published code.",
    'about.p3': "Looking for my first junior role at a company where I can grow technically — <strong>open to opportunities in Spain, remote across Europe, or relocate to Poland</strong>.",
    'about.chip.loc': 'Valencia · Open to relocate',
    'about.chip.car': "Driver's license B · Own vehicle",
    'about.card1.t': 'Education',
    'about.card1.d': 'Higher Degree DAM<br>(Recent graduate)',
    'about.card2.t': 'Experience',
    'about.card2.d': 'Internship at multinational<br>+ real projects',
    'about.card3.t': 'Languages',
    'about.card3.d': 'Spanish · Valencian<br>Advanced English',
    'about.card4.t': 'Availability',
    'about.card4.d': 'Immediate<br>On-site · Remote · Relocate',

    'skills.tag': '// tech_stack',
    'skills.title.a': 'Tech',
    'skills.title.b': 'Stack',
    'skills.cat1': 'Frontend',
    'skills.cat2': 'Backend & APIs',
    'skills.cat3': 'Databases',
    'skills.cat4': 'Cloud & Tools',
    'skills.bars.t': 'Proficiency level',

    'exp.tag': '// professional_experience',
    'exp.title.a': 'Professional',
    'exp.title.b': 'Experience',
    'exp.1.role': 'Software Development Internship',
    'exp.1.date': '2025',
    'exp.1.current': 'Ongoing',
    'exp.1.desc': "Professional internship at a world-leading multinational in professional audio systems. Contributing to the development of a <strong>full-stack internal enterprise web portal</strong>: Angular, React, TypeScript and Bootstrap on frontend; NestJS backend; cloud deployment on Render, Vercel and Azure.",
    'exp.2.role': 'IT Support Internship',
    'exp.2.date': '2021',
    'exp.2.desc': 'First professional contact with the tech sector. <strong>Computer hardware repair, technical client support, and software installation/configuration</strong>. Solid foundation in infrastructure and systems maintenance.',

    'proj.tag': '// featured_projects',
    'proj.title.a': 'Featured',
    'proj.title.b': 'Projects',
    'proj.sub': 'Real projects — published code and applications in production.',
    'proj.1.t': 'Villas Juan Vich',
    'proj.1.role': 'Production website · Real client',
    'proj.1.desc': 'Live corporate website for a family villa rental business in Ibiza. <strong>React + Vite frontend, PHP backend</strong>, WhatsApp booking integration and Google Analytics. Hosted on Hostinger. Active site receiving real traffic.',
    'proj.1.cta': 'View live site →',
    'proj.2.t': 'NFC Desktop Application',
    'proj.2.role': 'Electron + NFC hardware integration',
    'proj.2.desc': 'Cross-platform desktop application built with <strong>Electron</strong>, integrated with <strong>NFC (PC/SC)</strong> for card read/write operations. <strong>Spring Boot backend</strong> with <strong>JWT authentication</strong> and <strong>MongoDB Atlas</strong> persistence. Complete client-server system with dual authentication (DNI or NFC) and automatic attendance tracking.',
    'proj.2.cta': 'View on GitHub →',
    'proj.3.t': 'Enterprise Web Portal',
    'proj.3.role': 'DAS Audio internship · Private repo',
    'proj.3.desc': 'Internal corporate web portal developed during my internship. Full-stack with <strong>Angular and React</strong> on frontend (TypeScript + Bootstrap), <strong>NestJS backend</strong> and distributed deployment on <strong>Render, Vercel and Azure</strong>. Modern client-server architecture in a real enterprise environment.',
    'proj.3.cta': 'Private repository',
    'proj.live': 'Live in production',
    'proj.public': 'Public source',
    'proj.private': 'Private',

    'edu.tag': '// education',
    'edu.title.a': 'Academic',
    'edu.title.b': 'Education',
    'edu.1.sub': 'Multi-platform Application Development',
    'edu.1.desc': 'Higher technical training in object-oriented programming, full stack web and multi-platform development, relational and NoSQL databases, version control and cloud deployment. Final project with modern professional stack.',
    'edu.2.sub': 'Microcomputer Systems and Networks',
    'edu.2.desc': 'Hardware, network architecture, Linux/Windows operating systems and server administration. Technical foundation to understand the infrastructure modern applications run on.',
    'edu.3.sub': 'IES Quarto del Rey · Valencia',
    'edu.3.desc': 'Compulsory Secondary Education. Where my interest in technology and programming was born, leading me to choose computer science as my professional vocation.',

    'contact.tag': '// get_in_touch',
    'contact.title.a': "Let's talk",
    'contact.sub': 'Have an interesting junior offer or a project in mind? Quick response — via email, LinkedIn or phone.',
    'contact.c1': 'Phone',
    'contact.c2': 'Email',
    'contact.c3': 'Location',
    'contact.c3.v': 'Valencia · Open to relocate',
    'contact.note': 'You can also find me on',

    'footer.copy': 'Made with ❤ by <strong>Jaime Juan Ferrer Haro</strong> · 2025',
    'footer.tech': 'HTML · CSS · Vanilla JavaScript — no frameworks',
  },

  pl: {
    'nav.about': 'O mnie',
    'nav.skills': 'Umiejętności',
    'nav.exp': 'Doświadczenie',
    'nav.projects': 'Projekty',
    'nav.edu': 'Wykształcenie',
    'nav.contact': 'Kontakt',

    'hero.available': 'Open to work · Junior Developer',
    'hero.desc': 'Junior full stack developer z Walencji (Hiszpania). Świeżo po dyplomie DAM, z ukończonymi praktykami zawodowymi w międzynarodowej firmie technologicznej i realnymi projektami na produkcji. Specjalizacja: <strong>Angular, React i NestJS</strong>.',
    'hero.btn1': 'Zobacz projekty',
    'hero.btn2': 'Kontakt →',
    'hero.stat1': 'Realnych projektów',
    'hero.stat2': 'Technologii',
    'hero.stat3': 'Dyplomy',

    'typed.0': 'Junior Full Stack Developer',
    'typed.1': 'Angular · React · TypeScript',
    'typed.2': 'Backend: NestJS, Java i Spring',
    'typed.3': 'Otwarty na relokację do Polski 🇵🇱',

    'about.tag': '// about_me',
    'about.title.a': 'O',
    'about.title.b': 'mnie',
    'about.p1': 'Nazywam się <strong>Jaime Juan Ferrer Haro</strong>, jestem junior full stack developerem z Walencji. Świeżo po ukończeniu <strong>studium wyższego DAM</strong> (Programowanie Aplikacji Multiplatformowych), z praktycznym doświadczeniem zdobytym podczas praktyk w międzynarodowej firmie technologicznej.',
    'about.p2': 'Moim celem jest budowanie wysokiej jakości produktów cyfrowych: od nowoczesnych interfejsów w <strong>Angularze, React i TypeScript</strong>, po solidne API w <strong>NestJS, Java i Spring Boot</strong>. Mam realne projekty na produkcji i opublikowany kod.',
    'about.p3': 'Szukam mojej pierwszej pracy jako junior w firmie, w której mogę rozwijać się technicznie — <strong>otwarty na oferty w Hiszpanii, zdalne w całej Europie lub relokację do Polski</strong>.',
    'about.chip.loc': 'Walencja · Otwarty na relokację',
    'about.chip.car': 'Prawo jazdy B · Własny pojazd',
    'about.card1.t': 'Wykształcenie',
    'about.card1.d': 'Wyższe DAM<br>(Świeżo po dyplomie)',
    'about.card2.t': 'Doświadczenie',
    'about.card2.d': 'Praktyki w korporacji<br>+ realne projekty',
    'about.card3.t': 'Języki',
    'about.card3.d': 'Hiszpański · Walencki<br>Angielski zaawansowany',
    'about.card4.t': 'Dostępność',
    'about.card4.d': 'Natychmiastowa<br>Stacjonarnie · Zdalnie · Relokacja',

    'skills.tag': '// tech_stack',
    'skills.title.a': 'Stos',
    'skills.title.b': 'technologiczny',
    'skills.cat1': 'Frontend',
    'skills.cat2': 'Backend i API',
    'skills.cat3': 'Bazy danych',
    'skills.cat4': 'Chmura i Narzędzia',
    'skills.bars.t': 'Poziom zaawansowania',

    'exp.tag': '// professional_experience',
    'exp.title.a': 'Doświadczenie',
    'exp.title.b': 'zawodowe',
    'exp.1.role': 'Praktyki — Software Development',
    'exp.1.date': '2025',
    'exp.1.current': 'W trakcie',
    'exp.1.desc': 'Praktyki zawodowe w międzynarodowej firmie, światowym liderze profesjonalnych systemów audio. Współudział w rozwoju <strong>pełnostackowego wewnętrznego firmowego portalu webowego</strong>: Angular, React, TypeScript i Bootstrap na froncie; backend w NestJS; wdrożenie w chmurze (Render, Vercel i Azure).',
    'exp.2.role': 'Praktyki — Wsparcie IT',
    'exp.2.date': '2021',
    'exp.2.desc': 'Pierwszy zawodowy kontakt z sektorem technologicznym. <strong>Naprawa sprzętu komputerowego, wsparcie techniczne klientów oraz instalacja i konfiguracja oprogramowania</strong>. Solidna baza w zakresie infrastruktury i utrzymania systemów.',

    'proj.tag': '// featured_projects',
    'proj.title.a': 'Wybrane',
    'proj.title.b': 'projekty',
    'proj.sub': 'Realne projekty — opublikowany kod i aplikacje na produkcji.',
    'proj.1.t': 'Villas Juan Vich',
    'proj.1.role': 'Strona produkcyjna · Realny klient',
    'proj.1.desc': 'Działająca strona korporacyjna firmy rodzinnej zajmującej się wynajmem willi na Ibizie. <strong>Frontend w React + Vite, backend w PHP</strong>, integracja z WhatsApp do bezpośrednich rezerwacji oraz Google Analytics. Hosting Hostinger. Aktywna strona generująca prawdziwy ruch.',
    'proj.1.cta': 'Zobacz na żywo →',
    'proj.2.t': 'Aplikacja Desktop z NFC',
    'proj.2.role': 'Electron + integracja sprzętu NFC',
    'proj.2.desc': 'Wieloplatformowa aplikacja desktopowa zbudowana z użyciem <strong>Electron</strong>, zintegrowana z technologią <strong>NFC (PC/SC)</strong> do odczytu/zapisu kart. Backend w <strong>Spring Boot</strong> z autentykacją <strong>JWT</strong> i persystencją na <strong>MongoDB Atlas</strong>. Pełny system klient-serwer z podwójnym uwierzytelnianiem (DNI lub NFC) i automatyczną rejestracją obecności.',
    'proj.2.cta': 'Zobacz na GitHub →',
    'proj.3.t': 'Korporacyjny Portal Web',
    'proj.3.role': 'Praktyki DAS Audio · Prywatne repo',
    'proj.3.desc': 'Wewnętrzny korporacyjny portal webowy rozwijany podczas praktyk. Pełny stack z <strong>Angular i React</strong> na froncie (TypeScript + Bootstrap), <strong>backend w NestJS</strong> oraz rozproszone wdrożenie na <strong>Render, Vercel i Azure</strong>. Nowoczesna architektura klient-serwer w realnym środowisku korporacyjnym.',
    'proj.3.cta': 'Repozytorium prywatne',
    'proj.live': 'Na produkcji',
    'proj.public': 'Kod publiczny',
    'proj.private': 'Prywatny',

    'edu.tag': '// education',
    'edu.title.a': 'Wykształcenie',
    'edu.title.b': 'akademickie',
    'edu.1.sub': 'Programowanie Aplikacji Multiplatformowych',
    'edu.1.desc': 'Wyższe szkolenie techniczne w zakresie programowania obiektowego, pełnego stacku webowego i multiplatformowego, baz danych relacyjnych i NoSQL, kontroli wersji oraz wdrażania w chmurze. Projekt końcowy z nowoczesnym stackiem profesjonalnym.',
    'edu.2.sub': 'Systemy Mikrokomputerowe i Sieciowe',
    'edu.2.desc': 'Sprzęt komputerowy, architektura sieci, systemy operacyjne Linux/Windows oraz administracja serwerami. Techniczna baza pozwalająca rozumieć infrastrukturę, na której działają nowoczesne aplikacje.',
    'edu.3.sub': 'IES Quarto del Rey · Walencja',
    'edu.3.desc': 'Obowiązkowa Edukacja Średnia. Tutaj zrodziło się moje zainteresowanie technologią i programowaniem, które doprowadziło mnie do wyboru informatyki jako zawodowego powołania.',

    'contact.tag': '// get_in_touch',
    'contact.title.a': 'Porozmawiajmy',
    'contact.sub': 'Masz ciekawą ofertę juniorską lub projekt w głowie? Szybko odpowiadam — przez email, LinkedIn lub telefon.',
    'contact.c1': 'Telefon',
    'contact.c2': 'Email',
    'contact.c3': 'Lokalizacja',
    'contact.c3.v': 'Walencja · Otwarty na relokację',
    'contact.note': 'Znajdziesz mnie również na',

    'footer.copy': 'Zrobione z ❤ przez <strong>Jaime Juan Ferrer Haro</strong> · 2025',
    'footer.tech': 'HTML · CSS · Vanilla JavaScript — bez frameworków',
  },
};

// ---- apply translations ----
function applyI18n(lang) {
  const t = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] != null) el.innerHTML = t[key];
  });

  window.__typedPhrases = [t['typed.0'], t['typed.1'], t['typed.2'], t['typed.3']];
  window.dispatchEvent(new CustomEvent('i18n-change', { detail: lang }));

  try { localStorage.setItem('lang', lang); } catch {}

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

(function () {
  const saved = (() => { try { return localStorage.getItem('lang'); } catch { return null; } })();
  const initial = saved || (navigator.language || 'es').slice(0, 2).toLowerCase();
  const lang = I18N[initial] ? initial : 'es';
  window.__currentLang = lang;

  document.addEventListener('DOMContentLoaded', () => {
    applyI18n(lang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const newLang = btn.dataset.lang;
        window.__currentLang = newLang;
        applyI18n(newLang);
      });
    });
  });
})();
