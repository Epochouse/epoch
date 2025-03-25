import { useState } from "react";
import { Helmet } from "react-helmet";
import ContactForm from "@/components/ContactForm";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Youtube from "../assets/youtube.svg";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Consult Us | Epochouse Studio</title>
        <meta
          name="description"
          content="Get in touch with Epochouse Studios for professional music production, recording, and audio engineering services."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
        <Navbar />

        <main className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl mt-6 md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Ready to bring your sound to life? Contact us to schedule a
              session, request a quote, or learn more about our music production
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="glass-panel dark:glass-panel-dark p-8 rounded-xl border border-gray-800 flex flex-col">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 flex-grow mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-studio-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">
                      Studio Location
                    </h3>
                    <p className="text-gray-300">
                      The Epoch House, Tipper Garage Road, Tanke,
                      <br />
                      beside Olalyeye Event Center, Ilorin 240103,
                      <br />
                      Kwara State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-studio-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">
                      Operating Hours
                    </h3>
                    <p className="text-gray-300">Monday - Sundays: 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-studio-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-300">+234 803 623 7544</p>
                    <p className="text-gray-300">+234 701 265 8557</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-studio-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300">epochousestudios@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/the_epochouse?igsh=MXQ3cHBxemUwbDJndA=="
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <img src={Youtube} alt="youtube-icon" className="w-6 h-6" />
                  </a>
                  {/* <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm3.07 14.28c-.25.36-.66.48-1.23.48-.39 0-.78-.1-1.09-.28-.2-.1-.39-.21-.58-.33-.19.21-.38.41-.59.59-.39.37-.9.36-1.25.01-.36-.37-.36-.89.01-1.26.21-.2.42-.39.63-.58-.12-.19-.23-.38-.33-.57-.25-.52-.02-1.08.48-1.23.5-.15 1.01.12 1.3.6.13.24.29.45.44.66.43-.55.82-.98.93-1.09.32-.33.85-.32 1.18.01.33.33.33.86 0 1.19-.11.11-.54.5-1.09.93.21.15.41.31.64.43.49.29.75.81.55 1.44z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>

            <div className="glass-panel dark:glass-panel-dark p-8 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="mb-20 rounded-xl overflow-hidden h-[400px] border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.019342055174!2d4.6180381752186355!3d8.497499697081803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d11e26c2a93%3A0x10c6b28197813b89!2sThe%20Epoch%20House!5e0!3m2!1sen!2sng!4v1742904910229!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
