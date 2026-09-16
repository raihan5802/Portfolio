"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  skillCategories,
  skillsByCategory,
  type SkillCategoryId,
  type SkillItem,
} from "./skills-data";
import SkillsDock from "./SkillsDock";

const PANEL_EASE = [0.22, 1, 0.36, 1] as const;

function SkillGlassCard({ skill }: { skill: SkillItem }) {
  return (
    <div
      className="skills-glass-card group rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-md transition-all duration-200 hover:border-[#0080B0]/45 hover:bg-white/[0.07]"
      style={
        skill.accent
          ? {
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px ${skill.accent}18`,
            }
          : undefined
      }
    >
      <span
        className="mb-2 block h-1 w-7 rounded-full transition-all duration-200 group-hover:w-10"
        style={{ backgroundColor: skill.accent ?? "#0080B0" }}
      />
      <p className="text-sm font-semibold text-[#DCDFD2]">{skill.name}</p>
    </div>
  );
}

export default function SkillsConsole() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategoryId>("languages");
  const reduceMotion = useReducedMotion();
  const activeSkills = skillsByCategory[activeCategory];
  const activeLabel =
    skillCategories.find((c) => c.id === activeCategory)?.label ?? "";

  return (
    <div className="skills-console mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="flex min-h-[280px] flex-col lg:min-h-[320px] lg:flex-row">
        <nav
          className="skills-sidebar shrink-0 border-b border-white/10 lg:w-52 lg:border-b-0 lg:border-r"
          aria-label="Skill categories"
        >
          <ul className="flex gap-1 overflow-x-auto p-2.5 lg:flex-col lg:overflow-visible lg:p-3">
            {skillCategories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <li key={category.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`skills-tab w-full cursor-pointer rounded-lg px-3 py-2 text-left font-[family-name:var(--font-geist-mono)] text-xs transition-all duration-200 sm:text-sm lg:px-3.5 lg:py-2.5 ${
                      isActive ? "skills-tab-active" : "skills-tab-idle"
                    }`}
                  >
                    <span className="lg:hidden">{category.shortLabel}</span>
                    <span className="hidden lg:inline">{category.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative flex flex-1 flex-col overflow-hidden">
          <div className="border-b border-white/5 px-4 py-3 sm:px-5">
            <p className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-widest text-[#94A3B8]">
              Active module
            </p>
            <p className="mt-0.5 text-base font-bold text-[#0080B0] sm:text-lg">
              {activeLabel}
            </p>
          </div>

          <div className="relative flex-1 p-4 sm:p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={
                  reduceMotion
                    ? { duration: 0.01 }
                    : { duration: 0.35, ease: PANEL_EASE }
                }
                className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4"
              >
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={
                      reduceMotion
                        ? { duration: 0.01 }
                        : {
                            duration: 0.3,
                            ease: PANEL_EASE,
                            delay: index * 0.04,
                          }
                    }
                  >
                    <SkillGlassCard skill={skill} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <SkillsDock />
    </div>
  );
}
