import { useRef, useState } from 'react'
import type { KeyboardEvent, TouchEvent } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { useContent } from '../../i18n/useContent'
import type { OtherProject } from '../../types/portfolio'

interface ProjectCarouselProps {
  title: string
  description: string
  items: OtherProject[]
}

/** Quanto o dedo tem de andar, em pixels, para o toque contar como passar para o lado. */
const ARRASTO = 45

/**
 * Os outros projetos, um por vez: a foto da tela, uma descrição curta e o
 * botão para o código. As setas passam para o projeto seguinte ou o anterior,
 * e do último voltam ao primeiro; no celular, também se passa arrastando o
 * dedo. Nada passa sozinho: quem lê devagar é que decide quando trocar.
 *
 * As fotos não esperam aparecer para carregar: são cinco, de 10 a 18 KB, e o
 * carregamento preguiçoso deixava o quadro vazio na hora de passar.
 */
export function ProjectCarousel({ title, description, items }: ProjectCarouselProps) {
  const { ui } = useContent()
  const [atual, setAtual] = useState(0)
  const toque = useRef<number | null>(null)
  const total = items.length
  const projeto = items[atual]

  // Pelo valor anterior, e não pelo da última renderização: dois cliques rápidos andam dois projetos.
  const andar = (passo: 1 | -1) => setAtual((anterior) => (anterior + passo + total) % total)

  const comTeclado = (evento: KeyboardEvent<HTMLDivElement>) => {
    if (evento.key === 'ArrowRight') {
      evento.preventDefault()
      andar(1)
    } else if (evento.key === 'ArrowLeft') {
      evento.preventDefault()
      andar(-1)
    }
  }

  const comecouAToque = (evento: TouchEvent<HTMLDivElement>) => {
    toque.current = evento.touches[0].clientX
  }

  const terminouOToque = (evento: TouchEvent<HTMLDivElement>) => {
    if (toque.current === null) {
      return
    }

    const andou = evento.changedTouches[0].clientX - toque.current
    toque.current = null

    if (Math.abs(andou) >= ARRASTO) {
      andar(andou < 0 ? 1 : -1)
    }
  }

  return (
    <section
      className="other-projects"
      aria-roledescription={ui.carousel.roleDescription}
      aria-labelledby="outros-projetos-titulo"
    >
      <header className="other-projects-header">
        <h3 id="outros-projetos-titulo">{title}</h3>
        <p>{description}</p>
      </header>

      <div
        className="carousel-stage"
        onKeyDown={comTeclado}
        onTouchStart={comecouAToque}
        onTouchEnd={terminouOToque}
      >
        <button
          type="button"
          className="carousel-arrow is-previous"
          onClick={() => andar(-1)}
          aria-label={ui.carousel.previous}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        <div className="carousel-viewport">
          <div className="carousel-strip" style={{ transform: `translateX(-${atual * 100}%)` }}>
            {items.map((item, indice) => (
              <div
                key={item.id}
                className="carousel-slide"
                role="group"
                aria-roledescription={ui.carousel.slideRoleDescription}
                aria-label={`${item.title}, ${ui.carousel.position(indice + 1, total)}`}
                aria-hidden={indice !== atual}
                inert={indice !== atual}
              >
                <figure className="carousel-photo">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    decoding="async"
                  />
                </figure>

                <div className="carousel-text">
                  <span className="carousel-count">{ui.carousel.position(indice + 1, total)}</span>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                  <a className="carousel-github" href={item.repository} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" />
                    {ui.sourceCode}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow is-next"
          onClick={() => andar(1)}
          aria-label={ui.carousel.next}
        >
          <ChevronRight aria-hidden="true" />
        </button>

        <div className="carousel-dots" role="group" aria-label={ui.carousel.choose}>
          {items.map((item, indice) => (
            <button
              key={item.id}
              type="button"
              aria-label={ui.carousel.goTo(indice + 1, item.title)}
              aria-current={indice === atual ? 'true' : undefined}
              onClick={() => setAtual(indice)}
            />
          ))}
        </div>
      </div>

      <p className="carousel-live" aria-live="polite">
        {`${projeto.title}, ${ui.carousel.position(atual + 1, total)}`}
      </p>
    </section>
  )
}
