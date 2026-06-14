import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiWhatsapp } from "react-icons/si";
import { Mail } from "lucide-react";
import Link from "next/link";
import { contacts } from "@/lib/content";

export function HeroContactDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="btn btn-primary">
          Hubungi Kami
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <a href={contacts.waNumber.href} target="_blank" rel="noopener noreferrer" className="p-2!">
            <SiWhatsapp className="mr-2 h-4 w-4" />
            WhatsApp
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/#contact" className="p-2!">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
