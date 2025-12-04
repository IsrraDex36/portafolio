import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CountUp from './CountUp'

describe('CountUp Component', () => {
  it('renderiza el componente correctamente', () => {
    const { container } = render(<CountUp from={0} to={100} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('acepta props de dirección (up/down)', () => {
    const { rerender } = render(<CountUp from={0} to={100} direction="up" />)
    expect(screen.getByText(/\d+/)).toBeInTheDocument()
    
    rerender(<CountUp from={100} to={0} direction="down" />)
    expect(screen.getByText(/\d+/)).toBeInTheDocument()
  })

  it('aplica clases de estilo personalizadas', () => {
    const { container } = render(
      <CountUp 
        from={0} 
        to={100} 
        fontSize="text-4xl"
        color="text-blue-500"
        fontWeight="font-bold"
      />
    )
    
    const element = container.firstChild
    expect(element?.className).toContain('text-4xl')
    expect(element?.className).toContain('text-blue-500')
    expect(element?.className).toContain('font-bold')
  })

  it('muestra el valor inicial en el primer render', () => {
    render(<CountUp from={50} to={100} />)
    // El componente debe mostrar un número
    expect(screen.getByText(/\d+/)).toBeInTheDocument()
  })
})
