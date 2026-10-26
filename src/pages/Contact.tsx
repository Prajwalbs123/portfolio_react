/* eslint react/no-unknown-property: "off" */

import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import {
  Component,
  Suspense,
  useRef,
  useState,
  type ChangeEvent,
  type ErrorInfo,
  type FormEvent,
  type ReactNode,
} from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

type SceneBoundaryState = {
  hasError: boolean;
};

class SceneBoundary extends Component<{ children: ReactNode }, SceneBoundaryState> {
  state: SceneBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("The 3D contact scene could not be rendered.", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="flex h-full min-h-[280px] items-center justify-center rounded-3xl border border-stone-200 bg-white p-8 text-center text-sm leading-6 text-stone-600"
          role="status"
        >
          The 3D fox isn’t available in this browser, but you can still reach
          me using the form.
        </div>
      );
    }

    return this.props.children;
  }
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === "name" || name === "email" || name === "message") {
      setForm((currentForm) => ({ ...currentForm, [name]: value }));
    }
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Prajwal",
          from_email: form.email,
          to_email: "prajwalshirshard@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error: Error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="site-container section-pad relative grid gap-10 border-t border-stone-200/80 lg:grid-cols-2 lg:items-center"
    >
      {alert.show && <Alert {...alert} />}

      <div className="flex min-w-0 flex-col">
        <p className="eyebrow">Say hello</p>
        <h2 className="section-title">Let’s get in touch</h2>
        <p className="body-copy mt-4 max-w-lg">
          Have a question or want to connect? Send me a message and I’ll get
          back to you.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex w-full flex-col gap-5"
        >
          <label className="text-sm font-semibold text-stone-700">
            Name
            <input
              type='text'
              name='name'
              className="input mt-2"
              placeholder='Prajwal'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-sm font-semibold text-stone-700">
            Email
            <input
              type='email'
              name='email'
              className="input mt-2"
              placeholder='Prajwal@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-sm font-semibold text-stone-700">
            Your Message
            <textarea
              name='message'
              rows={4}
              className="textarea mt-2"
              placeholder='Write your thoughts here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className="primary-button w-fit disabled:cursor-not-allowed disabled:opacity-60"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="h-[350px] w-full sm:h-[440px]">
        <SceneBoundary>
          <Canvas
            className="h-full w-full"
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </SceneBoundary>
      </div>
      
    </section>
  );
};

export default Contact;
