"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginInput } from "@/lib/validations/auth";
import { useAuth } from "@/hooks/useAuth";

export function LoginForm() {
  const { loginWithEmail, loginWithGoogle, isLoading, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    await loginWithEmail(data);
  };

  return (
    <div className="relative z-10 w-full max-w-md p-10 mx-4 bg-white/5 backdrop-blur-sm border border-white/20 shadow-2xl shadow-black/50 rounded-[2rem]">
      <div className="text-center mb-10">
        <h1 className="text-xl font-bold text-white tracking-widest uppercase">Your logo</h1>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">Login</h2>

      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="space-y-2">
          <label className="text-xs font-semibold text-white/70 block uppercase tracking-wider" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            autoComplete="email"
            disabled={isLoading}
            placeholder="username@gmail.com"
            className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-white/70 block uppercase tracking-wider" htmlFor="password">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            autoComplete="current-password"
            disabled={isLoading}
            placeholder="••••••••"
            className="w-full px-5 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
          />
          {errors.password && (
            <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-start pt-1">
          <button type="button" className="text-xs font-medium text-white/60 hover:text-white transition-colors duration-200">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="relative w-full py-4 mt-2 rounded-2xl bg-[#14294a]/80 hover:bg-[#1a3866] border border-blue-400/20 text-white font-semibold transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center overflow-hidden"
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <div className="mt-8 mb-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] text-white/60 uppercase tracking-widest">
            or continue with
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <button 
          type="button"
          onClick={loginWithGoogle}
          disabled={isLoading}
          className="flex items-center justify-center p-3.5 gap-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 text-white shadow-sm hover:shadow-md hover:shadow-black/20 hover:-translate-y-0.5 disabled:opacity-50"
        >
          {/* Google Icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
          </svg>
          <span className="text-sm font-medium tracking-wide">Continue with Google</span>
        </button>
      </div>

      <p className="mt-8 text-center text-xs text-white/60">
        Don't have an account yet?{" "}
        <button type="button" className="text-white hover:text-blue-300 hover:underline font-semibold transition-colors duration-200">
          Register for free
        </button>
      </p>
    </div>
  );
}
