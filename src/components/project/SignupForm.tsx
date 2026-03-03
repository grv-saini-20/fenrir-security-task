import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Apple } from "lucide-react"
import { Link } from "react-router-dom"

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
      <Card className="w-full max-w-md rounded-2xl shadow-xl border-0">
        <CardContent className="p-8 space-y-6">

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-semibold">Sign up</h1>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <span className="text-teal font-medium cursor-pointer hover:underline">
                Log in
              </span>
            </p>
          </div>

          <div className="space-y-4">

            <div>
              <Input placeholder="First name*" className="h-12 rounded-xl" />
            </div>

            <div>
              <Input placeholder="Last name*" className="h-12 rounded-xl" />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email address*"
                className="h-12 rounded-xl"
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8+ characters)*"
                className="h-12 rounded-xl pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="terms" className="mt-1" />
            <Label htmlFor="terms" className="inline-block text-xs leading-relaxed">
              I agree to Aps’s {" "}
              <Link to="/">
                Terms & Conditions
              </Link> {" "}
              and acknowledge the {" "}
              <Link to="/">
                Privacy Policy
              </Link>
            </Label>
          </div>

          <Button className="w-full h-12 rounded-full bg-teal hover:bg-teal-700 text-white text-base">
            Create account
          </Button>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              className="flex-1 h-11 rounded-full bg-black text-white hover:bg-black/90"
            >
              <Apple size={18} />
            </Button>

            <Button
              variant="secondary"
              className="flex-1 h-11 rounded-full bg-muted hover:bg-muted/80"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
            </Button>

            <Button
              variant="secondary"
              className="flex-1 h-11 rounded-full bg-blue-600 text-white hover:bg-blue-700"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg"
                alt="Meta"
                className="h-5 w-5 invert"
              />
            </Button>
          </div>

        </CardContent>
      </Card>
  )
}