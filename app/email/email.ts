"use server"

import EmailTemplate from "./EmailTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const name = formData.get("name") as string
	const email = formData.get("email") as string
	const message = formData.get("message") as string

	if (!email || !message)
	{
		console.warn("A contact with empty email or message was requested. Ignoring it.");
		return;
	}

	const { data, error } = await resend.emails.send({
		from: 'VIPU <onboarding@resend.dev>',
		to: ['rahimgulov.rustam@gmail.com'],
		subject: 'Form submission on vipu.ee',
		react: EmailTemplate({ name, email, message }),
	});
};
