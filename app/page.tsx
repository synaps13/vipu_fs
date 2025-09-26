"use client"

import { sendEmail } from "./email/email";
import styles from "./page.module.css";
import { FaComputer, FaTruck, FaPlug, FaHandHoldingHeart } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { Icon } from "@iconify/react";

export default function Home() {
	return (
		<>
			<Hero />
			<Testimonials />
			<Process />
			<About />
			<Stats />
			<CustomSolutions />
			<Contact />
			<Footer />
		</>
	);
}

function Hero() {
	return (
		<section className={`hero is-medium ${styles.hero}`}>
			<div className="hero-body">
				<div className="columns">
					<div className="column is-desktop is-6">
						<p className="title">We Set Up Your Tech, <span>So You Don’t Have To</span></p>
						<p className="subtitle">Laptops, printers, Wi-Fi, servers, anything in between — we’ll get everything working smoothly while you focus on your team.</p>
						<a className="button is-primary is-light is-large" href="#contact">Let's chat about your IT problem</a>
					</div>
				</div>
			</div>
		</section>
	);
}

function Testimonials() {
	return (
		<section className="section py-6">
			<div className="container">
				<div className="columns is-desktop">
					<div className="column is-8-desktop">
						<p className="title">What our clients say</p>
						<p className="subtitle">Teams trust us to ship reliable DevOps, scalable back-ends, fast landing pages, rigorous testing, and rock-solid observability across AWS, GCP, Azure, and Oracle Cloud.</p>
					</div>
				</div>

				<div className="container">
					<div className="columns">
						<div className="column is-4">
							<div className="box">
								<blockquote>They containerized our services, rolled out production-grade Kubernetes, and codified the stack with Terraform. Zero-downtime blue/green deploys and a clean CI/CD pipeline across multiple clouds have been a game changer.</blockquote>
								<figure className="image is-64x64">
									<img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
								</figure>
								<h4>Maris V., CTO</h4>
							</div>
						</div>

						<div className="column is-4">
							<div className="box">
								<blockquote>They built our Node.js/TypeScript back-end with clear contracts, observability baked in, and load-tested it. Feature delivery accelerated after they set up automated testing and trunk-based CI.</blockquote>
								<figure className="image is-64x64">
									<img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
								</figure>
								<h4>Liis S., Co‑Founder</h4>
							</div>
						</div>

						<div className="column is-4">
							<div className="box">
								<blockquote>We needed a high-converting landing page fast. They delivered the design, content hooks, analytics, and performance optimizations in days—and integrated uptime/dashboards in Grafana and Datadog.</blockquote>
								<figure className="image is-64x64">
									<img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
								</figure>
								<h4>Jaanus K., Marketing Lead</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function About() {
	return (
		<section className="section py-6">
			<div className="container">
				<h2 className="title">About Our Studio</h2>
				<div className="columns is-8">
					<p className="column">We help teams ship faster and safer by combining modern DevOps with robust back-end engineering, high‑performing landing pages, and quality practices backed by deep observability. We work across AWS, GCP, Azure, and Oracle Cloud, with IaC, CI/CD, secure networking (VPN/VPS), and strong testing culture.</p>
					<div className="column">
						<ol>
							<li>DevOps & Infra: Kubernetes, Terraform, CI/CD, VPN/VPS</li>
							<li>Cloud: AWS, GCP, Azure, Oracle Cloud</li>
							<li>Back‑end: Java, Scala, Kotlin, TypeScript, Node.js</li>
							<li>Landing pages: design, build, analytics, SEO</li>
							<li>Testing: automation, manual, acceptance</li>
							<li>Observability: Grafana, Datadog, Elastic, Kafka</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}

function Stats() {
	return (
		<section className="section py-6 has-text-white" style={{ backgroundColor: 'var(--orange-color)' }}>
			<div className="container">
				<div className="columns has-text-centered is-variable is-8">
					<div className="column">
						<p className="is-size-1 has-text-weight-bold">15+</p>
						<p className="is-uppercase is-size-6">Years of experience</p>
					</div>
					<div className="column">
						<p className="is-size-1 has-text-weight-bold">100+</p>
						<p className="is-uppercase is-size-6">Technologies known</p>
					</div>
					<div className="column">
						<p className="is-size-1 has-text-weight-bold">5</p>
						<p className="is-uppercase is-size-6">Clouds supported</p>
					</div>
					<div className="column">
						<p className="is-size-1 has-text-weight-bold">99.9%</p>
						<p className="is-uppercase is-size-6">SLA uptime targets</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function CustomSolutions() {
	return (
		<section className="section py-6">
			<div className="container">
				<h2 className="title">Professionals or on your own?</h2>
				<p>Choosing an external partner to plan, move, and set up your entire office or IT infrastructure is not just a convenience—it’s a strategic business decision. Our seasoned professionals bring years of expertise to streamline the entire process, ensuring faster implementation and minimizing costly disruptions. By leveraging our experience, you save valuable time and reduce final costs through efficient project management, proven methodologies, and access to trusted resources. Instead of diverting your internal team’s focus, you gain a reliable partner dedicated to delivering a smooth, hassle-free transition with maximum uptime. Invest smartly in your business’s future—partner with us for a seamless office and IT setup that accelerates productivity and keeps your budget on track.</p>
			</div>
		</section>
	);
}

function Process() {
	return (
		<section className={`section py-6 ${styles.processSection}`}>
			<div className="container columns is-align-items-center">
				<div className="column is-5">
					<h2 className="title">From code to cloud with confidence</h2>
					<p>We take you from idea to reliable production with infrastructure as code, scalable services, measurable quality, and actionable dashboards.</p>
				</div>

				<div className="column is-7">
					<div className="columns is-multiline">

						<div className="column is-6">
							<div className={`box has-text-centered p-6 ${styles.cardshadow}`}>
								<Icon icon="fa7-solid:cloud" />
								<h5 className="is-size-4 my-3">DevOps & Cloud</h5>
								<p>Kubernetes, Terraform, secure networking, and CI/CD across AWS, GCP, Azure, Oracle.</p>
							</div>
						</div>

						<div className="column is-6">
							<div className={`box has-text-centered p-6 ${styles.cardshadow}`}>
								<Icon icon="fa7-solid:server" />
								<h5 className="is-size-4 my-3">Back‑end Engineering</h5>
								<p>Java, Kotlin, TypeScript, Node.js with clean APIs, performance, and security.</p>
							</div>
						</div>

						<div className="column is-6">
							<div className={`box has-text-centered p-6 ${styles.cardshadow}`}>
								<Icon icon="fa7-regular:pen-to-square" />
								<h5 className="is-size-4 my-3">Landing Pages</h5>
								<p>Design, build, and optimize conversion with analytics and SEO baked in.</p>
							</div>
						</div>

						<div className="column is-6">
							<div className={`box has-text-centered p-6 ${styles.cardshadow}`}>
								<Icon icon="fa7-solid:chart-line" />
								<h5 className="is-size-4 my-3">Testing & Observability</h5>
								<p>Automation, manual and acceptance testing; Grafana, Datadog, Elastic, Kafka.</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section className="section py-6" id="contact">
			<div className="container">
				<h2 className="title">Looking to collaborate?</h2>
				<div className="columns">
					<div className="column">
						<h3>Send us message with the form below</h3>
						<p>We're here to help. Tell us a little about your project and we'll be in touch.</p>
					</div>

					<div className="column">
						<form action={sendEmail}>
							<div className="field">
								<label className="label">Name</label>
								<input className="input" type="text" id="name" name="name" placeholder="Enter your name here" />
							</div>
							<div className="field">
								<label className="label">Email</label>
								<input className="input" type="email" id="email" name="email" placeholder="Enter your email here" />
							</div>
							<div className="field">
								<label className="label">Message</label>
								<textarea className="input" name="message" id="message" rows={10} placeholder="Write a bit about your problem here"></textarea>
							</div>
							<button className="button is-primary" type="submit">Send</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-4-desktop is-6-tablet is-12-mobile">
						<h3 className="is-size-4 mb-4">NeedSleep OU</h3>
						<p>We are an outsourcing partner for modern software delivery. Our team handles end‑to‑end development, rigorous testing (automation, manual, acceptance), and DevOps—Kubernetes, Terraform, and CI/CD—so your product ships faster with higher reliability.</p>
					</div>

					<div className="column is-3-desktop is-offset-5-desktop is-6-tablet is-12-mobile">
						<h4 className="is-capitalized mb-4">Get in Touch</h4>
						<h6><a href="tel:+37256977936"><FiPhone /> +372 56 97 79 36</a></h6>
						<h6><a href="mailto:needsleepou@gmail.com"><IoMailOutline /> needsleepou@gmail.com</a></h6>

					</div>
				</div>

				<div className="footer-btm py-4 mt-6">
					<div className="columns">
						<div className="column is-6-widescreen">
							<div className="copyright">
								© Copyright Reserved to <span className="text-color">NeedSleep OU</span> by <a href="#" target="_blank">R.R.</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</footer>
	);
}
