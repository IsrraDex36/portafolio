import { describe, it, expect } from 'vitest'
import { projects } from './projectsData'

describe('Projects Data', () => {
  it('tiene un array de proyectos definido', () => {
    expect(projects).toBeDefined()
    expect(Array.isArray(projects)).toBe(true)
  })

  it('cada proyecto tiene las propiedades requeridas', () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty('title')
      expect(project).toHaveProperty('description')
      expect(project).toHaveProperty('technologies')
      expect(project).toHaveProperty('image')
    })
  })

  it('los títulos de proyectos no están vacíos', () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy()
      expect(typeof project.title).toBe('string')
      expect(project.title.length).toBeGreaterThan(0)
    })
  })

  it('las tecnologías son un array', () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.technologies)).toBe(true)
      expect(project.technologies.length).toBeGreaterThan(0)
    })
  })

  it('contiene al menos un proyecto', () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it('cada proyecto tiene una descripción válida', () => {
    projects.forEach((project) => {
      expect(project.description).toBeTruthy()
      expect(typeof project.description).toBe('string')
      expect(project.description.length).toBeGreaterThan(10)
    })
  })
})
