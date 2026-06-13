"use client";

import { contactSchema } from "@/lib/schemas/contact";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/actions/contact";
import { toast } from "sonner";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { Send } from "lucide-react";

type Infer = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const router = useRouter();

  const form = useForm<Infer>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const pending = form.formState.isSubmitting;

  const onSubmit = async (data: Infer) => {
    const { name, email, message } = data;
    const res = await sendEmail({ name, email, message });
    if (!res.ok) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message);
    form.reset();
    router.refresh();
  };

  return (
    <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
      {/* <FieldGroup className="p-8 bg-white rounded-lg border border-primary/10"> */}
      <FieldGroup className="max-w-2xl mx-auto p-8 text-left">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Nama</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Nama Anda"
                  autoComplete="off"
                  className="bg-white py-5 text-black"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Email Anda"
                  autoComplete="off"
                  className="bg-white py-5 text-black"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">Pesan</FieldLabel>
              <Textarea
                {...field}
                id="message"
                aria-invalid={fieldState.invalid}
                placeholder="Tulis pesan Anda di sini..."
                autoComplete="off"
                className="min-h-32 bg-white text-black"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit" disabled={pending} size={"lg"} className="bg-zinc-800 hover:bg-zinc-700 py-5">
          {pending && <Spinner />}
          Kirim Pesan
          <Send />
        </Button>
      </FieldGroup>
    </form>
  );
}
