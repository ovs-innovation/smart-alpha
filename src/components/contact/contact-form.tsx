"use client";

import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
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
      topic:
        topicParam === "workshop"
          ? "Corporate Workshop"
          : topicParam === "mutual-funds"
            ? "Mutual Fund Solutions"
            : topicParam === "portfolio-review"
              ? "Investment Support"
              : "General Enquiry",
    },
  });

  useEffect(() => {
    if (!topicParam) return;
    const mapped =
      topicParam === "workshop"
        ? "Corporate Workshop"
        : topicParam === "mutual-funds"
          ? "Mutual Fund Solutions"
          : topicParam === "portfolio-review"
            ? "Investment Support"
            : "General Enquiry";
    setValue("topic", mapped);
  }, [topicParam, setValue]);

  const topic = watch("topic");
  const isWorkshop = topic === "Corporate Workshop";

  function onSubmit(_data: FormValues) {
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="glass rounded-[22px] p-8 text-center md:p-10">
        <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-primary">
          Thank you
        </p>
        <p className="mt-2 text-sm text-muted">
          Your enquiry has been received. Our team will respond shortly.
        </p>
        <Button className="mt-6" type="button" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass space-y-4 rounded-[22px] p-6 md:p-8">
      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
          {isWorkshop ? "Contact person's name" : "Full name"}
        </label>
        <Input
          id="name"
          placeholder="Your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name ? <p className="mt-1 text-xs text-rose-500">{errors.name.message}</p> : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
            Official email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@email.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-rose-500">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <Input
            id="phone"
            placeholder="+91"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-rose-500">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="topic">
          Enquiry type
        </label>
        <select
          id="topic"
          className="flex h-11 w-full rounded-xl border border-border bg-white px-3 text-sm outline-none ring-primary/30 focus:ring-2"
          {...register("topic", { required: "Please select a topic" })}
        >
          <option>General Enquiry</option>
          <option>Corporate Workshop</option>
          <option>Mutual Fund Solutions</option>
          <option>Investment Support</option>
          <option>Financial Education</option>
        </select>
      </div>

      {isWorkshop ? (
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="company">
            Company name
          </label>
          <Input
            id="company"
            placeholder="Organisation name"
            {...register("company", {
              required: isWorkshop ? "Company name is required" : false,
            })}
          />
          {errors.company ? (
            <p className="mt-1 text-xs text-rose-500">{errors.company.message}</p>
          ) : null}
        </div>
      ) : null}

      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <Textarea
          id="message"
          placeholder={
            isWorkshop
              ? "Employee count, online/in-person preference, preferred date, topics of interest…"
              : "Tell us what you would like to learn about our services"
          }
          {...register("message")}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : isWorkshop ? "Request Workshop" : "Send Enquiry"}
      </Button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="glass h-[420px] animate-pulse rounded-[22px] bg-white/70" aria-hidden />
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
