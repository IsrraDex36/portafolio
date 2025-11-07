import React, { useState, useEffect } from 'react';
import useTypewriter from '../../../hooks/useTypewriter';

const TerminalCard = ({ title, skills, delay = 0, shouldAnimate = false }) => {
    const displayTitle = useTypewriter(title, 80, shouldAnimate);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (shouldAnimate) {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, delay);
            return () => clearTimeout(timer);
        } else {
            // Reset animation state when shouldAnimate becomes false
            setShowContent(false);
        }
    }, [delay, shouldAnimate]);

    return (
        <div className="bg-black text-white p-3 sm:p-4 w-full h-auto min-h-[20rem] sm:min-h-[22rem] rounded-lg border border-white/20 select-none transition-all duration-300 ease-in-out shadow-2xl overflow-hidden">
            {/* Header con controles de terminal */}
            <div className="flex items-center justify-center mb-6 relative">
                <div className="absolute left-0 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                    {displayTitle}
                    <span className="animate-pulse text-white">|</span>
                </h3>
            </div>
        
            {/* Grid de habilidades con SVGs */}
            <div className={`grid grid-cols-2 gap-4 px-2 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                            <img 
                                src={skill.svg} 
                                alt={skill.name}
                                className="w-9 h-9 object-contain max-w-full max-h-full"
                            />
                        </div>
                        <span className="text-white text-sm text-center font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TerminalCard;
