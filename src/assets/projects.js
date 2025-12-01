import zapier from '../assets/projects/zapier.png'
import paytm from '../assets/projects/paytm.png'
import backpack from '../assets/projects/backpack.png'
import portfolio from '../assets/projects/portfolio.png'
import grocery from '../assets/projects/grocery.png'
import Lovable from "../assets/projects/Lovable.png"

const zap = import.meta.env.VITE_ZAPIER
const back = import.meta.env.VITE_BACKPACK
const pay = import.meta.env.VITE_PAYTM
const groc = import.meta.env.VITE_GROCERY
const portf = import.meta.env.VITE_PORTFOLIO

const projects = [
    {
        image : zapier,
        tittle:"Zapier",
        tags: ["NextJs | TurboRepo | Typescript | Prisma | Docker"],
        discription : `A Zapier-inspired automation platform that enables users to create custom workflows and automate tasks effortlessly. 
                    Built with Next.js and TurboRepo for a scalable monorepo architecture, 
                    It leverages TypeScript and Prisma for type-safe backend development and efficient database management. 
                    Docker is used for seamless deployment and containerization. 
                    Designed with a clean, intuitive UI and robust architecture.`,
        github : "https://github.com/neshwanthkandula/Zapier-Project",
        link:zap
    },
    {
        image : paytm,
        tittle:"PayTM",
        tags: ["NextJs | TurboRepo | Prisma | TypeScript | TailwindCSS"],
        discription :`Developed a full-stack digital wallet platform supporting P2P transfers, detailed transaction history, 
                    and real-time balance tracking. Added on-ramp functionality for wallet top-ups and implemented a 
                    temporary webhook for payment event simulation.
                    Built with Next.js, Turborepo, and Prisma to achieve a scalable, modular architecture.`,
        github : "https://github.com/neshwanthkandula/Paytm-Wallet",
        link:pay
    },
    {
        image : backpack,
        tittle:"Asset Exchange",
        tags: ["WebsSocket Server | NextJs | Docker | Tailwind "],
        discription : `A real-time trading platform inspired by Backpack Exchange, designed for seamless item exchange without cryptocurrency. 
                        Built with Next.js and styled using Tailwind CSS.
                        Powered by a WebSocket server for real-time updates and containerized with Docker for smooth deployment and scalability. 
                        The platform supports live order book updates and instant trades, delivering a smooth, interactive experience. 
                        Designed with a focus on performance, modular architecture, and easy future feature expansion.`,
        github : "https://github.com/neshwanthkandula/exchange-project",
        link:back
    },
    {
        image : Lovable,
        tittle:"Lovable",
        tags: ["AI Integration | TRPC | e2b"],
        discription : `I built an AI-powered Lovable-inspired landing page generator using Next.js, tRPC, Inngest, E2B, and shadcn/ui. Users can enter a prompt and instantly generate a fully structured landing page with modern, responsive UI components. Inngest powers the async generation workflow, while E2B securely executes code in isolated sandboxes. The project highlights my ability to build AI-driven UI tools and integrate advanced full-stack systems.`,
        github : "https://github.com/neshwanthkandula/lovable-app",
        link: "https://lovable-app-one.vercel.app/"
    },
    {
        image : grocery,
        tittle:"GroceryList",
        tags: ["ReactJS | JavaScript | LocalStorage"],
        discription : `Grocery List App is a simple React.js project that helps users manage their daily grocery items.
                        It allows adding, searching, checking/unchecking, and deleting items easily.
                        The app dynamically shows the total number of items in the list.
                        Built with React for functionality and custom CSS for a clean, responsive design.
                        It also uses Local Storage to persist grocery items, so the list is saved even after refreshing or reopening the app.
                        A lightweight and user-friendly solution for organizing shopping lists.`,
        github : "https://github.com/neshwanthkandula/GroceryList",
        link:groc
    },
    {
        image : portfolio,
        tittle:"Portfolio",
        tags: ["ReactJs | JavaScript"],
        discription : `A responsive portfolio web app built using the MERN stack,
                       focusing on performance and clean architecture. 
                       It features dynamic routing, smooth scrolling, and reusable components for scalability. 
                       The design emphasizes accessibility and responsiveness, ensuring a seamless experience across devices.`,
        github : "https://github.com/neshwanthkandula/Zapier-Project",
        link:portf
    }

]


export default projects