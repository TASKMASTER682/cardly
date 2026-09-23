export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Is the tweet to image generator free?",
    answer:
      "Yes. Every theme, aspect ratio and export option is free to use, with no account, subscription or hidden paywall.",
  },
  {
    question: "Does it add a watermark to my image?",
    answer:
      "No watermark is added unless you turn on the optional \"Made with Frame Posting\" branding yourself — and you can switch it off entirely at any time.",
  },
  {
    question: "Do I need to sign up or log in?",
    answer:
      "No signup is required. Paste a link or type your text, style the card, and download it in seconds.",
  },
  {
    question: "What image size should I use for Instagram, LinkedIn and X?",
    answer:
      "Use 1:1 for an Instagram feed post, 4:5 for a taller Instagram portrait post, or 16:9 for LinkedIn and X-style link cards. Every export renders at 2x resolution for a crisp, retina-quality PNG.",
  },
  {
    question: "Can I use Frame Posting as an X post to image converter?",
    answer:
      "Absolutely. Paste any x.com or twitter.com post URL into the input field and Frame Posting will fetch the content, letting you restyle it into a clean, downloadable image — no screenshot needed.",
  },
  {
    question: "Does Frame Posting work as a LinkedIn post image maker?",
    answer:
      "Yes. Select the 16:9 aspect ratio for LinkedIn-optimized dimensions. The 2x retina export ensures your post image looks sharp in LinkedIn feeds and document carousels.",
  },
  {
    question: "Can I make a card from my own text instead of a real tweet?",
    answer:
      "Yes — switch the input to \"Write text\" and type anything you like. It's a fast way to make an aesthetic quote or caption card with no source post at all.",
  },
];