import './ButttonNewsletter.css'

export function ButtonNewsletter({ children }) {
  return (
    <button type='submit' className="newsletter__form__button">
      {children}
    </button>
  )
}