"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useConvexAuth } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { SearchInput } from "./SearchInput";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Separator } from "../ui/separator";

export function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const [open, setOpen] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className={"max-w-7xl mx-auto"}>
        <div className="py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-3xl font-bold">
                Fizan<span className="text-primary"> Blogs</span>
              </h1>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <Link className={buttonVariants({ variant: "ghost" })} href="/">
                Home
              </Link>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/create"
              >
                Create
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isLoading ? null : isAuthenticated ? (
              <Button
                className="hidden sm:flex md:hidden"
                onClick={() =>
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        toast.success("Logged out successfully");
                        router.push("/");
                      },
                      onError: (error) => {
                        toast.error(error.error.message);
                      },
                    },
                  })
                }
              >
                Logout
              </Button>
            ) : (
              <>
                <div className="hidden sm:flex md:hidden">
                  <Link className={buttonVariants()} href="/auth/sign-up">
                    Sign up
                  </Link>
                </div>
                <div className="hidden sm:flex md:hidden">
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    href="/auth/login"
                  >
                    Login
                  </Link>
                </div>
              </>
            )}
            <div className="flex md:hidden">
              <ThemeToggle />
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              {mobileMenuIsOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="hidden md:block mr-2">
              <SearchInput />
            </div>
            {isLoading ? null : isAuthenticated ? (
              <Button
                onClick={() =>
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        toast.success("Logged out successfully");
                        router.push("/");
                      },
                      onError: (error) => {
                        toast.error(error.error.message);
                      },
                    },
                  })
                }
              >
                Logout
              </Button>
            ) : (
              <>
                <Link className={buttonVariants()} href="/auth/sign-up">
                  Sign up
                </Link>
                <Link
                  className={buttonVariants({ variant: "outline" })}
                  href="/auth/login"
                >
                  Login
                </Link>
              </>
            )}
            <ThemeToggle />
          </div>
        </div>

        {mobileMenuIsOpen && (
          <div className="md:hidden backdrop-blur-lg">
            <div className="py-4 sm:py-6 text-center">
              <Link
                href="/"
                onClick={() => setMobileMenuIsOpen(false)}
                className="py-3 sm:py-4 block font-semibold text-sm lg:text-base"
              >
                Home
              </Link>
              <Separator />
              <Link
                href="/blog"
                onClick={() => setMobileMenuIsOpen(false)}
                className="py-3 sm:py-4 block font-semibold text-sm lg:text-base"
              >
                Blog
              </Link>
              <Separator />
              <Link
                href="/create"
                onClick={() => setMobileMenuIsOpen(false)}
                className="py-3 sm:py-4 block font-semibold text-sm lg:text-base"
              >
                Create
              </Link>
              {isLoading ? null : isAuthenticated ? (
                <Button
                  className="sm:hidden"
                  onClick={() =>
                    authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          toast.success("Logged out successfully");
                          router.push("/");
                        },
                        onError: (error) => {
                          toast.error(error.error.message);
                        },
                      },
                    })
                  }
                >
                  Logout
                </Button>
              ) : (
                <div className="flex flex-col items center sm:hidden space-y-4">
                  <Link className={buttonVariants()} href="/auth/sign-up">
                    Sign up
                  </Link>
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    href="/auth/login"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
