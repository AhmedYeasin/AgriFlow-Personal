"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import axios from "axios"
import Swal from "sweetalert2"
import Link from "next/link"
import { signIn } from "next-auth/react"

type RegisterFormData = {
  name: string
  email: string
  password: string
  photo: FileList
}

type ImgBBResponse = {
  data: {
    url: string
  }
}

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const onSubmit = async (data: RegisterFormData) => {
    Swal.fire({
      title: "Creating Account...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    })

    try {
      const API_KEY = process.env.NEXT_PUBLIC_IMAGE_KEY
      if (!API_KEY) throw new Error("Missing image API key")

      if (!data.photo?.length) throw new Error("Image required")

      const formData = new FormData()
      formData.append("image", data.photo[0])

      const imgRes = await axios.post<ImgBBResponse>(
        `https://api.imgbb.com/1/upload?key=${API_KEY}`,
        formData
      )

      const photoURL = imgRes.data.data.url

      await axios.post("/api/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        photoURL,
      })

      Swal.fire({
        icon: "success",
        title: "Account Created 🎉",
        timer: 2000,
        showConfirmButton: false,
      })

      router.push("/login")

    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err?.message || "Something went wrong",
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 dark:from-zinc-900 dark:to-black px-4">

      <div className="w-full max-w-md bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl p-8 space-y-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create Account
        </h2>

        {/* Google Button */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-700 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="text-center text-sm text-gray-400">OR</div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Write your name here"
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("name", { required: "Name required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Upload Photo
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 w-full border rounded-lg p-2 file:mr-3 file:py-1 file:px-3 file:border-0 file:bg-green-600 file:text-white file:rounded-md"
              {...register("photo", { required: "Photo required" })}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
            )}
          </div>

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
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
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
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition">
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}