import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualitative",
};

export default function Qualitative() {
  return (
    <main className="w-full min-h-screen bg-black">
      <div className="py-32 relative flex flex-col gap-2 justify-center items-start w-full text-white px-10">
        <span className="flex justify-start text-left text-6xl font-bold mb-5">
          Qualitative
        </span>
        <div className="text-lg w-full bg-white text-black p-10 rounded-lg">
          <div className="grid grid-cols-[1.5rem_auto] gap-x-5">
            <span className="text-right">I.</span>
            <span>Abstract</span>
            <span className="text-right">II.</span>
            <span>Acknowledgement</span>
            <span className="text-right">III.</span>
            <span>Chapter I</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Introduction</span>
              <span className="text-right">b.</span>
              <span>Background of the Study</span>
              <span className="text-right">c.</span>
              <span>Statement of the Problem</span>
              <span className="text-right">d.</span>
              <span>Scope and Delimitation</span>
              <span className="text-right">e.</span>
              <span>Significance of the Study</span>
              <span className="text-right">f.</span>
              <span>Definition of Terms</span>
            </div>
            <span className="text-right">IV.</span>
            <span>Chapter II</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Related Literature</span>
              <span className="text-right">b.</span>
              <span>Related Studies</span>
              <span className="text-right">c.</span>
              <span>Synthesis</span>
            </div>
            <span className="text-right">V.</span>
            <span>Chapter III</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Research Design</span>
              <span className="text-right">b.</span>
              <span>Research Locale</span>
              <span className="text-right">c.</span>
              <span>Population and Sample</span>
              <span className="text-right">d.</span>
              <span>Sampling Technique</span>
              <span className="text-right">e.</span>
              <span>Research Instrument</span>
              <span className="text-right">f.</span>
              <span>Data Construction Procedure</span>
              <span className="text-right">g.</span>
              <span>Analysis of Information</span>
              <span className="text-right">h.</span>
              <span>Ethical Considerations</span>
            </div>
            <span className="text-right">VI.</span>
            <span>Chapter IV</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Results and Findings</span>
              <span className="text-right">b.</span>
              <span>Discussion</span>
            </div>
            <span className="text-right">VII.</span>
            <span>Chapter V</span>
            <div className="col-span-2 grid grid-cols-[2rem_auto] pl-8 gap-x-5">
              <span className="text-right">a.</span>
              <span>Summary</span>
              <span className="text-right">b.</span>
              <span>Conclusion</span>
              <span className="text-right">c.</span>
              <span>Recommendation</span>
            </div>
            <span className="text-right">VIII.</span>
            <span>References</span>
            <span className="text-right">IX.</span>
            <span>Annexes</span>
          </div>
        </div>
      </div>
    </main>
  );
}
