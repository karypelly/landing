import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import infiniteSolutionsLogo from './logo-data.js';
import dylanHero from './dylan.jpg';
import catchUpPhoto from './dylan-hero.jpg';
import startStrongPhoto from './dylan.png';
import getAheadPhoto from './Student exploring advanced work.jpg';
import appHomeScreenshot from './app screenshot 1.png';
import appHomeworkScreenshot from './app screenshot 2.png';
import appMasteryScreenshot from './app screenshot 3.png';

const Landing = () => {
  const [offerTab, setOfferTab] = useState('september');
  const [ongoingTab, setOngoingTab] = useState('private');
  const [expandedPremium, setExpandedPremium] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutKary, setShowAboutKary] = useState(false);

  const getColorForPercentage = (value) => {
    if (value < 50) return 'bg-red-600';
    if (value < 75) return 'bg-orange-500';
    return 'bg-green-600';
  };

  const getTextColorForPercentage = (value) => {
    if (value < 50) return 'text-red-600';
    if (value < 75) return 'text-orange-500';
    return 'text-green-600';
  };

  const faqItems = [
    {
      q: "What is September Math Ready?",
      a: "September Math Ready is a comprehensive assessment and preparation session designed to identify your child's specific math skill gaps before the new school year begins. We assess their current level, identify important gaps, provide targeted instruction and practice, and give you a clear plan for success in September."
    },
    {
      q: "Which grades is it for?",
      a: "September Math Ready is designed for students entering Grades 7–12 in Ontario. Whether your child is transitioning from elementary to secondary or moving between high school grades, we tailor the assessment to their specific course level."
    },
    {
      q: "What happens during the session?",
      a: "During a private session, we conduct a review of important prerequisite skills, identify the most critical skill gaps, provide targeted instruction on those areas, assign personalized practice work, and send you home with clear recommendations and a plan for September."
    },
    {
      q: "How is the private session different from the small group?",
      a: "The private option ($149 + HST) provides a more individualized assessment, deeper skill-gap identification, and a personalized plan tailored to your specific child. The small group ($50/student + HST) covers important prerequisite skills and common gaps at a more general level, making it ideal for friends at similar grade levels who want to prepare together."
    },
    {
      q: "Does my child need to be struggling?",
      a: "No. September Math Ready is for any student who wants to start the year stronger. Students performing well can use the session to identify weaker areas within their current level and prepare ahead for the coming course. It's not just about remediation—it's about clarity and readiness."
    },
    {
      q: "What happens after the session?",
      a: "After your session, you receive a written summary of what we found, the skills that need the most attention, and recommendations for how to approach September. Many families choose to continue with ongoing support or our monthly tutoring plan to keep that momentum going."
    },
    {
      q: "Can we continue tutoring in September?",
      a: "Absolutely. Many families use September Math Ready as the starting point for ongoing tutoring. We offer both individual tutoring ($89/hour) and our Monthly Math Support package ($349/month) which includes regular 1-on-1 sessions, personalized practice, app access, and progress tracking."
    },
    {
      q: "How does the learning app work?",
      a: "Our app supports personalized practice between tutoring sessions. Students see exactly which skills to work on, track their progress at the skill level, and you can see what's happening between sessions. The app is one part of how we make tutoring more effective—it's not complicated software you need to learn; it's a simple tool that helps the tutoring work harder."
    },
    {
      q: "Is HST included in the prices shown?",
      a: "No. All prices shown are before HST. HST will be applied at checkout based on Ontario tax rates."
    },
    {
      q: "What is the booking, rescheduling, and cancellation policy?",
      a: "A 50% reservation payment is required when booking. Appointments may be rescheduled with at least 24 hours notice; the reservation transfers to your new date. For cancellations made 24+ hours in advance, the reservation can be refunded or transferred. Cancellations with less than 24 hours notice forfeit the reservation. No-shows are not eligible for a refund. If an emergency prevented you from attending, please contact us to discuss."
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* About Kary Page */}
      {showAboutKary && (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          {/* Back Navigation */}
          <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <button 
                onClick={() => setShowAboutKary(false)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                ← Back to Infinite Solutions
              </button>
              <a href="tel:4166065425" className="px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 flex items-center gap-2">
                <span>📞</span> Call Kary
              </a>
            </div>
          </nav>

          {/* About Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Photo Placeholder */}
              <div className="md:col-span-1">
                <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center mb-6">
                  <div className="text-gray-400 text-center">
                    <p className="text-sm">Kary's Photo</p>
                  </div>
                </div>
                <a href="tel:4166065425" className="block w-full px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 text-center">
                  📞 (416) 606-5425
                </a>
              </div>

              {/* Bio Content */}
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Kary</h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  I'm Kary, the founder and lead tutor at Infinite Solutions. I started this business because I saw too many students and parents frustrated by a simple problem: grades don't tell you what's actually missing.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Math isn't about memorizing formulas or rushing through problems. It's about understanding how ideas connect. When a student truly understands, everything becomes easier—not just math, but their confidence too.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Every student learns differently. Some need to see the big picture first. Others learn by doing. My job is to figure out how your child learns best and meet them there. That's what personalized tutoring actually means.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-4">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-bold text-gray-900">Identify Real Gaps</p>
                      <p className="text-gray-700">Not just "they're struggling." I find exactly which skills are causing problems.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-2xl">📚</span>
                    <div>
                      <p className="font-bold text-gray-900">Build Understanding</p>
                      <p className="text-gray-700">We focus on the "why" behind every concept, not just the "how."</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-bold text-gray-900">Create Momentum</p>
                      <p className="text-gray-700">Regular practice and tracking keep progress visible and motivation high between sessions.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <p className="font-bold text-gray-900">Stay Accountable</p>
                      <p className="text-gray-700">I check in with you and your child regularly so we know what's working.</p>
                    </div>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Grades 7–12?</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  This is where math becomes more abstract and cumulative. A gap from Grade 7 doesn't go away—it compounds. By high school, students who felt lost in algebra are drowning in calculus. I help break that cycle by going back to find what's missing and rebuilding it the right way.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Talk?</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Whether you have questions, want to discuss your child's math situation, or you're ready to book, I'm here to help. Give me a call.
                </p>
                <a href="tel:4166065425" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                  📞 (416) 606-5425
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 bg-gray-50 mt-16 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="mb-2">Infinite Solutions Tutoring</p>
              <p className="text-sm text-gray-400">Ontario math support for Grades 7–12</p>
            </div>
          </footer>
        </div>
      )}

      {/* Main Landing Page */}
      {!showAboutKary && (
        <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold tracking-tight text-gray-950">
            <img
              src={infiniteSolutionsLogo}
              alt="Infinite Solutions logo"
              className="h-11 w-11 object-contain"
            />
            <span>Infinite Solutions</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm items-center">
            <a href="#options" className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#about-kary" onClick={() => setShowAboutKary(true)} className="text-gray-700 hover:text-gray-900 cursor-pointer">About Kary</a>
            <a href="tel:4166065425" className="px-4 py-2.5 bg-gray-950 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm">
              <span>📞</span> Call Kary
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-100 rounded"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a 
                href="#options" 
                className="block py-2 text-gray-900 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about-kary" 
                className="block py-2 text-gray-900 hover:text-blue-600 font-medium cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowAboutKary(true);
                }}
              >
                About Kary
              </a>
              <a 
                href="#readiness" 
                className="block py-2 text-gray-900 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Readiness Check
              </a>
              <a 
                href="#faq" 
                className="block py-2 text-gray-900 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="tel:4166065425" 
                className="block w-full mt-4 px-4 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                📞 Call Kary
              </a>
              <a 
                href="/readiness" 
                className="block w-full px-4 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Check Math Readiness
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Section 1: Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" aria-hidden="true"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-blue-800 uppercase tracking-widest mb-5 shadow-sm">Ontario math • grades 7–12</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950 mb-5 leading-[1.08]">Start September stronger in <span className="relative inline-block text-blue-800 after:absolute after:inset-x-0 after:-bottom-1 after:h-2 after:rounded-full after:bg-teal-300/60 after:-z-10">math.</span></h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed">Personalized math support to help your child catch up, start strong, or get ahead.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">We identify what they need, focus practice where it matters most, and build a clear plan for the school year.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/readiness" className="px-6 py-3.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 text-center shadow-lg shadow-blue-700/15 transition-all">Check their math readiness</a>
                <a href="#options" className="px-6 py-3.5 border border-slate-300 bg-white/80 text-gray-900 font-medium rounded-lg hover:border-blue-300 hover:bg-white text-center transition-colors">Explore tutoring options</a>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Tutor and student photo */}
              <div className="premium-card relative overflow-hidden rounded-2xl aspect-[16/9]">
                <img
                  src={dylanHero}
                  alt="Tutor supporting a student during a personalized math session"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Compact Skill Progress Visual */}
              <div className="premium-card bg-white/90 backdrop-blur rounded-2xl p-5 md:p-6">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">Example skill breakdown</p>
                  <span className={`text-xl font-bold ${getTextColorForPercentage(68)}`}>68%</span>
                </div>
                <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-1.5">
                    <span className="text-sm font-medium text-gray-900">Overall Math</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getColorForPercentage(68)}`}
                      style={{width: '68%'}}
                    ></div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                    {[
                      {label: "Algebra", value: 43},
                      {label: "Fractions", value: 84},
                      {label: "Graphing", value: 91},
                      {label: "Exponents", value: 52}
                    ].map((skill) => (
                      <div key={skill.label}>
                        <div className="flex justify-between items-baseline mb-1.5">
                          <span className="text-sm font-medium text-gray-700">{skill.label}</span>
                          <span className={`text-sm font-semibold ${getTextColorForPercentage(skill.value)}`}>{skill.value}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getColorForPercentage(skill.value)}`}
                            style={{width: `${skill.value}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
                <p className="text-[11px] leading-relaxed text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  Illustrative example—not a real student result. <span className="font-semibold text-blue-800">A mark alone doesn’t show which skills are strong or where support is needed.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: What Does Your Child Need? */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">What does your child need?</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Catch Up",
                description: "Strengthen gaps from previous math courses.",
                photo: catchUpPhoto,
                photoAlt: "Student rebuilding core math skills with a tutor",
                points: ["Inconsistent marks", "Foundational gaps", "Needs guided review"]
              },
              {
                title: "Start Strong",
                description: "Review key skills and begin prepared.",
                photo: startStrongPhoto,
                photoAlt: "Student preparing for math with personalized support",
                points: ["Back-to-school review", "Unsure about readiness", "Building confidence"]
              },
              {
                title: "Get Ahead",
                description: "Preview upcoming concepts and build confidence.",
                photo: getAheadPhoto,
                photoAlt: "Student exploring advanced math work with a tutor",
                points: ["Already doing well", "Wants enrichment", "Preparing for a harder course"]
              }
            ].map((option, i) => (
              <article key={option.title} className={`premium-card overflow-hidden rounded-2xl flex flex-col ${i === 1 ? "md:-translate-y-2 border-blue-200" : ""}`}>
                <div className="aspect-[16/9] overflow-hidden border-b border-blue-100">
                  <img src={option.photo} alt={option.photoAlt} className="h-full w-full object-cover object-center" loading="lazy" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-950 mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">{option.description}</p>
                  <ul className="mt-auto space-y-2 text-sm text-gray-600">
                    {option.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-blue-500">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Parent Problem */}
      <section className="py-20 md:py-28 border-y border-slate-100 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4">Clarity before the school year</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-950 mb-6">Don't wait for the first bad test to find out what's missing.</h2>
            <p className="text-xl md:text-2xl font-medium text-slate-700 mb-6 leading-relaxed">A grade doesn't tell you what your child actually needs help with.</p>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>Two students can receive the same overall grade while having completely different gaps. One might be strong in computation but weak in reasoning. Another might understand theory but struggle with application. A single number hides all of that.</p>
              <p>Maybe they understand when someone explains it but struggle independently. Maybe their mark seems fine, but you still do not know what they are missing. Or maybe you simply do not want to discover in October that they are already behind.</p>
              <p className="font-semibold text-gray-900">That is why we look beyond the grade and identify the individual skills behind it.</p>
            </div>
            <a href="/readiness" className="mt-9 inline-block px-6 py-3.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 shadow-lg shadow-blue-700/15 transition-colors">Check their readiness</a>
          </div>
        </div>
      </section>

      {/* Section 4: The Offer */}
      <section id="options" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose what works for you.</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Whether your child is preparing for September, restarting tutoring, or looking for ongoing support, choose the option that fits best.</p>
          
          {/* Main Tab Toggle */}
          <div className="flex gap-2 mb-12 border-b border-gray-200">
            <button
              onClick={() => setOfferTab("september")}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                offerTab === "september"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              September Math Ready
            </button>
            <button
              onClick={() => setOfferTab("ongoing")}
              className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                offerTab === "ongoing"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Ongoing Tutoring
            </button>
          </div>

          {/* September Math Ready Options */}
          {offerTab === "september" && (
            <div>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="md:transform md:scale-105 md:origin-left">
                  <div className="bg-white border-2 border-blue-600 rounded-lg p-8 h-full">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-4">Recommended</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">September Math Ready — Private</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-8">$149 <span className="text-lg text-gray-600">+ HST</span></p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "1-on-1 assessment and review",
                        "Individual skill-gap identification",
                        "Targeted instruction",
                        "Personalized practice",
                        "September recommendations",
                        "App-supported progress tracking"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold mt-0.5">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="/book" className="block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center">Start September Math Ready</a>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">September Math Ready — Small Group</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-1">$50 <span className="text-lg text-gray-600">per student + HST</span></p>
                    <p className="text-sm text-gray-600 mb-8">For 2-3 students at similar grade/course level</p>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Review of important prerequisite skills",
                        "Identification of common gaps",
                        "Targeted group instruction",
                        "Practice and September prep",
                        "More general assessment (vs. individualized)"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-gray-400 font-bold mt-0.5">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">The private option provides a more individualized assessment and plan.</p>
                    <a href="/book" className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-100 text-center">Book a small group session</a>
                  </div>
                </div>
              </div>

              {/* Premium Package - September */}
              <div>
                <button
                  onClick={() => setExpandedPremium(expandedPremium === "september" ? null : "september")}
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">Premium Full Support Package</p>
                      <p className="text-sm text-gray-600">Complete semester or year-long program</p>
                    </div>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-amber-700 flex-shrink-0 transition-transform ${expandedPremium === "september" ? "rotate-180" : ""}`}
                  />
                </button>

                {expandedPremium === "september" && (
                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-8">
                      <div className="inline-block px-3 py-1 bg-amber-200 text-amber-900 text-xs font-semibold rounded mb-4">Full Semester</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Semester Program</h3>
                      <p className="text-4xl font-bold text-amber-700 mb-2">$1,500</p>
                      <p className="text-sm text-gray-600 mb-8">Plus HST • 4-5 months of intensive support</p>
                      
                      <ul className="space-y-3 mb-8">
                        {[
                          "All assessment services included",
                          "Bi-weekly intensive tutoring sessions",
                          "Daily personalized practice assignments",
                          "Full app access and progress tracking",
                          "Parent check-ins every 2 weeks",
                          "Continuous skill gap monitoring",
                          "End-of-semester comprehensive report"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="/book" className="block w-full px-6 py-3 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 text-center">Book semester package</a>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-8">
                      <div className="inline-block px-3 py-1 bg-orange-300 text-orange-900 text-xs font-semibold rounded mb-4">Full Year</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Year Program</h3>
                      <p className="text-4xl font-bold text-orange-700 mb-2">$2,800</p>
                      <p className="text-sm text-gray-600 mb-8">Plus HST • 12 months of comprehensive support</p>
                      
                      <ul className="space-y-3 mb-8">
                        {[
                          "All semester services included",
                          "Weekly 1-on-1 tutoring sessions",
                          "Daily personalized practice",
                          "Full app access with analytics",
                          "Monthly parent strategy calls",
                          "Quarterly comprehensive assessments",
                          "Summer maintenance support",
                          "Guaranteed skill improvement"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-orange-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="/book" className="block w-full px-6 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 text-center">Book year package</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Ongoing Tutoring Options */}
          {offerTab === "ongoing" && (
            <div>
              {/* Sub-tabs */}
              <div className="flex gap-2 mb-12 border-b border-gray-200">
                <button
                  onClick={() => setOngoingTab("private")}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    ongoingTab === "private"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Private Tutoring
                </button>
                <button
                  onClick={() => setOngoingTab("group")}
                  className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                    ongoingTab === "group"
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Group Tutoring
                </button>
              </div>

              {/* Private Tutoring */}
              {ongoingTab === "private" && (
                <div>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual Sessions</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-1">$90 <span className="text-lg text-gray-600">per hour + HST</span></p>
                      <p className="text-sm text-gray-600 mb-8">Book sessions as needed</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {[
                          "1-on-1 tutoring sessions",
                          "Personalized to your child needs",
                          "Flexible scheduling",
                          "Target any math topic or skill",
                          "Book as many or as few sessions as you need"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-gray-400 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="/book" className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-100 text-center">Book individual sessions</a>
                    </div>

                    <div className="bg-white border-2 border-blue-600 rounded-lg p-8">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-4">Best value</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Support Plan</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-1">$349 <span className="text-lg text-gray-600">per month + HST</span></p>
                      <p className="text-sm text-gray-600 mb-8">Billed monthly, cancel anytime</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {[
                          "Regular 1-on-1 tutoring sessions",
                          "Personalized practice between sessions",
                          "App access and skill tracking",
                          "Accountability and ongoing support",
                          "Tutoring responds to actual progress",
                          "Best for consistent improvement"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="/book" className="block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center">Start monthly support</a>
                    </div>
                  </div>

                  {/* Premium - Private */}
                  <div>
                    <button
                      onClick={() => setExpandedPremium(expandedPremium === "private" ? null : "private")}
                      className="w-full px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">✨</span>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">Premium Full Support Package</p>
                          <p className="text-sm text-gray-600">Complete semester or year-long program</p>
                        </div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-amber-700 flex-shrink-0 transition-transform ${expandedPremium === "private" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expandedPremium === "private" && (
                      <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-8">
                          <div className="inline-block px-3 py-1 bg-amber-200 text-amber-900 text-xs font-semibold rounded mb-4">Full Semester</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Semester Program</h3>
                          <p className="text-4xl font-bold text-amber-700 mb-2">$1,800</p>
                          <p className="text-sm text-gray-600 mb-8">Plus HST • 4-5 months of intensive 1-on-1 support</p>
                          
                          <ul className="space-y-3 mb-8">
                            {[
                              "Bi-weekly intensive tutoring sessions",
                              "Personalized practice between sessions",
                              "Full app access and progress tracking",
                              "Parent check-ins every 2 weeks",
                              "Continuous skill monitoring",
                              "Flexible scheduling around school",
                              "Mid-semester progress report"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-amber-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="/book" className="block w-full px-6 py-3 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 text-center">Book semester package</a>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-8">
                          <div className="inline-block px-3 py-1 bg-orange-300 text-orange-900 text-xs font-semibold rounded mb-4">Full Year</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Year Program</h3>
                          <p className="text-4xl font-bold text-orange-700 mb-2">$3,500</p>
                          <p className="text-sm text-gray-600 mb-8">Plus HST • 12 months of comprehensive 1-on-1 support</p>
                          
                          <ul className="space-y-3 mb-8">
                            {[
                              "Weekly 1-on-1 tutoring sessions",
                              "Daily personalized practice assignments",
                              "Full app access with analytics",
                              "Monthly strategy calls with parent",
                              "Quarterly comprehensive assessments",
                              "Summer maintenance program",
                              "Dedicated tutor relationship",
                              "Guaranteed measurable improvement"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="/book" className="block w-full px-6 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 text-center">Book year package</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Group Tutoring */}
              {ongoingTab === "group" && (
                <div>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Individual Sessions</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-1">$49 <span className="text-lg text-gray-600">per student/hour + HST</span></p>
                      <p className="text-sm text-gray-600 mb-8">For 2-3 students at similar level</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {[
                          "Targeted group tutoring sessions",
                          "Personalized to group needs",
                          "Flexible scheduling",
                          "Collaborative learning environment",
                          "Book as many or as few sessions as you need"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-gray-400 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="/book" className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-100 text-center">Book group sessions</a>
                    </div>

                    <div className="bg-white border-2 border-blue-600 rounded-lg p-8">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-4">Best value</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Support Plan</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-1">$199 <span className="text-lg text-gray-600">per student/month + HST</span></p>
                      <p className="text-sm text-gray-600 mb-8">Billed monthly, cancel anytime</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {[
                          "Regular group tutoring sessions",
                          "Personalized practice between sessions",
                          "App access and skill tracking",
                          "Collaborative learning environment",
                          "Tutoring responds to group progress",
                          "More affordable for families with friends"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="/book" className="block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center">Start group monthly plan</a>
                    </div>
                  </div>

                  {/* Premium - Group */}
                  <div>
                    <button
                      onClick={() => setExpandedPremium(expandedPremium === "group" ? null : "group")}
                      className="w-full px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">✨</span>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">Premium Full Support Package</p>
                          <p className="text-sm text-gray-600">Complete semester or year-long program</p>
                        </div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-amber-700 flex-shrink-0 transition-transform ${expandedPremium === "group" ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expandedPremium === "group" && (
                      <div className="grid md:grid-cols-2 gap-8 mt-6">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg p-8">
                          <div className="inline-block px-3 py-1 bg-amber-200 text-amber-900 text-xs font-semibold rounded mb-4">Full Semester</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Semester Program</h3>
                          <p className="text-4xl font-bold text-amber-700 mb-2">$1,200</p>
                          <p className="text-sm text-gray-600 mb-8">Plus HST per student • 4-5 months of group support</p>
                          
                          <ul className="space-y-3 mb-8">
                            {[
                              "Bi-weekly group tutoring sessions",
                              "Personalized practice between sessions",
                              "Full app access and progress tracking",
                              "Bi-weekly progress updates",
                              "Collaborative learning environment",
                              "Group and individual skill monitoring",
                              "Mid-semester progress report"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-amber-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="/book" className="block w-full px-6 py-3 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 text-center">Book semester package</a>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-8">
                          <div className="inline-block px-3 py-1 bg-orange-300 text-orange-900 text-xs font-semibold rounded mb-4">Full Year</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Year Program</h3>
                          <p className="text-4xl font-bold text-orange-700 mb-2">$2,200</p>
                          <p className="text-sm text-gray-600 mb-8">Plus HST per student • 12 months of comprehensive group support</p>
                          
                          <ul className="space-y-3 mb-8">
                            {[
                              "Weekly group tutoring sessions",
                              "Daily personalized practice assignments",
                              "Full app access with analytics",
                              "Monthly check-ins with parents",
                              "Quarterly comprehensive assessments",
                              "Summer maintenance program",
                              "Collaborative and individual tracking",
                              "Guaranteed measurable improvement"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="/book" className="block w-full px-6 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 text-center">Book year package</a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Section 5: Why Different */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Tutoring should not stop when the session ends.</h2>
          
          <div className="premium-card bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {["Live tutoring", "Personalized practice", "Skill tracking", "Accountability"].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex-1 overflow-hidden rounded-xl border border-blue-100 bg-white text-center shadow-sm">
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center border-b border-blue-100">
                      <div>
                        <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-blue-200 ring-4 ring-white" aria-hidden="true"></div>
                        <span className="text-[11px] font-medium text-slate-500">Image placeholder</span>
                      </div>
                    </div>
                    <p className="px-4 py-4 font-semibold text-gray-900">{step}</p>
                  </div>
                  {i < 3 && <span className="text-xl text-blue-300 text-center">→</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-3 text-center font-medium text-gray-900">
              <span className="text-2xl text-blue-500">↻</span>
              <span>Next session uses the results</span>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">Traditional tutoring often focuses on the hour itself. Our approach also looks at what happens between sessions: what the student practices, which individual skills are improving, and what should be targeted next. That is how tutoring gets better.</p>
        </div>
      </section>

      {/* Section 6: App Proof */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">See what they are actually working on.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "See progress at the skill level—not just one overall grade.", label: "Progress Dashboard", image: appHomeScreenshot},
              {title: "Students know exactly what to work on between sessions.", label: "Personalized Practice", image: appHomeworkScreenshot},
              {title: "Tutoring can respond to what is actually happening between sessions.", label: "Skill Mastery", image: appMasteryScreenshot}
            ].map((item, i) => (
              <div key={item.label} className="space-y-5">
                <div className="premium-card overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-white p-4">
                  <div className="overflow-hidden rounded-xl bg-slate-100 aspect-[4/5]">
                    <img
                      src={item.image}
                      alt={`${item.label} app screenshot`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-2">{item.label}</p>
                  <p className="text-gray-700 leading-relaxed">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-12 text-center max-w-2xl mx-auto leading-relaxed">The technology makes the tutoring better. Your child's learning comes first; the app is one of the tools that supports it.</p>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.55h3.24c1.9-1.75 2.98-4.33 2.98-7.42Z" />
                  <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.63-2.35l-3.24-2.55c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.63A10 10 0 0 0 12 22Z" />
                  <path fill="#FBBC05" d="M6.39 13.93A6.02 6.02 0 0 1 6.08 12c0-.67.11-1.32.31-1.93V7.44H3.04A10 10 0 0 0 2 12c0 1.64.39 3.2 1.04 4.56l3.35-2.63Z" />
                  <path fill="#EA4335" d="M12 5.94c1.47 0 2.79.5 3.82 1.5l2.88-2.88A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.96 5.44l3.35 2.63C7.18 7.7 9.39 5.94 12 5.94Z" />
                </svg>
                <span className="text-sm font-semibold text-gray-600">Google reviews</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What families say.</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-yellow-400 tracking-wide">★★★★★</span>
              <span>Reviews from Google</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Kary has been tutoring my grade 9 son in science and math. I can’t recommend him enough. He is so incredibly kind and patient and is able to connect with my son at his level. He makes all the material fully understandable for my son and is able to keep him focused the entire time (which is not easy). My son looks forward to his tutoring lessons with Kary and has gone from getting low 70’s to high 80’s and 90’s. I can’t tell you how thankful I am that we found him.",
                byline: "Lindsay, Parent"
              },
              {
                text: "Kary has been tutoring my son in grade 12 Advanced Functions for the last 4 months. He has been fantastic at simplifying concepts and providing my son really useful strategies to improve his answers on tests. Kary is incredibly patient and encouraging and has boosted my son's confidence.",
                byline: "Deborah, parent"
              },
              {
                text: "I am a 2nd year computer science student, Kary has helped me so much with learning Java! I have gone from zero understanding to being able to program on my own. He’s very patient while teaching, and makes sure to explain topics until I can understand!",
                byline: "Katrin, student"
              }
            ].map((review) => (
              <article key={review.byline} className="bg-white border border-gray-200 rounded-xl p-7 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <svg viewBox="0 0 24 24" aria-label="Google" className="h-5 w-5">
                    <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.55h3.24c1.9-1.75 2.98-4.33 2.98-7.42Z" />
                    <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.63-2.35l-3.24-2.55c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.63A10 10 0 0 0 12 22Z" />
                    <path fill="#FBBC05" d="M6.39 13.93A6.02 6.02 0 0 1 6.08 12c0-.67.11-1.32.31-1.93V7.44H3.04A10 10 0 0 0 2 12c0 1.64.39 3.2 1.04 4.56l3.35-2.63Z" />
                    <path fill="#EA4335" d="M12 5.94c1.47 0 2.79.5 3.82 1.5l2.88-2.88A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.96 5.44l3.35 2.63C7.18 7.7 9.39 5.94 12 5.94Z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-7 italic leading-relaxed flex-grow">{review.text}</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">{review.byline.charAt(0)}</div>
                  <div>
                    <p className="font-medium text-gray-900">BY: {review.byline}</p>
                    <p className="text-sm text-gray-500">Google review</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/search?q=Infinite+Solutions+Tutoring+Ontario+reviews"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800 shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.55h3.24c1.9-1.75 2.98-4.33 2.98-7.42Z" />
                <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.63-2.35l-3.24-2.55c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.63A10 10 0 0 0 12 22Z" />
                <path fill="#FBBC05" d="M6.39 13.93A6.02 6.02 0 0 1 6.08 12c0-.67.11-1.32.31-1.93V7.44H3.04A10 10 0 0 0 2 12c0 1.64.39 3.2 1.04 4.56l3.35-2.63Z" />
                <path fill="#EA4335" d="M12 5.94c1.47 0 2.79.5 3.82 1.5l2.88-2.88A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.96 5.44l3.35 2.63C7.18 7.7 9.39 5.94 12 5.94Z" />
              </svg>
              See more reviews on Google
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 9: Who This Is For */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Is September Math Ready right for your child?</h2>
          
          <div className="max-w-2xl">
            <p className="text-gray-700 mb-8 font-medium">Good fit if:</p>
            <ul className="space-y-3 mb-12">
              {[
                "Entering Grades 7–12",
                "There may be gaps from the previous year",
                "Math has become inconsistent",
                "They understand some topics but struggle with others",
                "They want to start September stronger",
                "A parent wants a clearer picture of what needs attention",
                "The student wants to get ahead"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-900"><span className="font-medium">Also:</span> Students who are already doing well can use the session to identify weaker areas and prepare ahead for the coming course. It is not just for students who are behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Kary Teaser */}
      <section id="about-kary" className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Kary</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I started Infinite Solutions because I saw too many students frustrated by a simple problem: grades don't tell you what's actually missing.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I believe every student can understand math when it's taught the right way. My approach is simple: identify exactly what's missing, explain it clearly, and build real confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowAboutKary(true)}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center"
                >
                  Read My Full Story
                </button>
                <a href="tel:4166065425" className="px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded hover:bg-green-50 text-center">
                  📞 Call Kary
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
              <p className="text-gray-500 mb-4">Kary, Founder</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Math isn't about memorizing. It's about understanding. When your child really gets it, everything changes."
              </p>
              <a href="tel:4166065425" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                📞 (416) 606-5425
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Frequently asked questions.</h2>
          
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 font-medium text-gray-900 text-left"
                >
                  {item.q}
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 transition-transform ${expandedFAQ === i ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFAQ === i && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Find out what needs work before September does.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">Start the school year with a clearer picture of your child's math skills and a personalized plan for what comes next.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="/book" className="px-6 py-3 bg-white text-blue-600 font-medium rounded hover:bg-gray-50">Book September Math Ready</a>
            <a href="/readiness" className="px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-blue-600">Take the free readiness check</a>
          </div>

          <p className="text-blue-100"><a href="/book" className="underline hover:text-white">Already a current client? Book your next session →</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">Infinite Solutions Tutoring</p>
          <p className="text-sm text-gray-400">Ontario math support for Grades 7–12</p>
        </div>
      </footer>
        </>
      )}
    </div>
  );
};

export default Landing;
