import { Config } from "tailwindcss"

const config: Config = {
  content: ["src/app/**/*.tsx", "src/components/*.tsx"],
  theme: {
    extend: {
      colors: {
        foreground: "#081111",
        background: "#f7fbfb",
        primary: "#55a5aa",
        secondary: "#d1a2a8",
      },
    },
  },
}

export default config
