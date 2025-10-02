import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { memo, useCallback } from 'react';
import BlurText from '@components/BlurText/BlurText';
import FadeContent from '@components/FadeContent/FadeContent';
import Squares from '@components/Squares/Squares';
import { techIcons } from '@components/Proyects/data/techIcons';
import { projectItems } from './data/projectItems';
import { backgroundConfig } from './data/backgroundConfig';

// Centralized animation configuration
const motionConfig = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

// Utility function for class names
function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Common styles
const cardBaseStyles = "group overflow-hidden backdrop-blur-md border rounded-xl flex flex-col h-full transition-all duration-300";
const quoteBaseStyles = "bg-gradient-to-br from-stone-900/90 to-neutral-900/90 border-stone-700/50 hover:border-stone-600/70";
const gifBaseStyles = "relative border border-neutral-700/50 bg-black/20 backdrop-blur-xl hover:border-neutral-600/70 hover:bg-black/30 shadow-2xl hover:shadow-3xl";

// Memoized Project Card Component
const ProjectBentoCard = memo(function ProjectBentoCard({ 
  title, 
  description, 
  media, 
  technologies, 
  githubUrl, 
  liveUrl 
}) {
  return (
    <motion.div
      {...motionConfig}
      className={clsx(
        cardBaseStyles,
        "bg-black/30 border-gray-900 cursor-pointer hover:border-gray-700"
      )}
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full h-[200px]">
        {media && (
          <img
            loading="lazy"
            decoding="async"
            src={media.src}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="p-3 flex flex-col">
          <h3 className="text-base font-bold text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-gray-300 text-xs leading-relaxed mb-2">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-1.5 py-0.5 rounded-lg border border-gray-800 bg-black/50 text-gray-300 flex items-center gap-1"
              >
                <span className="text-gray-400 text-xs">
                  {techIcons[tech] || null}
                </span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Footer with buttons */}
        <div className="px-3 pb-3 flex gap-1.5 justify-end">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver proyecto ${title} en vivo`}
              className="inline-flex items-center justify-center gap-1 bg-black hover:bg-gray-900 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-gray-800"
            >
              <ExternalLink className="w-3 h-3" />
              Ver
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código fuente de ${title} en GitHub`}
              className="inline-flex items-center justify-center gap-1 bg-black hover:bg-gray-900 text-gray-200 transition-colors text-sm px-3 py-1.5 rounded-lg border border-gray-800"
            >
              <Github className="w-3 h-3" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
});

// Memoized Quote Card Component
const QuoteCard = memo(function QuoteCard({ content, author }) {
  return (
    <motion.div
      {...motionConfig}
      className={clsx(cardBaseStyles, quoteBaseStyles, "cursor-pointer")}
    >
      <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
        <div className="text-4xl text-stone-300 mb-3 font-serif">"</div>
        <p className="text-stone-100 text-sm font-medium leading-relaxed mb-3 italic">
          {content}
        </p>
        <p className="text-stone-400 text-xs">— {author}</p>
      </div>
    </motion.div>
  );
});

// Memoized Stat Card Component
const StatCard = memo(function StatCard({ title, value, subtitle }) {
  return (
    <motion.div
      {...motionConfig}
      className={clsx(
        cardBaseStyles,
        "bg-gradient-to-br from-neutral-800/90 to-zinc-900/90 border-neutral-700/50 cursor-pointer hover:border-neutral-600/70"
      )}
    >
      <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
        <h3 className="text-neutral-300 text-xs font-medium mb-2">{title}</h3>
        <div className="text-white text-2xl font-bold mb-1">{value}</div>
        <p className="text-neutral-400 text-xs">{subtitle}</p>
      </div>
    </motion.div>
  );
});

// Memoized Skill Card Component
const SkillCard = memo(function SkillCard({ title, skills }) {
  return (
    <motion.div
      {...motionConfig}
      className={clsx(
        cardBaseStyles,
        "bg-gradient-to-br from-slate-800/90 to-gray-900/90 border-slate-700/50 cursor-pointer hover:border-slate-600/70"
      )}
    >
      <div className="p-4 flex-1 flex flex-col justify-center">
        <h3 className="text-slate-200 text-sm font-bold mb-3 text-center">
          {title}
        </h3>
        <div className="flex flex-wrap gap-1 justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-100 border border-slate-600/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

// Memoized Status Card Component
const StatusCard = memo(function StatusCard({ title, content }) {
  return (
    <motion.div
      {...motionConfig}
      className={clsx(
        cardBaseStyles,
        "bg-gradient-to-br from-zinc-800/90 to-stone-900/90 border-zinc-700/50 cursor-pointer hover:border-zinc-600/70"
      )}
    >
      <div className="p-4 flex-1 flex flex-col justify-center items-center text-center">
        <div className="w-2 h-2 bg-neutral-400 rounded-full mb-2" />
        <h3 className="text-zinc-300 text-xs font-medium mb-2">{title}</h3>
        <p className="text-white text-sm font-semibold">{content}</p>
      </div>
    </motion.div>
  );
});

// Memoized GIF Card Component
const GifCard = memo(function GifCard({ media }) {
  return (
    <motion.div
      {...motionConfig}
      className={clsx(gifBaseStyles, "flex cursor-pointer")}
    >
      <div className="absolute inset-0">
        <img
          loading="lazy"
          decoding="async"
          src={media.src}
          alt="Animación decorativa"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-stone-500/5 to-transparent rounded-xl" />
      </div>
    </motion.div>
  );
});

// Memoized Split GIF Card Component
const SplitGifCard = memo(function SplitGifCard({ medias = [] }) {
  const [top, bottom] = medias;
  return (
    <div className={clsx(gifBaseStyles, "flex flex-col cursor-pointer")}>
      {/* Top half */}
      <div className="relative flex-1 overflow-hidden">
        {top && (
          <img
            loading="lazy"
            decoding="async"
            src={top.src}
            alt="Gif superior"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Subtle visual separator */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />

      {/* Bottom half */}
      <div className="relative flex-1 overflow-hidden">
        {bottom && (
          <img
            loading="lazy"
            decoding="async"
            src={bottom.src}
            alt="Gif inferior"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/20" />
      </div>

      {/* Hover effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-500/10 via-stone-500/5 to-transparent rounded-xl" />
      </div>
    </div>
  );
});

// Memoized GIF Quote Split Card Component
const GifQuoteSplitCard = memo(function GifQuoteSplitCard({ 
  gifMedia, 
  quoteContent, 
  quoteAuthor 
}) {
  return (
    <div className={clsx(gifBaseStyles, "flex flex-col cursor-pointer")}>
      {/* Top half - GIF */}
      <div className="relative flex-1 overflow-hidden">
        {gifMedia && (
          <img
            loading="lazy"
            decoding="async"
            src={gifMedia.src}
            alt="Animación decorativa"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Separator */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />

      {/* Bottom half - Quote */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center p-3 bg-gradient-to-br from-stone-900/90 to-neutral-900/90">
        <div className="text-2xl text-stone-300 mb-2 font-serif">"</div>
        <p className="text-stone-100 text-xs font-medium leading-relaxed mb-2 italic">
          {quoteContent}
        </p>
        <p className="text-stone-400 text-xs">— {quoteAuthor}</p>
      </div>
    </div>
  );
});

// Memoized Mini Grid Card Component
const MiniGridCard = memo(function MiniGridCard({ cards }) {
  return (
    <motion.div
      {...motionConfig}
      className="group bg-transparent h-full"
    >
      <div className="p-3 h-full">
        <div className="grid grid-cols-2 gap-2 h-full">
          {cards.map((card, index) => (
            <div key={index} className="h-full">
              {card.type === "quote" ? (
                <div className="bg-gradient-to-br from-stone-900/90 to-neutral-900/90 backdrop-blur-md border border-stone-700/50 rounded-lg p-2 h-full flex flex-col justify-center items-center text-center">
                  <div className="text-lg text-stone-300 mb-1 font-serif">"</div>
                  <p className="text-stone-100 text-xs font-medium leading-relaxed mb-1 italic">
                    {card.content}
                  </p>
                  <p className="text-stone-400 text-xs">— {card.author}</p>
                </div>
              ) : card.type === "gif" ? (
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-neutral-700/50 bg-black/20 backdrop-blur-xl">
                  <div className="absolute inset-0">
                    <img
                      loading="lazy"
                      decoding="async"
                      src={card.src}
                      alt="Animación decorativa"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

// Memoized Quote GIF Split Card Component
const QuoteGifSplitCard = memo(function QuoteGifSplitCard({ 
  quoteContent, 
  quoteAuthor, 
  gifMedia 
}) {
  return (
    <div className={clsx(gifBaseStyles, "flex flex-col cursor-pointer")}>
      {/* Top half - Quote */}
      <div className="relative flex-1 flex flex-col justify-center items-center text-center p-3 bg-gradient-to-br from-stone-900/90 to-neutral-900/90">
        <div className="text-2xl text-stone-300 mb-2 font-serif">"</div>
        <p className="text-stone-100 text-xs font-medium leading-relaxed mb-2 italic">
          {quoteContent}
        </p>
        <p className="text-stone-400 text-xs">— {quoteAuthor}</p>
      </div>

      {/* Separator */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />

      {/* Bottom half - GIF */}
      <div className="relative flex-1 overflow-hidden">
        {gifMedia && (
          <img
            loading="lazy"
            decoding="async"
            src={gifMedia.src}
            alt="Animación decorativa"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/20" />
      </div>
    </div>
  );
});

// Card component mapping for better maintainability
const cardComponents = {
  "gif-split": SplitGifCard,
  "gif-quote-split": GifQuoteSplitCard,
  "quote-gif-split": QuoteGifSplitCard,
  "mini-grid": MiniGridCard,
  "gif": GifCard,
  "quote": QuoteCard,
  "stat": StatCard,
  "skill": SkillCard,
  "status": StatusCard,
  "default": ProjectBentoCard
};

// Main Component
export default function ProjectBentoGrid() {
  const handleGoBack = useCallback(() => {
    window.location.href = '/';
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-950 overflow-hidden relative">
      {/* Animated Grid Background */}
      <div className={`absolute inset-0 ${backgroundConfig.opacity}`}>
        <Squares 
          speed={backgroundConfig.speed} 
          squareSize={backgroundConfig.squareSize}
          direction={backgroundConfig.direction}
          borderColor={backgroundConfig.borderColor}
          hoverFillColor={backgroundConfig.hoverFillColor}
        />
      </div>
      
      <div className="max-w-7xl mx-auto p-4 sm:p-6 relative z-10">
        {/* Header Section */}
        <header className="relative mb-12">
          {/* Back Button */}
          <button
            onClick={handleGoBack}
            aria-label="Regresar al inicio"
            className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Regresar</span>
          </button>

          {/* Centered Title */}
          <div className="w-full grid place-items-center pt-12 sm:pt-16 text-center px-4">
            <h1 className="max-w-none">
              <BlurText
                text="Mis Proyectos"
                delay={150}
                animateBy="words"
                direction="top"
                className="block mx-auto text-4xl sm:text-5xl md:text-6xl font-bold text-white"
              />
            </h1>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-[450px]">
          {projectItems.map((item, index) => {
            const CardComponent = cardComponents[item.type] || cardComponents.default;
            
            return (
              <FadeContent
                key={index}
                delay={index * 100}
                duration={800}
                threshold={0.1}
                className={clsx("relative group", item.className)}
              >
                <CardComponent {...item} />
              </FadeContent>
            );
          })}
        </div>
      </div>
    </div>
  );
}
