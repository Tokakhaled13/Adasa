
import React from "react";

const stats = [
  { icon: "fa-users", number: "+2مليون", label: "قارئ شهرياً" },
  { icon: "fa-newspaper", number: "+500", label: "مقالة منشورة" },
  { icon: "fa-pen-nib", number: "+50", label: "كاتب خبير" },
  { icon: "fa-book-open", number: "+15", label: "تصنيف" },
];

const values = [
  {
    icon: "fa-bullseye",
    title: "الجودة أولاً",
    description: "محتوى مدروس ومكتوب بخبرة",
  },
  {
    icon: "fa-bolt",
    title: "تركيز عملي",
    description: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: "fa-handshake",
    title: "المجتمع",
    description: "تعلم مع آلاف المصورين",
  },
  {
    icon: "fa-arrows-rotate",
    title: "دائماً محدث",
    description: "أحدث الاتجاهات وأفضل الممارسات",
  },
];

const teamMembers = [
  { name: "سالم أحمد", role: "مصور محترف", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
  { name: "محمد علي", role: "مصور بورتريه", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
  { name: "إبراهيم حسن", role: "مصور طبيعة", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  { name: "داود خالد", role: "مدرب تصوير", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
  { name: "ليث محمود", role: "فنان بصري", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
  { name: "جمال عبدالله", role: "مصور ومراجع تقني", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face" },
  { name: "خالد الفيصل", role: "مصور فلكي", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" },
  { name: "نادر سعيد", role: "مصور شوارع", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face" },
  { name: "هاني الشمري", role: "مصور طعام", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face" },
  { name: "عمر الراشد", role: "مصور حياة برية", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face" },
  { name: "فارس العلي", role: "فنان فوتوغرافي", image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face" },
  { name: "سامي الحربي", role: "خبير تعديل صور", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face" },
  { name: "رامي الخطيب", role: "مصور ماكرو", image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&h=100&fit=crop&crop=face" },
  { name: "باسم المصري", role: "مصور فني", image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&h=100&fit=crop&crop=face" },
  { name: "منصور الزهراني", role: "مصور زفاف", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=100&h=100&fit=crop&crop=face" },
  { name: "فيصل الدوسري", role: "مصور جوي", image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=100&h=100&fit=crop&crop=face" },
  { name: "لؤي الصالح", role: "مصور تجاري", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face" },
  { name: "طارق النعيمي", role: "مصور معماري", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop&crop=face" },
  { name: "أحمد الشهري", role: "مصور رياضي", image: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=100&h=100&fit=crop&crop=face" },
  { name: "ماجد القحطاني", role: "مصور استوديو", image: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&h=100&fit=crop&crop=face" },
  { name: "ياسر العتيبي", role: "مصور رحالة", image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=100&h=100&fit=crop&crop=face" },
  { name: "دحام الحسيني", role: "فنان بصري", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face" },
  { name: "نايف المطيري", role: "مصور مواليد", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face" },
  { name: "عبدالله الغامدي", role: "مصور عقارات", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" },
  { name: "كريم الفهد", role: "خبير تقني", image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=100&h=100&fit=crop&crop=face" },
  { name: "سلطان الراجحي", role: "فنان تصوير", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=face" },
  { name: "فهد السبيعي", role: "مراجع معدات", image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=100&h=100&fit=crop&crop=face" },
  { name: "راشد الجاسر", role: "فنان بصري", image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=100&h=100&fit=crop&crop=face" },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 mb-4 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-500">
      {children}
    </span>
  );
}

function VerifiedMark() {
  return (
    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#161616] bg-orange-500">
      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </span>
  );
}

function TeamCard({ member }) {
  return (
    <article className="group rounded-2xl border border-[#262626] bg-[#161616] p-6 text-center transition-all duration-300 hover:border-orange-500/30">
      <div className="relative mb-4 inline-block">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-24 w-24 rounded-full object-cover ring-4 ring-[#262626] transition-all group-hover:ring-orange-500/30"
        />
        <VerifiedMark />
      </div>

      <h3 className="text-lg font-bold text-white">{member.name}</h3>
      <p className="mb-4 text-sm font-medium text-orange-500">{member.role}</p>

      <div className="flex justify-center gap-3">
        <a href="#" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#262626] text-neutral-500 transition-colors hover:bg-orange-500 hover:text-white">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a href="#" aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#262626] text-neutral-500 transition-colors hover:bg-neutral-700 hover:text-white">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>

        <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#262626] text-neutral-500 transition-colors hover:bg-blue-600 hover:text-white">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function AboutUs() {
  return (
    <main dir="rtl" className="w-full overflow-hidden bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"
        />

        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />
          <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">

          <SectionLabel>
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            من نحن
          </SectionLabel>

          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            مهمتنا هي{" "}
            <span className="bg-gradient-to-l from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              الإعلام والإلهام
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-neutral-800/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 sm:p-6"
              >
                <i className={`fa-solid ${stat.icon} mb-2 block text-2xl text-orange-500`} />

                <div className="mb-1 bg-gradient-to-l from-orange-500 to-yellow-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {stat.number}
                </div>

                <div className="text-sm text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-y border-[#262626] bg-[#111111] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mb-16 text-center">
            <h2 className="mb-4 flex items-center justify-center gap-3 text-3xl font-bold text-white md:text-4xl">
              <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-orange-500 to-yellow-500" />
              قيمنا
              <span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-yellow-500 to-orange-500" />
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 text-center transition-all duration-300 hover:border-orange-500/30"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? "from-orange-500 to-yellow-500" : "from-orange-600 to-orange-400"} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />

                <div className="relative">
                  <i className={`fa-solid ${value.icon} mb-4 block text-4xl text-orange-500`} />

                  <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-orange-500">
                    {value.title}
                  </h3>

                  <p className="text-sm text-neutral-400">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mb-16 text-center">
            <SectionLabel>فريقنا</SectionLabel>

            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              تعرف على كتابنا
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 py-20">

        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />
          <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-white/20 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="mailto:hello@adasah.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-900"
            >
              <i className="fa-regular fa-envelope" />
              تواصل معنا
            </a>

            <a
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0a0a0a]"
            >
              تصفح المقالات
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}
