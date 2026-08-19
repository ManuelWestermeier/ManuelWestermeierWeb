import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SWAP_INTERVAL_MS = 2200;
const IDLE_MS = 4500;
const INTRO_MARQUEE_MS = 1000;

/**
 * Compressed, sharp-cornered skills grid. Every slot always holds a skill
 * (no empty/gray cells) — every couple seconds two skills trade places, and
 * framer-motion's layout animation makes them visibly fly across the grid
 * to their new spot. Starts with a 1s marquee intro before settling into
 * the grid. When the visitor isn't hovering the board and hasn't scrolled
 * for a while, it switches to infinite right-to-left marquee rows (one per
 * category); hovering or scrolling brings the grid straight back.
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
  const [hovering, setHovering] = useState(false);
  const [idle, setIdle] = useState(false);
  const [intro, setIntro] = useState(true);
  const idleTimer = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), INTRO_MARQUEE_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function resetIdle() {
      setIdle(false);
      clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), IDLE_MS);
    }
    resetIdle();
    window.addEventListener("scroll", resetIdle, { passive: true });
    return () => {
      window.removeEventListener("scroll", resetIdle);
      clearTimeout(idleTimer.current);
    };
  }, []);

  const marqueeMode = intro || (idle && !hovering);

  useEffect(() => {
    if (marqueeMode) return;
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
  }, [marqueeMode]);

  return (
    <div
      className="skills-board"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <AnimatePresence mode="wait">
        {marqueeMode ? (
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
