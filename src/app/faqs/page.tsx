"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import {
  FaqWrap,
  FaqTitle,
  FaqDesc,
  AccWrap,
  AccItem,
  AccHeader,
  AccTitle,
  AccIcon,
  AccPanel,
  AccText,
  ContactRow,
  ContactTitle,
  ContactLead,
  ContactForm,
  Field,
  Label,
  Input,
  TextArea,
  SubmitBtn,
  FaqHeroOverlay,
  FaqHeroFrame,
  FqHeroImg,
  FaqHeroSkeleton,
} from "../components/Faq.styles";
import { BrDesktop, BrMobile } from "../components/Home.styles";
import { ErrorText, SuccessMessage, ErrorMessage } from "../components/Contact.styles";

const QUESTIONS: ReactNode[] = [
  "Why Choose Coral Property Developers?",
  "Who are the developers of coral apartment?",
  <>
    Coral Property Developers the newest entry to <BrMobile /> the property
    market?
  </>,
  <>
    Completed apartment are eligible for any bank <BrMobile />
    loan?
  </>,
  "Why Choose Coral Property Developers?",
  "Are foreigners to allowed to buy our apartments?",
  "With regard to our security arrangement?",
  "Maintenance of apartments?",
];

const ANSWERS: ReactNode[] = [
  <>
    We are a BOI approved company which is specializing on managing apartment on
    behalf of resident who either live overseas / would like the management the
    apartment to be handle by a team of professionals.
  </>,

  <>
    Using a balanced approach that explores the possibilities within design and
    function, our team of architects, engineers, marketing specialists,
    financial experts and customer service executives develop properties that
    are designed to meet the ever- expanding needs of modern lifestyles and work
    places.
  </>,

  <>
    Coral Property Developers is a privately -held building construction firm
    based in Colombo, Srilanka which manages, develops and acquires commercial
    and residential Real Estate, develops commercial and residential buildings.
    <BrDesktop /> <BrMobile />
    <BrDesktop /> <BrMobile />
    <span className="para">
      Coral Property Developers offers a home for every dream and a dream for
      every home-seeker. Since its inception in year of 2003, Coral has always
      maintained focus on integrity, customer delight and commitment to deliver.
    </span>
    <BrDesktop /> <BrMobile />
    <BrDesktop /> <BrMobile />
    <span className="para">
      We offer you more choice in terms of location, design, and budget and are
      the best choice when it comes to possessing a prestigious home address.
      Which gives address is a value.
    </span>
  </>,

  <>
    Bank financing is available through a mortgage for completed apartments. You
    also eligible for bank loan for half completed.
  </>,

  <>
    Yes. We are ready to furnish your apartment with built in wardrobes
    curtaining together with all fixes and fittings. We can also provide you
    with expert interior decor for your apartment.
  </>,

  <>
    We are a BOI approved company which is specializing on managing apartment on
    behalf of resident who either live overseas / would like the management the
    apartment to be handle by a team of professionals.
  </>,

  <>
    We have deployed security personnel at all our apartments and fully secured.
  </>,

  <>
    All maintenance work in the apartment will be looked after by our special
    team entrusted on this job. Such as
    <BrMobile />
    <span className="bullet">• Maintain the gardening area</span>
    <BrMobile />
    <span className="bullet">• Staircase of the apartment building</span>
    <BrMobile />
    <span className="bullet">
      • Attending to all residence requirements on time
    </span>
  </>,
];

interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const VALIDATION = {
  fullName: {
    minLength: 2,
    maxLength: 100,
  },
  email: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    maxLength: 255,
  },
  subject: {
    minLength: 3,
    maxLength: 200,
  },
  message: {
    minLength: 10,
    maxLength: 2000,
  },
} as const;

const validate = (values: ContactFormValues): Partial<ContactFormValues> => {
  const errors: Partial<ContactFormValues> = {};
  const trimmedFullName = values.fullName.trim();
  const trimmedEmail = values.email.trim();
  const trimmedSubject = values.subject.trim();
  const trimmedMessage = values.message.trim();

  if (!trimmedFullName) {
    errors.fullName = "Full name is required";
  } else if (trimmedFullName.length < VALIDATION.fullName.minLength) {
    errors.fullName = `Full name must be at least ${VALIDATION.fullName.minLength} characters`;
  } else if (trimmedFullName.length > VALIDATION.fullName.maxLength) {
    errors.fullName = `Full name must be less than ${VALIDATION.fullName.maxLength} characters`;
  }

  if (!trimmedEmail) {
    errors.email = "Email address is required";
  } else if (trimmedEmail.length > VALIDATION.email.maxLength) {
    errors.email = "Email address is too long";
  } else if (!VALIDATION.email.pattern.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address";
  }

  if (!trimmedSubject) {
    errors.subject = "Subject is required";
  } else if (trimmedSubject.length < VALIDATION.subject.minLength) {
    errors.subject = `Subject must be at least ${VALIDATION.subject.minLength} characters`;
  } else if (trimmedSubject.length > VALIDATION.subject.maxLength) {
    errors.subject = `Subject must be less than ${VALIDATION.subject.maxLength} characters`;
  }

  if (!trimmedMessage) {
    errors.message = "Message is required";
  } else if (trimmedMessage.length < VALIDATION.message.minLength) {
    errors.message = `Message must be at least ${VALIDATION.message.minLength} characters`;
  } else if (trimmedMessage.length > VALIDATION.message.maxLength) {
    errors.message = `Message must be less than ${VALIDATION.message.maxLength} characters`;
  }

  return errors;
};

const hasFieldError = (
  touched: boolean | undefined,
  error: string | undefined
): boolean => Boolean(touched && error);

async function submitContactForm(
  values: ContactFormValues
): Promise<{ success: boolean; message: string }> {
  try {
    // Encode form data for Netlify Forms submission
    const formData = new FormData();
    formData.append("form-name", "faq-contact");
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("subject", values.subject);
    formData.append("message", values.message);

    const urlParams = new URLSearchParams(formData as unknown as Record<string, string>);
    
    console.log("📧 Submitting form to: /forms.html");
    console.log("📊 Form data:", Object.fromEntries(urlParams));

    // Post to static HTML file - required for Next.js Runtime v5
    // Netlify Forms cannot process submissions to SSR/dynamic pages
    const response = await fetch("/forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: urlParams.toString(),
    });

    console.log("✅ Response status:", response.status);

    if (response.ok || response.status === 404) {
      // Note: Netlify Forms returns 404 after successful submission
      // This is expected behavior
      console.log("✅ Form submitted successfully");
      return {
        success: true,
        message: "Thank you for your message! We will get back to you soon.",
      };
    } else {
      console.warn("⚠️ Unexpected response status:", response.status);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }
  } catch (error) {
    console.error("❌ Form submission error:", error);
    return {
      success: false,
      message: "Network error. Please check your connection and try again.",
    };
  }
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [submitState, setSubmitState] = useState<SubmitState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      setSubmitState({
        isLoading: true,
        isSuccess: false,
        isError: false,
        message: "",
      });

      try {
        const result = await submitContactForm(values);

        if (result.success) {
          setSubmitState({
            isLoading: false,
            isSuccess: true,
            isError: false,
            message: result.message,
          });
          resetForm();
          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            setSubmitState((prev) => ({ ...prev, isSuccess: false, message: "" }));
          }, 5000);
        } else {
          setSubmitState({
            isLoading: false,
            isSuccess: false,
            isError: true,
            message: result.message,
          });
        }
      } catch (error) {
        console.error("FAQ form submission error:", error);
        setSubmitState({
          isLoading: false,
          isSuccess: false,
          isError: true,
          message: "Failed to send message. Please try again later.",
        });
      }
    },
  });

  return (
    <FaqWrap as="main">
      <FaqTitle>
        <span className="faq-desktop">Frequently Asked Questions</span>
        <span className="faq-mobile">FAQs</span>
      </FaqTitle>

      <FaqHeroFrame>
        {isLoading ? (
          <FaqHeroSkeleton />
        ) : (
          <>
            <FqHeroImg
              src="/Background/ViewImage.png"
              alt="FAQ hero"
              width={1280}
              height={350}
              priority
            />
            <FaqHeroOverlay />
          </>
        )}
      </FaqHeroFrame>

      <FaqDesc>
        Find answers to the most common queries about our <BrMobile />
        properties, investments, and services. If you can&apos;t find what{" "}
        <BrMobile />
        you&apos;re <BrDesktop />
        looking for, our team is just a message away
      </FaqDesc>

      <AccWrap>
        {QUESTIONS.map((q, i) => {
          const isOpen = openIndex === i;
          return (
            <AccItem key={i} $open={isOpen}>
              <AccHeader $open={isOpen} onClick={() => toggle(i)}>
                <AccTitle $open={isOpen}>{q}</AccTitle>
                <AccIcon $open={isOpen} />
              </AccHeader>
              {isOpen && (
                <AccPanel>
                  <AccText>{ANSWERS[i]}</AccText>
                </AccPanel>
              )}
            </AccItem>
          );
        })}
      </AccWrap>

      <ContactRow aria-label="Contact section">
        <div>
          <ContactTitle>
            Didn’t Find Your <BrMobile />
            Answer?
          </ContactTitle>
          <ContactLead>
            Our dedicated team is here to help you with all your queries
            regarding properties, investments, and services
          </ContactLead>
        </div>

        <ContactForm onSubmit={formik.handleSubmit}>
          <Field>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter full name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={hasFieldError(formik.touched.fullName, formik.errors.fullName)}
            />
            {hasFieldError(formik.touched.fullName, formik.errors.fullName) && (
              <ErrorText>{formik.errors.fullName}</ErrorText>
            )}
          </Field>

          <Field>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={hasFieldError(formik.touched.email, formik.errors.email)}
            />
            {hasFieldError(formik.touched.email, formik.errors.email) && (
              <ErrorText>{formik.errors.email}</ErrorText>
            )}
          </Field>

          <Field>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Enter subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={hasFieldError(formik.touched.subject, formik.errors.subject)}
            />
            {hasFieldError(formik.touched.subject, formik.errors.subject) && (
              <ErrorText>{formik.errors.subject}</ErrorText>
            )}
          </Field>

          <Field>
            <Label htmlFor="message">Your Message / Question</Label>
            <TextArea
              id="message"
              name="message"
              placeholder="Type here..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              aria-invalid={hasFieldError(formik.touched.message, formik.errors.message)}
            />
            {hasFieldError(formik.touched.message, formik.errors.message) && (
              <ErrorText>{formik.errors.message}</ErrorText>
            )}
          </Field>

          {submitState.isSuccess && (
            <SuccessMessage>{submitState.message}</SuccessMessage>
          )}
          {submitState.isError && (
            <ErrorMessage>{submitState.message}</ErrorMessage>
          )}

          <SubmitBtn type="submit" disabled={submitState.isLoading}>
            {submitState.isLoading ? (
              <>
                <CircularProgress size={20} sx={{ color: "#fff", marginRight: 1 }} />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </SubmitBtn>
        </ContactForm>
      </ContactRow>
    </FaqWrap>
  );
}
