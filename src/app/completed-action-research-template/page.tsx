import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completed Action Research Template",
};

export default function CompletedActionResearchTemplate() {
  return (
    <main className="min-w-screen min-h-screen bg-black">
      <div className="py-32 relative flex flex-col gap-2 justify-center items-start w-full text-white px-10">
        <span className="flex justify-start text-left text-6xl font-bold mb-5">
          Completed Action Research Template
        </span>
        <div className="text-lg w-full bg-white text-black p-10 rounded-lg">
          <div className="grid grid-cols-[1.5rem_auto] gap-x-5">
            <span className="text-right">I.</span>
            <span>
              Title Page (
              <a
                href="https://bit.ly/8thCC-templates"
                target="_blank"
                className="text-blue-400"
              >
                https://bit.ly/8thCC-templates
              </a>
              )
            </span>
            <span className="text-right">II.</span>
            <span>Abstract</span>
            <span className="text-right">III.</span>
            <span>Acknowledgment</span>
            <span className="text-right">IV.</span>
            <span>Context and Rationale</span>
            <span className="text-right">V.</span>
            <span>Action Research Questions</span>
            <span className="text-right">VI.</span>
            <span>Proposed Innovation, Intervention, and Strategy</span>
            <span className="text-right">VII.</span>
            <span>Action Research Methods</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Design</span>
              <span className="text-right">b.</span>
              <span>
                Participants and/or Other Sources of Data and Information
              </span>
              <span className="text-right">c.</span>
              <span>Data Gathering Method</span>
              <span className="text-right">d.</span>
              <span>Data Analysis Plan</span>
            </div>
            <span className="text-right">VIII.</span>
            <span>Discussion of Results and Reflection</span>
            <span className="text-right">IX.</span>
            <span>Action Plan</span>
            <span className="text-right">X.</span>
            <span>References</span>
            <span className="text-right">XI.</span>
            <span>Annexes</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Instrument</span>
              <span className="text-right">b.</span>
              <span>
                Signed Declaration of Anti-Plagiarism and Absence of Conflict of
                Interest
              </span>
              <span className="text-right">c.</span>
              <span>Signed Declaration of AI Use (If applicable)</span>
              <span className="text-right">d.</span>
              <span>
                Other documents as deemed relevant by the researcher(s)
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
