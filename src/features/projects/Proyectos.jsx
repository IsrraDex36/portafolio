import { useEffect } from 'react'
import BentoCard from '@/features/home/components/BentoGrid/BentoGrid'
import { useMetaTags } from '@/hooks/useDocumentTitle';
import { pageMetadata } from '@/data/pageMetadata';

export default function Proyectos() {
  // Configurar metadatos para la página de proyectos
  useMetaTags(pageMetadata.projects);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <BentoCard />
    </div>
  )
}
