import { useForm, ValidationError } from "@formspree/react";
import { FaArrowRight } from "react-icons/fa";

function Newsletter() {
  const [state, handleSubmit] = useForm(process.env.FORM_ID);
  if (state.succeeded) {
    return alert("Thank you for joining :)");
  }

  return (
    <section className="igcontent">
      <span className="igcontent-text">
        <h5>Newsletter</h5>
        <h1>Suscribite</h1>
        <p>Y enterate de todas las novedades</p>
      </span>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          name="email"
          placeholder="Ingresa email"
          className="newsletter-form-input"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          type="submit"
          className="newsletter-form-input"
          disabled={state.submitting}
        >
          <FaArrowRight />
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
