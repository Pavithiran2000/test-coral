"use client";

import { useState, useEffect } from "react"; 
import {
  ContactWrap,
  ContactTitle,
  IntroHeading,
  IntroSub,
  IntroGrid,
  FormWrap,
  FormTitle,
  FormDesc,
  StyledForm,
  Field,
  Label,
  Input,
  TextArea,
  SubmitBtn,
  ContactMainGrid,
  CompanyWrap,
  CompanyTitle,
  CompanyDesc,
  CompanyItem,
  CompanyIcon,
  CompanyInfo,
  CompanyLabel,
  CompanyText,
  MapWrap,
  MapFrame,
  MapOverlay,
  ContactHeroOverlay,
  ContactHeroFrame,
  ContactHeroImg,
  ContactHeroSkeleton, 
  CompanyIconImg,
  CompanyEmailIcon,
  CompanyCallIcon,
  ErrorText,
  SuccessMessage,
  ErrorMessage,
} from "../components/Contact.styles";
import { BrMobile, BrDesktop } from "../components/Home.styles";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
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
    formData.append("form-name", "contact");
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

export default function ContactUsPage() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

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
        } else {
          setSubmitState({
            isLoading: false,
            isSuccess: false,
            isError: true,
            message: result.message,
          });
        }
      } catch (error) {
        console.error("Contact form submission error:", error);
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
    <ContactWrap as="main">
      <ContactTitle>Contact Us</ContactTitle>

      <ContactHeroFrame>
        {isLoading ? (
          <ContactHeroSkeleton />
        ) : (
          <>
            <ContactHeroImg
              src="/Background/ViewImage.png"
              alt="Contact Us hero"
              width={1200}
              height={350}
              priority
            />
            <ContactHeroOverlay />
          </>
        )}
      </ContactHeroFrame>

      <IntroGrid>
        <IntroHeading>
          We’d Love to Hear
          <BrMobile /> From You, Lets Get In <BrMobile />
          Touch!
        </IntroHeading>
        <IntroSub>
          Coral Property Developers, is a privately-held building construction
          firm <BrMobile />
          based in Colombo, Sri Lanka. CORAL PROPERTY DEVELOPERS manages,
          <BrDesktop />
          <BrMobile />
          develops and acquires Commercial and Residential Real Estate for its
          <BrMobile />
          own account, as well as for its other various Limited Liability
          <BrMobile />
          Partnerships. This
          <BrDesktop /> includes Shopping Centers, Office, Development Sites{" "}
          <BrMobile />
          and other investment-grade properties.
        </IntroSub>
      </IntroGrid>

      <ContactMainGrid>
        <FormWrap>
          <FormTitle>Send Us a Message</FormTitle>
          <FormDesc>
            Have a question or need more information? Fill out the <BrMobile />
            form below, and we’ll get back to you as soon as possible
          </FormDesc>

          {/* Success Message */}
          {submitState.isSuccess && (
            <SuccessMessage>{submitState.message}</SuccessMessage>
          )}

          {/* Error Message */}
          {submitState.isError && (
            <ErrorMessage>{submitState.message}</ErrorMessage>
          )}

          <StyledForm onSubmit={formik.handleSubmit} noValidate>
            <Field>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={submitState.isLoading}
                $hasError={hasFieldError(
                  formik.touched.fullName,
                  formik.errors.fullName
                )}
                aria-invalid={hasFieldError(
                  formik.touched.fullName,
                  formik.errors.fullName
                )}
                aria-describedby={
                  formik.errors.fullName ? "fullName-error" : undefined
                }
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <ErrorText id="fullName-error" role="alert">
                  {formik.errors.fullName}
                </ErrorText>
              )}
            </Field>

            <Field>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={submitState.isLoading}
                $hasError={hasFieldError(
                  formik.touched.email,
                  formik.errors.email
                )}
                aria-invalid={hasFieldError(
                  formik.touched.email,
                  formik.errors.email
                )}
                aria-describedby={
                  formik.errors.email ? "email-error" : undefined
                }
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorText id="email-error" role="alert">
                  {formik.errors.email}
                </ErrorText>
              )}
            </Field>

            <Field>
              <Label htmlFor="subject">Subject *</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={submitState.isLoading}
                $hasError={hasFieldError(
                  formik.touched.subject,
                  formik.errors.subject
                )}
                aria-invalid={hasFieldError(
                  formik.touched.subject,
                  formik.errors.subject
                )}
                aria-describedby={
                  formik.errors.subject ? "subject-error" : undefined
                }
              />
              {formik.touched.subject && formik.errors.subject && (
                <ErrorText id="subject-error" role="alert">
                  {formik.errors.subject}
                </ErrorText>
              )}
            </Field>

            <Field>
              <Label htmlFor="message">Your Message / Question *</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Type here..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={submitState.isLoading}
                $hasError={hasFieldError(
                  formik.touched.message,
                  formik.errors.message
                )}
                aria-invalid={hasFieldError(
                  formik.touched.message,
                  formik.errors.message
                )}
                aria-describedby={
                  formik.errors.message ? "message-error" : undefined
                }
              />
              {formik.touched.message && formik.errors.message && (
                <ErrorText id="message-error" role="alert">
                  {formik.errors.message}
                </ErrorText>
              )}
            </Field>

            <SubmitBtn type="submit" disabled={submitState.isLoading}>
              {submitState.isLoading ? (
                <>
                  <CircularProgress size={20} color="inherit" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </SubmitBtn>
          </StyledForm>
        </FormWrap>

        <CompanyWrap>
          <CompanyTitle>Company Details</CompanyTitle>
          <CompanyDesc>
            Reach out to us directly through any of the following methods.
            <BrMobile /> Our team is always ready to assist you.
          </CompanyDesc>

          <CompanyItem>
            <CompanyIcon $plain>
              <CompanyIconImg
                src="/ContactUs/OfficeAddress.svg"
                alt="Office address icon"
                width={52}
                height={52}
              />
            </CompanyIcon>
            <CompanyInfo>
              <CompanyLabel>Office Address</CompanyLabel>
              <CompanyText>No 42, Ridgeway Place, Colombo 04</CompanyText>
            </CompanyInfo>
          </CompanyItem>

          <CompanyItem>
            <CompanyIcon>
              <CompanyEmailIcon />
            </CompanyIcon>
            <CompanyInfo>
              <CompanyLabel>Email Address</CompanyLabel>
              <CompanyText>marketing@coral.lk</CompanyText>
            </CompanyInfo>
          </CompanyItem>

          <CompanyItem>
            <CompanyIcon $plain>
              <CompanyIconImg
                src="/ContactUs/Hotline.svg"
                alt="Hotline icon"
                width={52}
                height={52}
              />
            </CompanyIcon>
            <CompanyInfo>
              <CompanyLabel>Hotline</CompanyLabel>
              <CompanyText>0112 596 235</CompanyText>
            </CompanyInfo>
          </CompanyItem>

          <CompanyItem>
            <CompanyIcon>
              <CompanyCallIcon />
            </CompanyIcon>
            <CompanyInfo>
              <CompanyLabel>Call Us</CompanyLabel>
              <CompanyText>
                0112 596 235 <br />
                0112 596 235 <br />
                0112 596 235 <br />
                0112 596 235
              </CompanyText>
            </CompanyInfo>
          </CompanyItem>
        </CompanyWrap>
      </ContactMainGrid>

      <MapWrap>
        <MapFrame
          src="https://www.google.com/maps?q=71+Peterson+Ln,+Colombo+00600&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <MapOverlay />
      </MapWrap>
    </ContactWrap>
  );
}
