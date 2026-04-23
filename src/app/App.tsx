import { motion } from "motion/react";
import { Shield, Heart, Sparkles, Phone, Mail, MapPin, CheckCircle2, Star, Home, DollarSign } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! I'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#d4a574]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-2xl text-[#1a2b4a]"
          >
            Rosalinda Jaca
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex gap-8"
          >
            <a href="#about" className="text-[#2d3748] hover:text-[#d4a574] transition-colors">About</a>
            <a href="#services" className="text-[#2d3748] hover:text-[#d4a574] transition-colors">Services</a>
            <a href="#testimonials" className="text-[#2d3748] hover:text-[#d4a574] transition-colors">Testimonials</a>
            <a href="#contact" className="text-[#2d3748] hover:text-[#d4a574] transition-colors">Contact</a>
          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a2b4a] text-white px-6 py-2 rounded-full hover:bg-[#d4a574] transition-all"
          >
            Get Started
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b4a]/5 via-transparent to-[#d4a574]/10"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-6xl md:text-7xl text-[#1a2b4a] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Protect Your Future.
              <span className="block text-[#d4a574]">Care for Your Home.</span>
            </motion.h1>
            <motion.p
              className="text-xl text-[#2d3748] mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Helping families in San Antonio with financial security and healthier living through personalized insurance solutions and premium home care products.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="bg-[#1a2b4a] text-white px-8 py-4 rounded-full hover:bg-[#d4a574] transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </a>
              <a
                href="#services"
                className="bg-white text-[#1a2b4a] px-8 py-4 rounded-full border-2 border-[#1a2b4a] hover:bg-[#1a2b4a] hover:text-white transition-all"
              >
                Book a Demo
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a574]/30 to-[#1a2b4a]/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="text-center p-12">
                <Shield className="w-24 h-24 text-[#d4a574] mx-auto mb-4" />
                <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-[#1a2b4a]">
                  Your Trusted Partner in<br />Protection & Care
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#1a2b4a] to-[#d4a574] rounded-3xl aspect-[3/4] flex items-center justify-center shadow-2xl">
                <Heart className="w-32 h-32 text-white" />
              </div>
            </motion.div>
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl text-[#1a2b4a] mb-6">
                Meet Rosalinda
              </h2>
              <p className="text-lg text-[#2d3748] mb-4 leading-relaxed">
                As a dedicated Insurance Specialist with National Life Group and the proud owner of Caring Neighbors San Antonio, I've built my career on one simple principle: putting families first.
              </p>
              <p className="text-lg text-[#2d3748] mb-6 leading-relaxed">
                With years of experience in financial protection and a passion for creating healthier homes, I provide personalized solutions that truly make a difference in people's lives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Personalized Service</h4>
                    <p className="text-sm text-[#2d3748]/80">Tailored to your unique needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Community-First</h4>
                    <p className="text-sm text-[#2d3748]/80">San Antonio local expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Trusted Advisor</h4>
                    <p className="text-sm text-[#2d3748]/80">Years of proven results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Holistic Approach</h4>
                    <p className="text-sm text-[#2d3748]/80">Financial & home wellness</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-6xl text-[#1a2b4a] mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-[#2d3748]">for your family's well-being</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Insurance Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-[#1a2b4a] to-[#1a2b4a]/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-[#1a2b4a] mb-4">
                Insurance & Financial Protection
              </h3>
              <p className="text-[#2d3748] mb-6 leading-relaxed">
                Secure your family's future with comprehensive insurance solutions designed for peace of mind.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Life Insurance</h4>
                    <p className="text-sm text-[#2d3748]/80">Protect your loved ones with tailored coverage</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Annuities</h4>
                    <p className="text-sm text-[#2d3748]/80">Build a reliable retirement income stream</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Financial Protection Plans</h4>
                    <p className="text-sm text-[#2d3748]/80">Long-term security for every life stage</p>
                  </div>
                </li>
              </ul>
              <div className="bg-[#1a2b4a]/5 rounded-2xl p-6">
                <p className="text-sm italic text-[#1a2b4a]">
                  "Long-term security and peace of mind for your family's financial future"
                </p>
              </div>
            </motion.div>

            {/* Home & Wellness */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-[#d4a574] to-[#d4a574]/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl text-[#1a2b4a] mb-4">
                Home & Wellness Products
              </h3>
              <p className="text-[#2d3748] mb-6 leading-relaxed">
                Transform your home into a healthier sanctuary with premium cleaning solutions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Ritello R2 Cleaning System</h4>
                    <p className="text-sm text-[#2d3748]/80">Advanced deep cleaning technology for your home</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Purello Eco-Friendly Solutions</h4>
                    <p className="text-sm text-[#2d3748]/80">Safe, effective products for every surface</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Healthier Indoor Air</h4>
                    <p className="text-sm text-[#2d3748]/80">Breathe easier with premium air quality</p>
                  </div>
                </li>
              </ul>
              <div className="bg-[#d4a574]/10 rounded-2xl p-6">
                <p className="text-sm italic text-[#1a2b4a]">
                  "Premium lifestyle upgrades that create healthier, cleaner living spaces"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1a2b4a] to-[#1a2b4a]/90 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-6xl text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Rosalinda?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Trusted Advisor", desc: "Years of proven expertise" },
              { icon: Heart, title: "Personalized Solutions", desc: "Tailored to your unique needs" },
              { icon: Sparkles, title: "Community-First", desc: "Deep San Antonio roots" },
              { icon: CheckCircle2, title: "Reliable & Approachable", desc: "Always here when you need me" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-colors">
                  <item.icon className="w-10 h-10 text-[#d4a574]" />
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl mb-2">{item.title}</h4>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-6xl text-center text-[#1a2b4a] mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Maria Rodriguez", text: "Rosalinda helped us find the perfect life insurance plan. Her expertise and patience made the process so easy!", rating: 5 },
              { name: "James Thompson", text: "The Ritello cleaning system has transformed our home. Plus, the personalized service was outstanding!", rating: 5 },
              { name: "Sarah Williams", text: "A true professional who genuinely cares. I trust Rosalinda with both my family's financial future and home care needs.", rating: 5 },
              { name: "Carlos Mendez", text: "Excellent service and honest advice. Rosalinda took time to understand our needs and delivered perfect solutions.", rating: 5 },
              { name: "Linda Chen", text: "The combination of insurance expertise and home wellness products is unique. Rosalinda is a one-stop resource for our family.", rating: 5 }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#faf8f5] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4a574] text-[#d4a574]" />
                  ))}
                </div>
                <p className="text-[#2d3748] mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <p className="text-sm text-[#1a2b4a]">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#d4a574] to-[#d4a574]/80">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Secure Your Future Today
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to protect what matters most? Schedule your free consultation.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="bg-white text-[#1a2b4a] px-8 py-4 rounded-full hover:bg-[#1a2b4a] hover:text-white transition-all shadow-lg"
            >
              Book Appointment
            </a>
            <a
              href="#contact"
              className="bg-[#1a2b4a] text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-[#1a2b4a] transition-all"
            >
              Contact Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl text-[#1a2b4a] mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-[#2d3748] mb-8 leading-relaxed">
                Ready to discuss your insurance needs or learn more about our premium home care products? I'm here to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#d4a574]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Location</h4>
                    <p className="text-[#2d3748]/80">San Antonio, Texas, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#d4a574]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-[#2d3748]/80">(210) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#d4a574]/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-[#2d3748]/80">rosalinda@caringneighbors-sa.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#faf8f5] rounded-3xl p-8 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-[#1a2b4a]">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4a574]/20 focus:border-[#d4a574] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#1a2b4a]">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4a574]/20 focus:border-[#d4a574] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#1a2b4a]">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4a574]/20 focus:border-[#d4a574] focus:outline-none transition-colors"
                    placeholder="(210) 555-0123"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-[#1a2b4a]">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#d4a574]/20 focus:border-[#d4a574] focus:outline-none transition-colors resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a2b4a] text-white px-8 py-4 rounded-xl hover:bg-[#d4a574] transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2b4a] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-3xl mb-4">Rosalinda Jaca</h3>
              <p className="text-white/80">Insurance Specialist | National Life Group</p>
              <p className="text-white/80">Owner, Caring Neighbors San Antonio</p>
            </div>
            <div>
              <h4 className="text-xl mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-white/80 hover:text-[#d4a574] transition-colors">About</a>
                <a href="#services" className="block text-white/80 hover:text-[#d4a574] transition-colors">Services</a>
                <a href="#testimonials" className="block text-white/80 hover:text-[#d4a574] transition-colors">Testimonials</a>
                <a href="#contact" className="block text-white/80 hover:text-[#d4a574] transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4a574] transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p className="mb-2">© 2026 Rosalinda Jaca. All rights reserved.</p>
            <p className="italic">Independent agent. Insurance terms and availability may vary. Not affiliated with National Life Group official website.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}