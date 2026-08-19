import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SWAP_INTERVAL_MS = 2200;
const INTRO_MARQUEE_MS = 2500;

/**
 * Compressed, sharp-cornered skills grid. Every slot always holds a skill
 * (no empty/gray cells) — every couple seconds two skills trade places, and
 * framer-motion's layout animation makes them visibly fly across the grid
 * to their new spot. Opens with a one-time marquee intro (2.5s) that then
 * transitions into the grid for good — it never reverts to marquee mode
 * afterward.
 */
export default function SkillsBoard({ groups }) {
  const flatSkills = useMemo(
    () =>
      groups.flatMap((g) =>
        g.items.map((item) => ({
          ...item,
          color: g.color,
          category: g.category,
          id: `${g.category}-${item.name}`,
        })),
      ),
    [groups],
  );

  const [order, setOrder] = useState(flatSkills);
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), INTRO_MARQUEE_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (intro) return;
    const t = setInterval(() => {
      setOrder((prev) => {
        const a = Math.floor(Math.random() * prev.length);
        let b = Math.floor(Math.random() * prev.length);
        while (b === a) b = Math.floor(Math.random() * prev.length);
        const next = [...prev];
        [next[a], next[b]] = [next[b], next[a]];
        return next;
      });
    }, SWAP_INTERVAL_MS);
    return () => clearInterval(t);
  }, [intro]);

  return (
    <div className="skills-board">
      <AnimatePresence mode="wait">
        {intro ? (
          <motion.div
            key="marquee"
            className="marquee-stack skills-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {groups.map((g, i) => {
              const doubled = [...g.items, ...g.items];
              return (
                <div className="marquee-row" key={g.category}>
                  <div
                    className="marquee-track"
                    style={{ "--marquee-duration": `${18 + i * 3}s` }}
                  >
                    {doubled.map(({ name, Icon }, j) => (
                      <span
                        key={`${name}-${j}`}
                        className="marquee-chip"
                        style={{ color: g.color }}
                      >
                        <Icon size={14} />
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            className="skills-grid skills-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {order.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="skill-cell"
              >
                <span style={{ color: skill.color, opacity: 0.9 }}>
                  <skill.Icon size={17} />
                </span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
