export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSection {
  title: string;
  intro?: string;
  items: FaqItem[];
}

export function linkifyAnswer(text: string): string {
  return text
    .replace(/services page/gi, '<a href="/services" class="underline hover:text-gray-900">services page</a>')
    .replace(/our gallery/gi, '<a href="/services" class="underline hover:text-gray-900">our gallery</a>')
    .replace(/this chart for pricing/gi, '<a href="/price-guide" class="underline hover:text-gray-900">Price Guide</a>')
    .replace(/full Price Guide/gi, '<a href="/price-guide" class="underline hover:text-gray-900">Price Guide</a>')
    .replace(/list of furniture pieces/gi, '<a href="/price-guide" class="underline hover:text-gray-900">Price Guide</a>')
    .replace(/Acuity booking on our website/gi, '<a href="/book" class="underline hover:text-gray-900">online booking</a>');
}

export function parseFaq(md: string): FaqSection[] {
  const body = md.replace(/^# .+\n+/m, '');
  const rawSections = body.split(/^## /m).filter(Boolean);

  return rawSections.map((section) => {
    const newlineIndex = section.indexOf('\n');
    const title = section.slice(0, newlineIndex).trim();
    const content = section.slice(newlineIndex + 1).trim();

    const items: FaqItem[] = [];
    const qaPattern = /\*\*(.+?)\*\*[ \t]*\r?\n([\s\S]*?)(?=\r?\n\*\*|$)/g;
    let match: RegExpExecArray | null;

    while ((match = qaPattern.exec(content)) !== null) {
      items.push({
        question: match[1].trim(),
        answer: linkifyAnswer(match[2].trim()),
      });
    }

    const intro = items.length === 0 ? linkifyAnswer(content) : undefined;

    return { title, intro, items };
  });
}
