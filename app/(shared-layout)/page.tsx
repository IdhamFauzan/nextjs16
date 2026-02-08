import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, ChevronRight, HomeIcon, PenTool } from "lucide-react";
import Link from "next/link";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-16 px-4 text-center pt-20">
        <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="pb-1.5 text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A simple Blog Page Project exploring the new features and best
            practices. Built with Convex, shadcn UI, and passion.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="default"
              className="rounded-full px-4 sm:px-6"
            >
              <Link href="/blog">Start Reading</Link>
            </Button>
            <Link
              href="/create"
              className="relative flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
            >
              <span
                className={cn(
                  "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                )}
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  WebkitClipPath: "padding-box",
                }}
              />
              ✏️{" "}
              <hr className="mx-0.5 sm:mx-2 h-4 w-px shrink-0 sm:bg-neutral-500" />
              <AnimatedGradientText className="text-sm font-medium">
                Write a Post
              </AnimatedGradientText>
              <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-6 px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
          <Card className="flex flex-col border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <HomeIcon className="w-6 h-6" />
              </div>
              <CardTitle>Home</CardTitle>
              <CardDescription>Return to the landing page</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">
                You are currently on the home page. This is the entry point of
                our application.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Go Home
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <CardTitle>Blog</CardTitle>
              <CardDescription>Read our latest articles</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">
                Browse through a collection of interesting posts and tutorials.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/blog"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Visit Blog
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <PenTool className="w-6 h-6" />
              </div>
              <CardTitle>Create Post</CardTitle>
              <CardDescription>Share your thoughts</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground">
                Have something to say? Create a new blog post and share it with
                the community.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/create"
                className={buttonVariants({
                  variant: "outline",
                  className: "w-full",
                })}
              >
                Create Post
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-purple-400/20 blur-[120px] rounded-full" />
      <div className="absolute top-20 right-[-200px] h-[500px] w-[500px] bg-pink-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] left-1/3 h-[500px] w-[500px] bg-blue-400/20 blur-[120px] rounded-full" />
      <div className="absolute top-[200px] left-1/2 h-[500px] w-[500px] bg-sky-400/20 blur-[120px] rounded-full" />
    </div>
  );
}
