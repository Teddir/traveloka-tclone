import { UserIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DialogAuthProps {
  scrolled: boolean;
  isRegister?: boolean;
}

export function DialogAuth({ scrolled = false, isRegister = false }: DialogAuthProps) {
  const buttonClass = isRegister
    ? "p-2 min-w-[5.5rem] text-center justify-center rounded-lg text-white hover:bg-secondary flex flex-row items-center bg-primary border border-primary"
    : cn(
        "p-2 min-w-[5.5rem] text-center justify-center rounded-lg text-white hover:bg-gray-900/10 border border-white flex flex-row gap-2 items-center",
        scrolled ? "text-[rgb(104, 113, 118)] border border-primary" : ""
      );

  const iconColor = scrolled ? "#0194f3" : "#ffffff";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={buttonClass}>
          {isRegister ? (
            <p className="font-mono font-semibold text-sm">Register</p>
          ) : (
            <>
              <UserIcon size={16} fill={iconColor} color={iconColor} />
              <p className="font-mono font-medium text-sm">Log In</p>
            </>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-3xl text-center">Log In/Register</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <div className="flex flex-col gap-4 mb-6 relative">
          <div className="grid flex-1 gap-2">
            <p className="text-sm font-semibold">Email/Mobile Number</p>
            <input
              placeholder="Example: +62818291778"
              defaultValue="user@test.com"
              className="px-3 py-2 border border-border rounded-sm focus-within:outline-2 focus-within:outline-green-300"
            />
          </div>

          <button className="px-4 py-3 rounded-full bg-primary text-white">
            <p className="text-lg font-semibold">Register with Google</p>
          </button>

          <div className="flex relative w-full justify-center items-center">
            <div className="p-2 bg-white justify-center text-center w-fit z-10 px-4">
              <p className="text-xs font-semibold text-[rgb(104, 113, 118)]">or log in/register with</p>
            </div>
            <div className="w-full h-0.5 bg-border absolute" />
          </div>

          {["Apple", "Google", "Facebook"].map((provider) => (
            <button
              key={provider}
              className="flex flex-row items-center justify-between px-4 py-3 rounded-full bg-[#D1F0FF] text-[#014590] z-10"
            >
              <Image
                alt={provider}
                src={`/sosmed/${provider.toLowerCase()}.svg`}
                width={100}
                height={100}
                className="w-4 h-4 opacity-0"
              />
              <p className="text-lg font-semibold">{provider}</p>
              <Image
                alt={provider}
                src={`/sosmed/${provider.toLowerCase()}.svg`}
                width={100}
                height={100}
                className="w-7 h-7"
              />
            </button>
          ))}
        </div>

        <DialogFooter className="sm:justify-start px-4 z-10">
          <p className="justify-center text-center text-xs font-semibold text-[#707577]">
            By continuing, you agree to this{" "}
            <span className="text-[#0171CE]">Terms & Conditions</span> and acknowledge that you have been informed about our{" "}
            <span className="text-[#0171CE]">Privacy Notice</span>.
          </p>
        </DialogFooter>

        <Image
          alt="decorative-image"
          src="/benang.png"
          width={100}
          height={100}
          className="w-full h-fit absolute -bottom-5 left-0 z-[1]"
        />
      </DialogContent>
    </Dialog>
  );
}
