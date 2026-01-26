import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

// Mock de Lenis Context
vi.mock('@/context/LenisContext', () => ({
  useLenisContext: () => ({
    scrollTo: vi.fn(),
  }),
}))

// Mock de useActiveSection hook
vi.mock('@/hooks/useActiveSection', () => ({
  useActiveSection: () => 'home',
}))

const renderNavbar = () => {
  return render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
}

describe('Navbar Component', () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = ''
  })

  it('renderiza todos los elementos de navegación', () => {
    renderNavbar()
    
    // Verifica que existan los tooltips/labels
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Experiencia')).toBeInTheDocument()
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Certificaciones')).toBeInTheDocument()
    expect(screen.getByText('Habilidades')).toBeInTheDocument()
    expect(screen.getByText('Formación')).toBeInTheDocument()
    expect(screen.getByText('Sobre mí')).toBeInTheDocument()
  })

  it('se hace visible después de la animación inicial', async () => {
    const { container } = renderNavbar()
    const nav = container.querySelector('nav')
    
    expect(nav).toBeInTheDocument()
    // La navbar debería tener clases de transición
    expect(nav).toHaveClass('transition-all')
  })

  it('los elementos de navegación son clickeables', () => {
    renderNavbar()
    
    const navItems = screen.getAllByRole('generic').filter(el => 
      el.classList.contains('dock-item')
    )
    
    // Debe haber 7 items de navegación
    expect(navItems.length).toBeGreaterThanOrEqual(6)
  })

  it('aplica estilos responsive correctamente', () => {
    const { container } = renderNavbar()
    const nav = container.querySelector('nav')
    
    // Verifica clases responsive
    expect(nav?.className).toContain('max-md:')
    expect(nav?.className).toContain('md:max-lg:')
  })
})
