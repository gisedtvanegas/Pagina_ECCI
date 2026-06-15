document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    es: {
      buttonText: 'English',
      nav: {
        inicio: 'Inicio',
        experiencia: 'Mi Experiencia',
        glosario: 'Glosario',
        sostenibilidad: 'Sostenibilidad',
        galeria: 'Galería'
      },
      headings: {
        inicio: 'Bienvenidos!',
        experiencia: 'Mi experiencia en Moda ECCI',
        glosario: 'Glosario',
        sostenibilidad: 'Tecnología, sostenibilidad y economía circular',
        galeria: 'Galería'
      },
      title: 'Moda ECCI - Sitio Informativo',
      sectionText: {
        inicio: 'Esta página fue creada con el fin de mostrar mi experiencia en la conferencia de colores en la universidad ECCI.',
        experiencia: 'Mi experiencia en la conferencia y evento de moda en la Universidad ECCI fue mágica; es una vivencia que repetiría siempre. Lo que más me llevé de la conferencia fue la reflexión de que debemos aprender a vivir la vida con colores. Estamos tan acostumbrados a verlos que, en ocasiones, dejamos de percibirlos realmente. Después de mucho tiempo, me sentí consciente de los colores que me rodeaban, de los que vestía y de los que utilizaban la mayoría de las personas del programa ADSO. Fue un momento que me permitió valorar la belleza de los colores presentes en mi entorno.<br><br>Una de las experiencias más significativas ocurrió mientras Sara Viloria daba su conferencia: varios estudiantes de la universidad pasaban frente a mí, y eso me hizo observar con atención las prendas que llevaban. Pensé que el estilo “Pinterest” se ha vuelto tan común que ya resulta monótono. Aunque no considero que sea la mejor al vestirme, estaba librando una batalla interna al sentirme “básica”. Ver esos atuendos, que antes me parecían inspiradores en fotos, ahora me resultaban aburridos, lo que me llevó a replantear un cambio en mi clóset.<br><br>La relación que encontré con el desarrollo de software es que solemos trabajar con colores neutros —negro, blanco, azul oscuro— y rara vez nos atrevemos a dar un “pum” de color. Incluso cuando la empresa de un cliente maneja tonos llamativos, tendemos a suavizarlos. Eso me sucedía: mi empresa utiliza colores pasteles y suaves, pero yo los estaba llevando hacia tonalidades oscuras. Esta experiencia fue, entonces, una invitación a atrevernos a incorporar colores en nuestro trabajo y en nuestra vida cotidiana.<br><br>Normalmente, cuando una persona que no estudia moda, arte o pintura, o que está poco familiarizada con el mundo de los colores, piensa en Pantone, suele creer que se trata únicamente de un conjunto de fichas con tonalidades a las que se les asigna un nombre. Eso mismo pensaba yo que era Pantone, hasta que me di a la tarea de investigar y, después de escuchar la conferencia, comprendí que estaba equivocada: Pantone es mucho más que eso.<br><br>Pantone no solo organiza colores, también inspira a través de ellos. Cada año, cuando anuncian el Color del Año, se convierte en una invitación a conocerlo, convivir con él y sentirlo. Además, como lo señaló nuestra ponente Sara Viloria, cada color trae consigo recuerdos, sensaciones y sentimientos, lo que demuestra que su importancia va más allá de lo visual: conecta directamente con nuestras emociones y experiencias.',
        sostenibilidad: 'En eventos de moda y color es clave escoger proveedores responsables, usar materiales reciclables y garantizar una experiencia inclusiva y libre de residuos.',
        modalBody1: 'Gracias por visitar Moda ECCI. Esta página muestra mi experiencia en la conferencia de colores de la Universidad ECCI.',
        modalBody2: 'Aquí encontrarás reflexiones sobre color, moda y sostenibilidad.',
        modalBody3: 'Usa el botón de idioma para cambiar entre español e inglés.',
        footer: '© 2026 Moda ECCI - Sitio Informativo',
      },
      glossaryHeaders: {
        english: 'Inglés',
        spanish: 'Español',
        definition: 'Definición'
      },
      galleryText: [
        'Me hizo sentir dentro de un rave, ya que el stand tenia música de este estilo y las personas dueñas de él estaban en la misma vibe.',
        'Esta foto es una de mis favoritas, por la forma tan especial y única en la que acomodaron sus joyas y claro por cómo fue tomada.',
        'La foto fue tomada en el mismo stand de la primera foto y como se logra apreciar daba toda esta vibe de rave. También se me olvidaba mencionar que ellos tenían pequeños shots de licor y eso completó más la sensación de fiesta.',
        'Ese stand fue uno de mis favoritos, me encantó cada prenda que vi.',
        'Esta foto fue mi foto favorita, me hizo sentir completamente en una vibe “Pinterest”, me encantó mucho también la tranquilidad y amabilidad que nos pudieron transmitir las dueñas del stand.',
        'Este stand transmitió elegancia y minimalismo, este stand por lo que vi solo era de joyas, no alcancé ver prendas de él.'
      ],
      glossaryDefinitions: [
        'Un tono profundo de azul con matices verdosos usado en pintura y diseño.',
        'Un pigmento oscuro morado intenso obtenido históricamente del humo de alquitrán.',
        'Color, Material y Acabado; concepto clave en diseño de productos y moda.',
        'La familia básica de color, como rojo, azul o amarillo.',
        'La intensidad o viveza del color.',
        'La claridad u oscuridad de un color.',
        'Colores opuestos en la rueda de color que crean contraste vibrante.',
        'Colores vecinos en la rueda de color que armonizan suavemente.',
        'Una paleta basada en variaciones de un solo color.',
        'Colores sin tono: negro, blanco y grises.',
        'La sensación cálida o fría que transmite un color.',
        'Un color mezclado con blanco para hacerlo más claro.',
        'Un color mezclado con negro para hacerlo más oscuro.',
        'Un color mezclado con gris para reducir su intensidad.',
        'Un sistema estandarizado de colores usado en moda y diseño para identificar tonos precisos.'
      ],
      sustainabilityItems: [
        'Planificación de materiales ecoamigables y reciclables.',
        'Iluminación LED de bajo consumo para espacios de exhibición.',
        'Diseño de stands reutilizables y elementos de escenografía sostenibles.',
        'Selección de proveedores éticos con prácticas laborales responsables.',
        'Gestión de residuos y puntos de reciclaje visibles para asistentes.',
        'Uso de textiles orgánicos y procesos de producción local.',
        'Comunicación clara sobre transparencia y trazabilidad de materiales.'
      ],
      modal: {
        title: 'Bienvenida',
        closeButtonLabel: 'Cerrar',
        body: [
          'Gracias por visitar Moda ECCI. Esta página muestra mi experiencia en la conferencia de colores de la Universidad ECCI.',
          'Aquí encontrarás reflexiones sobre color, moda y sostenibilidad.',
          'Usa el botón de idioma para cambiar entre español e inglés.'
          
        ]
      }
    },
    en: {
      buttonText: 'Español',
      nav: {
        inicio: 'Home',
        experiencia: 'My Experience',
        glosario: 'Glossary',
        sostenibilidad: 'Sustainability',
        galeria: 'Gallery'
      },
      headings: {
        inicio: 'Welcome to Moda ECCI',
        experiencia: 'My Experience at Moda ECCI',
        glosario: 'Glossary',
        sostenibilidad: 'Technology, Sustainability and Circular Economy',
        galeria: 'Gallery'
      },
      title: 'Moda ECCI - Informative Site',
      sectionText: {
        inicio: 'This page was created to show my experience at the color conference at Universidad ECCI.',
        experiencia: 'My experience at the fashion and color event at Universidad ECCI was magical; it is an experience I would repeat. What I took away most from the conference was the reflection that we must learn to live life with colors. We are so used to seeing them that sometimes we stop truly perceiving them. After a long time, I felt aware of the colors around me, what I was wearing, and what most people in the ADSO program were using. It was a moment that allowed me to appreciate the beauty of the colors present in my surroundings.<br><br>One of the most significant experiences happened while Sara Viloria was giving her talk: several university students walked in front of me, and that made me observe with attention the clothes they were wearing. I thought the “Pinterest” style has become so common that it is already monotonous. Although I do not consider it the best for me when dressing, I was having an internal battle feeling “basic”. Seeing those outfits, which once seemed inspiring in photos, now seemed boring, which led me to rethink a change in my closet.<br><br>The connection I found with software development is that we usually work with neutral colors —black, white, dark blue— and rarely dare to add a “pop” of color. Even when a client company uses bold tones, we tend to soften them. That happened to me: my company uses pastel and soft colors, but I was taking them toward dark shades. This experience was, then, an invitation to dare to incorporate colors into our work and our daily life.<br><br>Normally, when a person who does not study fashion, art, or painting, or who is not very familiar with the world of colors, thinks of Pantone, they tend to believe it is only a set of swatches with tones assigned a name. That is exactly what I thought Pantone was until I took it upon myself to investigate and, after listening to the conference, I understood I was wrong: Pantone is much more than that.<br><br>Pantone not only organizes colors, it also inspires through them. Every year, when they announce the Color of the Year, it becomes an invitation to get to know it, live with it, and feel it. In addition, as our speaker Sara Viloria pointed out, each color brings with it memories, sensations, and feelings, which shows that its importance goes beyond the visual: it connects directly with our emotions and experiences.',
        sostenibilidad: 'At fashion and color events, it is essential to choose responsible suppliers, use recyclable materials, and ensure an inclusive, low-waste experience.',
        modalBody1: 'Thank you for visiting Moda ECCI. This page shares my experience at the ECCI color conference.',
        modalBody2: 'Here you will find reflections about color, fashion, and sustainability.',
        modalBody3: 'Use the language button to switch between Spanish and English.',
        footer: '© 2026 Moda ECCI - Informative Site',
      },
      glossaryHeaders: {
        english: 'English',
        spanish: 'Spanish',
        definition: 'Definition'
      },
      galleryText: [
        'It made me feel like I was inside a rave, since the stand had that style of music and the people running it were in the same vibe.',
        'This photo is one of my favorites because of the special and unique way they arranged their jewelry and of course how it was photographed.',
        'The photo was taken at the same stand as the first picture and, as you can see, it had a full rave vibe. I should also mention they had small liquor shots, which completed the party feeling.',
        'That stand was one of my favorites; I loved every garment I saw.',
        'This picture was my favorite; it made me feel completely in a “Pinterest” vibe, and I also loved the calmness and kindness the stand owners conveyed.',
        'This stand conveyed elegance and minimalism; from what I saw it was only jewelry, I could not see any garments.'
      ],
      glossaryDefinitions: [
        'A deep blue shade with greenish undertones used in painting and design.',
        'A dark purple pigment historically derived from tar smoke.',
        'Color, Material, and Finish; a key concept in product and fashion design.',
        'The basic family of a color, like red, blue, or yellow.',
        'The intensity or vividness of a color.',
        'The lightness or darkness of a color.',
        'Opposite colors on the color wheel that create vibrant contrast.',
        'Neighboring colors on the color wheel that harmonize softly.',
        'A palette based on variations of a single color.',
        'Colors without hue: black, white, and grays.',
        'The warm or cool sensation a color conveys.',
        'A color mixed with white to make it lighter.',
        'A color mixed with black to make it darker.',
        'A color mixed with gray to reduce its intensity.',
        'A standardized color system used in fashion and design to identify precise shades.'
      ],
      sustainabilityItems: [
        'Planning eco-friendly and recyclable materials.',
        'Using low-consumption LED lighting for exhibition spaces.',
        'Designing reusable stands and sustainable stage elements.',
        'Selecting ethical suppliers with responsible labor practices.',
        'Managing waste and providing visible recycling points for attendees.',
        'Using organic textiles and local production processes.',
        'Clear communication about transparency and material traceability.'
      ],
      modal: {
        title: 'Welcome',
        closeButtonLabel: 'Close',
        body: [
          'Thank you for visiting Moda ECCI. This site shares my experience at the ECCI color conference.',
          'Here you will find reflections about color, fashion, and sustainability.',
          'Use the language button to switch between Spanish and English.'
        ]
      }
    }
  };

  

  let currentLang = 'es';

  function translatePage(lang) {
    const data = translations[lang];
    if (!data) return;

    const navInicio = document.querySelector('.navbar-nav .nav-link[href="#inicio"]');
    const navExperiencia = document.querySelector('.navbar-nav .nav-link[href="#experiencia"]');
    const navGlosario = document.querySelector('.navbar-nav .nav-link[href="#glosario"]');
    const navSostenibilidad = document.querySelector('.navbar-nav .nav-link[href="#sostenibilidad"]');
    const navGaleria = document.querySelector('.navbar-nav .nav-link[href="#galeria"]');
    const langBtnElement = document.getElementById('langBtn');

    if (langBtnElement) langBtnElement.textContent = data.buttonText;
    if (navInicio) navInicio.textContent = data.nav.inicio;
    if (navExperiencia) navExperiencia.textContent = data.nav.experiencia;
    if (navGlosario) navGlosario.textContent = data.nav.glosario;
    if (navSostenibilidad) navSostenibilidad.textContent = data.nav.sostenibilidad;
    if (navGaleria) navGaleria.textContent = data.nav.galeria;

    const inicioHeading = document.getElementById('inicio-heading');
    const inicioSubheading = document.getElementById('inicio-subheading');
    const experienciaHeading = document.getElementById('experiencia-heading');
    const glosarioHeading = document.getElementById('glosario-heading');
    const sostenibilidadHeading = document.getElementById('sostenibilidad-heading');
    const galeriaHeading = document.getElementById('galeria-heading');

    if (inicioHeading) inicioHeading.textContent = data.headings.inicio;
    if (inicioSubheading) inicioSubheading.textContent = data.sectionText.inicio;
    if (experienciaHeading) experienciaHeading.textContent = data.headings.experiencia;
    if (glosarioHeading) glosarioHeading.textContent = data.headings.glosario;
    if (sostenibilidadHeading) sostenibilidadHeading.textContent = data.headings.sostenibilidad;
    if (galeriaHeading) galeriaHeading.textContent = data.headings.galeria;

    const glossaryHeaderEnglish = document.getElementById('glossary-header-english');
    const glossaryHeaderSpanish = document.getElementById('glossary-header-spanish');
    const glossaryHeaderDefinition = document.getElementById('glossary-header-definition');
    if (glossaryHeaderEnglish && data.glossaryHeaders) glossaryHeaderEnglish.textContent = data.glossaryHeaders.english;
    if (glossaryHeaderSpanish && data.glossaryHeaders) glossaryHeaderSpanish.textContent = data.glossaryHeaders.spanish;
    if (glossaryHeaderDefinition && data.glossaryHeaders) glossaryHeaderDefinition.textContent = data.glossaryHeaders.definition;

    if (document.title !== undefined) document.title = data.title;

    const sostenibilidadText = document.getElementById('sostenibilidad-text');
    if (sostenibilidadText) sostenibilidadText.textContent = data.sectionText.sostenibilidad;

    const experienciaText = document.getElementById('experiencia-text');
    if (experienciaText) experienciaText.innerHTML = data.sectionText.experiencia;

    data.sustainabilityItems.forEach((item, index) => {
      const element = document.getElementById(`sostenibilidad-item-${index + 1}`);
      if (element) element.textContent = item;
    });

    const glossaryRows = [
      { id: 'glossary-row-1', english: 'Prussian blue', spanish: 'Azul de Prusia' },
      { id: 'glossary-row-2', english: 'Caput Mortum', spanish: 'Caput Mortum' },
      { id: 'glossary-row-3', english: 'CMF', spanish: 'CMF' },
      { id: 'glossary-row-4', english: 'Hue', spanish: 'Tono' },
      { id: 'glossary-row-5', english: 'Saturation', spanish: 'Saturación' },
      { id: 'glossary-row-6', english: 'Value', spanish: 'Valor' },
      { id: 'glossary-row-7', english: 'Complementary', spanish: 'Complementario' },
      { id: 'glossary-row-8', english: 'Analogous', spanish: 'Análogo' },
      { id: 'glossary-row-9', english: 'Monochromatic', spanish: 'Monocromático' },
      { id: 'glossary-row-10', english: 'Achromatic', spanish: 'Acromático' },
      { id: 'glossary-row-11', english: 'Temperature', spanish: 'Temperatura' },
      { id: 'glossary-row-12', english: 'Tint', spanish: 'Tinte' },
      { id: 'glossary-row-13', english: 'Shade', spanish: 'Sombra' },
      { id: 'glossary-row-14', english: 'Tone', spanish: 'Tono' },
      { id: 'glossary-row-15', english: 'Pantone', spanish: 'Pantone' }
    ];

    glossaryRows.forEach((row, index) => {
      const englishCell = document.getElementById(`${row.id}-english`);
      const spanishCell = document.getElementById(`${row.id}-spanish`);
      const definitionCell = document.getElementById(`${row.id}-definition`);
      if (englishCell) englishCell.textContent = row.english;
      if (spanishCell) spanishCell.textContent = row.spanish;
      if (definitionCell && data.glossaryDefinitions && data.glossaryDefinitions[index]) {
        definitionCell.textContent = data.glossaryDefinitions[index];
      }
    });

    const galleryTexts = Array.isArray(data.galleryText) ? data.galleryText : [];

    galleryTexts.forEach((text, index) => {
      const element = document.getElementById(`gallery-text-${index + 1}`);
      if (element) element.textContent = text;
    });

    const footerText = document.getElementById('footer-text');
    if (footerText) footerText.textContent = data.sectionText.footer;

    const modalTitle = document.querySelector('#welcomeModal .modal-title');
    if (modalTitle) modalTitle.textContent = data.modal.title;
    const closeButton = document.querySelector('#welcomeModal .btn-close');
    if (closeButton && data.modal.closeButtonLabel) closeButton.setAttribute('aria-label', data.modal.closeButtonLabel);
    const modalBody = document.querySelector('#welcomeModal .modal-body');
    if (modalBody) modalBody.innerHTML = `
      <p>${data.modal.body[0]}</p>
      <p>${data.modal.body[1]}</p>
      <p>${data.modal.body[2]}</p>
    `;
  }

  const langBtn = document.getElementById('langBtn');
  if (!langBtn) {
    console.warn('Botón de idioma no encontrado. Asegúrate de que el ID langBtn exista en el HTML.');
    return;
  }

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    translatePage(currentLang);
  });

  const modalElement = document.getElementById('welcomeModal');
  if (modalElement && window.bootstrap && window.bootstrap.Modal) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  translatePage(currentLang);
});


