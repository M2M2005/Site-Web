import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CVPage() {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-screen bg-neutral-950 pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Mon CV
            </h1>
            <p className="text-white/60 text-lg">
              Ingénieur QA | Test Automation - Alternance ITESOFT
            </p>
            <div className="w-20 h-1 bg-white/20 mt-4"></div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="/docs/CV_Cyprien_Bons.pdf"
              download="CV_Cyprien_Bons.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger PDF
            </a>
            <a
              href="/docs/CV_BONS_ATS.txt"
              download="CV_Cyprien_Bons_ATS.txt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Version ATS
            </a>
          </div>

          {/* CV Preview (iframe) */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-2">
              <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="font-medium text-white">Aperçu du CV</span>
            </div>
            <div className="w-full" style={{ height: "min(calc((100vw - 3rem) * 1.414), 1150px)" }}>
              <iframe
                src="/docs/CV_Cyprien_Bons.pdf#toolbar=0&navpanes=0"
                className="w-full h-full border-0"
                title="CV Cyprien Bons"
              />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
