const responsibilities = [
  'Developed workflow integration steps across Everbridge and xMatters, connecting Microsoft Teams, Jira Cloud, Dynatrace, Salesforce, and BMC Control-M.',
  'Worked with Python and APIs to define inputs and outputs, handle errors, and investigate unexpected behaviour across integration workflows.',
  'Wrote automated tests and technical documentation, and refined changes through code reviews and Jenkins CI/CD release preparation.',
  'Participated in daily stand-ups and used Jira Kanban boards to track tickets, raise blockers, and coordinate work through review and release.',
];

const Experience = () => {
  return (
    <section id="experience" className="w-full scroll-mt-20 px-[12%] py-10">
      <h4 className="mb-2 text-center text-lg font-Ovo">Where I&apos;ve worked</h4>
      <h2 className="text-center text-5xl font-Ovo">Experience</h2>
      <article className="mx-auto mt-12 max-w-5xl rounded-xl border border-gray-300 bg-white p-7 shadow-sm dark:bg-darkHover/30 sm:p-9">
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-5 sm:flex-row sm:items-end sm:justify-between dark:border-white/20">
          <div>
            <h3 className="text-2xl font-semibold">Everbridge</h3>
            <p className="text-gray-600 dark:text-white/80">Integrations Intern · Remote / Vancouver, BC</p>
          </div>
          <p className="font-medium text-gray-600 dark:text-white/80">May 2026 – Dec 2026</p>
        </div>
        <ul className="mt-6 space-y-4 text-gray-700 dark:text-white/90">
          {responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-3"><span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-pink-300" /><span>{responsibility}</span></li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default Experience;
