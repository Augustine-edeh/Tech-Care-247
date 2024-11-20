export const NAV_TABS = ["patients", "overview", "diagnosis"] as const;

export const navLinks = [
  {
    href: "/",
    icon: "/home_FILL0_wght300_GRAD0_opsz24.svg",
    label: "Overview",
    iconSize: { width: 16, height: 17 },
  },
  {
    href: "/patients",
    icon: "/group_FILL0_wght300_GRAD0_opsz24.svg",
    label: "Patients",
    iconSize: { width: 24, height: 17 },
  },
  {
    href: "/schedule",
    icon: "/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
    label: "Schedule",
    iconSize: { width: 15, height: 17 },
  },
  {
    href: "/message",
    icon: "/group_FILL0_wght300_GRAD0_opsz24.svg",
    label: "Message",
    iconSize: { width: 19, height: 17 },
  },
  {
    href: "/transactions",
    icon: "/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
    label: "Transactions",
    iconSize: { width: 22, height: 17 },
  },
  {
    href: "/news",
    icon: "/news.svg",
    label: "News",
    iconSize: { width: 16, height: 17 },
  },
] as const;
