import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import BlurText from '@/components/BlurText/BlurText'

describe('BlurText Component', () => {
  it('renderiza el texto correctamente', () => {
    const { container } = render(<BlurText text="Hola Mundo" />)
    // El texto está dividido en spans, así que verificamos el contenedor
    expect(container.textContent).toContain('Hola')
    expect(container.textContent).toContain('Mundo')
  })

  it('aplica la clase CSS personalizada', () => {
    const { container } = render(
      <BlurText text="Test" className="custom-class" />
    )
    const element = container.querySelector('.custom-class')
    expect(element).toBeInTheDocument()
  })

  it('divide el texto por palabras cuando animateBy="words"', () => {
    const { container } = render(
      <BlurText text="Hello World" animateBy="words" />
    )
    // Debe haber elementos separados para cada palabra (2 palabras)
    const spans = container.querySelectorAll('span')
    expect(spans.length).toBe(2)
  })

  it('divide el texto por caracteres cuando animateBy="characters"', () => {
    const { container } = render(
      <BlurText text="ABC" animateBy="characters" />
    )
    const spans = container.querySelectorAll('span')
    // Debe haber 3 spans, uno por cada letra
    expect(spans.length).toBe(3)
  })

  it('renderiza el componente completo', () => {
    const { container} = render(<BlurText text="Test Component" />)
    const paragraph = container.querySelector('p.blur-text')
    expect(paragraph).toBeInTheDocument()
  })
})

