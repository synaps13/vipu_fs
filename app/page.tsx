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
		<section className="section">
			<div className="container">
				<div className="columns is-desktop">
					<div className="column is-8-desktop">
						<p className="title">What they say about us</p>
						<p className="subtitle">We place huge value on strong relationsps and have seen the benefit they bring to the businesses. Customer feedback is vital in helping us to get it right.</p>
					</div>
				</div>

				<div className="container">
					<div className="columns">
						<div className="column is-4">
							<div className="box">
								<blockquote>We moved to a new location and needed everything—network, server, and devices—reinstalled. These guys handled it all smoothly over the weekend. Highly recommended!</blockquote>
								<figure className="image is-64x64">
									<img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
								</figure>
								<h4>Alex G., Office Manager</h4>
							</div>
						</div>

						<div className="column is-4">
							<div className="box">
								<blockquote>As a startup, we needed a quick and reliable tech setup without hiring in-house IT. This service was a lifesaver—easy communication, great support, and everything just worked.</blockquote>
								<figure className="image is-64x64">
									<img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
								</figure>
								<h4>Liis S., Co-Founder</h4>
							</div>
						</div>

						<div className="column is-4">
							<div className="box">
								<blockquote>We’re a small design studio with no in-house IT. When our office moved, they handled the tech side—computers, Wi-Fi, and backup drives—quickly and without hassle.</blockquote>
								<figure className="image is-64x64">
									<img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
								</figure>
								<h4>Jaanus K., Manager</h4>
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
		<section className="section">
			<div className="container">
				<h2 className="title">About Our Studio</h2>
				<div className="columns is-8">
					<p className="column">We’re a versatile IT partner for businesses of all sizes—offering everything from hands-on tech setup and office relocations to consulting, software development, testing, and recruiting. Whether you need your devices up and running or expert support to grow your team and systems, we’re here to help you move forward with confidence.</p>
					<div className="column">
						<ol>
							<li>Electronics assembly/disassembly</li>
							<li>Transportation</li>
							<li>Hardware consultation</li>
							<li>Hardware procurement</li>
							<li>Hardware rent & purchase</li>
							<li>Hardware/software setup & support</li>
							<li>Software development</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}

function CustomSolutions() {
	return (
		<section className={`${styles.customSolutionsSection} ${styles.sectionSpacing}`}>
			<div className={styles.customSolutionSectionContent}>
				<h2 className={styles.sectionHeader}>Professionals or on your own?</h2>
				<p>Choosing an external partner to plan, move, and set up your entire office or IT infrastructure is not just a convenience—it’s a strategic business decision. Our seasoned professionals bring years of expertise to streamline the entire process, ensuring faster implementation and minimizing costly disruptions. By leveraging our experience, you save valuable time and reduce final costs through efficient project management, proven methodologies, and access to trusted resources. Instead of diverting your internal team’s focus, you gain a reliable partner dedicated to delivering a smooth, hassle-free transition with maximum uptime. Invest smartly in your business’s future—partner with us for a seamless office and IT setup that accelerates productivity and keeps your budget on track.</p>
			</div>
		</section>
	);
}

function Process() {
	return (
		<section className={`section ${styles.processSection}`}>
			<div className="container columns is-align-items-center">
				<div className="column is-5">
					<h2 className="title">We help you to make work easy</h2>
					<p>We understand what your business means to you,your requirements considering trends.</p>
				</div>

				<div className="column is-7">
					<div className="columns is-multiline">

						<div className="column is-6">
							<div className="box has-text-centered p-6 cardshadow">
								<Icon icon="fa7-regular:truck" />
								<h5 className="is-size-4 my-3">Relocation</h5>
								<p>Moving office to a new place or starting anew</p>
							</div>
						</div>

						<div className="column is-6">
							<div className="box has-text-centered p-6 cardshadow">
								<Icon icon="fa7-regular:building" />
								<h5 className="is-size-4 my-3">Full office setup</h5>
								<p>Hardware consultation and procurement</p>
							</div>
						</div>

						<div className="column is-6">
							<div className="box has-text-centered p-6 cardshadow">
								<Icon icon="fa7-solid:network-wired" />
								<h5 className="is-size-4 my-3">General support</h5>
								<p>Configure office net and ensure workstations are running fine</p>
							</div>
						</div>

						<div className="column is-6">
							<div className="box has-text-centered p-6 cardshadow">
								<Icon icon="fa7-solid:computer" />
								<h5 className="is-size-4 my-3">IT solutions and DevOps</h5>
								<p>Get you covered on the software side. Develop or support</p>
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
		<section className="section" id="contact">
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
					<div className="column is-3-widescreen is-6-tablet">
						<h3 className="is-size-4 mb-4">NeedSleep OU</h3>
						<p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio.</p>
					</div>

					<div className="column is-2-widescreen is-6-desktop is-6-tablet ml-auto">
						<h4 className="is-capitalized mb-4">Company</h4>

						<ul className="list-unstyled footer-menu lh-35">
							<li><a href="#">About</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Team</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
					</div>

					<div className="column is-3-widescreen is-6-desktop is-6-tablet">
						<h4 className="is-capitalized mb-4">Support</h4>

						<ul className="list-unstyled footer-menu lh-35">
							<li><a href="#">Terms &amp; Conditions</a></li>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Support</a></li>
							<li><a href="#">FAQ</a></li>
						</ul>
					</div>

					<div className="column is-3-widescreen is-6-desktop is-6-tablet">
						<h4 className="is-capitalized mb-4">Get in Touch</h4>
						<h6><a href="tel:+37256977936"><FiPhone /> +372 56 97 79 36</a></h6>
						<h6><a href="mailto:needsleepou@gmail.com"><IoMailOutline /> needsleepou@gmail.com</a></h6>

						<ul className="list-inline footer-socials mt-5">
							<li className="list-inline-item"><a href="#"><FaComputer /></a></li>
							<li className="list-inline-item"><a href="#"><i className="ti-twitter mr-2"></i></a></li>
							<li className="list-inline-item"><a href="#"><i className="ti-linkedin mr-2 "></i></a></li>
						</ul>
					</div>
				</div>

				<div className="footer-btm py-4 mt-6">
					<div className="columns">
						<div className="column is-6-widescreen">
							<div className="copyright">
								© Copyright Reserved to <span className="text-color">Orbitor</span> by <a href="#" target="_blank">R.R.</a>
							</div>
						</div>
					</div>
				</div>
			</div>

		</footer>
	);
}
