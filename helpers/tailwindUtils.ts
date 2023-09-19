type ThemeKey =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

type ThemesTest = Record<ThemeKey, RecipeTheme>;

interface RecipeTheme {
  background: string;
  imageBorder: string;
  imageBackground: string;
}

export const themes: ThemesTest = {
  red: { background: "bg-red-200", imageBorder: "border-red-300", imageBackground: "bg-red-100" },
  orange: { background: "bg-orange-200", imageBorder: "border-orange-300", imageBackground: "bg-orange-100" },
  amber: { background: "bg-amber-200", imageBorder: "border-amber-300", imageBackground: "bg-amber-100" },
  yellow: { background: "bg-yellow-200", imageBorder: "border-yellow-300", imageBackground: "bg-yellow-100" },
  lime: { background: "bg-lime-200", imageBorder: "border-lime-300", imageBackground: "bg-lime-100" },
  green: { background: "bg-green-200", imageBorder: "border-green-300", imageBackground: "bg-green-100" },
  emerald: { background: "bg-emerald-200", imageBorder: "border-emerald-300", imageBackground: "bg-emerald-100" },
  teal: { background: "bg-teal-200", imageBorder: "border-teal-300", imageBackground: "bg-teal-100" },
  cyan: { background: "bg-cyan-200", imageBorder: "border-cyan-300", imageBackground: "bg-cyan-100" },
  sky: { background: "bg-sky-200", imageBorder: "border-sky-300", imageBackground: "bg-sky-100" },
  blue: { background: "bg-blue-200", imageBorder: "border-blue-300", imageBackground: "bg-blue-100" },
  indigo: { background: "bg-indigo-200", imageBorder: "border-indigo-300", imageBackground: "bg-indigo-100" },
  violet: { background: "bg-violet-200", imageBorder: "border-violet-300", imageBackground: "bg-violet-100" },
  purple: { background: "bg-purple-200", imageBorder: "border-purple-300", imageBackground: "bg-purple-100" },
  fuchsia: { background: "bg-fuchsia-200", imageBorder: "border-fuchsia-300", imageBackground: "bg-fuchsia-100" },
  pink: { background: "bg-pink-200", imageBorder: "border-pink-300", imageBackground: "bg-pink-100" },
  rose: { background: "bg-rose-200", imageBorder: "border-rose-300", imageBackground: "bg-rose-100" },
} as const;
