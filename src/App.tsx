import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Briefcase, 
  Umbrella, 
  PiggyBank, 
  HeartPulse, 
  Car, 
  TrendingUp, 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  ChevronRight,
  Menu,
  X,
  Target
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

function Logo({ className = "h-10", textClass = "text-xl" }: { className?: string, textClass?: string }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div className="flex items-center gap-2">
        <Target className="w-5 h-5 text-brand-text" />
        <span className={`font-semibold tracking-tight text-brand-text ${textClass}`}>GEXO</span>
      </div>
    );
  }
  
  return (
    <img 
      src="/logo.png" 
      alt="Gexo Consultancy Logo" 
      className={`${className} w-auto object-contain`}
      onError={() => setHasError(true)}
    />
  );
}

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Stories', href: '#stories' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Logo className="h-8" textClass="text-lg text-brand-text" />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[12px] font-medium tracking-tight text-brand-text/80 hover:text-brand-text transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="text-[12px] font-medium tracking-tight text-white bg-brand-accent px-4 py-1.5 rounded-full hover:bg-[#0051a3] transition-colors"
          >
            Schedule Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-white shadow-2xl p-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <Logo className="h-8" textClass="text-lg text-brand-text" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-brand-text">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium tracking-tight text-brand-text hover:text-brand-accent transition-colors pb-4 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-semibold leading-tight tracking-tight text-apple-gradient mb-4">
            Future. Protected.
          </h1>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-brand-text mb-6">
            World. Explored.
          </h2>
          <p className="text-xl md:text-2xl font-normal text-brand-subtext max-w-3xl mx-auto mb-10 leading-relaxed">
            The nexus of expert financial advisory and bespoke travel planning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
            <a href="#contact" className="px-6 py-3 bg-brand-accent text-white text-base font-medium rounded-full hover:bg-[#0051a3] transition-colors w-full sm:w-auto">
              Start your journey
            </a>
            <a href="#services" className="px-6 py-3 text-brand-accent text-base font-medium hover:underline transition-colors w-full sm:w-auto flex items-center justify-center gap-1">
              Learn more <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office Minimal" 
            className="w-full h-[400px] md:h-[600px] object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-brand-surface my-12">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-text mb-6">
            Pro-level planning.
          </h2>
          <p className="text-xl md:text-2xl font-normal text-brand-subtext max-w-3xl mx-auto mb-16 leading-relaxed">
            At Gexo, we deliver highly technical, engineered financial strategies paired with seamlessly curated life experiences.
          </p>
          
          <div className="bento-card max-w-2xl mx-auto p-10 md:p-14 text-left border border-gray-100/50">
            <p className="text-xs font-semibold tracking-widest text-[#86868b] uppercase mb-4">Lead Architect</p>
            <h3 className="text-3xl font-semibold text-brand-text mb-4">Goutam Biswas</h3>
            <p className="text-lg text-brand-subtext leading-relaxed font-normal mb-8">
              Certified IRDAI Advisor. With a background in Computer Applications, Goutam brings logic, precision, and data-backed architectural thinking to personal wealth.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
              <div>
                <div className="text-2xl font-semibold text-brand-text mb-1">1.2k</div>
                <div className="text-xs text-[#86868b] font-medium">Families</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-brand-text mb-1">500+</div>
                <div className="text-xs text-[#86868b] font-medium">Trips</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  {
    category: "Financial & Insurance Plans",
    items: [
      {
        icon: <PiggyBank className="w-6 h-6" />,
        title: "Retirement Planning",
        desc: "Secure, long-term annuity and pension plans to ensure your independence."
      },
      {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Child Education/Parent Savings",
        desc: "Disciplined wealth creation plans tailored for your family's future milestones."
      },
      {
        icon: <Umbrella className="w-6 h-6" />,
        title: "Life & Family Protection",
        desc: "Comprehensive term insurance plans for total family security."
      },
      {
        icon: <HeartPulse className="w-6 h-6" />,
        title: "Health & Medical Coverage",
        desc: "Protective health plans to guard your savings against unexpected medical costs."
      },
      {
        icon: <Car className="w-6 h-6" />,
        title: "Motor/Vehicle Insurance",
        desc: "All-inclusive coverage for your peace of mind on the road."
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Wealth Creation",
        desc: "Investment-linked plans for long-term growth and capital appreciation."
      }
    ]
  },
  {
    category: "Travel Services",
    items: [
      {
        icon: <Compass className="w-6 h-6" />,
        title: "Custom Trip Planning",
        desc: "End-to-end, curated travel experiences tailored to your dreams."
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Logistics",
        desc: "Seamless local and long-distance travel support from start to finish."
      }
    ]
  }
];

function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-brand-text mb-6">Which service is right for you?</h2>
          <p className="text-xl md:text-2xl font-normal text-brand-subtext max-w-3xl mx-auto leading-relaxed">
            Essential protection and seamless exploration, all in one place.
          </p>
        </div>

        {services.map((section, idx) => (
          <div key={section.category} className="mb-20 last:mb-0">
            <h3 className="text-2xl font-medium tracking-tight text-brand-text mb-8 pl-4">
              {section.category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bento-card p-8 flex flex-col items-center text-center border border-gray-50/50"
                >
                  <div className="text-brand-text mb-6 mt-4">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-3 tracking-tight text-brand-text">{item.title}</h4>
                  <p className="text-[13px] text-brand-subtext leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SuccessStories() {
  return (
    <section id="stories" className="py-24 bg-brand-surface my-12">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-brand-text mb-16">Results that speak.</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Story 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bento-card p-10 md:p-12 border border-gray-100/50 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-subtext mb-4 block">Retirement</span>
              <h3 className="text-2xl font-semibold mb-6 text-brand-text tracking-tight">Future-Proofing a Retirement</h3>
              <p className="text-brand-subtext leading-relaxed font-normal mb-8">
                "Mr. A, a working professional, wanted to ensure his golden years were stress-free. We designed a custom retirement annuity plan that guaranteed him steady income, allowing him to retire early with confidence."
              </p>
            </div>
            <a href="#contact" className="text-brand-accent text-sm font-medium hover:underline flex items-center gap-1 w-fit">
              Secure your retirement <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Story 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bento-card p-10 md:p-12 border border-gray-100/50 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-subtext mb-4 block">Education</span>
              <h3 className="text-2xl font-semibold mb-6 text-brand-text tracking-tight">Protecting a Child's Dream</h3>
              <p className="text-brand-subtext leading-relaxed font-normal mb-8">
                "Mrs. S came to us worried about the rising costs of higher education. We implemented a disciplined Parent Savings Plan. Today, her child's education fund is fully secure, letting her focus on the present."
              </p>
            </div>
            <a href="#contact" className="text-brand-accent text-sm font-medium hover:underline flex items-center gap-1 w-fit">
              Plan for their future <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="pt-24 pb-8 bg-[#f5f5f7] border-t border-gray-200">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
          
          <div className="max-w-xs">
            <div className="mb-6">
              <Logo className="h-8" textClass="text-xl text-brand-text" />
            </div>
            <p className="text-xs text-brand-subtext leading-relaxed">
              Strategic Financial Planning & Curated Travel Services.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-[11px] font-semibold text-brand-text mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+916307976671" className="text-xs text-brand-subtext hover:text-brand-text hover:underline transition-colors">+91 6307976671</a>
                </li>
                <li>
                  <a href="mailto:biswasgautam603@gmail.com" className="text-xs text-brand-subtext hover:text-brand-text hover:underline transition-colors">biswasgautam603@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[11px] font-semibold text-brand-text mb-4">Location</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-xs text-brand-subtext block">Badkulla, Krishnanagar</span>
                </li>
                <li>
                  <span className="text-xs text-brand-subtext block">West Bengal, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[#86868b] text-[11px]">
          <p>Copyright © {new Date().getFullYear()} Gexo Consultancy. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-brand-text hover:underline cursor-pointer transition-colors">Privacy Policy</span>
            <div className="w-[1px] h-3 bg-gray-300"></div>
            <span className="hover:text-brand-text hover:underline cursor-pointer transition-colors">Terms of Use</span>
            <div className="w-[1px] h-3 bg-gray-300"></div>
            <a href="https://www.linkedin.com/in/goutam-biswas-017850267" target="_blank" rel="noreferrer" className="hover:text-brand-text hover:underline cursor-pointer transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative bg-brand-base text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SuccessStories />
      </main>
      <ContactSection />
    </div>
  );
}

