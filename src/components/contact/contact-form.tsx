"use client";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  company?: string;
  message: string;
};

const topics = [
  { id: "General Enquiry", label: "General" },
  { id: "Corporate Workshop", label: "Workshop" },
  { id: "Mutual Fund Solutions", label: "Mutual funds" },
  { id: "Investment Support", label: "Portfolio" },
  { id: "Financial Education", label: "Education" },
] as const;

function mapTopicParam(topicParam: string) {
  if (topicParam === "workshop") return "Corporate Workshop";
  if (topicParam === "mutual-funds") return "Mutual Fund Solutions";
  if (topicParam === "portfolio-review") return "Investment Support";
  return "General Enquiry";
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[11px] font-semibold tracking-[0.12em] text-muted uppercase"
      >
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-rose-500">{error}</p> : null}
    </div>
  );
}

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-2.5 text-[15px] text-foreground outline-none transition placeholder:text-muted/70 focus:border-primary";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const topicParam = searchParams.get("topic") || "";
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      topic: mapTopicParam(topicParam),
    },
  });

  useEffect(() => {
    if (!topicParam) return;
    setValue("topic", mapTopicParam(topicParam));
  }, [topicParam, setValue]);

  const topic = watch("topic");
  const isWorkshop = topic === "Corporate Workshop";

  function onSubmit(_data: FormValues) {
    setSubmitted(true);
    reset({ topic: "General Enquiry" });
  }

  if (submitted) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center py-6">
        <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
          Message sent
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-[2rem] font-semibold tracking-tight text-foreground">
          Thank you
        </h2>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
          We’ve received your enquiry. Expect a reply within 1–2 working days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-semibold text-foreground transition hover:border-primary/40"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl">
      <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
        Enquiry
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-[1.9rem]">
        How can we help?
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">
        Pick a topic and leave your details—we’ll respond with clear next steps.
      </p>

      <div className="mt-7">
        <p className="mb-2.5 text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
          Topic
        </p>
        <div className="flex flex-wrap gap-2">
          {topics.map((item) => {
            const active = topic === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setValue("topic", item.id, { shouldValidate: true })}
                className={cn(
                  "inline-flex h-9 items-center rounded-full border px-3.5 text-[13px] font-semibold transition",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-foreground hover:border-primary/40"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <input type="hidden" {...register("topic", { required: true })} />
      </div>

      <div className="mt-8 space-y-6">
        <Field
          label={isWorkshop ? "Contact person" : "Full name"}
          htmlFor="name"
          error={errors.name?.message}
        >
          <input
            id="name"
            className={fieldClass}
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
          />
        </Field>

        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Email" htmlFor="email" error={errors.email?.message}>
            <input
              id="email"
              type="email"
              className={fieldClass}
              placeholder="you@email.com"
              {...register("email", { required: "Email is required" })}
            />
          </Field>
          <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
            <input
              id="phone"
              className={fieldClass}
              placeholder="+91"
              {...register("phone", { required: "Phone is required" })}
            />
          </Field>
        </div>

        {isWorkshop ? (
          <Field label="Company" htmlFor="company" error={errors.company?.message}>
            <input
              id="company"
              className={fieldClass}
              placeholder="Organisation name"
              {...register("company", {
                required: isWorkshop ? "Company name is required" : false,
              })}
            />
          </Field>
        ) : null}

        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            rows={4}
            className={cn(fieldClass, "resize-none")}
            placeholder={
              isWorkshop
                ? "Team size, online or in-person, preferred date, topics…"
                : "What would you like to talk about?"
            }
            {...register("message")}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition hover:brightness-105 disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : isWorkshop ? "Request workshop" : "Send message"}
        </button>
        <p className="text-[12px] text-muted sm:max-w-[200px]">
          No spam. Reply in 1–2 working days.
        </p>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={<div className="h-[480px] animate-pulse rounded-xl bg-surface" aria-hidden />}
    >
      <ContactFormInner />
    </Suspense>
  );
}
