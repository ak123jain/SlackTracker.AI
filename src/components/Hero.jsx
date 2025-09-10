 import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Minimal in-file UI primitives
const Button = ({ className = "", children, ...props }) => (
  <button
    className={`px-4 py-2 rounded-2xl shadow-sm hover:shadow-md active:shadow-sm transition whitespace-nowrap ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800/50 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
    {children}
  </span>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-5 shadow-sm ${className}`}>{children}</div>
);

const Section = ({ id, title, eyebrow, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
    <div className="mb-8 sm:mb-12">
      {eyebrow && (
        <div className="mb-3">
          <Badge>{eyebrow}</Badge>
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-4xl font-semibold text-zinc-100 tracking-tight">
          {title}
        </h2>
      )}
    </div>
    {children}
  </section>
);

// Simple mock chart component
const MiniChart = () => (
  <svg viewBox="0 0 200 60" className="w-full h-20">
    <defs>
      <linearGradient id="grad" x1="0" x2="1">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <polyline
      fill="none"
      stroke="url(#grad)"
      strokeWidth="3"
      points="0,55 15,50 30,48 45,40 60,42 75,35 90,20 105,28 120,25 135,15 150,22 165,10 180,8 195,5"
    />
  </svg>
);

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

   const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/registeruser`, // API endpoint
        { email } // request body
      );

      console.log( "😂", res);
      

     } catch (error) {
       console.log(error);
       
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-zinc-200">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 backdrop-blur bg-black/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400" />
            <span className="text-lg font-semibold tracking-tight">SlackTracker.AI</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it Works</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <Button className="bg-white text-black font-medium">Get on the waitlist</Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pt-16 sm:pt-24 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 items-center">
          <div>
            <Badge>Coming soon to YC '26*</Badge>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              No clarity. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Only motion.</span>
            </h1>
            <p className="mt-4 text-zinc-300 text-lg leading-7">
              SlackTracker.AI detects your idle time and fills it with <span className="italic">artificial chaotic tasks</span>—so everyone looks busy, no one asks the hard questions, and middle management sleeps peacefully.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-300">
              <li>• Auto-creates Jira tickets like <em>“Revisit roadmap”</em></li>
              <li>• Books 30‑min blocks titled <em>“Quick brainstorm”</em> (with yourself)</li>
              <li>• Adds comments in docs: <em>“let’s rethink this”</em></li>
              <li>• Schedules syncs across incompatible time zones</li>
            </ul>
            <form onSubmit={onSubmit} className="mt-8 flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <Button className="bg-emerald-400/90 text-black font-semibold hover:bg-emerald-400">Join waitlist</Button>
            </form>
            {submitted && (
              <p className="mt-3 text-emerald-300">You're in. Expect 200 fake tasks, 50 calendar invites, and one passive‑aggressive Notion comment.</p>
            )}
            <p className="mt-4 text-xs text-zinc-500">* Parody. Calm down, Legal.</p>
          </div>

          {/* Mock dashboard */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="">
            <Card className="p-0 overflow-hidden">
              <div className="bg-gradient-to-tr from-zinc-900 to-black p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-zinc-200 font-medium">Busy‑ness Console</h3>
                  <Badge>Live</Badge>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-5">
                  <Card>
                    <div className="text-3xl font-semibold">14</div>
                    <div className="text-sm text-zinc-400">Back‑to‑back meetings</div>
                  </Card>
                  <Card>
                    <div className="text-3xl font-semibold">78</div>
                    <div className="text-sm text-zinc-400">Jira tickets opened</div>
                  </Card>
                  <Card>
                    <div className="text-3xl font-semibold">∞</div>
                    <div className="text-sm text-zinc-400">Docs to “rethink”</div>
                  </Card>
                </div>
                <div className="mt-6">
                  <MiniChart />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-0 border-t border-zinc-800">
                <div className="p-5">
                  <h4 className="font-medium">Auto-chaos engine</h4>
                  <p className="text-sm text-zinc-400 mt-2">Our model detects peace of mind and immediately neutralizes it with invites, @mentions, and low-context comments.</p>
                </div>
                <div className="p-5 border-l border-zinc-800">
                  <h4 className="font-medium">Calendar flood</h4>
                  <p className="text-sm text-zinc-400 mt-2">Optimized to appear strategic while saying nothing specific. Synergizes best with quarterly OKRs.</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <Section id="features" title="Features that ensure motion (not progress)" eyebrow="Features">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              t: "Ambient Busyness",
              d: "Detects inactivity and deploys plausible work artifacts within seconds.",
            },
            { t: "Manager‑safe Defaults", d: "Every task sounds strategic but is assignable to nobody." },
            { t: "Tone‑Perfect Comments", d: "Adds vague phrases like ‘circle back’ and ‘tighten scope’." },
            { t: "Timezone Mischief", d: "Finds the most inconvenient hour for everyone." },
            { t: "Integration Soup", d: "Slack, Jira, Notion, Google Docs, Drive, Calendar — all equally abused." },
            { t: "AI Guilt Pings", d: "‘Gentle nudge’ notifications that feel like HR wrote them." },
          ].map((f) => (
            <Card key={f.t}>
              <h3 className="font-medium text-zinc-100">{f.t}</h3>
              <p className="text-sm text-zinc-400 mt-2">{f.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* HOW */}
      <Section id="how" title="How it works" eyebrow="Workflow">
        <div className="grid gap-6 sm:grid-cols-4">
          {[
            { n: 1, t: "Connect", d: "OAuth to Slack/Google. We promise to only weaponize calendar gently." },
            { n: 2, t: "Observe", d: "We detect boredom, peace, or clarity." },
            { n: 3, t: "Manufacture", d: "Generate Jira/Docs/Invites. Sprinkle @mentions." },
            { n: 4, t: "Amplify", d: "Create chatter loops until Friday retro." },
          ].map((s) => (
            <Card key={s.n}>
              <div className="text-2xl font-semibold mb-2">{s.n}</div>
              <h4 className="font-medium">{s.t}</h4>
              <p className="text-sm text-zinc-400 mt-2">{s.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" title="Pricing built for maximum motion" eyebrow="Pricing">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <h3 className="text-xl font-semibold">Side‑Quest</h3>
            <p className="mt-2 text-zinc-400">Free trial</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• 200 fake tasks</li>
              <li>• 50 calendar invites</li>
              <li>• 1 passive‑aggressive Notion comment</li>
            </ul>
            <Button className="mt-6 bg-white text-black font-medium w-full">Start free</Button>
          </Card>
          <Card className="border-emerald-500/40">
            <h3 className="text-xl font-semibold">Middle Manager</h3>
            <p className="mt-2 text-zinc-400">$19 / user / mo</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Unlimited Jira fog</li>
              <li>• Priority calendar chaos</li>
              <li>• Auto‑retro templates</li>
            </ul>
            <Button className="mt-6 bg-emerald-400 text-black font-semibold w-full">Buy now</Button>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Enterprise (Steering Committee)</h3>
            <p className="mt-2 text-zinc-400">Custom</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• SSO, DLP that nobody configures</li>
              <li>• Quarterly alignment ceremonies</li>
              <li>• Dedicated noise architect</li>
            </ul>
            <Button className="mt-6 bg-zinc-800 text-white font-medium w-full border border-zinc-700">Talk to sales</Button>
          </Card>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Case study" title="“One SDR did 14 back‑to‑backs. He now identifies as a product manager.”">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { a: "SDR, B2B SaaS", q: "Finally, an app that understands our culture of motion." },
            { a: "VP Ops", q: "Meetings up 300%. Morale unchanged. Perfect." },
            { a: "Founder's Friend", q: "I thought it was satire. Then procurement signed it." },
          ].map((t, i) => (
            <Card key={i}>
              <p className="text-zinc-100">“{t.q}”</p>
              <p className="text-sm text-zinc-400 mt-3">— {t.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Frequently Asked (by Legal)">
        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <h4 className="font-medium">Is this… satire?</h4>
            <p className="text-sm text-zinc-400 mt-2">Absolutely. But the waitlist is real. So are your meetings.</p>
          </Card>
          <Card>
            <h4 className="font-medium">Does it integrate with Slack, Jira, Google, Notion?</h4>
            <p className="text-sm text-zinc-400 mt-2">In theory. In practice, we integrate with the fear of looking idle.</p>
          </Card>
          <Card>
            <h4 className="font-medium">Is there an ROI?</h4>
            <p className="text-sm text-zinc-400 mt-2">Yes. Return On Illusion. Charts included.</p>
          </Card>
          <Card>
            <h4 className="font-medium">Can we disable Friday 5pm invites?</h4>
            <p className="text-sm text-zinc-400 mt-2">Enterprise plan only. Our lawyers insist.</p>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/60">
        <div className="mx-auto max-w-6xl px-5 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} SlackTracker.AI — A Productivity Parody</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-zinc-200">Terms (satirical)</a>
            <a href="#" className="hover:text-zinc-200">Privacy (we value your chaos)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
