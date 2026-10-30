import {
  Briefcase,
  CandlestickChart,
  Eye,
  Flag,
  LineChart,
  Microscope,
  PieChart,
  Receipt,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  LineChart,
  CandlestickChart,
  PieChart,
  Briefcase,
  Target,
  Flag,
  Receipt,
  Shield,
  Microscope,
  Users,
  Eye,
  Sparkles,
  TrendingUp,
  ShieldCheck,
};

export function getIcon(name: string): LucideIcon {
  return map[name] ?? LineChart;
}
