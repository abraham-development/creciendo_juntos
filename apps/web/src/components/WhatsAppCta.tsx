import { WhatsAppIcon } from "@/components/icons";
import { PRIMARY_WHATSAPP } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
  onClick?: () => void;
};

export function WhatsAppCta({
  children = "Escribir por WhatsApp",
  className = "",
  compact = false,
  onClick,
}: Props) {
  return (
    <a
      href={PRIMARY_WHATSAPP.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius-control)] bg-orange font-medium text-white shadow-[0_1px_0_color-mix(in_oklab,white_18%,transparent)_inset] transition-[background-color,transform,box-shadow] hover:bg-[#c04a22] active:translate-y-px ${
        compact ? "px-3.5 py-2 text-sm" : "px-5 py-2.5 text-[0.9375rem]"
      } ${className}`}
      onClick={onClick}
    >
      <WhatsAppIcon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {children}
    </a>
  );
}
