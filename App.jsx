import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import infiniteSolutionsLogo from './assets/images/brand/infinite-solutions-logo.png';
import dylanHero from './assets/images/students/dylan.jpg';
import catchUpPhoto from './assets/images/students/dylan-hero.png';
import startStrongPhoto from './assets/images/students/jack.png';
import getAheadPhoto from './assets/images/students/Student exploring advanced work.jpg';
import appHomeScreenshot from './assets/images/app/app screenshot 1.png';
import appHomeworkScreenshot from './assets/images/app/app screenshot 2.png';
import appMasteryScreenshot from './assets/images/app/app screenshot 3.png';
import karyPortrait from './assets/images/placeholders/kary-portrait.png';

const Landing = () => {
  const [offerTab, setOfferTab] = useState('september');
  const [ongoingTab, setOngoingTab] = useState('private');
  const [expandedPremium, setExpandedPremium] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAboutKary, setShowAboutKary] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState({});

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
      q: "How does the tutoring process begin?",
      a: "We start by understanding the result your child wants and identifying what is preventing them from reaching it. That means looking beyond the current grade to the specific concepts, prerequisite skills, problem-solving habits, and confidence barriers involved. From there, we establish the first priority and build a focused tutoring plan instead of starting with generic worksheets."
    },
    {
      q: "What makes this different from ordinary homework help?",
      a: "Homework help solves the questions due tomorrow. Our process also looks for the reason those questions are difficult in the first place. We diagnose the underlying gap, teach the missing idea clearly, assign focused practice, and track whether the student can use the skill independently. Homework still gets support, but each session is also designed to create progress that carries into future units, tests, and courses."
    },
    {
      q: "What happens during a typical tutoring session?",
      a: "Each session begins with a clear objective based on the student's current needs and recent progress. The tutor checks understanding, explains the concept in a way that connects to what the student already knows, guides them through deliberate practice, and then reduces support so the student can demonstrate the skill independently. The result of the session determines what should happen next."
    },
    {
      q: "How do you decide what to teach next?",
      a: "We prioritize the skill that will create the greatest useful change—not simply the next page in a workbook. Session performance, assigned practice, app activity, schoolwork, and upcoming course demands all help shape the next step. If a skill is secure, we move forward. If it is not yet independent, we adjust the explanation or practice before adding more difficulty."
    },
    {
      q: "How does the learning app support tutoring?",
      a: "The app keeps the learning plan active between sessions. Students can see the specific skills they need to practise, complete work connected to their tutoring goals, and watch their mastery develop over time. Parents gain clearer visibility into what is improving, while the tutor uses that information to plan the next highest-impact session."
    },
    {
      q: "What is the difference between private and small-group tutoring?",
      a: "Private tutoring provides the most individual diagnosis, pacing, and attention for one student. Small-group tutoring is designed for 2–3 students at a similar level and combines focused instruction with peer discussion, shared momentum, and accountability. The best option depends on the depth of the gaps, the student's learning preferences, and whether suitable group partners are available."
    },
    {
      q: "Does my child need to be struggling to benefit?",
      a: "No. Some students need to rebuild missing foundations, while others want to prepare for a harder course, develop stronger problem-solving skills, or become more independent. The plan changes according to the outcome: catch up, start strong, or get ahead."
    },
    {
      q: "How do you measure progress?",
      a: "We look for more than completed sessions or finished worksheets. Progress means the student can explain the idea, apply it accurately, use it with less support, and transfer it to schoolwork or unfamiliar questions. Skill-level tracking makes improvement visible and helps us identify where the plan should continue or change."
    },
    {
      q: "Which students and courses do you support?",
      a: "Infinite Solutions focuses on Ontario students in Grades 7–12. Support is tailored to the student's grade, current course, prerequisite knowledge, upcoming assessments, and longer-term academic goals."
    },
    {
      q: "Can we begin with September Math Ready?",
      a: "Yes. September Math Ready is a focused starting option for families who want to check prerequisite skills and establish priorities before the school year. It can stand alone or become the first step in an ongoing private or small-group tutoring plan."
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
              {/* Kary portrait */}
              <div className="md:col-span-1">
                <div className="bg-gray-200 rounded-lg aspect-square overflow-hidden mb-6">
                  <img
                    src={karyPortrait}
                    alt="Kary, founder and lead tutor at Infinite Solutions"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <a href="tel:4166065425" className="block w-full px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 text-center">
                  📞 (416) 606-5425
                </a>
              </div>

              {/* Bio Content */}
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Kary</h1>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  I'm Kary, founder and lead tutor at Infinite Solutions. I help Ontario students in Grades 7-12 find the skills holding them back, rebuild confidence, and move into their next math course with a clear plan.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Philosophy</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Better results come from the right strategy, consistent habits, and an environment that keeps students engaged. When those pieces work together, math starts to make sense and confidence grows with it.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  My job is not simply to work through tonight's homework. It is to diagnose the gap behind the struggle, explain the idea clearly, and help your child practise it until they can use it independently.
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
                      <p className="text-gray-700">Focused practice and visible progress turn one good session into consistent improvement.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-2xl">🤝</span>
                    <div>
                      <p className="font-bold text-gray-900">Stay Accountable</p>
                      <p className="text-gray-700">Clear goals, regular check-ins, and the right learning environment help strong habits stick.</p>
                    </div>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Grades 7–12?</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Math becomes more abstract and cumulative in these years. A missed foundation can quietly affect the next unit and the next course. I help students find that missing piece early, rebuild it properly, and move forward with confidence.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Talk?</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Tell me where your child is now and where you want them to be. We'll identify the most useful next step together.
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
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[62px] max-w-[1100px] items-center justify-between px-[18px] md:h-[68px] md:px-6">
          <div className="flex items-center gap-2.5 text-gray-950">
            <img
              src={infiniteSolutionsLogo}
              alt="Infinite Solutions logo"
              className="h-10 w-auto object-contain md:h-[46px]"
            />
            <span className="flex flex-col justify-center leading-none">
              <span className="text-[15px] font-semibold tracking-tight text-slate-950 md:text-base">Infinite Solutions</span>
              <span className="mt-px text-[9px] font-semibold uppercase tracking-[0.24em] text-teal-700">Tutoring</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm items-center">
            <a href="#options" className="text-slate-700 hover:text-slate-950">Pricing</a>
            <a href="#about-kary" onClick={() => setShowAboutKary(true)} className="text-slate-700 hover:text-slate-950 cursor-pointer">About Kary</a>
            <a href="tel:4166065425" className="flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 font-medium text-white transition-colors hover:bg-teal-700">
              <span>📞</span> Call Kary
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded p-2 text-slate-900 hover:bg-slate-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200/70 bg-white md:hidden">
            <div className="space-y-3 px-[18px] py-4">
              <a 
                href="#options" 
                className="block py-2 font-medium text-slate-900 hover:text-teal-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about-kary" 
                className="block cursor-pointer py-2 font-medium text-slate-900 hover:text-teal-700"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowAboutKary(true);
                }}
              >
                About Kary
              </a>
              <a 
                href="https://readiness.privatetutoring.ca"
                className="block py-2 font-medium text-slate-900 hover:text-teal-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Readiness Check
              </a>
              <a 
                href="#faq" 
                className="block py-2 font-medium text-slate-900 hover:text-teal-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="tel:4166065425" 
                className="mt-4 block w-full rounded bg-slate-950 px-4 py-3 text-center font-medium text-white hover:bg-teal-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                📞 Call Kary
              </a>
              <a 
                href="https://readiness.privatetutoring.ca"
                className="block w-full rounded border border-teal-700 px-4 py-3 text-center font-medium text-teal-800 hover:bg-teal-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                See Support Options
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="order-1 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl" aria-hidden="true"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-blue-800 uppercase tracking-widest mb-5 shadow-sm">Ontario math • grades 7–12</p>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-950 mb-5 leading-[1.08]">Give your child a clear path to stronger results in <span className="relative inline-block text-blue-800 after:absolute after:inset-x-0 after:-bottom-1 after:h-2 after:rounded-full after:bg-teal-300/60 after:-z-10">math.</span></h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed">Find the hidden gaps behind the grade, so your child can catch up, start strong, or get ahead with confidence.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">We identify what is getting in the way, teach the highest-impact skills first, and build a focused plan your child can actually follow—without piling on more random worksheets.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://readiness.privatetutoring.ca" className="px-6 py-3.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 text-center shadow-lg shadow-blue-700/15 transition-all">Take the free readiness check</a>
                <a href="#options" className="px-6 py-3.5 border border-slate-300 bg-white/80 text-gray-900 font-medium rounded-lg hover:border-blue-300 hover:bg-white text-center transition-colors">Compare support options</a>
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
                  Illustrative example, not a real student result. <span className="font-semibold text-blue-800">The same overall mark can hide very different strengths and gaps.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section: What Does Your Child Need? */}
      <section className="order-2 py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 text-center">Choose the outcome your child needs next.</h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Catch Up",
                description: "We trace the current struggle back to the missing foundation, rebuild it in the right order, and verify that your child can use the skill without being led through every step.",
                photo: catchUpPhoto,
                photoAlt: "Student rebuilding core math skills with a tutor",
                cta: "Find the gaps",
                points: ["Diagnose the skill behind the low mark", "Teach the missing prerequisite clearly", "Practise until support can be reduced", "Track the result and adjust the plan"]
              },
              {
                title: "Start Strong",
                description: "We compare your child's current skills with what the next course will demand, strengthen the highest-priority areas first, and create a measured starting point for the term.",
                photo: startStrongPhoto,
                photoAlt: "Student preparing for math with personalized support",
                photoPosition: "object-[center_30%]",
                cta: "Check course readiness",
                points: ["Check readiness against course expectations", "Prioritize the gaps most likely to matter", "Teach and practise before the pressure rises", "Begin with a clear plan and baseline"]
              },
              {
                title: "Get Ahead",
                description: "We confirm the foundation is secure, introduce meaningful challenge, and measure mastery before moving forward so advancement creates independence—not shallow acceleration.",
                photo: getAheadPhoto,
                photoAlt: "Student exploring advanced math work with a tutor",
                cta: "Plan the next step",
                points: ["Confirm core skills are genuinely secure", "Preview upcoming concepts with purpose", "Develop deeper problem-solving strategies", "Increase challenge as mastery becomes visible"]
              }
            ].map((option, i) => (
              <article key={option.title} className={`premium-card overflow-hidden rounded-2xl flex flex-col ${i === 1 ? "md:-translate-y-2 border-blue-200" : ""}`}>
                <div className="aspect-[16/9] overflow-hidden border-b border-blue-100">
                  <img src={option.photo} alt={option.photoAlt} className={`h-full w-full object-cover ${option.photoPosition || "object-center"}`} loading="lazy" />
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
                  <a href="https://readiness.privatetutoring.ca" className="mt-6 block w-full rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-blue-800">
                    {option.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Parent Problem */}
      <section className="order-3 py-20 md:py-28 border-y border-slate-100 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4">The right help starts with the right diagnosis</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-950 mb-6">More practice only works when it targets the right problem.</h2>
            <p className="text-xl md:text-2xl font-medium text-slate-700 mb-6 leading-relaxed">A grade shows the result. It does not show the reason.</p>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>Two students can earn the same mark for completely different reasons. One may calculate accurately but struggle to reason through a new problem. Another may understand the concept but make mistakes applying it independently.</p>
              <p>More worksheets will not solve a problem that has not been identified. First we find the exact skill causing friction. Then we combine the right strategy, repeatable practice habits, and an accountable learning environment so your child can use the skill independently.</p>
              <p className="font-semibold text-gray-900">The goal is not to fill another tutoring hour. It is to create progress your child can see, feel, and build on.</p>
            </div>
            <a href="https://readiness.privatetutoring.ca" className="mt-9 inline-block px-6 py-3.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 shadow-lg shadow-blue-700/15 transition-colors">See what your child needs first</a>
          </div>
        </div>
      </section>

      {/* Section 4: The Offer */}
      <section id="options" className="order-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose the level of support that fits your child.</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">Start with a clear diagnosis, then choose the support needed to reach the goal. Every option is built around a simple progression: identify the priority, teach it clearly, practise with purpose, and track what improves.</p>
          
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
                    <p className="text-4xl font-bold text-gray-900 mb-8"><span className="text-lg text-gray-600">Starting at </span>$99 <span className="text-lg text-gray-600">+ HST</span></p>
                    
                    <ul className="space-y-3 mb-8">
                      {[
                        "Private prerequisite-skill review",
                        "Clear identification of individual gaps",
                        "Teaching focused on the highest-priority skill",
                        "Personalized practice for what comes next",
                        "A written September action plan",
                        "App-supported visibility into progress"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold mt-0.5">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center">Get your child's private plan</a>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">September Math Ready — Small Group</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-1"><span className="text-lg text-gray-600">Starting at </span>$49 <span className="text-lg text-gray-600">per student + HST</span></p>
                    <p className="text-sm text-gray-600 mb-8">For 2-3 students at similar grade/course level</p>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {[
                        "Review of shared prerequisite skills",
                        "Identification of common gaps",
                        "Guided instruction with peer momentum",
                        "Coached practice and September preparation",
                        "A supportive, accountable group environment"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-gray-400 font-bold mt-0.5">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">Best for friends at a similar level who benefit from shared momentum. Choose private for a deeper individual diagnosis.</p>
                    <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-100 text-center">Build momentum together</a>
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
                      <p className="font-semibold text-gray-900">Complete Progress Program</p>
                      <p className="text-sm text-gray-600">Strategy, practice, tracking, and accountability for a semester or year</p>
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
                          "Readiness assessment and individual learning plan",
                          "Bi-weekly focused tutoring sessions",
                          "Personalized practice between sessions",
                          "Full app access and skill-level tracking",
                          "Parent check-ins every 2 weeks",
                          "Continuous adjustment based on progress",
                          "End-of-semester progress report"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-amber-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 text-center">Book semester package</a>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-8">
                      <div className="inline-block px-3 py-1 bg-orange-300 text-orange-900 text-xs font-semibold rounded mb-4">Full Year</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Year Program</h3>
                      <p className="text-4xl font-bold text-orange-700 mb-2">$2,800</p>
                      <p className="text-sm text-gray-600 mb-8">Plus HST • 12 months of comprehensive support</p>
                      
                      <ul className="space-y-3 mb-8">
                        {[
                          "A clear year-long learning roadmap",
                          "Weekly 1-on-1 tutoring sessions",
                          "Personalized practice between sessions",
                          "Full app access with analytics",
                          "Monthly parent progress calls",
                          "Quarterly skill assessments",
                          "Support for strong study habits",
                          "Summer momentum plan",
                          "Progress tracked against identified goals"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-orange-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 text-center">Book year package</a>
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
                          "Focused 1-on-1 tutoring",
                          "Personalized to your child's current needs",
                          "Flexible scheduling",
                          "Target a specific math topic or skill",
                          "Ideal for immediate, short-term support"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-gray-400 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-100 text-center">Book individual sessions</a>
                    </div>

                    <div className="bg-white border-2 border-blue-600 rounded-lg p-8">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-4">Best value</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Support Plan</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-1">$349 <span className="text-lg text-gray-600">per month + HST</span></p>
                      <p className="text-sm text-gray-600 mb-8">Billed monthly, cancel anytime</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {[
                          "Regular 1-on-1 instruction with a clear roadmap",
                          "Personalized practice between sessions",
                          "App access and skill-level tracking",
                          "Consistent habits and accountability",
                          "Each session responds to actual progress",
                          "Best for steady, measurable development"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center">Build consistent progress</a>
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
                          <p className="font-semibold text-gray-900">Complete Progress Program</p>
                          <p className="text-sm text-gray-600">A complete environment for consistent semester or year-long progress</p>
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
                              "Bi-weekly focused tutoring sessions",
                              "Personalized practice between sessions",
                              "Full app access and skill-level tracking",
                              "Parent check-ins every 2 weeks",
                              "A learning plan adjusted to progress",
                              "Flexible scheduling around school",
                              "Mid-semester progress report"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-amber-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 text-center">Book semester package</a>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-8">
                          <div className="inline-block px-3 py-1 bg-orange-300 text-orange-900 text-xs font-semibold rounded mb-4">Full Year</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Year Program</h3>
                          <p className="text-4xl font-bold text-orange-700 mb-2">$3,500</p>
                          <p className="text-sm text-gray-600 mb-8">Plus HST • 12 months of comprehensive 1-on-1 support</p>
                          
                          <ul className="space-y-3 mb-8">
                            {[
                              "Weekly 1-on-1 tutoring within a clear roadmap",
                              "Personalized practice between sessions",
                              "Full app access with analytics",
                              "Monthly progress calls with parents",
                              "Quarterly skill assessments",
                              "Summer momentum plan",
                              "A consistent tutor relationship",
                              "Progress tracked against identified goals"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 text-center">Book year package</a>
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Small Group Sessions</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-1">$49 <span className="text-lg text-gray-600">per student/hour + HST</span></p>
                      <p className="text-sm text-gray-600 mb-8">For 2-3 students at similar level</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {[
                          "Targeted instruction for a matched small group",
                          "A shared goal with room for individual support",
                          "Flexible scheduling",
                          "Peer momentum and coached practice",
                          "Book sessions when the group needs them"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-gray-400 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 border-2 border-gray-300 text-gray-900 font-medium rounded hover:bg-gray-100 text-center">Book group sessions</a>
                    </div>

                    <div className="bg-white border-2 border-blue-600 rounded-lg p-8">
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded mb-4">Best value</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Support Plan</h3>
                      <p className="text-4xl font-bold text-gray-900 mb-1">$199 <span className="text-lg text-gray-600">per student/month + HST</span></p>
                      <p className="text-sm text-gray-600 mb-8">Billed monthly, cancel anytime</p>
                      
                      <ul className="space-y-3 mb-8 flex-grow">
                        {[
                          "Regular tutoring with a well-matched peer group",
                          "Personalized practice between sessions",
                          "App access and individual skill tracking",
                          "Peer momentum, participation, and accountability",
                          "Teaching responds to group and individual progress",
                          "Best for students who learn well alongside others"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-blue-600 font-bold mt-0.5">✓</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center">Join the monthly group plan</a>
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
                          <p className="font-semibold text-gray-900">Complete Group Progress Program</p>
                          <p className="text-sm text-gray-600">A structured peer environment for semester or year-long progress</p>
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
                              "Bi-weekly sessions with a consistent small group",
                              "Personalized practice between sessions",
                              "Full app access and individual skill tracking",
                              "Bi-weekly progress updates",
                              "Peer momentum and coached practice",
                              "Group and individual progress monitoring",
                              "Mid-semester progress report"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-amber-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 text-center">Book semester package</a>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg p-8">
                          <div className="inline-block px-3 py-1 bg-orange-300 text-orange-900 text-xs font-semibold rounded mb-4">Full Year</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Year Program</h3>
                          <p className="text-4xl font-bold text-orange-700 mb-2">$2,200</p>
                          <p className="text-sm text-gray-600 mb-8">Plus HST per student • 12 months of comprehensive group support</p>
                          
                          <ul className="space-y-3 mb-8">
                            {[
                              "Weekly sessions with a consistent small group",
                              "Personalized practice between sessions",
                              "Full app access with analytics",
                              "Monthly check-ins with parents",
                              "Quarterly skill assessments",
                              "Summer momentum plan",
                              "Collaborative and individual tracking",
                              "Progress tracked against identified goals"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="text-orange-600 font-bold mt-0.5">✓</span>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a href="https://booking.privatetutoring.ca/" className="block w-full px-6 py-3 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 text-center">Book year package</a>
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

      {/* Section 6: App Proof */}
      <section className="order-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Know what is improving—not just how many sessions were completed.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "The dashboard turns tutoring progress into something your family can actually see. Instead of wondering what happened during a session, you can identify which skills are improving, which ones still need attention, and where tutoring will make the greatest difference next.", label: "Progress Dashboard", image: appHomeScreenshot},
              {title: "Personalized practice gives your child a focused next step connected to the skills being taught. This replaces random worksheets with purposeful work, reduces overwhelm, and gives the tutor useful evidence of what your child can complete independently between sessions.", label: "Personalized Practice", image: appHomeworkScreenshot},
              {title: "Skill mastery shows progress at the level that matters: what your child can now understand and apply. Visible wins build motivation, while incomplete skills tell us when to adjust the explanation, add practice, or delay the next challenge until the foundation is secure.", label: "Skill Mastery", image: appMasteryScreenshot}
            ].map((item, i) => (
              <div key={item.label} className="space-y-5">
                <div className="premium-card overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-white p-4">
                  <div className="overflow-hidden rounded-xl bg-slate-100 aspect-square">
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

          <p className="text-gray-600 mt-12 text-center max-w-2xl mx-auto leading-relaxed">The app keeps everyone aligned: your child knows what to practise, you can see the evidence of progress, and each session begins with the next highest-impact step.</p>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="order-5 py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50">
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
              },
              {
                text: "Student since grade 8, currently in grade 11. Kary breaks down and explains lesson and work material in a way that’s easy to understand. 10/10!",
                byline: "Jason, Student"
              },
              {
                text: "Kary and team are fantastic. Some tutors just know how to connect with young people and speak to them in a manner that motivates students rather than deflates them. As a parent, I also find the team to be professional. I highly recommend the service!",
                byline: "Michelle, Parent"
              }
            ].map((review, i) => (
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
                <p id={`review-text-${i}`} className={`text-gray-700 italic leading-relaxed ${expandedReviews[i] ? "mb-3" : "mb-3 line-clamp-4"}`}>{review.text}</p>
                {review.text.length > 170 && (
                  <button
                    type="button"
                    onClick={() => setExpandedReviews((current) => ({ ...current, [i]: !current[i] }))}
                    className="mb-5 self-start text-sm font-semibold text-blue-700 hover:text-blue-900"
                    aria-expanded={Boolean(expandedReviews[i])}
                    aria-controls={`review-text-${i}`}
                  >
                    {expandedReviews[i] ? "Read less" : "Read more"}
                  </button>
                )}
                <div className="mt-auto flex items-center gap-3 border-t border-gray-100 pt-5">
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
      <section className="order-7 py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">This is a strong fit for the student who...</h2>
          
          <div className="max-w-2xl">
            <p className="text-gray-700 mb-8 font-medium">September Math Ready can help if your child:</p>
            <ul className="space-y-3 mb-12">
              {[
                "Is entering Grades 7-12 in Ontario",
                "May have gaps from the previous course",
                "Has marks that do not tell the whole story",
                "Understands with help but struggles independently",
                "Wants to begin the next course with confidence",
                "Needs a clear priority instead of more random practice",
                "Is doing well and wants to prepare ahead"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-900"><span className="font-medium">Not only for students who are behind:</span> Strong students can use the session to uncover quieter weak spots, preview the next course, and turn good results into greater independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Kary Teaser */}
      <section id="about-kary" className="order-8 py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Kary</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I help Ontario students in Grades 7-12 move from “I don't get it” to a clear understanding of what is missing and what to do next.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My approach combines three things that make progress stick: a clear strategy for the right skills, habits built through focused practice, and an accountable learning environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setShowAboutKary(true);
                    window.requestAnimationFrame(() => {
                      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                    });
                  }}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 text-center"
                >
                  See How I Teach
                </button>
                <a href="tel:4166065425" className="px-6 py-3 border-2 border-green-600 text-green-600 font-medium rounded hover:bg-green-50 text-center">
                  📞 Call Kary
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
              <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-100 shadow-sm">
                <img
                  src={karyPortrait}
                  alt="Kary, founder of Infinite Solutions"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="text-gray-500 mb-4">Kary, Founder</p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The goal is not more tutoring hours. It is the right explanation, the right practice, and a student who can move forward independently."
              </p>
              <a href="tel:4166065425" className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                📞 (416) 606-5425
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: FAQ */}
      <section id="faq" className="order-9 py-16 md:py-24">
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
      <section className="order-10 py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Give your child a clear next step in math.</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">Start with a free readiness check to uncover the skills behind the grade. Then choose the support that gives your child the right strategy, stronger habits, and steady accountability.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://readiness.privatetutoring.ca" className="px-6 py-3 bg-white text-blue-600 font-medium rounded hover:bg-gray-50">Take the free readiness check</a>
            <a href="https://booking.privatetutoring.ca/" className="px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-blue-600">Book a private planning session</a>
          </div>

          <p className="text-blue-100"><a href="https://booking.privatetutoring.ca/" className="underline hover:text-white">Already a current client? Book your next session →</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="order-11 bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">Infinite Solutions Tutoring</p>
          <p className="text-sm text-gray-400">Ontario math support for Grades 7–12</p>
        </div>
      </footer>
      </main>
        </>
      )}
    </div>
  );
};

export default Landing;
