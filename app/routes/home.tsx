import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import {resumes} from "../../constants";
import {callback} from "fdir/dist/api/async";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "AI based analysis for your Job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover ">
      <Navbar />

      <section className="main-section">
          <div className="page-heading">
              <h1>Track Your Application and Resume Ratings</h1>
              <h2>Review your Submissions and Check AI Powered Feedback</h2>
          </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
              {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume} />
                  ))}
          </div>
          )}
      </section>
  </main>
}