import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { LoginInput } from "../lib/validations/auth";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const loginWithEmail = useCallback(async (data: LoginInput) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Hardcoded login check
      if (data.email === "admin@gmail.com" && data.password === "password123") {
        console.log("Securely authenticated with:", data.email);
        router.push("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  const loginWithGoogle = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Professional Google Login integration point
      // Replace with: await signIn("google", { callbackUrl: "/dashboard" })
      console.log("Initiating Google OAuth flow...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err: any) {
      setError("Failed to authenticate with Google.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loginWithGithub = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      console.log("Initiating GitHub OAuth flow...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err: any) {
      setError("Failed to authenticate with GitHub.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    loginWithEmail,
    loginWithGoogle,
    loginWithGithub,
    isLoading,
    error,
  };
}
