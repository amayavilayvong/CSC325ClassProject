import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Hero from '../src/components/Hero'
 
describe('Hero', () => {
  it('renders a heading', () => {
    render(<Hero />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })

  //Test the rendering/inclusion of the subheading
  it('renders the subheading', () => {
    render(<Hero />)    
    const subheading = screen.getByText(/explore our cutting-edge dashboard/i)  //Look for a paragraph of text under the heading
    expect(subheading).toBeInTheDocument()
  })

  //Test the rendering/inclusion of the CTA (go now) button
  it('renders the CTA', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /go now/i })    //Look for the button that says "Go now"
    expect(button).toBeInTheDocument()
  })

  //Test the rendering/inclusion of the Hero visual
  it('renders the Hero visual', () => {
    render(<Hero />)
    const heroVisual = screen.getByTestId('hero-visual')  //Look for the image/background element with hero-visual as its id
    expect(heroVisual).toBeInTheDocument()
  })
})