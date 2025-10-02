import { useEffect } from 'react';

export function useDocumentTitle(title, description) {
  useEffect(() => {
    // Actualizar el título de la página
    if (title) {
      document.title = title;
    }

    // Actualizar o crear meta descripción
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    // Cleanup no es necesario porque queremos que persista hasta la siguiente página
  }, [title, description]);
}

export function useMetaTags(metaTags = {}) {
  useEffect(() => {
    const {
      title,
      description,
      keywords,
      author,
      ogTitle,
      ogDescription,
      ogImage,
      ogUrl,
      twitterCard = 'summary_large_image'
    } = metaTags;

    // Título
    if (title) {
      document.title = title;
    }

    // Meta tags básicos
    const updateOrCreateMeta = (selector, content) => {
      if (!content) return;
      
      let meta = document.querySelector(selector);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (selector.includes('name=')) {
          meta.name = selector.match(/name="([^"]+)"/)[1];
        } else if (selector.includes('property=')) {
          meta.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Meta tags estándar
    updateOrCreateMeta('meta[name="description"]', description);
    updateOrCreateMeta('meta[name="keywords"]', keywords);
    updateOrCreateMeta('meta[name="author"]', author);

    // Open Graph
    updateOrCreateMeta('meta[property="og:title"]', ogTitle || title);
    updateOrCreateMeta('meta[property="og:description"]', ogDescription || description);
    updateOrCreateMeta('meta[property="og:image"]', ogImage);
    updateOrCreateMeta('meta[property="og:url"]', ogUrl);
    updateOrCreateMeta('meta[property="og:type"]', 'website');

    // Twitter Card
    updateOrCreateMeta('meta[name="twitter:card"]', twitterCard);
    updateOrCreateMeta('meta[name="twitter:title"]', ogTitle || title);
    updateOrCreateMeta('meta[name="twitter:description"]', ogDescription || description);
    updateOrCreateMeta('meta[name="twitter:image"]', ogImage);

  }, [metaTags]);
}