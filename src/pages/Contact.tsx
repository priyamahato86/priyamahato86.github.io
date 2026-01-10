import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [service, setService] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current || !service) {
      alert("Please complete the form");
      return;
    }

    setLoading(true);

    try {
      // Mail to YOU
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      //Auto-reply to USER
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      formRef.current.reset();
      setService(null);
    } catch (err) {
      console.error(err);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-theme min-h-screen animate-page-enter">
      <div className="mx-auto max-w-3xl px-6 py-16">

        {/* Breadcrumb */}
        <p className="text-sm text-muted mb-6 flex items-center gap-2">
          <Link
            to="/"
            className="
              relative font-medium
              transition-all duration-300
              hover:text-transparent hover:bg-clip-text
              hover:bg-gradient-to-r
              hover:from-black hover:to-gray-500
              dark:hover:from-white dark:hover:to-gray-400
              group
            "
          >
            Home
            <span
              className="
                absolute left-0 -bottom-0.5 h-[1.5px] w-0
                bg-gradient-to-r from-black to-gray-500
                dark:from-white dark:to-gray-400
                transition-all duration-300
                group-hover:w-full
              "
            />
          </Link>
          <span className="opacity-50">/</span>
          <span className="text-theme font-medium">Contact</span>
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-serif-custom text-theme mb-3">
          Get in Touch
        </h1>

        <p className="text-muted italic text-sm max-w-xl mb-10">
          Interested in working together or have a question?
          Send me a message — I’m always open to new projects and collaborations.
        </p>

        {/* Form Card */}
        <form ref={formRef} onSubmit={handleSubmit}
          className="
            rounded-2xl border border-black/10 dark:border-white/10
            bg-white/5 p-6 sm:p-8 space-y-8
            transition-all duration-300
            hover:shadow-2xl hover:-translate-y-1
          "
        >
          {/* Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="First name" name="first_name" placeholder="Enter your first name"/>
            <Input label="Last name" name="last_name" placeholder="Enter your last name" />
          </div>

          {/* Email */}
          <Input label="Email" name="email" placeholder="Enter your email address" type="email" />

          {/* Service */}
          <OptionGroup
            label="Service"
            options={[
              "UI/UX Design",
              "Web Development",
              "Mobile App Design",
              "Design System",
              "Consulting",
              "Other",
            ]}
            value={service}
            onChange={setService}
          />
          

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-theme mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me a little about your project…"
              className="
                w-full rounded-xl bg-transparent border border-black/10
                dark:border-white/10 px-4 py-3 text-sm text-theme
                placeholder:text-muted focus:outline-none
                focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                transition-all duration-200 focus:-translate-y-[1px]
              "
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit" disabled={loading}
              className="
                w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium
                bg-black text-white
                dark:bg-white dark:text-black
                transition-all duration-300
                hover:scale-[1.05] hover:shadow-xl
                active:scale-[0.98]
              "
            >
               {loading ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

/* ---------- Reusable Components ---------- */

function Input({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-theme mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="
          w-full rounded-xl bg-transparent border border-black/10
          dark:border-white/10 px-4 py-3 text-sm text-theme
          placeholder:text-muted focus:outline-none
          focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
          transition-all duration-200 focus:-translate-y-[1px]
        "
      />
    </div>
  );
}

function OptionGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-sm font-medium text-theme mb-3">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`
                px-4 py-2 rounded-full text-sm
                transition-all duration-200
                ${
                  active
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : `
                      bg-white/5 text-muted
                      hover:text-transparent hover:bg-clip-text
                      hover:bg-gradient-to-r
                      hover:from-black hover:to-gray-500
                      dark:hover:from-white dark:hover:to-gray-400
                    `
                }
              `}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
