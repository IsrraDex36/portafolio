import { useEffect } from 'react'
import BentoCard from '@/components/BentoGrid/BentoGrid'
import { useMetaTags } from '@/hooks/useDocumentTitle';
import { pageMetadata } from '@/data/pageMetadata';
/* import BentoCertif from '@/components/BentoCertif/BentoCertif' */

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
      {/* <BentoCertif /> */}
    </div>
  )
}
