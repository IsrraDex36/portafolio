import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import TerminalCard from './components/TerminalCard';
import { skillsData } from './data/skillsData';
import BlurText from '@components/BlurText/BlurText';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    // Configuración del observer memoizada
    const observerConfig = useMemo(() => ({
        threshold: window.innerWidth < 768 ? 0.1 : 0.3,
        rootMargin: window.innerWidth < 768 ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
    }), []);

    // Handler para el observer
    const handleIntersection = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
    }, []);

    // Intersection Observer para detectar cuando la sección es visible
    useEffect(() => {
        const currentRef = skillsRef.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(handleIntersection, observerConfig);
        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [handleIntersection, observerConfig]);
 
    return (
        <section 
            ref={skillsRef} 
            className="w-full mt-16 md:mt-20 max-w-7xl mx-auto px-4 py-12 md:py-16"
            aria-labelledby="skills-heading"
        >
            {/* Header Section */}
            <header className="mb-12 md:mb-16 text-center flex flex-col items-center">
                <BlurText
                    text="Habilidades Técnicas"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white"
                    id="skills-heading"
                />
                <BlurText
                    text="Tecnologías y herramientas que domino para crear soluciones eficientes"
                    delay={200}
                    animateBy="words"
                    direction="top"
                    className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
                />
            </header>

            {/* Skills Grid */}
            <div className="relative">
                {/* Gradient Background Decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 rounded-3xl blur-3xl" aria-hidden="true" />
                
                {/* Skills Cards Grid */}
                <div 
                    className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center"
                    role="grid"
                    aria-label="Habilidades técnicas organizadas por categorías"
                >
                    {skillsData.map((category, index) => {
                        const isMiddleCard = skillsData.length % 2 !== 0 && index === skillsData.length - 1;
                        
                        return (
                            <div 
                                key={`skill-category-${index}`}
                                className={`w-full max-w-sm ${isMiddleCard ? 'md:col-span-2 lg:col-span-1' : ''}`}
                                role="gridcell"
                            >
                                <TerminalCard 
                                    title={category.title}
                                    skills={category.skills}
                                    delay={index * 150} // Delay optimizado de 150ms entre cards
                                    shouldAnimate={isVisible}
                                    aria-label={`Categoría de habilidades: ${category.title}`}
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Accent Line */}
                <div 
                    className="mt-12 md:mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    aria-hidden="true"
                />
            </div>

        </section>
    );
};

export default Skills;
