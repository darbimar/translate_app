import React, { useEffect, useState } from 'react';
import { Section, Word } from '../../types/types';
import { StyledSection, StyledWord } from './style';

type ConsructorProps = {
  options: Word[];
  setOptions: (param: Word[]) => void;
  sections: Section[];
  setSections: (param: Section[]) => void;
};

const ConstuctorBlock: React.FC<ConsructorProps> = ({
  options,
  setOptions,
  sections,
  setSections,
}) => {
  const [isSorted, setIsSorted] = useState(false);
  const [currentSection, setCurrentSection] = useState<Section | null>(null);
  const [currentWord, setCurrentWord] = useState<Word | null>(null);

  const dragStartHandler = (
    e: MouseEvent | TouchEvent | PointerEvent,
    section: Section,
    item: Word,
  ) => {
    setCurrentWord(item);
    setCurrentSection(section);
  };

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, section: Section, item: Word) => {
    e.preventDefault();
    e.stopPropagation();

    if (currentWord && currentSection) {
      const currentIndex = currentSection.items.indexOf(currentWord);

      currentSection?.items.splice(currentIndex, 1);
      const dropIndex = section.items.indexOf(item);
      section.items.splice(dropIndex, 0, currentWord);

      setSections(
        sections.map((s: Section) => {
          if (s.id === section.id) {
            return section;
          }
          if (s.id === currentSection.id) {
            return currentSection;
          }
          return s;
        }),
      );
    }
  };

  const dropWordHandler = (e: React.DragEvent<HTMLDivElement>, section: Section) => {
    e.preventDefault();

    if (currentWord && currentSection) {
      section.items.push(currentWord);
      const currentIndex = currentSection?.items.indexOf(currentWord);

      currentSection?.items.splice(currentIndex, 1);

      setSections(
        sections.map((s: Section) => {
          if (s.id === section.id) {
            return section;
          }
          if (s.id === currentSection.id) {
            return currentSection;
          }
          return s;
        }),
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setOptions(options.sort((a: Word, b: Word) => a.id - b.id));
      setIsSorted(!isSorted);
    }, 1000);
  }, [sections]);

  return (
    <>
      {sections.map((section: Section) => (
        <StyledSection
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropWordHandler(e, section)}
          key={section.id}>
          {section.items.map((item: Word) => (
            <StyledWord
              layout
              transition={{
                duration: 1,
                ease: 'linear',
              }}
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, section, item)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, section, item)}
              key={item.id}>
              {item.word}
            </StyledWord>
          ))}
        </StyledSection>
      ))}
    </>
  );
};

export default ConstuctorBlock;
