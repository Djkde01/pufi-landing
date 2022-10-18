import { useForm, ValidationError } from "@formspree/react";
import { FaArrowRight } from "react-icons/fa";

function Newsletter() {
  const formId = process.env.FORM_ID;
  const [state, handleSubmit] = useForm({ formId });
  if (state.succeeded) {
    return alert("Thank you for joining :)");
  }

  return (
    <section className="socialcontent">
      <span className="socialcontent-text">
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
          <FaArrowRight size="2rem" />
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
