import { useState } from "react";
import {
  ArrowRight, Phone, Mail, MapPin, Instagram, Facebook, Clock, Calendar,
  Trophy, Users, Target, Dumbbell, Star, Sparkles, ShieldCheck,
  Heart, Flame, Award, ChevronDown, ShoppingBag, Send,
  HelpCircle, Baby, UserCheck, MapPinned, Plane, MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Navbar } from "@/components/focus/Navbar";
import { SectionHeading } from "@/components/focus/SectionHeading";

import heroPlayer from "@/assets/hero-player.jpg";
import teamHuddle from "@/assets/team-huddle.jpg";
import ballCourt from "@/assets/ball-court.jpg";
import trainDribble from "@/assets/training-dribble.jpg";
import trainGroup from "@/assets/training-group.jpg";
import trainGame from "@/assets/training-game.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import coach4 from "@/assets/coach-4.jpg";
import merchJerseyCloseup from "@/assets/merch-jersey-closeup.jpg";
import merchJerseyAction from "@/assets/merch-jersey-action.jpg";
import merchHoodieCloseup from "@/assets/merch-hoodie-closeup.jpg";
import merchHoodieAction from "@/assets/merch-hoodie-action.jpg";
import merchShortsCloseup from "@/assets/merch-shorts-closeup.jpg";
import merchShortsAction from "@/assets/merch-shorts-action.jpg";
import merchCapCloseup from "@/assets/merch-cap-closeup.jpg";
import merchCapAction from "@/assets/merch-cap-action.jpg";
import merchBallCloseup from "@/assets/merch-ball-closeup.jpg";
import merchBallAction from "@/assets/merch-ball-action.jpg";
import merchPackCloseup from "@/assets/merch-pack-closeup.jpg";
import merchPackAction from "@/assets/merch-pack-action.jpg";

const values = [
  { icon: ShieldCheck, label: "Confidence" },
  { icon: Target, label: "Discipline" },
  { icon: Users, label: "Teamwork" },
  { icon: Heart, label: "Respect" },
  { icon: Dumbbell, label: "Skill Development" },
  { icon: Flame, label: "Competitive Spirit" },
  { icon: Sparkles, label: "Fun & Enjoyment" },
];

const programs = [
  {
    title: "Beginner Training",
    desc: "For young players new to basketball — basics of dribbling, passing, shooting, footwork and game rules in a fun, encouraging environment.",
    img: trainDribble,
    tag: "Ages 4–8",
    ages: "4–8 years",
    location: "Castle Hill RSL Sports Centre — Court 2, Castle Hill, NSW",
    time: "Saturdays · 9:00 AM – 10:00 AM",
    duration: "60 minutes per session",
    full: "A welcoming introduction to basketball for first-time players. Sessions focus on fundamental movement, basic ball handling, two-hand passing, simple shooting form, and learning the rules of the game through fun, structured drills and small-sided games.",
  },
  {
    title: "One-on-One Training",
    desc: "Personalised coaching for fast improvement, technique correction and confidence building tailored to each player.",
    img: ballCourt,
    tag: "All Ages",
    ages: "6–14 years",
    location: "Bernie Mullane Sports Complex — Show Court, Kellyville, NSW",
    time: "Weekdays · 4:00 PM – 7:00 PM (by booking)",
    duration: "45 or 60 minute slots",
    full: "Fully personalised one-on-one coaching tailored to your player's level and goals. Sessions target shooting mechanics, finishing, ball handling, footwork, defensive stance and basketball IQ. Detailed feedback is given to both player and parent after every session.",
  },
  {
    title: "Small Group Training",
    desc: "Focused sessions with similar age & ability — ball handling, shooting, footwork, decision-making and game awareness.",
    img: trainGroup,
    tag: "3–6 Players",
    ages: "8–12 years",
    location: "Bernie Mullane Sports Complex — Court 3, Kellyville, NSW",
    time: "Wednesdays · 5:00 PM – 6:15 PM",
    duration: "75 minutes per session",
    full: "Small group sessions of 3–6 players grouped by age and ability. Players develop ball handling, shooting form, footwork, defensive principles, decision-making and game awareness through high-rep drills and competitive small-sided games.",
  },
  {
    title: "Team Training",
    desc: "Structured sessions for Focus Court teams preparing for local competitions, plays, sets and game-day execution.",
    img: teamHuddle,
    tag: "Team Squads",
    ages: "9–14 years",
    location: "Hills Basketball Stadium — Baulkham Hills, NSW",
    time: "Tuesdays & Thursdays · 6:00 PM – 7:30 PM",
    duration: "90 minutes per session",
    full: "Squad training for Focus Court teams competing in Hills Hornets domestic competitions. Sessions cover offensive sets, defensive systems, transition basketball, set plays, conditioning, and detailed game-day preparation.",
  },
  {
    title: "Advanced Player Development",
    desc: "For committed players — competitiveness, fitness, advanced offence & defence, and basketball IQ.",
    img: trainGame,
    tag: "Elite Pathway",
    ages: "11–14 years",
    location: "Hills Basketball Stadium — Show Court, Baulkham Hills, NSW",
    time: "Mondays & Fridays · 6:30 PM – 8:30 PM",
    duration: "120 minutes per session",
    full: "An elite pathway program for committed players targeting representative basketball. Includes advanced offensive and defensive concepts, position-specific skill work, strength & conditioning, film review and competitive scrimmages against high-level opposition.",
  },
];

const coaches = [
  {
    name: "Coach Marcus Reid",
    role: "Head Coach",
    exp: "15+ years coaching",
    bg: "Former state-level player & development specialist.",
    img: coach1,
    intro: "Marcus founded Focus Court with a simple mission: build confident young players who love the game. He leads the club's coaching philosophy and oversees every program from beginners to the elite pathway.",
    education: "Bachelor of Sport & Exercise Science — University of Sydney",
    school: "The King's School, Parramatta",
    coachingStyle: "High-intensity, fundamentals-first. Marcus runs structured sessions built around shooting mechanics, defensive principles and basketball IQ, with strong feedback for both player and parent.",
    teams: "Head Coach — Focus Court U14 Boys Rep · Assistant Coach — Hills Hornets Youth League · Former player at NSW State Junior level.",
    experience: "15+ years coaching across domestic, representative and academy programs in Sydney.",
  },
  {
    name: "Coach Lena Park",
    role: "Skills Development Coach",
    exp: "10+ years experience",
    bg: "Specialises in shooting mechanics and ball-handling.",
    img: coach2,
    intro: "Lena is a skills specialist obsessed with the details of shooting form, footwork and ball-handling. She runs the majority of Focus Court's one-on-one and small group sessions.",
    education: "Bachelor of Education (Health & PE) — Australian Catholic University",
    school: "Hills Sports High School",
    coachingStyle: "Technical and patient. Lena breaks every skill down into repeatable cues, then layers them into game-speed reps so players can use them under pressure.",
    teams: "Skills Coach — Focus Court U10 & U12 Girls · Former WNBL pathway player with the Sydney Uni Flames Academy.",
    experience: "10+ years working with junior players aged 5–16, including private skills work for representative athletes.",
  },
  {
    name: "Coach Tyler Brooks",
    role: "Team Coach",
    exp: "8+ years experience",
    bg: "Builds disciplined, competitive game-ready teams.",
    img: coach3,
    intro: "Tyler runs Focus Court's competitive squads. He's the coach you want on the bench when the game is on the line — calm, structured and relentless about effort.",
    education: "Diploma of Sport Coaching — TAFE NSW · Basketball Australia Level 2 Accreditation",
    school: "Castle Hill High School",
    coachingStyle: "Game-focused and disciplined. Tyler's sessions emphasise team defence, transition basketball, set plays and accountability.",
    teams: "Head Coach — Focus Court U12 & U14 Hills Hornets squads · Former captain of Bernie Mullane Senior Men's Division 1.",
    experience: "8+ years coaching domestic and representative teams across the Hills District.",
  },
  {
    name: "Coach Jamie Carter",
    role: "Junior Development Coach",
    exp: "6+ years experience",
    bg: "Champion of fundamentals and confidence for young players.",
    img: coach4,
    intro: "Jamie leads Focus Court's youngest groups. Their sessions are high-energy, full of small-sided games, and designed to make every 4–8 year old fall in love with basketball.",
    education: "Bachelor of Primary Education — Macquarie University · Basketball Australia Level 1 Accreditation",
    school: "Baulkham Hills High School",
    coachingStyle: "Fun-first, fundamentals always. Jamie uses games-based coaching so younger players develop coordination, confidence and basic skills without even realising they're drilling.",
    teams: "Lead Coach — Focus Court Mini Ballers (Ages 4–8) · Assistant — U10 Hills Hornets Boys.",
    experience: "6+ years coaching junior basketball, school holiday clinics and after-school basketball programs.",
  },
];

const products = [
  { id: "jersey", name: "Focus Court Training Jersey", desc: "Lightweight performance jersey for training & games.", price: 49, img: trainGame },
  { id: "hoodie", name: "Focus Court Hoodie", desc: "Premium club hoodie — warm-up ready.", price: 69, img: teamHuddle },
  { id: "shorts", name: "Focus Court Shorts", desc: "Match-grade shorts with team detailing.", price: 39, img: trainDribble },
  { id: "cap", name: "Focus Court Cap", desc: "Embroidered club cap, adjustable fit.", price: 29, img: ballCourt },
  { id: "ball", name: "Focus Court Basketball", desc: "Indoor/outdoor composite leather size 5/6/7.", price: 45, img: ballCourt },
  { id: "pack", name: "Focus Court Training Pack", desc: "Jersey + shorts + ball + drawstring bag.", price: 129, img: trainGroup },
];


const faqs: {
  q: string;
  a: string;
  icon: typeof HelpCircle;
  tint: string;
  link?: { href: string; label: string };
}[] = [
  {
    q: "What age groups can join Focus Court?",
    a: "Players aged 4–14 across beginner, developing and competitive levels.",
    icon: Baby,
    tint: "from-court-orange to-court-orange-glow",
    link: { href: "#about", label: "About the club" },
  },
  {
    q: "Does my child need basketball experience?",
    a: "No experience needed — our Beginner Training is built for first-time players.",
    icon: Sparkles,
    tint: "from-electric-blue to-court-orange",
    link: { href: "#training", label: "View training programs" },
  },
  {
    q: "Do you offer one-on-one training?",
    a: "Yes — personalised 1-on-1 coaching for every age and skill level.",
    icon: UserCheck,
    tint: "from-court-orange to-electric-blue",
    link: { href: "#training", label: "See 1-on-1 program" },
  },
  {
    q: "Can my child join a team?",
    a: "Absolutely. We run age and ability-based teams across multiple divisions.",
    icon: Users,
    tint: "from-electric-blue to-electric-blue",
    link: { href: "#teams", label: "Browse our teams" },
  },
  {
    q: "Do Focus Court teams play in Hills Hornets?",
    a: "Yes — our teams compete in Hills Hornets local competitions.",
    icon: MapPinned,
    tint: "from-court-orange-glow to-court-orange",
    link: { href: "#teams", label: "Teams & competitions" },
  },
  {
    q: "Do you offer travel competitions?",
    a: "Yes — pathways to rep-style trips including Canberra tournaments.",
    icon: Plane,
    tint: "from-electric-blue to-court-orange-glow",
    link: { href: "#teams", label: "Travel opportunities" },
  },
  {
    q: "How do we buy merchandise?",
    a: "Browse the Shop, tap Buy Now and contact a coach to order — or order in person.",
    icon: ShoppingBag,
    tint: "from-court-orange to-court-orange-glow",
    link: { href: "#shop", label: "Shop merchandise" },
  },
  {
    q: "How do we contact a coach?",
    a: "Use the Contact section, the Join form, or tap Contact a Coach.",
    icon: MessageCircle,
    tint: "from-electric-blue to-court-orange",
    link: { href: "#contact", label: "Contact us" },
  },
];

const Index = () => {
  const [form, setForm] = useState({
    parentName: "", playerName: "", playerAge: "", experience: "",
    program: "", contactMethod: "", phone: "", email: "", message: "",
  });
  const [openProgram, setOpenProgram] = useState<number | null>(null);
  const activeProgram = openProgram !== null ? programs[openProgram] : null;
  const [openCoach, setOpenCoach] = useState<number | null>(null);
  const activeCoach = openCoach !== null ? coaches[openCoach] : null;
  const [heroExpanded, setHeroExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const needsPhone = form.contactMethod === "phone" || form.contactMethod === "text";
    const needsEmail = form.contactMethod === "email" || form.contactMethod === "";

    const checks: { value: string; label: string }[] = [
      { value: form.parentName, label: "Parent Name" },
      { value: form.playerName, label: "Player Name" },
      { value: form.playerAge, label: "Player Age" },
      { value: form.experience, label: "Experience Level" },
      { value: form.program, label: "Interested Program" },
      { value: form.contactMethod, label: "Preferred Contact" },
    ];
    if (needsPhone) checks.push({ value: form.phone, label: "Phone" });
    if (needsEmail) checks.push({ value: form.email, label: "Email" });

    const missing = checks.find((c) => !c.value);
    if (missing) {
      toast.error(`Please select something (${missing.label}) — you can't submit the form.`);
      return;
    }
    toast.success(
      `Thanks ${form.parentName}! We've received ${form.playerName}'s application — we'll work to find the best team and coach to suit them.`,
      { duration: 6000 }
    );
    setForm({ parentName: "", playerName: "", playerAge: "", experience: "", program: "", contactMethod: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 court-lines opacity-60" />
        <div className="absolute inset-0">
          <img src={heroPlayer} alt="Young basketball player taking jump shot" className="h-full w-full object-cover opacity-50 mix-blend-luminosity" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-court-orange/40 bg-court-orange/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-court-orange">
              <span className="h-2 w-2 rounded-full bg-court-orange animate-pulse" /> Hills District Youth Basketball
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white">
              FOCUS<br />
              <span className="text-court-orange">COURT</span><br />
              <span className="text-stroke">BASKETBALL</span>
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
              Building confident young players through training, teamwork, competition, and love for the game.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild><a href="#join">Join Focus Court <ArrowRight /></a></Button>
              <Button variant="ghostHero" size="xl" asChild><a href="#contact">Contact a Coach</a></Button>
              <Button variant="ghostHero" size="xl" asChild><a href="#training">View Programs</a></Button>
              <Button variant="ghostHero" size="xl" asChild><a href="#shop">Shop Merch</a></Button>
            </div>
            <div className="max-w-2xl border-l-2 border-court-orange pl-4">
              <p className="text-sm text-white/60">
                Focus Court is a youth basketball club for players aged 4–14, offering skill development, team training, competitive games, and pathways for players who want to grow in the sport.
              </p>
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  heroExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-white/60">
                    Built around strong coaching, a supportive team culture and a real love for the game, the club gives every young player the chance to grow their skills, build confidence and discover what they're capable of on the court. From their very first dribble to representing the club in competitive games, players are guided through a clear development pathway in an environment that values discipline, respect, teamwork and fun in equal measure. Focus Court is where young athletes find their game, their teammates and a place that feels like home.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setHeroExpanded((v) => !v)}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-court-orange hover:text-court-orange/80 transition-smooth"
                aria-expanded={heroExpanded}
              >
                {heroExpanded ? "Read less" : "Read more"}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${heroExpanded ? "rotate-180" : "rotate-0"}`} />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="grid grid-cols-2 gap-4 max-w-md">
              {[
                { n: "4–14", l: "Age Groups" },
                { n: "5", l: "Programs" },
                { n: "10+", l: "Active Teams" },
                { n: "100%", l: "Player Focused" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 text-white animate-bounce-in">
                  <div className="font-display text-5xl text-court-orange">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-white/70 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <ChevronDown className="animate-bounce" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-soft-mix relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-court-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-electric-blue/15 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={teamHuddle} alt="Focus Court team huddle" loading="lazy" width={1280} height={900} className="rounded-2xl shadow-bold" />
              <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-orange text-white p-6 rounded-2xl shadow-orange max-w-[220px]">
                <Trophy className="mb-2" />
                <div className="font-display text-2xl leading-tight">Develop. Compete. Belong.</div>
              </div>
            </div>
            <div>
              <SectionHeading
                title="A Real Club. Real Coaching. Real Game Time."
                subtitle="Focus Court is more than a basketball club — it's a community built around developing young athletes both on and off the court. Through structured coaching, supportive mentorship and a strong team culture, we help players build the skills, confidence, discipline and resilience that shape them as both athletes and people. Whether a player is picking up a ball for the very first time or chasing the next level of competition, our environment is designed to challenge, encourage and inspire every step of the journey."
                align="left"
              />
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {values.map((v) => (
                  <div key={v.label} className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-3 hover:border-court-orange hover:bg-court-orange/5 transition-smooth">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-orange text-white">
                      <v.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-navy-deep">{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section id="training" className="py-24 bg-gradient-court text-white relative overflow-hidden">
        <div className="absolute inset-0 court-lines opacity-30" />
        <div className="container relative mx-auto px-4">
          <SectionHeading
            light
            title="Built For Every Stage Of A Player's Journey"
            subtitle="Our training programs are designed to meet players exactly where they are and guide them toward where they want to go. With pathways spanning beginner foundations through to advanced player development, every session focuses on building strong fundamentals, basketball intelligence, athletic confidence and a love for the game. Players progress in supportive, well-structured environments led by experienced coaches who tailor each program to maximise growth, enjoyment and long-term development."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <button
                type="button"
                key={p.title}
                onClick={() => setOpenProgram(i)}
                className="group flex flex-col rounded-2xl bg-navy/60 border border-white/10 hover:border-court-orange transition-smooth text-left focus:outline-none focus:ring-2 focus:ring-court-orange"
                aria-label={`View details for ${p.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover group-hover:scale-110 transition-bounce" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-court-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">{p.tag}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 border-t border-white/10 bg-navy-deep rounded-b-2xl">
                  <div className="font-display text-3xl text-white mb-2">{String(i + 1).padStart(2, "0")} / {p.title}</div>
                  <p className="text-sm text-white/75 leading-relaxed">{p.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-court-orange">
                    View details <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <Dialog open={openProgram !== null} onOpenChange={(o) => !o && setOpenProgram(null)}>
            <DialogContent className="max-w-2xl bg-navy-deep border-white/10 text-white max-h-[90vh] overflow-y-auto !grid-cols-1 !block">
              {activeProgram && (
                <>
                  <DialogHeader>
                    <span className="inline-flex w-fit rounded-full bg-court-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white mb-2">
                      {String((openProgram ?? 0) + 1).padStart(2, "0")} / Program
                    </span>
                    <DialogTitle className="font-display text-3xl text-white">
                      {activeProgram.title}
                    </DialogTitle>
                    <DialogDescription className="text-white/75 leading-relaxed pt-2">
                      {activeProgram.full}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="aspect-[16/9] overflow-hidden rounded-xl mt-4">
                    <img src={activeProgram.img} alt={activeProgram.title} className="h-full w-full object-cover block" />
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="text-xs font-bold uppercase tracking-wider text-court-orange mb-4">
                      Program Details
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Users className="h-4 w-4" /> Age Group
                      </div>
                      <div className="text-white font-semibold">{activeProgram.ages}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Clock className="h-4 w-4" /> Session Length
                      </div>
                      <div className="text-white font-semibold">{activeProgram.duration}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4 sm:col-span-2">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Calendar className="h-4 w-4" /> Day & Time
                      </div>
                      <div className="text-white font-semibold">{activeProgram.time}</div>
                    </div>
                      <div className="rounded-xl border border-white/10 bg-navy/60 p-4 sm:col-span-2">
                        <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                          <MapPin className="h-4 w-4" /> Location
                        </div>
                        <div className="text-white font-semibold">{activeProgram.location}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button variant="hero" size="lg" className="flex-1" asChild>
                      <a href="#join" onClick={() => setOpenProgram(null)}>Apply For This Program</a>
                    </Button>
                    <Button variant="ghostHero" size="lg" className="flex-1" asChild>
                      <a href="#contact" onClick={() => setOpenProgram(null)}>Contact a Coach</a>
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* TEAMS */}
      <section id="teams" className="py-24 bg-soft-blue relative overflow-hidden">
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-electric-blue/10 blur-3xl" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <SectionHeading
                title="Compete In Hills Hornets — Travel To Canberra & Beyond."
                subtitle="Representing a Focus Court team is where training meets the real game. Our teams give players the chance to apply their skills in a competitive setting, build genuine team chemistry and experience the highs, challenges and lessons that only match-day basketball can deliver. Through regular local competition and exciting representative-style opportunities, players develop accountability, resilience, leadership and lifelong friendships — all while wearing the club colours with pride."
                align="left"
              />
              <ul className="space-y-3">
                {[
                  "Local competition teams across age groups",
                  "Divisions matched to player level & ability",
                  "Proper team basketball — plays, sets, rotations",
                  "Game preparation and match-day support",
                  "Travel & tournament opportunities (e.g. Canberra trips)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-navy-deep">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-orange">
                      <Star className="h-3 w-3 text-white" />
                    </div>
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
              <Button variant="court" size="lg" asChild><a href="#join">Apply For A Team <ArrowRight /></a></Button>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img src={trainGame} alt="Focus Court game action" loading="lazy" width={1024} height={1024} className="rounded-2xl shadow-card aspect-[3/4] object-cover" />
                <div className="space-y-4 pt-12">
                  <img src={teamHuddle} alt="Team huddle" loading="lazy" width={1280} height={900} className="rounded-2xl shadow-card aspect-square object-cover" />
                  <div className="rounded-2xl bg-navy-deep p-6 text-white">
                    <Award className="text-court-orange mb-3" />
                    <div className="font-display text-2xl">Hills Hornets Competitive</div>
                    <div className="text-sm text-white/70 mt-1">Multiple divisions · weekly games · finals pathway</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Coaches Who Build Players, Not Just Teams"
            subtitle="Behind every player's progress is a coach who believes in them. Our coaching team brings together a blend of playing experience, technical knowledge and a genuine passion for developing young athletes. Beyond skills and strategy, our coaches mentor players in confidence, character, discipline and teamwork — creating a positive environment where every athlete feels supported, challenged and inspired to bring their best to the court."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((c, i) => (
              <button
                type="button"
                key={c.name}
                onClick={() => setOpenCoach(i)}
                className="group flex flex-col text-left rounded-2xl bg-card shadow-card hover:shadow-bold transition-smooth border border-border focus:outline-none focus:ring-2 focus:ring-court-orange"
                aria-label={`View profile for ${c.name}`}
              >
                <div className="aspect-square overflow-hidden bg-navy-deep rounded-t-2xl">
                  <img src={c.img} alt={c.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover group-hover:scale-105 transition-bounce" />
                </div>
                <div className="p-5 space-y-2 border-t border-border bg-card rounded-b-2xl">
                  <div className="text-xs font-bold uppercase tracking-widest text-court-orange">{c.role}</div>
                  <h3 className="font-display text-2xl text-navy-deep">{c.name}</h3>
                  <p className="text-sm text-muted-foreground">{c.exp}</p>
                  <p className="text-sm text-muted-foreground">{c.bg}</p>
                  <div className="inline-flex items-center gap-1 mt-3 text-xs font-bold uppercase tracking-wider text-court-orange">
                    View profile <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <Dialog open={openCoach !== null} onOpenChange={(o) => !o && setOpenCoach(null)}>
            <DialogContent className="max-w-2xl bg-navy-deep border-white/10 text-white max-h-[90vh] overflow-y-auto !grid-cols-1 !block">
              {activeCoach && (
                <>
                  <DialogHeader>
                    <span className="inline-flex w-fit rounded-full bg-court-orange px-3 py-1 text-xs font-bold uppercase tracking-wider text-white mb-2">
                      {activeCoach.role}
                    </span>
                    <DialogTitle className="font-display text-3xl text-white">
                      {activeCoach.name}
                    </DialogTitle>
                    <DialogDescription className="text-white/75 leading-relaxed pt-2">
                      {activeCoach.intro}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="aspect-[16/10] overflow-hidden rounded-xl mt-2">
                    <img src={activeCoach.img} alt={activeCoach.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Award className="h-4 w-4" /> Education
                      </div>
                      <div className="text-white font-semibold text-sm">{activeCoach.education}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Star className="h-4 w-4" /> School
                      </div>
                      <div className="text-white font-semibold text-sm">{activeCoach.school}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4 sm:col-span-2">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Dumbbell className="h-4 w-4" /> Coaching Style
                      </div>
                      <div className="text-white text-sm leading-relaxed">{activeCoach.coachingStyle}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4 sm:col-span-2">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Trophy className="h-4 w-4" /> Teams & Playing Background
                      </div>
                      <div className="text-white text-sm leading-relaxed">{activeCoach.teams}</div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-navy/60 p-4 sm:col-span-2">
                      <div className="flex items-center gap-2 text-court-orange text-xs font-bold uppercase tracking-wider mb-1">
                        <Flame className="h-4 w-4" /> Coaching Experience
                      </div>
                      <div className="text-white text-sm leading-relaxed">{activeCoach.experience}</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button variant="hero" size="lg" className="flex-1" asChild>
                      <a href="#contact" onClick={() => setOpenCoach(null)}>Contact {activeCoach.name.split(" ")[1]}</a>
                    </Button>
                    <Button variant="ghostHero" size="lg" className="flex-1" asChild>
                      <a href="#join" onClick={() => setOpenCoach(null)}>Apply To Join</a>
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="py-24 bg-soft-orange relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-court-orange/20 blur-3xl" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Club Merchandise"
            title="Wear The Club. Rep The Court."
            subtitle="Our official club range is built to help every player look, feel and perform like part of the team. From training sessions to game days, each piece is designed with quality, comfort and durability in mind — giving young athletes the confidence to step onto the court and the pride of representing Focus Court wherever they go."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="group rounded-2xl bg-card overflow-hidden border border-border shadow-card hover:shadow-bold transition-smooth">
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={800} className="h-full w-full object-cover group-hover:scale-110 transition-bounce" />
                  <div className="absolute top-3 left-3 rounded-full bg-navy-deep text-white text-xs font-bold uppercase tracking-widest px-3 py-1">Official</div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl text-navy-deep">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="font-display text-3xl text-court-orange">${p.price}</div>
                    <Button variant="hero" size="sm" onClick={() => toast.success(`${p.name} — contact a coach to order`)}>
                      <ShoppingBag className="h-4 w-4" /> Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 court-lines opacity-30" />
        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                light
                eyebrow="Join / Apply"
                title="Take The Next Step On The Court."
                subtitle="Whether your child is just starting basketball or already playing competitively, Focus Court can help them take the next step."
                align="left"
              />
              <div className="mt-8 space-y-4">
                {[
                  { icon: ShieldCheck, t: "Safe & structured environment" },
                  { icon: Award, t: "Qualified, experienced coaches" },
                  { icon: Trophy, t: "Real game time in real competitions" },
                ].map((i) => (
                  <div key={i.t} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-court-orange shadow-orange">
                      <i.icon className="text-white" />
                    </div>
                    <span className="font-semibold text-lg text-white/90">{i.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-6 md:p-8 space-y-4 shadow-bold">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-white/90">Parent Name *</Label>
                  <Input className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" value={form.parentName} onChange={(e) => setForm({ ...form, parentName: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <Label className="text-white/90">Player Name *</Label>
                  <Input className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" value={form.playerName} onChange={(e) => setForm({ ...form, playerName: e.target.value })} placeholder="Player's name" />
                </div>
                <div>
                  <Label className="text-white/90">Player Age</Label>
                  <Input type="number" min={1} max={99} className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" value={form.playerAge} onChange={(e) => setForm({ ...form, playerAge: e.target.value })} placeholder="Player's age" />
                </div>
                <div>
                  <Label className="text-white/90">Experience Level</Label>
                  <Select value={form.experience} onValueChange={(v) => setForm({ ...form, experience: v })}>
                    <SelectTrigger className="mt-1 bg-white/10 border-white/20 text-white"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="developing">Developing</SelectItem>
                      <SelectItem value="competitive">Competitive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-white/90">Interested Program</Label>
                  <Select value={form.program} onValueChange={(v) => setForm({ ...form, program: v })}>
                    <SelectTrigger className="mt-1 bg-white/10 border-white/20 text-white"><SelectValue placeholder="Select a program" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner Training</SelectItem>
                      <SelectItem value="oneonone">One-on-One Training</SelectItem>
                      <SelectItem value="group">Small Group Training</SelectItem>
                      <SelectItem value="team">Team Training</SelectItem>
                      <SelectItem value="games">Games / Competition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-white/90">Preferred Contact</Label>
                  <Select value={form.contactMethod} onValueChange={(v) => setForm({ ...form, contactMethod: v })}>
                    <SelectTrigger className="mt-1 bg-white/10 border-white/20 text-white"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="text">Text / SMS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    form.contactMethod === "email"
                      ? "max-h-0 opacity-0 -mt-4 pointer-events-none"
                      : "max-h-40 opacity-100"
                  }`}
                >
                  <Label className="text-white/90">Phone {form.contactMethod !== "email" && form.contactMethod && "*"}</Label>
                  <Input className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="04xx xxx xxx" />
                </div>
                <div
                  className={`sm:col-span-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    form.contactMethod === "phone" || form.contactMethod === "text"
                      ? "max-h-0 opacity-0 -mt-4 pointer-events-none"
                      : "max-h-40 opacity-100"
                  }`}
                >
                  <Label className="text-white/90">Email *</Label>
                  <Input type="email" className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-white/90">Message <span className="text-white/50 font-normal text-xs">(optional)</span></Label>
                  <Textarea rows={4} className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/40" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your player…" />
                </div>
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full">
                Submit Application <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-soft-navy relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-electric-blue/15 blur-3xl" />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch With Focus Court"
            subtitle="Questions, trial sessions, team enquiries — reach out anytime."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, t: "Call Us", v: "+61 4XX XXX XXX" },
              { icon: Mail, t: "Email", v: "hello@focuscourt.com.au" },
              { icon: MapPin, t: "Location", v: "Hills District, Sydney" },
              { icon: Instagram, t: "Instagram", v: "@focuscourt.bball" },
              { icon: Facebook, t: "Facebook", v: "/focuscourtbasketball" },
              { icon: Trophy, t: "Competitions", v: "Hills Hornets · Canberra Tours" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-6 hover:border-court-orange hover:shadow-card transition-smooth">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-orange shadow-orange mb-4">
                  <c.icon className="text-white" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <div className="font-display text-2xl text-navy-deep mt-1">{c.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="xl" asChild><a href="#contact">Contact Coach</a></Button>
            <Button variant="court" size="xl" asChild><a href="#join">Apply Now</a></Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-soft-mix relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-court-orange/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-electric-blue/15 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick Answers For Parents & Players"
            subtitle="Choosing the right basketball club for your child can bring up plenty of questions — from age groups and experience levels to training, teams, competitions and merchandise. We've gathered the questions parents and players ask most often, with clear, straightforward answers and quick links that take you straight to the right section of the site so you can find what you need in seconds."
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="grid gap-4 md:grid-cols-2">
              {faqs.map((f, i) => {
                const Icon = f.icon;
                return (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="group rounded-2xl border border-border bg-card/90 backdrop-blur px-5 shadow-card hover:shadow-bold data-[state=open]:border-court-orange data-[state=open]:shadow-orange transition-smooth"
                  >
                    <AccordionTrigger className="font-display text-base md:text-lg text-navy-deep hover:no-underline text-left gap-3">
                      <span className="flex items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${f.tint} text-white shadow-orange`}>
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="leading-tight">{f.q}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      <p>{f.a}</p>
                      {f.link && (
                        <a
                          href={f.link.href}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-court-orange hover:text-electric-blue transition-smooth"
                        >
                          {f.link.label}
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-border bg-card/80 backdrop-blur p-5 text-center">
              <HelpCircle className="h-5 w-5 text-court-orange" />
              <p className="text-sm text-muted-foreground">Still have questions?</p>
              <Button variant="hero" size="sm" asChild><a href="#contact">Contact a Coach</a></Button>
              <Button variant="court" size="sm" asChild><a href="#join">Apply Now</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-white pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="container relative mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-orange shadow-orange">
                  <span className="font-display text-xl">FC</span>
                </div>
                <span className="font-display text-2xl">FOCUS COURT</span>
              </div>
              <p className="text-sm text-white/70">Youth basketball club building confident young players in the Hills District, Sydney.</p>
              <div className="flex gap-3">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-court-orange transition-smooth"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-court-orange transition-smooth"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>
            <div>
              <div className="font-display text-lg text-court-orange mb-4">Quick Links</div>
              <ul className="space-y-2 text-sm text-white/75">
                <li><a href="#training" className="hover:text-court-orange">Training</a></li>
                <li><a href="#teams" className="hover:text-court-orange">Teams</a></li>
                <li><a href="#coaches" className="hover:text-court-orange">Coaches</a></li>
                <li><a href="#shop" className="hover:text-court-orange">Merchandise</a></li>
                <li><a href="#contact" className="hover:text-court-orange">Contact</a></li>
                <li><a href="#join" className="hover:text-court-orange">Join Now</a></li>
              </ul>
            </div>
            <div>
              <div className="font-display text-lg text-court-orange mb-4">Contact</div>
              <ul className="space-y-2 text-sm text-white/75">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +61 4XX XXX XXX</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@focuscourt.com.au</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hills District, Sydney</li>
              </ul>
            </div>
            <div>
              <div className="font-display text-lg text-court-orange mb-4">Ready To Play?</div>
              <p className="text-sm text-white/75 mb-4">Apply today and start training with Focus Court.</p>
              <Button variant="hero" asChild><a href="#join">Join Now <ArrowRight /></a></Button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/50">
            <div>© {new Date().getFullYear()} Focus Court Basketball Club. All rights reserved.</div>
            <div>Building the next generation of players.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
