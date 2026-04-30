 "use client"
import { addUser } from "@/actions/server/userActions";
import { prisma } from "@/lib/prisma";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"
import Link from "next/link"

type LoginForm = {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()

  const onSubmit = async (data: LoginForm) => {
    try {
      setLoading(true)

      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (res?.error) {
        Swal.fire("Error", "Invalid email or password", "error")
      } else {
        Swal.fire({
          icon: "success",
          title: "Login successful 🎉",
          timer: 1500,
          showConfirmButton: false,
        })

        router.push("/")
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong", "error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 dark:from-zinc-900 dark:to-black px-4">

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl p-8 space-y-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Welcome Back 
        </h2>

        {/* Google Login */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-700 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <div className="text-center text-sm text-gray-400">OR</div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Write your email here"
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("email", { required: "Email required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("password", {
                  required: "Password required",
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}