import React, { useState } from "react"
import './css/main.css'
import { ButtonNewsletter } from "./components/ButtonNewsletter"
import { ListItemNewsletter } from "./components/ListItemNewsletter"
import { ModalSuccess } from "./components/ModalSuccess"

export function App() {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState(null)

  const monthlyUpdate = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!"
  ]

  const handleSumbit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(
      new window.FormData(e.target)
    )

    const {email: newEmail} = data

    if (validateEmail(newEmail)) {
      setError(true)
      setEmail(newEmail)
      return
    } else {
      setError(false)
      return
    }
  }

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

    return regex.test(email)
  }

  return (
    <>
    {!error &&
      <main className="container">
        <picture className="bg-illustration">
          <source media="(min-width: 37.5rem)" srcSet="../images/illustration-sign-up-desktop.svg" />
          <source media="(max-width: 37.5rem)" srcSet="../images/illustration-sign-up-mobile.svg" />
          <img src="../images/illustration-sign-up-mobile.svg" alt="illustration" className="bg-illustration" />
        </picture>
        <section className="content-newsletter">
          <h1 className="newslatter__title">Stay updated!</h1>
          <p className="newsletter__description">
            Join 60,000+ product managers receiving monthly update on:
          </p>
          <ul className="newsletter__list">
            {
              monthlyUpdate.map((text, index) => {
                return (
                  <ListItemNewsletter key={index}>
                    {text}
                  </ListItemNewsletter>
                )
              })
            }
          </ul>
          <form action="" className="newsletter__form" onSubmit={handleSumbit}>
            <label>
              <div className="newsletter__form__header">
                <p className="newsletter__form__input__title">Email address</p>
                <span className="newsletter__form__input__title message--error" style={{ display: error === false ? 'inline' : 'none' }}>Valid email request</span>
              </div>
              {/* input--error */}
              <input className={`newsletter__form__input ${error === false ? "input--error" : ""}`} name="email" type="text" placeholder="email@company.com" />
            </label>
            <ButtonNewsletter>
              {"Subscribe to monthly newsletter"}
            </ButtonNewsletter>
          </form>
        </section>
      </main>
      }
      {
        error && <ModalSuccess emailSubscribed={email} />
      }

    </>
  )
}