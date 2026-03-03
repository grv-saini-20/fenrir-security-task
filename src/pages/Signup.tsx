import SignUpForm from "@/components/project/SignupForm"
import { Check, Star } from "lucide-react"

const Signup = () => {
  return (
    <section className="flex min-h-screen py-10 bg-linear-to-br from-[#0f2a2a] via-[#1e3a3a] to-[#ff4d00]">

      <div className="flex-1 flex flex-col justify-center px-24 text-white">

        <h1 className="text-5xl font-semibold leading-tight max-w-xl tracking-tight">
          Expert level Cybersecurity <br />
          in <span className="text-teal">hours</span> not weeks.
        </h1>

        <div className="mt-14 max-w-lg">
          <h3 className="text-lg font-semibold mb-6 text-white/90">
            What’s included
          </h3>

          <ul className="space-y-6 text-white/70">
            <li className="flex items-start gap-3">
              <Check className="text-teal mt-1" size={18} />
              <span>
                Effortlessly spider and map targets to uncover hidden security flaws
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check className="text-teal mt-1" size={18} />
              <span>
                Deliver high-quality, validated findings in hours, not weeks.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check className="text-teal mt-1" size={18} />
              <span>
                Generate professional, enterprise-grade security reports automatically.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-2 text-teal">
            <Star size={18} fill="currentColor" />
            <span className="font-medium">Trustpilot</span>
          </div>

          <p className="mt-3 text-lg font-semibold text-white">
            Rated 4.5/5.0{" "}
            <span className="text-white/60 text-sm font-normal">
              (100k+ reviews)
            </span>
          </p>
        </div>

      </div>

      <div className="flex items-center justify-center pr-24">
        <SignUpForm />
      </div>

    </section>
  )
}

export default Signup