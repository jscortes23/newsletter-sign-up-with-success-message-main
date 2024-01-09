import './ModalSuccess.css';
import { ButtonNewsletter } from "./ButtonNewsletter";

export function ModalSuccess({ emailSubscribed }) {
  return (
    <section className="container-thanks" >
      <div className="content-thanks">
        <span className="icon-succcess"></span>
        <h3 className="thanks__title">Thanks for subscribing!</h3>
        <p className="thanks__content">A confirmation email has been sent to <b>{emailSubscribed}</b>. Please open it and click the button inside to confirm your subscription.</p>
      </div>
      <ButtonNewsletter>
        {"Dismiss messege"}
      </ButtonNewsletter>
    </section>
  )
}