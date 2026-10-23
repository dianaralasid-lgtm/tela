/* =====================================================================
   QUESTION BANK — TutorsElevateLearningApp
   =====================================================================
   This file holds every practice question. Edit it to add, change or
   delete questions; the dashboard picks them up the next time it loads.

   HOW IT'S LAID OUT
   Each topic is one QUESTION_BANK.add({ ... }); block:

     topic            The topic's title EXACTLY as it appears on the
                      dashboard tile (capital letters don't matter).
     title            Heading shown at the top of the questions.
     type             How answers are marked (see below). Applies to every
                      question in the topic unless a question gives its own.
     questionsPerSet  How many questions to pick at random each time.
                      Leave it out (or make it bigger than the list) to
                      use every question.
     tip              Optional hint shown above the questions.
     questions        The list of questions (see below).

   A QUESTION looks like this:
     { question: "Simplify a + a + a", marks: 1, answer: "3a" },

   Optional extras on a question:
     section  A heading such as "Section B: Decimals".
     text     A sentence shown before the question (e.g. "The diagram shows...").
     diagram  A picture, written as an SVG image between backticks ` `.
     type     Marking type for just this question.

   QUESTIONS WITH SEVERAL PARTS that must always appear together,
   labelled (a), (b), ...:
     { text: "Jo says 3.4 + 2.15 = 5.19.", parts: [
         { question: "Explain Jo's mistake.", marks: 1, answer: "...", type: "explain" },
         { question: "Give the correct answer.", marks: 1, answer: "5.55" }
     ] },

   MARKING TYPES
     "algebra"  Expressions such as 4a + 6w. Any order is accepted, but the
                answer must be fully simplified. Write powers as a² or a^2.
     "number"   A number. £, units (km, kg, m...) and pence (474p) are
                accepted, and 7.70 counts the same as 7.7.
     "explain"  A written answer. The student sees your answer as a model
                and marks themselves right or wrong.

   EDITING TIPS
   - Every question needs a comma after its closing } except the last.
   - Put text inside "double quotes". If the text itself contains a double
     quote, put a backslash before it: \"like this\".
   - Changing a question's wording resets students' saved answers for it.
   - If the questions stop appearing after an edit, there's probably a
     missing comma, quote or bracket near the part you changed.
   ===================================================================== */


QUESTION_BANK.add({
  topic: "Algebra: collecting like terms",
  title: "Collecting Like Terms: Exam Style Questions",
  type: "algebra",
  questionsPerSet: 10,
  tip: "Type your answer and press <b>Enter</b> or <b>Check</b>. For powers, use the <b>x²</b> button or type ^2 (e.g. 2a^2).",
  questions: [
    { question: "Simplify a + a + a", marks: 1, answer: "3a" },
    { question: "Simplify 4a + 3a − a", marks: 1, answer: "6a" },
    { question: "Simplify 4ac + 5ac", marks: 1, answer: "9ac" },
    { question: "Simplify 4c − 6c", marks: 1, answer: "−2c" },
    { question: "Simplify a² + a²", marks: 1, answer: "2a²" },
    { question: "Simplify m + m + m + m", marks: 1, answer: "4m" },
    { question: "Simplify 8c + 2p − 2c + 4p", marks: 2, answer: "6c + 6p" },
    { question: "Simplify 6a + 5w − 2a + w", marks: 2, answer: "4a + 6w" },
    { question: "Simplify 9y − 3y", marks: 1, answer: "6y" },
    { question: "Simplify 7y + 2w − 3y + 2w", marks: 2, answer: "4y + 4w" },
    { question: "Simplify 7y + 10 + 3y − 9", marks: 2, answer: "10y + 1" },
    { question: "Simplify s + s + s + s − s", marks: 1, answer: "3s" },
    { question: "Simplify 5c − 3s + 3c + 7s", marks: 2, answer: "8c + 4s" },
    { question: "Simplify 8a + 3c − 5c + 3a", marks: 2, answer: "11a − 2c" },
    { question: "Simplify 3a + 2w − 5a − 9w", marks: 2, answer: "−2a − 7w" },
    { question: "Simplify 3y² + 2w² + y² − w²", marks: 2, answer: "4y² + w²" },
    { question: "Simplify 2x + 2x", marks: 1, answer: "4x" },
    { question: "Simplify 7w − 2w", marks: 1, answer: "5w" },
    { question: "Simplify 3m − m", marks: 1, answer: "2m" },
    { question: "Simplify y² + y² + y²", marks: 1, answer: "3y²" },
    { question: "Simplify 7h + 5k + h − 3k", marks: 2, answer: "8h + 2k" },
    {
      text: "The diagram shows a pentagon.",
      diagram: `<svg viewBox="0 0 210 170" width="210" role="img" aria-label="Pentagon with sides y, y, x, x and 2x">
        <polygon points="30,140 180,140 180,70 105,12 30,70"/>
        <text x="105" y="162" text-anchor="middle">2x</text>
        <text x="190" y="110">x</text>
        <text x="20" y="110" text-anchor="end">x</text>
        <text x="152" y="34">y</text>
        <text x="58" y="34" text-anchor="end">y</text>
      </svg>`,
      question: "Find an expression, in terms of x and y, for the perimeter of the pentagon.",
      marks: 2,
      answer: "4x + 2y"
    },
    {
      text: "The diagram shows an equilateral triangle. The length of each side is 2x + y.",
      diagram: `<svg viewBox="0 0 200 195" width="200" role="img" aria-label="Equilateral triangle with each side 2x + y">
        <polygon points="100,10 190,165 10,165"/>
        <line x1="47.2" y1="92" x2="62.8" y2="83"/>
        <line x1="137.2" y1="83" x2="152.8" y2="92"/>
        <line x1="100" y1="156" x2="100" y2="174"/>
        <text x="100" y="188" text-anchor="middle">2x + y</text>
      </svg>`,
      question: "Find an expression, in terms of x and y, for the perimeter of the triangle.",
      marks: 2,
      answer: "6x + 3y"
    },
    {
      text: "The diagram shows a rectangle.",
      diagram: `<svg viewBox="0 0 290 130" width="290" role="img" aria-label="Rectangle with length 2x + 7 and width x + 3">
        <rect x="20" y="28" width="200" height="90"/>
        <text x="120" y="18" text-anchor="middle">2x + 7</text>
        <text x="230" y="78">x + 3</text>
      </svg>`,
      question: "Find an expression, in terms of x, for the perimeter of the rectangle.",
      marks: 2,
      answer: "6x + 20"
    },
    {
      text: "The diagram shows an L shape. The two inner edges are not labelled.",
      diagram: `<svg viewBox="0 0 360 250" width="360" role="img" aria-label="L shape with top x, left 3x + 3, bottom 3x + 1 and right x + 2">
        <polygon points="70,20 150,20 150,140 290,140 290,220 70,220"/>
        <text x="110" y="12" text-anchor="middle">x</text>
        <text x="62" y="124" text-anchor="end">3x + 3</text>
        <text x="180" y="242" text-anchor="middle">3x + 1</text>
        <text x="298" y="184">x + 2</text>
      </svg>`,
      question: "Find an expression, in terms of x, for the perimeter of this L shape.",
      marks: 2,
      answer: "12x + 8"
    }
  ]
});


QUESTION_BANK.add({
  topic: "Addition of integers and decimals",
  title: "Addition of Integers and Decimals",
  type: "number",
  questionsPerSet: 10,
  tip: "Type your answer and press <b>Enter</b> or <b>Check</b>. You can include £ or units (e.g. £4.74 or 6.35 km), but you don't have to.",
  questions: [
    { section: "Section A: Integers", question: "Work out 34 + 25", marks: 1, answer: "59" },
    { section: "Section A: Integers", question: "Work out 128 + 47", marks: 1, answer: "175" },
    { section: "Section A: Integers", question: "Work out 356 + 289", marks: 1, answer: "645" },
    { section: "Section A: Integers", question: "Work out 1407 + 2685", marks: 1, answer: "4092" },

    { section: "Section B: Decimals", question: "Work out 4.5 + 3.2", marks: 1, answer: "7.7" },
    { section: "Section B: Decimals", question: "Work out 6.8 + 2.7", marks: 1, answer: "9.5" },
    { section: "Section B: Decimals", question: "Work out 12.35 + 4.21", marks: 1, answer: "16.56" },
    { section: "Section B: Decimals", question: "Work out 7.6 + 3.45", marks: 1, answer: "11.05" },
    { section: "Section B: Decimals", question: "Work out 15 + 2.8", marks: 1, answer: "17.8" },
    { section: "Section B: Decimals", question: "Work out 0.9 + 0.35", marks: 1, answer: "1.25" },
    { section: "Section B: Decimals", question: "Work out 23.47 + 18.86", marks: 1, answer: "42.33" },
    { section: "Section B: Decimals", question: "Work out 3.2 + 4.65 + 0.8", marks: 2, answer: "8.65" },
    { section: "Section B: Decimals", question: "Work out 105.6 + 39.48", marks: 2, answer: "145.08" },
    { section: "Section B: Decimals", question: "Work out 0.007 + 0.25", marks: 2, answer: "0.257" },

    { section: "Section C: Problem Solving", question: "Sam buys a sandwich for £3.45 and a drink for £1.29. How much does Sam spend altogether?", marks: 2, answer: "£4.74" },
    { section: "Section C: Problem Solving", question: "Priya runs 2.6 km on Monday and 3.75 km on Tuesday. How far does she run in total?", marks: 2, answer: "6.35 km" },
    { section: "Section C: Problem Solving", question: "Three bags weigh 1.25 kg, 0.8 kg and 2.4 kg. What is their total weight?", marks: 2, answer: "4.45 kg" },
    { section: "Section C: Problem Solving", question: "Find the missing number: 4.7 + ____ = 10", marks: 2, answer: "5.3" },
    { section: "Section C: Problem Solving", question: "A carpenter joins two pieces of wood. One is 1.35 m long and the other is 0.92 m long. How long is the joined piece?", marks: 2, answer: "2.27 m" },
    {
      section: "Section C: Problem Solving",
      text: "Jo says 3.4 + 2.15 = 5.19.",
      parts: [
        { question: "Explain Jo's mistake.", marks: 1, type: "explain",
          answer: "Jo didn't line up the decimal points. She added the 4 tenths to the 15 hundredths as if they were 4 + 15. Writing 3.4 as 3.40 lines the digits up correctly." },
        { question: "Give the correct answer.", marks: 1, answer: "5.55" }
      ]
    }
  ]
});
