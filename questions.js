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
     "coordinates"  One or more points, e.g. "(3, 2)" or "(1, 4); (-2, 3)".
                Points can be in any order.
     "plot"     Like "coordinates", but the student gets a grid they can
                click on to place the points.
     "order"    The student taps numbers to put them in order. List the
                numbers in "items" (in the jumbled order to show them), and
                give the correct order as the answer, separated by commas.
                "labels" names the two ends of the order (leave out for
                smallest → largest). Don't put commas inside the numbers.
                  { question: "Write these in order.", type: "order",
                    items: ["0.5", "0.25", "0.7"], answer: "0.25, 0.5, 0.7",
                    labels: ["smallest", "largest"] }
     ANGLE PICTURES: add  angle: 130  to any question to show an angle of
                that many degrees (drawn opening anticlockwise from a
                horizontal arm).
     "time"     A time such as "3:45", "7:15 pm" or "19:15". If the answer
                has no am/pm (e.g. "3:45"), any matching time is accepted. If
                it has am/pm or is a 24-hour time (e.g. "19:15" or "09:40"),
                the student must get am/pm right too (7:15 pm and 19:15 both
                count). To show a clock to read, add  clock: "3:45".
     "clock"    The student drags the hands of a clock to show the answer,
                e.g. answer: "3:45". The minute hand must be exact; the hour
                hand can be anywhere between the hour and the next one.
     "drawangle"  The student drags the arm of an angle to make the type of
                angle asked for. The answer is "acute", "right", "obtuse",
                "straight" or "reflex".
     "column"   The column method. Give the sum and the app lays it out in
                columns and works out the answer itself; the student types
                one digit per box.
                  { question: "Use the column method to work out 7.6 + 3.45.",
                    type: "column", sum: "7.6 + 3.45", marks: 2 }
                Works with + and − (any numbers, decimal points lined up),
                × by a single digit (e.g. "3.48 × 6"), and ÷ by a single
                digit, shown as short division (e.g. "9.36 ÷ 3").
     "choice"   The student taps one of the "options"; the answer is the
                right one.

   SAME TOPIC TWICE: if a topic has more than one QUESTION_BANK.add block,
   the questions are combined into one list. The title, tip and
   questionsPerSet come from the first block; each block's questions are
   marked using that block's own "type". Sections from the second and later
   blocks are shown as "Exam style: ..." so their letters don't clash.

   ALWAYS INCLUDE: add  always: true  to a question to put it in every set
   instead of leaving it to the random pick. It still appears in its place
   in the list, so put these at the top to show them first.
                  { question: "Which is bigger?", type: "choice",
                    options: ["0.7", "0.65"], answer: "0.7" }

   GRAPHS (for "coordinates" and "plot" questions)
     graph: { x: [-5, 5], y: [-5, 5], points: { A: [3, 4] }, lines: [ [[1, 1], [1, 4], [5, 4]] ] }
       x, y     The range of each axis (include 0). Leave out for -5 to 5.
       points   Labelled points to show, e.g. { A: [3, 4], B: [-2, 1] }.
       lines    Lines joining points, e.g. two sides of a shape. Repeat the
                first point at the end to close a shape.
     On a "plot" question the grid is clickable; on a "coordinates" question
     it's just there to read from. A plot question with no graph gets an
     empty -5 to 5 grid.

   SCALES (for reading scales)
     scale: { style: "thermometer", min: -10, max: 30, major: 10, minor: 2, unit: "°C", value: 18 }
       style    "line" (number line or ruler), "thermometer", "jug" (measuring
                jug) or "dial" (weighing scale).
       min, max The ends of the scale.
       major    The gap between the labelled marks.
       minor    The gap between the small marks (leave out for none).
       unit     Shown on the scale, e.g. "cm", "ml", "kg".
       value    Where the arrow, liquid or needle points. Leave this out on
                "mark" questions.
     Use type "number" with a scale to ask the student to read it. Use type
     "mark" to make the scale clickable: the student sets the arrow, liquid
     or needle themselves, and it snaps to the nearest small mark. The answer
     is the value they should set, e.g. answer: "7.5".

   EDITING TIPS
   - Every question needs a comma after its closing } except the last.
   - Put text inside "double quotes". If the text itself contains a double
     quote, put a backslash before it: \"like this\".
   - Changing a question's wording resets students' saved answers for it.
   - If the questions stop appearing after an edit, there's probably a
     missing comma, quote or bracket near the part you changed.
   ===================================================================== */

QUESTION_BANK.add({
  topic: "Coordinates",
  title: "Coordinates",
  type: "coordinates",
  questionsPerSet: 10,
  tip: "Type your answer and press <b>Enter</b> or <b>Check</b>. Write coordinates as (x, y), e.g. (1, 6). On a grid you can plot, click to place a point and click it again to remove it.",
  questions: [
    { section: "Reading coordinates", question: "Write down the coordinates of point A.", marks: 1, answer: "(3, 4)",
      graph: { x: [0, 6], y: [0, 6], points: { A: [3, 4] } } },
    { section: "Reading coordinates", question: "Write down the coordinates of point B.", marks: 1, answer: "(5, 1)",
      graph: { x: [0, 6], y: [0, 6], points: { B: [5, 1] } } },
    { section: "Reading coordinates", text: "The grid shows the points P, Q and R.",
      graph: { points: { P: [-3, 2], Q: [4, -1], R: [-2, -4] } },
      parts: [
        { question: "Write down the coordinates of P.", marks: 1, answer: "(−3, 2)" },
        { question: "Write down the coordinates of Q.", marks: 1, answer: "(4, −1)" },
        { question: "Write down the coordinates of R.", marks: 1, answer: "(−2, −4)" }
      ] },
    { section: "Reading coordinates", question: "Write down the coordinates of point S.", marks: 1, answer: "(0, 3)",
      graph: { points: { S: [0, 3] } } },
    { section: "Reading coordinates", question: "Write down the coordinates of point T.", marks: 1, answer: "(−4, 0)",
      graph: { points: { T: [-4, 0] } } },
    { section: "Reading coordinates", text: "ABC is a triangle.", question: "Write down the coordinates of C.", marks: 1, answer: "(0, 3)",
      graph: { points: { A: [-3, -2], B: [3, -2], C: [0, 3] }, lines: [[[-3, -2], [3, -2], [0, 3], [-3, -2]]] } },
    { section: "Reading coordinates", text: "M is halfway between A and B.", question: "Write down the coordinates of M.", marks: 1, answer: "(3, 2)",
      graph: { x: [0, 6], y: [0, 6], points: { A: [1, 2], B: [5, 2] }, lines: [[[1, 2], [5, 2]]] } },

    { section: "Plotting points", question: "Plot the point (2, 5).", type: "plot", marks: 1, answer: "(2, 5)",
      graph: { x: [0, 6], y: [0, 6] } },
    { section: "Plotting points", question: "Plot the point (4, 0).", type: "plot", marks: 1, answer: "(4, 0)",
      graph: { x: [0, 6], y: [0, 6] } },
    { section: "Plotting points", question: "Plot the point (−3, 4).", type: "plot", marks: 1, answer: "(−3, 4)" },
    { section: "Plotting points", question: "Plot the point (2, −5).", type: "plot", marks: 1, answer: "(2, −5)" },
    { section: "Plotting points", question: "Plot the points (−1, −2) and (3, −4).", type: "plot", marks: 2, answer: "(−1, −2); (3, −4)" },
    { section: "Plotting points", question: "Plot a point that lies on the y-axis, 3 units below the origin.", type: "plot", marks: 1, answer: "(0, −3)" },

    { section: "Shapes on a grid",
      text: "The points (1, 1), (1, 4) and (5, 4) are three corners of a rectangle.",
      question: "Plot the fourth corner of the rectangle.", type: "plot", marks: 2, answer: "(5, 1)",
      graph: { x: [0, 6], y: [0, 6], lines: [[[1, 1], [1, 4], [5, 4]]] } },
    { section: "Shapes on a grid",
      text: "The points (−2, 1), (2, 1) and (2, −3) are three corners of a square.",
      question: "Plot the fourth corner of the square.", type: "plot", marks: 2, answer: "(−2, −3)",
      graph: { lines: [[[-2, 1], [2, 1], [2, -3]]] } },
    { section: "Shapes on a grid",
      question: "Ali says the point (2, 5) is 5 across and 2 up. Is Ali correct? Explain your answer.", type: "explain", marks: 1,
      answer: "No. The first number is the x-coordinate (across) and the second is the y-coordinate (up), so (2, 5) is 2 across and 5 up." }
  ]
});


// Exam-style questions for this topic, combined with the block above.
QUESTION_BANK.add({
  topic: "Coordinates",
  title: "Coordinates: Exam Style Questions",
  type: "explain",
  questionsPerSet: 10,
  tip: "Write coordinates as (x, y), with the x-coordinate first. Non-calculator unless the question says otherwise. Check your answer against the model answer and mark yourself.",
  questions: [
    {
      text: "The grid shows the points A and B.",
      diagram: `<svg viewBox="0 0 244 244" width="244" role="img" aria-label="Grid with points A and B">
        <line x1="26" y1="26" x2="26" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="218" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="218" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="218" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="218" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="218" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="218" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="218" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="218" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="218" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="228" y2="122" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="122" y1="218" x2="122" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="50" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="74" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="98" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="146" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="170" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="194" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="218" y="135" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="117" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="117" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="117" y="173.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="117" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="117" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="117" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="117" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="117" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="117" y="135" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="232" y="126" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="122" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="166" y1="46" x2="174" y2="54" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="166" y1="54" x2="174" y2="46" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="176" y="44" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="46" y1="166" x2="54" y2="174" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="46" y1="174" x2="54" y2="166" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="43" y="164" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">B</text>
        </svg>`,
      parts: [
        { question: "Write down the coordinates of the point A.", marks: 1, answer: "(2, 3)" },
        { question: "Write down the coordinates of the point B.", marks: 1, answer: "(−3, −2)" },
        { question: "Point C is at (0, −3). Describe how to plot it, starting from O.", marks: 1, answer: "Go 0 across and 3 down. C is on the y-axis." },
        { question: "Point D is at (−1, 4). Describe how to plot it, starting from O.", marks: 1, answer: "Go 1 left, then 4 up." }
      ]
    },
    {
      text: "The grid shows the point P.",
      diagram: `<svg viewBox="0 0 340 340" width="340" role="img" aria-label="Grid with point P">
        <line x1="26" y1="26" x2="26" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="290" y1="26" x2="290" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="314" y1="26" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="314" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="290" x2="314" y2="290" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="314" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="314" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="314" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="314" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="314" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="314" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="314" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="314" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="314" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="314" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="314" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="324" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="170" y1="314" x2="170" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="50" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="74" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="98" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="122" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="146" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="194" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="218" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="242" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="266" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="290" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="314" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="317.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="165" y="293.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="165" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="165" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="165" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="165" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="165" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="165" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="165" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="165" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="165" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="165" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="183" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="328" y="174" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="170" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="70" y1="142" x2="78" y2="150" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="70" y1="150" x2="78" y2="142" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="80" y="140" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">P</text>
        </svg>`,
      parts: [
        { question: "Write down the coordinates of the point P.", marks: 1, answer: "(−4, 1)" },
        { question: "Describe how to plot the point (3, −2), starting from O.", marks: 1, answer: "Go 3 right, then 2 down." }
      ]
    },
    {
      text: "Amy was asked to plot the point A that has coordinates (6, 2). Her answer is shown on the grid.",
      diagram: `<svg viewBox="0 0 244 244" width="244" role="img" aria-label="Grid with Amy's point A">
        <line x1="26" y1="26" x2="26" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="218" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="218" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="218" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="218" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="218" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="218" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="218" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="218" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="218" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="228" y2="218" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="26" y1="218" x2="26" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="50" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="74" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="98" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="122" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="146" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="170" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="194" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">7</text>
        <text x="218" y="231" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">8</text>
        <text x="21" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="21" y="173.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="21" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="21" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="21" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="21" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="21" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">7</text>
        <text x="21" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">8</text>
        <text x="21" y="231" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="232" y="222" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="26" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="70" y1="70" x2="78" y2="78" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="70" y1="78" x2="78" y2="70" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="80" y="68" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        </svg>`,
      question: "Is Amy correct? Explain your answer.",
      marks: 1,
      answer: "No. Amy went 2 across and 6 up. The x-coordinate comes first, so she should have gone 6 across and 2 up."
    },
    {
      text: "The grid shows the points A, B and C. ABCD is a square.",
      diagram: `<svg viewBox="0 0 196 196" width="196" role="img" aria-label="Grid with points A, B and C">
        <line x1="26" y1="26" x2="26" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="170" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="170" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="170" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="170" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="170" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="170" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="170" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="180" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="26" y1="170" x2="26" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="50" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="74" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="98" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="122" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="146" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="170" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="21" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="21" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="21" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="21" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="21" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="21" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="21" y="183" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="184" y="174" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="26" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="46" y1="118" x2="54" y2="126" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="46" y1="126" x2="54" y2="118" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="43" y="138" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="118" y1="118" x2="126" y2="126" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="118" y1="126" x2="126" y2="118" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="128" y="138" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">B</text>
        <line x1="118" y1="46" x2="126" y2="54" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="118" y1="54" x2="126" y2="46" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="128" y="44" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">C</text>
        </svg>`,
      parts: [
        { question: "Write down the coordinates of C.", marks: 1, answer: "(4, 5)" },
        { question: "Write down the coordinates of D.", marks: 2, answer: "(1, 5)" }
      ]
    },
    {
      text: "The grid shows the points A, B and C. M is the midpoint of the line from A to B.",
      diagram: `<svg viewBox="0 0 340 340" width="340" role="img" aria-label="Grid with points A, B and C">
        <line x1="26" y1="26" x2="26" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="290" y1="26" x2="290" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="314" y1="26" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="314" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="290" x2="314" y2="290" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="314" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="314" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="314" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="314" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="314" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="314" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="314" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="314" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="314" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="314" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="314" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="324" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="170" y1="314" x2="170" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="50" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="74" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="98" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="122" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="146" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="194" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="218" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="242" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="266" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="290" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="314" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="317.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="165" y="293.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="165" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="165" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="165" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="165" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="165" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="165" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="165" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="165" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="165" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="165" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="183" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="328" y="174" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="170" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="214" y1="70" x2="222" y2="78" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="214" y1="78" x2="222" y2="70" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="224" y="68" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="310" y1="70" x2="318" y2="78" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="310" y1="78" x2="318" y2="70" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="307" y="68" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">B</text>
        <line x1="94" y1="286" x2="102" y2="294" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="94" y1="294" x2="102" y2="286" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="104" y="284" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">C</text>
        </svg>`,
      parts: [
        { question: "Write down the coordinates of A.", marks: 1, answer: "(2, 4)" },
        { question: "Write down the coordinates of C.", marks: 1, answer: "(−3, −5)" },
        { question: "Write down the coordinates of M.", marks: 1, answer: "(4, 4)" }
      ]
    },
    {
      text: "The grid shows the points L and M.",
      diagram: `<svg viewBox="0 0 292 292" width="292" role="img" aria-label="Grid with points L and M">
        <line x1="26" y1="26" x2="26" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="266" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="266" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="266" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="266" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="266" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="266" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="266" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="266" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="266" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="266" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="266" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="276" y2="146" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="146" y1="266" x2="146" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="50" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="74" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="98" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="122" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="170" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="194" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="218" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="242" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="266" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="141" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="141" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="141" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="141" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="141" y="173.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="141" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="141" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="141" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="141" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="141" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="141" y="159" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="280" y="150" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="146" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="94" y1="70" x2="102" y2="78" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="94" y1="78" x2="102" y2="70" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="104" y="68" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">L</text>
        <line x1="238" y1="166" x2="246" y2="174" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="238" y1="174" x2="246" y2="166" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="248" y="186" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">M</text>
        </svg>`,
      parts: [
        { question: "Write down the coordinates of L.", marks: 1, answer: "(−2, 3)" },
        { question: "Write down the coordinates of M.", marks: 1, answer: "(4, −1)" },
        { question: "Find the coordinates of the midpoint of LM.", marks: 2, answer: "(1, 1)" }
      ]
    },
    {
      text: "The grid shows six points.",
      diagram: `<svg viewBox="0 0 340 340" width="340" role="img" aria-label="Grid with points A to F">
        <line x1="26" y1="26" x2="26" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="290" y1="26" x2="290" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="314" y1="26" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="314" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="290" x2="314" y2="290" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="314" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="314" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="314" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="314" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="314" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="314" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="314" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="314" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="314" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="314" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="314" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="324" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="170" y1="314" x2="170" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="50" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="74" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="98" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="122" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="146" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="194" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="218" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="242" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="266" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="290" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="314" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="317.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="165" y="293.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="165" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="165" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="165" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="165" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="165" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="165" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="165" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="165" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="165" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="165" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="183" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="328" y="174" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="170" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="166" y1="70" x2="174" y2="78" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="166" y1="78" x2="174" y2="70" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="176" y="68" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="286" y1="166" x2="294" y2="174" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="286" y1="174" x2="294" y2="166" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="296" y="163" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">B</text>
        <line x1="94" y1="190" x2="102" y2="198" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="94" y1="198" x2="102" y2="190" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="104" y="188" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">C</text>
        <line x1="46" y1="94" x2="54" y2="102" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="46" y1="102" x2="54" y2="94" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="56" y="92" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">D</text>
        <line x1="262" y1="262" x2="270" y2="270" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="262" y1="270" x2="270" y2="262" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="272" y="260" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">E</text>
        <line x1="118" y1="286" x2="126" y2="294" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="118" y1="294" x2="126" y2="286" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="128" y="284" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">F</text>
        </svg>`,
      parts: [
        { question: "Which point has coordinates (5, 0)?", marks: 1, answer: "B" },
        { question: "Which point has coordinates (−5, 3)?", marks: 1, answer: "D" },
        { question: "Describe how to plot the point (1, −2), starting from O.", marks: 1, answer: "Go 1 right, then 2 down." }
      ]
    },
    {
      text: "The points D (−3, 2), E (3, 2), F (3, −4) and G (−3, −4) are plotted on the grid.",
      diagram: `<svg viewBox="0 0 340 340" width="340" role="img" aria-label="Grid with points D, E, F and G">
        <line x1="26" y1="26" x2="26" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="290" y1="26" x2="290" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="314" y1="26" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="314" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="290" x2="314" y2="290" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="314" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="314" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="314" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="314" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="314" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="314" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="314" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="314" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="314" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="314" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="314" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="324" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="170" y1="314" x2="170" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="50" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="74" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="98" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="122" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="146" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="194" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="218" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="242" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="266" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="290" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="314" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="317.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="165" y="293.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="165" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="165" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="165" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="165" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="165" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="165" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="165" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="165" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="165" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="165" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="183" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="328" y="174" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="170" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="94" y1="118" x2="102" y2="126" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="94" y1="126" x2="102" y2="118" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="91" y="116" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">D</text>
        <line x1="238" y1="118" x2="246" y2="126" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="238" y1="126" x2="246" y2="118" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="248" y="116" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">E</text>
        <line x1="238" y1="262" x2="246" y2="270" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="238" y1="270" x2="246" y2="262" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="248" y="282" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">F</text>
        <line x1="94" y1="262" x2="102" y2="270" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="94" y1="270" x2="102" y2="262" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="91" y="282" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">G</text>
        </svg>`,
      parts: [
        { question: "How many units long is the side DE?", marks: 1, type: "number", answer: "6" },
        { question: "Write down the name of shape DEFG.", marks: 1, answer: "Square. All four sides are 6 units long and the corners are right angles." }
      ]
    },
    {
      text: "The grid shows the points A, B and C. ABCD is a parallelogram.",
      diagram: `<svg viewBox="0 0 196 196" width="196" role="img" aria-label="Grid with points A, B and C">
        <line x1="26" y1="26" x2="26" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="170" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="170" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="170" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="170" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="170" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="170" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="170" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="180" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="26" y1="170" x2="26" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="50" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="74" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="98" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="122" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="146" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="170" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="21" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="21" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="21" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="21" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="21" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="21" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="21" y="183" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="184" y="174" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="26" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="50" y1="146" x2="122" y2="146" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="122" y1="146" x2="146" y2="74" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="46" y1="142" x2="54" y2="150" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="46" y1="150" x2="54" y2="142" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="43" y="140" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="118" y1="142" x2="126" y2="150" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="118" y1="150" x2="126" y2="142" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="128" y="162" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">B</text>
        <line x1="142" y1="70" x2="150" y2="78" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="142" y1="78" x2="150" y2="70" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="152" y="68" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">C</text>
        </svg>`,
      question: "Complete the parallelogram and write down the coordinates of D.",
      marks: 2,
      answer: "(2, 4)"
    },
    {
      text: "The points A (−1, 4), B (3, 2) and C (2, −3) are shown. ABCD is a parallelogram.",
      diagram: `<svg viewBox="0 0 292 292" width="292" role="img" aria-label="Grid with points A, B and C">
        <line x1="26" y1="26" x2="26" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="266" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="266" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="266" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="266" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="266" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="266" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="266" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="266" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="266" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="266" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="266" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="276" y2="146" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="146" y1="266" x2="146" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="50" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="74" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="98" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="122" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="170" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="194" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="218" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="242" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="266" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="141" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="141" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="141" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="141" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="141" y="173.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="141" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="141" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="141" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="141" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="141" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="141" y="159" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="280" y="150" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="146" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="122" y1="50" x2="218" y2="98" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="218" y1="98" x2="194" y2="218" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="118" y1="46" x2="126" y2="54" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="118" y1="54" x2="126" y2="46" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="115" y="44" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="214" y1="94" x2="222" y2="102" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="214" y1="102" x2="222" y2="94" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="224" y="92" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">B</text>
        <line x1="190" y1="214" x2="198" y2="222" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="190" y1="222" x2="198" y2="214" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="200" y="234" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">C</text>
        </svg>`,
      question: "Complete the parallelogram and write down the coordinates of D.",
      marks: 2,
      answer: "(−2, −1)"
    },
    {
      text: "The points A (−2, 1), B (1, 5) and D (1, −2) are shown. ABCD is a kite.",
      diagram: `<svg viewBox="0 0 340 340" width="340" role="img" aria-label="Grid with points A, B and D">
        <line x1="26" y1="26" x2="26" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="290" y1="26" x2="290" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="314" y1="26" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="314" x2="314" y2="314" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="290" x2="314" y2="290" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="314" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="314" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="314" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="314" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="314" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="314" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="314" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="314" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="314" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="314" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="314" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="324" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="170" y1="314" x2="170" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="50" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="74" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="98" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="122" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="146" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="194" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="218" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="242" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="266" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="290" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="314" y="183" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="317.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−6</text>
        <text x="165" y="293.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="165" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="165" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="165" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="165" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="165" y="149.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="165" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="165" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="165" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="165" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="165" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">6</text>
        <text x="165" y="183" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="328" y="174" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="170" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="122" y1="146" x2="194" y2="50" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="122" y1="146" x2="194" y2="218" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="118" y1="142" x2="126" y2="150" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="118" y1="150" x2="126" y2="142" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="115" y="140" text-anchor="end" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="190" y1="46" x2="198" y2="54" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="190" y1="54" x2="198" y2="46" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="200" y="44" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">B</text>
        <line x1="190" y1="214" x2="198" y2="222" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="190" y1="222" x2="198" y2="214" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="200" y="234" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">D</text>
        </svg>`,
      question: "Complete the kite and write down the coordinates of C.",
      marks: 2,
      answer: "(4, 1)"
    },
    {
      text: "The points A and C are shown on the grid. ABC is an isosceles triangle.",
      diagram: `<svg viewBox="0 0 292 292" width="292" role="img" aria-label="Grid with points A and C">
        <line x1="26" y1="26" x2="26" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="50" y1="26" x2="50" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="74" y1="26" x2="74" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="98" y1="26" x2="98" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="122" y1="26" x2="122" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="146" y1="26" x2="146" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="170" y1="26" x2="170" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="194" y1="26" x2="194" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="218" y1="26" x2="218" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="242" y1="26" x2="242" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="266" y1="26" x2="266" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="266" x2="266" y2="266" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="242" x2="266" y2="242" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="218" x2="266" y2="218" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="194" x2="266" y2="194" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="170" x2="266" y2="170" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="266" y2="146" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="122" x2="266" y2="122" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="98" x2="266" y2="98" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="74" x2="266" y2="74" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="50" x2="266" y2="50" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="26" x2="266" y2="26" style="stroke:currentColor;stroke-width:1;opacity:0.18;fill:none"/>
        <line x1="26" y1="146" x2="276" y2="146" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <line x1="146" y1="266" x2="146" y2="16" style="stroke:currentColor;stroke-width:1.6;fill:none"/>
        <text x="26" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="50" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="74" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="98" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="122" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="170" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="194" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="218" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="242" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="266" y="159" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="141" y="269.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−5</text>
        <text x="141" y="245.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−4</text>
        <text x="141" y="221.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−3</text>
        <text x="141" y="197.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−2</text>
        <text x="141" y="173.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">−1</text>
        <text x="141" y="125.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">1</text>
        <text x="141" y="101.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">2</text>
        <text x="141" y="77.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">3</text>
        <text x="141" y="53.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">4</text>
        <text x="141" y="29.5" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px">5</text>
        <text x="141" y="159" text-anchor="end" style="fill:currentColor;stroke:none;font-size:10px;font-style:italic">O</text>
        <text x="280" y="150" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">x</text>
        <text x="146" y="12" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:12px;font-style:italic">y</text>
        <line x1="190" y1="46" x2="198" y2="54" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="190" y1="54" x2="198" y2="46" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="200" y="44" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">A</text>
        <line x1="190" y1="190" x2="198" y2="198" style="stroke:#2563eb;stroke-width:2;fill:none"/><line x1="190" y1="198" x2="198" y2="190" style="stroke:#2563eb;stroke-width:2;fill:none"/>
        <text x="200" y="188" text-anchor="start" style="fill:#2563eb;stroke:none;font-size:14px;font-weight:bold">C</text>
        </svg>`,
      question: "Work out possible coordinates for the point B.",
      marks: 2,
      answer: "Any point on the line y = 1 except (2, 1), for example (5, 1) or (−1, 1). Points that make AB = AC or CB = CA also work, such as (8, −2)."
    },
    {
      text: "A is the point with coordinates (3, 8). B is the point with coordinates (11, 2).",
      question: "Work out the coordinates of the midpoint of the line AB.",
      marks: 2,
      answer: "(7, 5)"
    },
    {
      text: "Calculator allowed. C is (4, 13) and D is (10, 5).",
      question: "Which of these is the midpoint of CD? (6, 8), (7, 9), (7, 8) or (14, 18)",
      marks: 1,
      answer: "(7, 9)"
    },
    {
      text: "The diagram shows two identical right-angled triangles. The right angle of each triangle is at its bottom-left corner.",
      diagram: `<svg viewBox="0 0 340 260" width="340" role="img" aria-label="Two identical right-angled triangles">
        <line x1="120" y1="255" x2="120" y2="8" style="stroke:currentColor;stroke-width:1.6;fill:none"/><line x1="5" y1="120" x2="332" y2="120" style="stroke:currentColor;stroke-width:1.6;fill:none"/><text x="112" y="136" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">O</text><text x="334" y="136" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">x</text><text x="128" y="16" style="fill:currentColor;stroke:none;font-size:13px">y</text>
        <polygon points="50,30 50,80 175,80" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <polyline points="50,72 58,72 58,80" style="stroke:currentColor;stroke-width:1;fill:none"/>
        <circle cx="50" cy="30" r="3" style="fill:currentColor;stroke:none"/><circle cx="175" cy="80" r="3" style="fill:currentColor;stroke:none"/>
        <text x="42" y="30" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">A</text>
        <text x="182" y="84" style="fill:currentColor;stroke:none;font-size:13px">(3, 6)</text>
        <polygon points="160,150 160,200 285,200" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <polyline points="160,192 168,192 168,200" style="stroke:currentColor;stroke-width:1;fill:none"/>
        <circle cx="160" cy="150" r="3" style="fill:currentColor;stroke:none"/><circle cx="160" cy="200" r="3" style="fill:currentColor;stroke:none"/><circle cx="285" cy="200" r="3" style="fill:currentColor;stroke:none"/>
        <text x="168" y="150" style="fill:currentColor;stroke:none;font-size:13px">(5, −2)</text>
        <text x="160" y="220" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">(5, −7)</text>
        <text x="285" y="220" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">(12, −7)</text>
      </svg>`,
      question: "Work out the coordinates of the point A.",
      marks: 3,
      answer: "(−4, 11). The triangle is 7 wide and 5 tall, so the right angle is at (3 − 7, 6) = (−4, 6), and A is 5 above it."
    },
    {
      text: "Calculator allowed.",
      question: "Work out the midpoint of the line AB joining A (−6, 5) and B (−2, 17).",
      marks: 2,
      answer: "(−4, 11)"
    },
    {
      text: "Four identical squares are shown. The sides of the squares are parallel to the axes. A is (5, 2) and C is (53, 38).",
      diagram: `<svg viewBox="0 0 300 260" width="300" role="img" aria-label="Four identical squares in a staircase from A to C">
        <line x1="25" y1="255" x2="25" y2="8" style="stroke:currentColor;stroke-width:1.6;fill:none"/><line x1="5" y1="235" x2="292" y2="235" style="stroke:currentColor;stroke-width:1.6;fill:none"/><text x="17" y="251" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">O</text><text x="294" y="251" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">x</text><text x="33" y="16" style="fill:currentColor;stroke:none;font-size:13px">y</text>
        <rect x="50" y="170" width="45" height="45" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <rect x="95" y="170" width="45" height="45" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <rect x="140" y="125" width="45" height="45" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <rect x="185" y="80" width="45" height="45" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <circle cx="50" cy="215" r="3" style="fill:currentColor;stroke:none"/><circle cx="140" cy="170" r="3" style="fill:currentColor;stroke:none"/><circle cx="230" cy="80" r="3" style="fill:currentColor;stroke:none"/>
        <text x="54" y="230" style="fill:currentColor;stroke:none;font-size:13px">A (5, 2)</text>
        <text x="146" y="186" style="fill:currentColor;stroke:none;font-size:13px">B</text>
        <text x="236" y="76" style="fill:currentColor;stroke:none;font-size:13px">C (53, 38)</text>
      </svg>`,
      question: "Work out the coordinates of point B.",
      marks: 4,
      answer: "(29, 14). From A to C is 4 sides across (48 ÷ 4 = 12) and 3 sides up (36 ÷ 3 = 12), so each side is 12. B is 2 sides across and 1 side up from A."
    },
    {
      text: "M is the midpoint of AB.",
      diagram: `<svg viewBox="0 0 300 200" width="300" role="img" aria-label="Line AB with midpoint M">
        <line x1="30" y1="195" x2="30" y2="8" style="stroke:currentColor;stroke-width:1.6;fill:none"/><line x1="5" y1="170" x2="292" y2="170" style="stroke:currentColor;stroke-width:1.6;fill:none"/><text x="22" y="186" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">O</text><text x="294" y="186" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">x</text><text x="38" y="16" style="fill:currentColor;stroke:none;font-size:13px">y</text>
        <line x1="65" y1="135" x2="255" y2="55" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <circle cx="65" cy="135" r="3" style="fill:currentColor;stroke:none"/><circle cx="160" cy="95" r="3" style="fill:currentColor;stroke:none"/><circle cx="255" cy="55" r="3" style="fill:currentColor;stroke:none"/>
        <text x="65" y="155" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">A (3, 5)</text>
        <text x="160" y="83" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">M (8, 9.5)</text>
        <text x="262" y="60" style="fill:currentColor;stroke:none;font-size:13px">B</text>
      </svg>`,
      question: "Work out the coordinates of B.",
      marks: 3,
      answer: "(13, 14). From A to M is 5 across and 4.5 up, so B is another 5 across and 4.5 up from M."
    },
    {
      question: "The point (−3, 7) is in which quadrant: first, second, third or fourth?",
      marks: 1,
      answer: "Second"
    },
    {
      question: "Write down the coordinates of the origin.",
      marks: 1,
      answer: "(0, 0)"
    },
    {
      text: "Point P lies on the x-axis, 5 units to the left of the origin.",
      question: "Write down the coordinates of P.",
      marks: 1,
      answer: "(−5, 0)"
    },
    {
      text: "ABCD is a rectangle. A is (−4, 3), B is (2, 3) and C is (2, −1).",
      question: "Write down the coordinates of D.",
      marks: 2,
      answer: "(−4, −1)"
    },
    {
      question: "Work out the midpoint of the line joining (−7, −3) and (5, −9).",
      marks: 2,
      answer: "(−1, −6)"
    },
    {
      text: "M (−2, 4) is the midpoint of AB. A is the point (−5, 1).",
      question: "Work out the coordinates of B.",
      marks: 3,
      answer: "(1, 7)"
    },
    {
      text: "Three corners of a square are at (1, 1), (1, 5) and (5, 5).",
      parts: [
        { question: "Write down the coordinates of the fourth corner.", marks: 1, answer: "(5, 1)" },
        { question: "Write down the coordinates of the centre of the square.", marks: 2, answer: "(3, 3)" }
      ]
    },
    {
      text: "Tom says the points (3, −4) and (−4, 3) are the same point.",
      question: "Is Tom correct? Explain your answer.",
      marks: 1,
      answer: "No. (3, −4) is 3 right and 4 down, but (−4, 3) is 4 left and 3 up, so they are different points."
    },
    {
      text: "A is (2, 1), B is (6, 1) and C is (6, 7).",
      question: "Work out the coordinates of the midpoint of AC.",
      marks: 2,
      answer: "(4, 4)"
    },
    {
      text: "A straight line joins the points (−3, 2) and (5, 2).",
      question: "Write down the coordinates of two other points on this line.",
      marks: 2,
      answer: "Any two points with y = 2 and x between −3 and 5, for example (0, 2) and (1, 2)."
    },
    {
      text: "ABC is an isosceles triangle with AC = BC. A is (−4, −1) and B is (2, −1). C has a y-coordinate of 5.",
      question: "Work out the coordinates of C.",
      marks: 2,
      answer: "(−1, 5)"
    },
    {
      text: "Three identical squares are placed side by side in a row. The sides of the squares are parallel to the axes. P is (7, 4) and Q is (34, 13).",
      diagram: `<svg viewBox="0 0 310 170" width="310" role="img" aria-label="Three identical squares in a row with corners P, R and Q">
        <line x1="25" y1="165" x2="25" y2="8" style="stroke:currentColor;stroke-width:1.6;fill:none"/><line x1="5" y1="145" x2="302" y2="145" style="stroke:currentColor;stroke-width:1.6;fill:none"/><text x="17" y="161" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">O</text><text x="304" y="161" text-anchor="end" style="fill:currentColor;stroke:none;font-size:13px">x</text><text x="33" y="16" style="fill:currentColor;stroke:none;font-size:13px">y</text>
        <rect x="55" y="55" width="55" height="55" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <rect x="110" y="55" width="55" height="55" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <rect x="165" y="55" width="55" height="55" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <circle cx="55" cy="110" r="3" style="fill:currentColor;stroke:none"/><circle cx="220" cy="55" r="3" style="fill:currentColor;stroke:none"/><circle cx="110" cy="55" r="3" style="fill:currentColor;stroke:none"/>
        <text x="55" y="128" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">P (7, 4)</text>
        <text x="226" y="50" style="fill:currentColor;stroke:none;font-size:13px">Q (34, 13)</text>
        <text x="110" y="47" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">R</text>
      </svg>`,
      question: "Work out the coordinates of R.",
      marks: 3,
      answer: "(16, 13). Each square has side 27 ÷ 3 = 9, so R is 9 right of P and 9 up."
    }
  ]
});


QUESTION_BANK.add({
  topic: "Reading scales",
  title: "Reading Scales",
  type: "number",
  questionsPerSet: 10,
  tip: "Work out what each small mark is worth before you answer. Type your answer and press <b>Enter</b> or <b>Check</b>. Where you're asked to show a value, click or tap the scale to set it, then press <b>Check</b>.",
  questions: [
    { section: "Reading scales", question: "What length does the arrow point to?", marks: 1, answer: "6.5 cm",
      scale: { style: "line", min: 0, max: 10, major: 1, minor: 0.5, unit: "cm", value: 6.5 } },
    { section: "Reading scales", question: "What number is the arrow pointing to?", marks: 1, answer: "46",
      scale: { style: "line", min: 0, max: 100, major: 10, minor: 2, value: 46 } },
    { section: "Reading scales", question: "What number is the arrow pointing to?", marks: 1, answer: "2.7",
      scale: { style: "line", min: 2, max: 3, major: 0.5, minor: 0.1, value: 2.7 } },
    { section: "Reading scales", question: "What temperature does the thermometer show?", marks: 1, answer: "18 °C",
      scale: { style: "thermometer", min: -10, max: 30, major: 10, minor: 2, unit: "°C", value: 18 } },
    { section: "Reading scales", question: "What temperature does the thermometer show?", marks: 1, answer: "−4 °C",
      scale: { style: "thermometer", min: -10, max: 30, major: 10, minor: 2, unit: "°C", value: -4 } },
    { section: "Reading scales", question: "How much water is in the jug?", marks: 1, answer: "340 ml",
      scale: { style: "jug", min: 0, max: 500, major: 100, minor: 20, unit: "ml", value: 340 } },
    { section: "Reading scales", question: "How much water is in the jug?", marks: 1, answer: "650 ml",
      scale: { style: "jug", min: 0, max: 1000, major: 200, minor: 50, unit: "ml", value: 650 } },
    { section: "Reading scales", question: "What mass do the scales show?", marks: 1, answer: "2.6 kg",
      scale: { style: "dial", min: 0, max: 5, major: 1, minor: 0.2, unit: "kg", value: 2.6 } },
    { section: "Reading scales", question: "What mass do the scales show?", marks: 1, answer: "375 g",
      scale: { style: "dial", min: 0, max: 1000, major: 100, minor: 25, unit: "g", value: 375 } },

    { section: "Showing values on a scale", question: "Click on the ruler to point the arrow at 7.5 cm.", type: "mark", marks: 1, answer: "7.5",
      scale: { style: "line", min: 0, max: 10, major: 1, minor: 0.5, unit: "cm" } },
    { section: "Showing values on a scale", question: "Click on the number line to point the arrow at 64.", type: "mark", marks: 1, answer: "64",
      scale: { style: "line", min: 0, max: 100, major: 10, minor: 2 } },
    { section: "Showing values on a scale", question: "Click on the thermometer to show −6 °C.", type: "mark", marks: 1, answer: "-6",
      scale: { style: "thermometer", min: -10, max: 30, major: 10, minor: 2, unit: "°C" } },
    { section: "Showing values on a scale", question: "Click on the jug to fill it to 275 ml.", type: "mark", marks: 1, answer: "275",
      scale: { style: "jug", min: 0, max: 500, major: 100, minor: 25, unit: "ml" } },
    { section: "Showing values on a scale", question: "Click on the scales to set the needle to 3.4 kg.", type: "mark", marks: 1, answer: "3.4",
      scale: { style: "dial", min: 0, max: 5, major: 1, minor: 0.2, unit: "kg" } },
    { section: "Showing values on a scale", question: "Click on the scales to set the needle to 750 g.", type: "mark", marks: 1, answer: "750",
      scale: { style: "dial", min: 0, max: 1000, major: 200, minor: 50, unit: "g" } },

    { section: "Problem solving", text: "The thermometer shows the temperature at 6 am.",
      question: "By midday the temperature has risen by 7 °C. What is the temperature at midday?", marks: 2, answer: "5 °C",
      scale: { style: "thermometer", min: -10, max: 30, major: 10, minor: 2, unit: "°C", value: -2 } }
  ]
});


// Exam-style questions for this topic, combined with the block above.
QUESTION_BANK.add({
  topic: "Reading scales",
  title: "Reading Scales",
  type: "number",
  questionsPerSet: 10,
  tip: "Work out what each small division is worth before you read the scale. You can include units (e.g. 6 kg or 350 ml), but you don't have to.",
  questions: [
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">0</text>
        <line x1="60.0" y1="64" x2="60.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="120.0" y1="64" x2="120.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="240.0" y1="64" x2="240.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="300.0" y1="64" x2="300.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">10</text>
        <line x1="240.0" y1="18" x2="240.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="235.0,54 245.0,54 240.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "7"
    },
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">20</text>
        <line x1="60.0" y1="64" x2="60.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="120.0" y1="64" x2="120.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="240.0" y1="64" x2="240.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="300.0" y1="64" x2="300.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">30</text>
        <line x1="150.0" y1="18" x2="150.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="145.0,54 155.0,54 150.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "24"
    },
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">0</text>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">50</text>
        <line x1="210.0" y1="18" x2="210.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="205.0,54 215.0,54 210.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "30"
    },
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">100</text>
        <line x1="60.0" y1="64" x2="60.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="120.0" y1="64" x2="120.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="240.0" y1="64" x2="240.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="300.0" y1="64" x2="300.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">200</text>
        <line x1="210.0" y1="18" x2="210.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="205.0,54 215.0,54 210.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "160"
    },
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">0</text>
        <line x1="60.0" y1="64" x2="60.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="120.0" y1="64" x2="120.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="240.0" y1="64" x2="240.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="300.0" y1="64" x2="300.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">1</text>
        <line x1="240.0" y1="18" x2="240.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="235.0,54 245.0,54 240.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "0.7"
    },
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">0</text>
        <line x1="105.0" y1="64" x2="105.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="255.0" y1="64" x2="255.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">20</text>
        <line x1="255.0" y1="18" x2="255.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="250.0,54 260.0,54 255.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "15"
    },
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">300</text>
        <line x1="105.0" y1="64" x2="105.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="255.0" y1="64" x2="255.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">400</text>
        <line x1="105.0" y1="18" x2="105.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="100.0,54 110.0,54 105.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "325"
    },
    {
      section: "Section A: Number lines",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">2</text>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">3</text>
        <line x1="210.0" y1="18" x2="210.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="205.0,54 215.0,54 210.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the number the arrow is pointing to.",
      marks: 1,
      answer: "2.6"
    },
    {
      section: "Section B: Scales with units",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">0kg</text>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">10kg</text>
        <line x1="210.0" y1="18" x2="210.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="205.0,54 215.0,54 210.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the value shown on the scale. Include units.",
      marks: 1,
      answer: "6 kg"
    },
    {
      section: "Section B: Scales with units",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">50g</text>
        <line x1="60.0" y1="64" x2="60.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="120.0" y1="64" x2="120.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="240.0" y1="64" x2="240.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="300.0" y1="64" x2="300.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">60g</text>
        <line x1="120.0" y1="18" x2="120.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="115.0,54 125.0,54 120.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the value shown on the scale. Include units.",
      marks: 1,
      answer: "53 g"
    },
    {
      section: "Section B: Scales with units",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">1cm</text>
        <line x1="60.0" y1="64" x2="60.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="90.0" y1="64" x2="90.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="120.0" y1="64" x2="120.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="150.0" y1="64" x2="150.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="210.0" y1="64" x2="210.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="240.0" y1="64" x2="240.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="270.0" y1="64" x2="270.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="300.0" y1="64" x2="300.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">2cm</text>
        <line x1="150.0" y1="18" x2="150.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="145.0,54 155.0,54 150.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the value shown on the scale. Include units.",
      marks: 1,
      answer: "1.4 cm"
    },
    {
      section: "Section B: Scales with units",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">0ml</text>
        <line x1="105.0" y1="64" x2="105.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="255.0" y1="64" x2="255.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">1000ml</text>
        <line x1="255.0" y1="18" x2="255.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="250.0,54 260.0,54 255.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Write down the value shown on the scale. Include units.",
      marks: 1,
      answer: "750 ml"
    },
    {
      section: "Section C: Containers and thermometers",
      diagram: `<svg viewBox="0 0 220 250" width="220" role="img" aria-label="Measuring beaker">
        <rect x="70" y="90.0" width="100" height="140.0" style="fill:#60a5fa;opacity:0.45;stroke:none"/>
        <polyline points="70,15 70,230 170,230 170,15" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="70" y1="90.0" x2="170" y2="90.0" style="stroke:#2563eb;stroke-width:2"/>
        <line x1="70" y1="230.0" x2="88" y2="230.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="234.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">0</text>
        <line x1="70" y1="210.0" x2="80" y2="210.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="190.0" x2="88" y2="190.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="194.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">100</text>
        <line x1="70" y1="170.0" x2="80" y2="170.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="150.0" x2="88" y2="150.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="154.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">200</text>
        <line x1="70" y1="130.0" x2="80" y2="130.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="110.0" x2="88" y2="110.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="114.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">300</text>
        <line x1="70" y1="90.0" x2="80" y2="90.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="70.0" x2="88" y2="70.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="74.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">400</text>
        <line x1="70" y1="50.0" x2="80" y2="50.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="30.0" x2="88" y2="30.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="34.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">500</text>
        <text x="120.0" y="246" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">ml</text>
        </svg>`,
      question: "Write down the volume of water in the beaker.",
      marks: 1,
      answer: "350 ml"
    },
    {
      section: "Section C: Containers and thermometers",
      diagram: `<svg viewBox="0 0 220 250" width="220" role="img" aria-label="Measuring beaker">
        <rect x="70" y="90.0" width="100" height="140.0" style="fill:#60a5fa;opacity:0.45;stroke:none"/>
        <polyline points="70,15 70,230 170,230 170,15" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="70" y1="90.0" x2="170" y2="90.0" style="stroke:#2563eb;stroke-width:2"/>
        <line x1="70" y1="230.0" x2="88" y2="230.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="234.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">0</text>
        <line x1="70" y1="210.0" x2="80" y2="210.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="190.0" x2="80" y2="190.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="170.0" x2="80" y2="170.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="150.0" x2="80" y2="150.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="130.0" x2="88" y2="130.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="134.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">100</text>
        <line x1="70" y1="110.0" x2="80" y2="110.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="90.0" x2="80" y2="90.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="70.0" x2="80" y2="70.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="50.0" x2="80" y2="50.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="30.0" x2="88" y2="30.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="34.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">200</text>
        <text x="120.0" y="246" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">ml</text>
        </svg>`,
      question: "Write down the volume of water in the beaker.",
      marks: 1,
      answer: "140 ml"
    },
    {
      section: "Section C: Containers and thermometers",
      diagram: `<svg viewBox="0 0 380 95" width="380" role="img" aria-label="Thermometer">
        <rect x="30" y="33" width="330" height="14" rx="7" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <circle cx="28" cy="40" r="14" style="fill:#dc2626;stroke:none"/>
        <rect x="28" y="36" width="119.0" height="8" style="fill:#dc2626;stroke:none"/>
        <line x1="60.0" y1="49" x2="60.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="60.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">−10</text>
        <line x1="89.0" y1="49" x2="89.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="118.0" y1="49" x2="118.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="147.0" y1="49" x2="147.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="176.0" y1="49" x2="176.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="205.0" y1="49" x2="205.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="205.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">0</text>
        <line x1="234.0" y1="49" x2="234.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="263.0" y1="49" x2="263.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="292.0" y1="49" x2="292.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="321.0" y1="49" x2="321.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="350.0" y1="49" x2="350.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="350.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">10</text>
        <text x="378" y="74" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">°C</text>
        </svg>`,
      question: "Write down the temperature shown on the thermometer, in °C.",
      marks: 1,
      answer: "−4"
    },
    {
      section: "Section C: Containers and thermometers",
      diagram: `<svg viewBox="0 0 380 95" width="380" role="img" aria-label="Thermometer">
        <rect x="30" y="33" width="330" height="14" rx="7" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <circle cx="28" cy="40" r="14" style="fill:#dc2626;stroke:none"/>
        <rect x="28" y="36" width="249.5" height="8" style="fill:#dc2626;stroke:none"/>
        <line x1="60.0" y1="49" x2="60.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="60.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">−20</text>
        <line x1="84.2" y1="49" x2="84.2" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="108.3" y1="49" x2="108.3" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="132.5" y1="49" x2="132.5" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="156.7" y1="49" x2="156.7" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="156.7" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">0</text>
        <line x1="180.8" y1="49" x2="180.8" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="205.0" y1="49" x2="205.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="229.2" y1="49" x2="229.2" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="253.3" y1="49" x2="253.3" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="253.3" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">20</text>
        <line x1="277.5" y1="49" x2="277.5" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="301.7" y1="49" x2="301.7" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="325.8" y1="49" x2="325.8" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="350.0" y1="49" x2="350.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="350.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">40</text>
        <text x="378" y="74" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">°C</text>
        </svg>`,
      question: "Write down the temperature shown on the thermometer, in °C.",
      marks: 1,
      answer: "25"
    },
    {
      section: "Section D: Problem solving",
      text: "Sam says the arrow points to 270 g.",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">200g</text>
        <line x1="105.0" y1="64" x2="105.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="255.0" y1="64" x2="255.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">300g</text>
        <line x1="255.0" y1="18" x2="255.0" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="250.0,54 260.0,54 255.0,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      question: "Explain why Sam is wrong.",
      marks: 1,
      type: "explain",
      answer: "Each small division is 25 g, not 10 g (100 g ÷ 4 = 25 g). The arrow points to 275 g."
    },
    {
      section: "Section D: Problem solving",
      text: "Leah weighs some apples. The scale shows the mass of the apples.",
      diagram: `<svg viewBox="0 0 360 105" width="360" role="img" aria-label="Scale with an arrow">
        <line x1="30" y1="70" x2="330" y2="70" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="30.0" y1="61" x2="30.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="30.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">0kg</text>
        <line x1="67.5" y1="64" x2="67.5" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="105.0" y1="64" x2="105.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="142.5" y1="64" x2="142.5" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="180.0" y1="64" x2="180.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="217.5" y1="64" x2="217.5" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="255.0" y1="64" x2="255.0" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="292.5" y1="64" x2="292.5" y2="76" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="330.0" y1="61" x2="330.0" y2="79" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="330.0" y="96" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:13px">4kg</text>
        <line x1="217.5" y1="18" x2="217.5" y2="56" style="stroke:#2563eb;stroke-width:2.2;fill:none"/>
        <polygon points="212.5,54 222.5,54 217.5,63" style="fill:#2563eb;stroke:none"/>
        </svg>`,
      parts: [
        { question: "What is the mass of the apples?", marks: 1, answer: "2.5 kg" },
        { question: "Apples cost £2 per kg. How much does Leah pay?", marks: 2, answer: "£5" }
      ]
    },
    {
      section: "Section D: Problem solving",
      text: "The beaker shows how much water Paige has. She pours 120 ml of water out of the beaker, then pours 250 ml of water in.",
      diagram: `<svg viewBox="0 0 220 250" width="220" role="img" aria-label="Measuring beaker">
        <rect x="70" y="110.0" width="100" height="120.0" style="fill:#60a5fa;opacity:0.45;stroke:none"/>
        <polyline points="70,15 70,230 170,230 170,15" style="stroke:currentColor;stroke-width:2;fill:none"/>
        <line x1="70" y1="110.0" x2="170" y2="110.0" style="stroke:#2563eb;stroke-width:2"/>
        <line x1="70" y1="230.0" x2="88" y2="230.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="234.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">0</text>
        <line x1="70" y1="210.0" x2="80" y2="210.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="190.0" x2="88" y2="190.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="194.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">100</text>
        <line x1="70" y1="170.0" x2="80" y2="170.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="150.0" x2="88" y2="150.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="154.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">200</text>
        <line x1="70" y1="130.0" x2="80" y2="130.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="110.0" x2="88" y2="110.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="114.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">300</text>
        <line x1="70" y1="90.0" x2="80" y2="90.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="70.0" x2="88" y2="70.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="74.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">400</text>
        <line x1="70" y1="50.0" x2="80" y2="50.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="70" y1="30.0" x2="88" y2="30.0" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="64" y="34.0" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">500</text>
        <text x="120.0" y="246" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">ml</text>
        </svg>`,
      question: "How much water is now in the beaker?",
      marks: 2,
      answer: "430 ml"
    },
    {
      section: "Section D: Problem solving",
      text: "The thermometer shows the temperature at midnight. By midday, the temperature has risen by 9°C.",
      diagram: `<svg viewBox="0 0 380 95" width="380" role="img" aria-label="Thermometer">
        <rect x="30" y="33" width="330" height="14" rx="7" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <circle cx="28" cy="40" r="14" style="fill:#dc2626;stroke:none"/>
        <rect x="28" y="36" width="90.0" height="8" style="fill:#dc2626;stroke:none"/>
        <line x1="60.0" y1="49" x2="60.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="60.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">−10</text>
        <line x1="89.0" y1="49" x2="89.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="118.0" y1="49" x2="118.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="147.0" y1="49" x2="147.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="176.0" y1="49" x2="176.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="205.0" y1="49" x2="205.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="205.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">0</text>
        <line x1="234.0" y1="49" x2="234.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="263.0" y1="49" x2="263.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="292.0" y1="49" x2="292.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="321.0" y1="49" x2="321.0" y2="54" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <line x1="350.0" y1="49" x2="350.0" y2="60" style="stroke:currentColor;stroke-width:1.5;fill:none"/>
        <text x="350.0" y="74" text-anchor="middle" style="fill:currentColor;stroke:none;font-size:11px">10</text>
        <text x="378" y="74" text-anchor="end" style="fill:currentColor;stroke:none;font-size:11px">°C</text>
        </svg>`,
      question: "What is the temperature at midday, in °C?",
      marks: 2,
      answer: "3"
    }
  ]
});


QUESTION_BANK.add({
  topic: "Ordering integers and decimals",
  title: "Ordering Integers and Decimals",
  type: "order",
  questionsPerSet: 10,
  tip: "Tap the numbers in the order you want them; tap a number in your order to send it back. For the symbol questions, tap the symbol that goes in the box. Then press <b>Check</b>.",
  questions: [
    { section: "Putting numbers in order", question: "Write these numbers in order, starting with the smallest.", marks: 1,
      items: ["34", "7", "102", "58", "19"], answer: "7, 19, 34, 58, 102" },
    { section: "Putting numbers in order", question: "Write these numbers in order, starting with the smallest.", marks: 1,
      items: ["−4", "3", "0", "−9", "6"], answer: "−9, −4, 0, 3, 6" },
    { section: "Putting numbers in order", question: "Write these decimals in order, starting with the smallest.", marks: 1,
      items: ["0.5", "0.25", "0.7", "0.05"], answer: "0.05, 0.25, 0.5, 0.7" },
    { section: "Putting numbers in order", question: "Write these decimals in order, starting with the smallest.", marks: 1,
      items: ["3.2", "3.15", "3.05", "3.5"], answer: "3.05, 3.15, 3.2, 3.5" },
    { section: "Putting numbers in order", question: "Write these decimals in order, starting with the smallest.", marks: 2,
      items: ["1.08", "1.8", "1.18", "1.081"], answer: "1.08, 1.081, 1.18, 1.8" },
    { section: "Putting numbers in order", question: "Write these numbers in order, starting with the smallest.", marks: 2,
      items: ["−2.5", "−0.5", "1.5", "−1"], answer: "−2.5, −1, −0.5, 1.5" },
    { section: "Putting numbers in order", question: "Write these decimals in order, starting with the largest.", marks: 1,
      items: ["0.6", "0.65", "0.06", "0.605"], answer: "0.65, 0.605, 0.6, 0.06", labels: ["largest", "smallest"] },
    { section: "Putting numbers in order", question: "Write these decimals in order, starting with the largest.", marks: 2,
      items: ["4.09", "4.9", "4.19", "4.091"], answer: "4.9, 4.19, 4.091, 4.09", labels: ["largest", "smallest"] },

    { section: "Comparing numbers", question: "Which symbol goes in the box?  0.7 ☐ 0.65", type: "choice", marks: 1,
      options: ["<", ">", "="], answer: ">" },
    { section: "Comparing numbers", question: "Which symbol goes in the box?  −5 ☐ −2", type: "choice", marks: 1,
      options: ["<", ">", "="], answer: "<" },
    { section: "Comparing numbers", question: "Which symbol goes in the box?  2.50 ☐ 2.5", type: "choice", marks: 1,
      options: ["<", ">", "="], answer: "=" },
    { section: "Comparing numbers", question: "Which symbol goes in the box?  0.09 ☐ 0.1", type: "choice", marks: 1,
      options: ["<", ">", "="], answer: "<" },
    { section: "Comparing numbers", question: "Which number is the largest?", type: "choice", marks: 1,
      options: ["0.8", "0.75", "0.799", "0.08"], answer: "0.8" },
    { section: "Comparing numbers", question: "Which number is the smallest?", type: "choice", marks: 1,
      options: ["−3.5", "−3", "−0.5", "−4"], answer: "−4" },

    { section: "Problem solving", text: "The temperatures in four cities are −3 °C, 5 °C, −8 °C and 0 °C.",
      question: "Put the temperatures in order, from coldest to warmest.", marks: 2,
      items: ["−3", "5", "−8", "0"], answer: "−8, −3, 0, 5", labels: ["coldest", "warmest"] },
    { section: "Problem solving", text: "Four runners' times, in seconds, are 12.4, 12.04, 12.44 and 12.14. The lowest time is the fastest.",
      question: "Put the times in order, from fastest to slowest.", marks: 2,
      items: ["12.4", "12.04", "12.44", "12.14"], answer: "12.04, 12.14, 12.4, 12.44", labels: ["fastest", "slowest"] },
    { section: "Problem solving", question: "Tom says 0.45 is bigger than 0.5, because 45 is bigger than 5. Explain why Tom is wrong.", type: "explain", marks: 1,
      answer: "0.5 is the same as 0.50, which is 50 hundredths, and 0.45 is only 45 hundredths. Comparing the tenths first, 0.5 has 5 tenths but 0.45 has only 4, so 0.5 is bigger." }
  ]
});


// Exam-style questions for this topic, combined with the block above.
QUESTION_BANK.add({
  topic: "Ordering integers and decimals",
  title: "Ordering Integers and Decimals",
  type: "number",
  questionsPerSet: 10,
  tip: "For decimals, line up the decimal points and fill gaps with zeros (0.3 = 0.30). For negative numbers, the further from zero, the smaller the number.",
  questions: [
    { section: "Section A: Integers", question: "Write these numbers in order of size, starting with the smallest: 52, 25, 205, 502, 250", marks: 1, type: "explain", answer: "25, 52, 205, 250, 502" },
    { section: "Section A: Integers", question: "Write these numbers in order of size, starting with the largest: 1089, 1809, 1098, 1908", marks: 1, type: "explain", answer: "1908, 1809, 1098, 1089" },
    { section: "Section A: Integers", question: "Write these numbers in order of size, starting with the smallest: −3, 5, −8, 0, 2", marks: 1, type: "explain", answer: "−8, −3, 0, 2, 5" },
    { section: "Section A: Integers", question: "Which of these numbers is the smallest? −12, −2, −20, −7", marks: 1, answer: "−20" },
    { section: "Section A: Integers", question: "Which is larger, −15 or −51?", marks: 1, answer: "−15" },
    { section: "Section B: Decimals", question: "Which is larger, 0.7 or 0.65?", marks: 1, answer: "0.7" },
    { section: "Section B: Decimals", question: "Which of these numbers is the smallest? 0.31, 0.301, 0.13, 0.3", marks: 1, answer: "0.13" },
    { section: "Section B: Decimals", question: "Which of these numbers is the largest? 4.08, 4.8, 4.008, 4.78", marks: 1, answer: "4.8" },
    { section: "Section B: Decimals", question: "Write these numbers in order of size, starting with the smallest: 0.5, 0.45, 0.054, 0.405", marks: 1, type: "explain", answer: "0.054, 0.405, 0.45, 0.5" },
    { section: "Section B: Decimals", question: "Write these numbers in order of size, starting with the largest: 3.2, 3.02, 3.22, 3.202", marks: 1, type: "explain", answer: "3.22, 3.202, 3.2, 3.02" },
    { section: "Section B: Decimals", question: "Write these numbers in order of size, starting with the smallest: −1.5, −0.5, −2.1, 0.2", marks: 2, type: "explain", answer: "−2.1, −1.5, −0.5, 0.2" },
    { section: "Section B: Decimals", question: "Write down a number that is between 2.4 and 2.5", marks: 1, type: "explain", answer: "Any number greater than 2.4 and less than 2.5, for example 2.45 or 2.41" },
    {
      section: "Section B: Decimals",
      text: "Write < or > in each box to make the statement true.",
      parts: [
        { question: "0.6 ☐ 0.58", marks: 1, type: "explain", answer: "> (0.60 is bigger than 0.58)" },
        { question: "−4 ☐ −9", marks: 1, type: "explain", answer: "> (−4 is closer to zero, so it is bigger)" },
        { question: "1.09 ☐ 1.1", marks: 1, type: "explain", answer: "< (1.09 is smaller than 1.10)" }
      ]
    },
    {
      section: "Section C: Problem solving",
      text: "Five runners race 100 m. Their times are: Ali 12.4 s, Ben 12.04 s, Cara 12.39 s, Dev 12.41 s, Ella 12.14 s. The fastest time wins.",
      parts: [
        { question: "Who won the race?", marks: 1, type: "explain", answer: "Ben" },
        { question: "Write the runners in the order they finished, starting with the winner.", marks: 2, type: "explain", answer: "Ben, Ella, Cara, Ali, Dev" }
      ]
    },
    {
      section: "Section C: Problem solving",
      text: "The temperatures in five cities at midnight were: London 4°C, Oslo −6°C, Moscow −11°C, Madrid 9°C, Berlin −1°C.",
      parts: [
        { question: "Which city was the coldest?", marks: 1, type: "explain", answer: "Moscow" },
        { question: "Write the cities in order of temperature, starting with the coldest.", marks: 1, type: "explain", answer: "Moscow, Oslo, Berlin, London, Madrid" },
        { question: "Work out the difference between the highest and lowest temperatures, in °C.", marks: 1, answer: "20" }
      ]
    },
    {
      section: "Section C: Problem solving",
      text: "Tom says 0.25 is bigger than 0.3 because 25 is bigger than 3.",
      question: "Explain why Tom is wrong.",
      marks: 1,
      type: "explain",
      answer: "0.3 is the same as 0.30. 30 hundredths is more than 25 hundredths, so 0.3 is bigger than 0.25."
    },
    {
      section: "Section C: Problem solving",
      text: "Use each of the digits 4, 9 and 2 once to make a number with one decimal place, such as 49.2",
      parts: [
        { question: "Write down the largest number you can make.", marks: 1, answer: "94.2" },
        { question: "Write down the smallest number you can make.", marks: 1, answer: "24.9" }
      ]
    },
    { section: "Section C: Problem solving", text: "Four parcels weigh 1.2 kg, 1.25 kg, 1.05 kg and 1.52 kg.", question: "Work out the difference between the heaviest and the lightest parcel.", marks: 2, answer: "0.47 kg" },
    { section: "Section C: Problem solving", question: "Write these numbers in order of size, starting with the smallest: 0.6, 0.66, 0.606, 0.066, 6", marks: 2, type: "explain", answer: "0.066, 0.6, 0.606, 0.66, 6" },
    { section: "Section C: Problem solving", question: "Write down the integer that is halfway between −8 and 4", marks: 2, answer: "−2" }
  ]
});


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
  topic: "Time",
  title: "Time",
  type: "time",
  questionsPerSet: 10,
  tip: "Type times like 3:45, adding am or pm where needed (or use the 24-hour clock, e.g. 19:15). To set a clock, drag the <b>short hour hand</b> and the <b>long minute hand</b>, then press <b>Check</b>.",
  questions: [
    { section: "Reading clocks", question: "What time does the clock show?", marks: 1, answer: "3:00", clock: "3:00" },
    { section: "Reading clocks", question: "What time does the clock show?", marks: 1, answer: "7:30", clock: "7:30" },
    { section: "Reading clocks", question: "What time does the clock show?", marks: 1, answer: "10:15", clock: "10:15" },
    { section: "Reading clocks", question: "What time does the clock show?", marks: 1, answer: "1:45", clock: "1:45" },
    { section: "Reading clocks", question: "What time does the clock show?", marks: 1, answer: "4:20", clock: "4:20" },
    { section: "Reading clocks", question: "What time does the clock show?", marks: 1, answer: "11:55", clock: "11:55" },
    { section: "Reading clocks", question: "What time does the clock show? Give your answer to the nearest minute.", marks: 1, answer: "8:37", clock: "8:37" },

    { section: "Setting clocks", question: "Set the clock to 9 o'clock.", type: "clock", marks: 1, answer: "9:00" },
    { section: "Setting clocks", question: "Set the clock to half past 5.", type: "clock", marks: 1, answer: "5:30" },
    { section: "Setting clocks", question: "Set the clock to quarter past 2.", type: "clock", marks: 1, answer: "2:15" },
    { section: "Setting clocks", question: "Set the clock to quarter to 7.", type: "clock", marks: 1, answer: "6:45" },
    { section: "Setting clocks", question: "Set the clock to 11:20.", type: "clock", marks: 1, answer: "11:20" },
    { section: "Setting clocks", question: "Set the clock to ten to 5.", type: "clock", marks: 1, answer: "4:50" },

    { section: "12-hour and 24-hour time", question: "Write 14:30 as a 12-hour time, using am or pm.", marks: 1, answer: "2:30 pm" },
    { section: "12-hour and 24-hour time", question: "Write 7:15 pm as a 24-hour time.", marks: 1, answer: "19:15" },
    { section: "12-hour and 24-hour time", question: "Which time is the same as 17:20?", type: "choice", marks: 1,
      options: ["7:20 pm", "5:20 pm", "5:20 am", "7:20 am"], answer: "5:20 pm" },

    { section: "Problem solving", question: "A film starts at 6:45 pm and lasts 1 hour 50 minutes. What time does it finish?", marks: 2, answer: "8:35 pm" },
    { section: "Problem solving", question: "A bus leaves at 09:40 and arrives at 10:25. How long is the journey, in minutes?", type: "number", marks: 2, answer: "45" },
    { section: "Problem solving", question: "How many minutes are there in 2½ hours?", type: "number", marks: 1, answer: "150" },
    { section: "Problem solving", question: "Mia says 2.5 hours is the same as 2 hours 50 minutes. Explain why Mia is wrong.", type: "explain", marks: 1,
      answer: "0.5 of an hour is half an hour, which is 30 minutes, not 50. So 2.5 hours is 2 hours 30 minutes. There are 60 minutes in an hour, not 100." }
  ]
});


QUESTION_BANK.add({
  topic: "Names of angles",
  title: "Names of Angles",
  type: "choice",
  questionsPerSet: 10,
  tip: "Acute: less than 90°. Right: exactly 90°. Obtuse: between 90° and 180°. Straight: exactly 180°. Reflex: more than 180°. Tap your answer, or drag the orange arm to make an angle, then press <b>Check</b>.",
  questions: [
    { section: "Naming angles", question: "What type of angle is this?", angle: 40, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "acute" },
    { section: "Naming angles", question: "What type of angle is this?", angle: 90, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "right" },
    { section: "Naming angles", question: "What type of angle is this?", angle: 125, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "obtuse" },
    { section: "Naming angles", question: "What type of angle is this?", angle: 180, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "straight" },
    { section: "Naming angles", question: "What type of angle is this?", angle: 250, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "reflex" },
    { section: "Naming angles", question: "What type of angle is this?", angle: 75, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "acute" },
    { section: "Naming angles", question: "What type of angle is this?", angle: 160, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "obtuse" },
    { section: "Naming angles", question: "What type of angle is this?", angle: 300, marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "reflex" },

    { section: "Angle sizes", question: "An angle measures 95°. What type of angle is it?", marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "obtuse" },
    { section: "Angle sizes", question: "An angle measures 89°. What type of angle is it?", marks: 1,
      options: ["acute", "right", "obtuse", "straight", "reflex"], answer: "acute" },
    { section: "Angle sizes", question: "Which of these angles is reflex?", marks: 1,
      options: ["170°", "90°", "200°", "45°"], answer: "200°" },
    { section: "Angle sizes", question: "Which of these angles is acute?", marks: 1,
      options: ["120°", "90°", "35°", "185°"], answer: "35°" },

    { section: "Making angles", question: "Drag the orange arm to make an acute angle.", type: "drawangle", marks: 1, answer: "acute" },
    { section: "Making angles", question: "Drag the orange arm to make a right angle.", type: "drawangle", marks: 1, answer: "right" },
    { section: "Making angles", question: "Drag the orange arm to make an obtuse angle.", type: "drawangle", marks: 1, answer: "obtuse" },
    { section: "Making angles", question: "Drag the orange arm to make a reflex angle.", type: "drawangle", marks: 1, answer: "reflex" },

    { section: "Making angles", question: "Sam says an angle of 180° is obtuse. Explain why Sam is wrong.", type: "explain", marks: 1,
      answer: "Obtuse angles are bigger than 90° but less than 180°. An angle of exactly 180° makes a straight line, so it is a straight angle." }
  ]
});


QUESTION_BANK.add({
  topic: "Division of integers and decimals",
  title: "Division of Integers and Decimals",
  type: "number",
  questionsPerSet: 10,
  tip: "Type your answer and press <b>Enter</b> or <b>Check</b>. For short division questions, type one digit in each box above the bus stop, starting from the left. You can include £ or units, but you don't have to.",
  questions: [
    { section: "Section A: Short division", question: "Use short division to work out 852 ÷ 4.", type: "column", always: true, sum: "852 ÷ 4", marks: 2 },
    { section: "Section A: Short division", question: "Use short division to work out 9.36 ÷ 3.", type: "column", always: true, sum: "9.36 ÷ 3", marks: 2 },
    { section: "Section A: Short division", question: "Use short division to work out 7 ÷ 4. Use the zeros after the decimal point.", type: "column", always: true, sum: "7 ÷ 4", marks: 2 },

    { section: "Section B: Integers", question: "Work out 84 ÷ 4", marks: 1, answer: "21" },
    { section: "Section B: Integers", question: "Work out 156 ÷ 6", marks: 1, answer: "26" },
    { section: "Section B: Integers", question: "Work out 945 ÷ 5", marks: 1, answer: "189" },
    { section: "Section B: Integers", question: "Work out 1272 ÷ 8", marks: 2, answer: "159" },

    { section: "Section C: Decimals", question: "Work out 7.2 ÷ 3", marks: 1, answer: "2.4" },
    { section: "Section C: Decimals", question: "Work out 8.4 ÷ 4", marks: 1, answer: "2.1" },
    { section: "Section C: Decimals", question: "Work out 12.5 ÷ 5", marks: 1, answer: "2.5" },
    { section: "Section C: Decimals", question: "Work out 0.36 ÷ 6", marks: 1, answer: "0.06" },
    { section: "Section C: Decimals", question: "Work out 34.5 ÷ 10", marks: 1, answer: "3.45" },
    { section: "Section C: Decimals", question: "Work out 47 ÷ 100", marks: 1, answer: "0.47" },
    { section: "Section C: Decimals", question: "Work out 7 ÷ 4", marks: 2, answer: "1.75" },
    { section: "Section C: Decimals", question: "Which calculation has the answer 0.4?", type: "choice", marks: 1,
      options: ["4 ÷ 100", "4 ÷ 10", "0.4 ÷ 10", "40 ÷ 1000"], answer: "4 ÷ 10" },

    { section: "Section D: Problem Solving", question: "£13.50 is shared equally between 3 friends. How much does each friend get?", marks: 2, answer: "£4.50" },
    { section: "Section D: Problem Solving", question: "A 2 m ribbon is cut into 8 equal pieces. How long is each piece, in metres?", marks: 2, answer: "0.25 m" },
    { section: "Section D: Problem Solving", question: "A pack of 6 pens costs £4.20. How much does one pen cost?", marks: 2, answer: "£0.70" },
    { section: "Section D: Problem Solving", question: "100 people are going on a trip. Each minibus holds 15 people. How many minibuses are needed?", marks: 2, answer: "7" },
    { section: "Section D: Problem Solving", question: "Lily says 3.6 ÷ 3 = 1.02. Explain Lily's mistake and give the correct answer.", type: "explain", marks: 2,
      answer: "3 ÷ 3 = 1 and 0.6 ÷ 3 = 0.2, so 3.6 ÷ 3 = 1.2. Lily has put an extra 0 in, giving 2 hundredths instead of 2 tenths." }
  ]
});


QUESTION_BANK.add({
  topic: "Rounding",
  title: "Rounding",
  type: "number",
  questionsPerSet: 10,
  tip: "Look at the digit just after the place you're rounding to: 5 or more rounds up, 4 or less rounds down. Type your answer and press <b>Enter</b> or <b>Check</b>.",
  questions: [
    { section: "Rounding whole numbers", question: "Round 47 to the nearest 10.", marks: 1, answer: "50" },
    { section: "Rounding whole numbers", question: "Round 65 to the nearest 10.", marks: 1, answer: "70" },
    { section: "Rounding whole numbers", question: "Round 3642 to the nearest 100.", marks: 1, answer: "3600" },
    { section: "Rounding whole numbers", question: "Round 8519 to the nearest 1000.", marks: 1, answer: "9000" },
    { section: "Rounding whole numbers", question: "Round 2995 to the nearest 10.", marks: 1, answer: "3000" },

    { section: "Rounding decimals", question: "Round 6.7 to the nearest whole number.", marks: 1, answer: "7" },
    { section: "Rounding decimals", question: "Round 19.5 to the nearest whole number.", marks: 1, answer: "20" },
    { section: "Rounding decimals", question: "Round 12.35 to 1 decimal place.", marks: 1, answer: "12.4" },
    { section: "Rounding decimals", question: "Round 0.68 to 1 decimal place.", marks: 1, answer: "0.7" },
    { section: "Rounding decimals", question: "Round 3.142 to 2 decimal places.", marks: 1, answer: "3.14" },

    { section: "Using a number line", question: "The arrow points to a number. Round it to the nearest 10.", marks: 1, answer: "40",
      scale: { style: "line", min: 30, max: 40, major: 1, value: 36 } },
    { section: "Using a number line", question: "The arrow points to a number. Round it to the nearest 100.", marks: 1, answer: "100",
      scale: { style: "line", min: 100, max: 200, major: 10, minor: 5, value: 145 } },
    { section: "Using a number line", question: "Is 2.46 closer to 2.4 or to 2.5?", type: "choice", marks: 1,
      options: ["2.4", "2.5"], answer: "2.5" },

    { section: "Problem solving", question: "A football crowd is 23 481 people. Write this number to the nearest thousand.", marks: 1, answer: "23000" },
    { section: "Problem solving", question: "A bag of sweets weighs 247 g. Write this to the nearest 10 g.", marks: 1, answer: "250 g" },
    { section: "Problem solving", question: "Kai rounds 3.45 to 1 decimal place and gets 3.4. Explain Kai's mistake.", type: "explain", marks: 1,
      answer: "The digit after the first decimal place is 5, so you round up. 3.45 rounded to 1 decimal place is 3.5." }
  ]
});


QUESTION_BANK.add({
  topic: "BIDMAS",
  title: "BIDMAS",
  type: "number",
  questionsPerSet: 10,
  tip: "BIDMAS: <b>B</b>rackets, <b>I</b>ndices (powers), then <b>D</b>ivision and <b>M</b>ultiplication (left to right), then <b>A</b>ddition and <b>S</b>ubtraction (left to right). Type your answer or tap your choice, then press <b>Check</b>.",
  questions: [
    { section: "Order of operations", question: "Work out 3 + 4 × 2", marks: 1, answer: "11" },
    { section: "Order of operations", question: "Work out (3 + 4) × 2", marks: 1, answer: "14" },
    { section: "Order of operations", question: "Work out 20 − 12 ÷ 4", marks: 1, answer: "17" },
    { section: "Order of operations", question: "Work out 10 − 2 × 3 + 1", marks: 1, answer: "5" },
    { section: "Order of operations", question: "Work out 4 + 6 ÷ 2 − 1", marks: 1, answer: "6" },
    { section: "Order of operations", question: "Work out 5² − 3 × 4", marks: 2, answer: "13" },
    { section: "Order of operations", question: "Work out 2 × 3²", marks: 1, answer: "18" },
    { section: "Order of operations", question: "Work out 18 ÷ (2 + 4) × 3", marks: 2, answer: "9" },
    { section: "Order of operations", question: "Work out (8 − 2)² ÷ 4", marks: 2, answer: "9" },

    { section: "Brackets and choices", question: "Which operation should you do first in 6 + 8 ÷ 2?", type: "choice", marks: 1,
      options: ["+", "÷"], answer: "÷" },
    { section: "Brackets and choices", question: "Where should the brackets go to make 2 + 3 × 4 = 20?", type: "choice", marks: 1,
      options: ["(2 + 3) × 4", "2 + (3 × 4)"], answer: "(2 + 3) × 4" },
    { section: "Brackets and choices", question: "Which calculation has the answer 16?", type: "choice", marks: 1,
      options: ["2 + 2 × 4", "(2 + 2) × 4", "2 × 2 + 4", "2 + 2 + 4"], answer: "(2 + 2) × 4" },
    { section: "Brackets and choices", question: "Put these calculations in order of their answers, smallest first.", type: "order", marks: 2,
      items: ["2 + 3 × 4", "(2 + 3) × 4", "2 × 3 + 4", "2 + 3 + 4"],
      answer: "2 + 3 + 4, 2 × 3 + 4, 2 + 3 × 4, (2 + 3) × 4", labels: ["smallest answer", "largest answer"] },

    { section: "Brackets and choices", question: "Ali works out 3 + 5 × 2 and gets 16. Explain Ali's mistake.", type: "explain", marks: 1,
      answer: "Ali added first. In BIDMAS, multiplication comes before addition, so work out 5 × 2 = 10 first, then 3 + 10 = 13." }
  ]
});


QUESTION_BANK.add({
  topic: "Subtraction of integers and decimals",
  title: "Subtraction of Integers and Decimals",
  type: "number",
  questionsPerSet: 10,
  tip: "Type your answer and press <b>Enter</b> or <b>Check</b>. For column method questions, type one digit in each box of the answer row, starting from the right. You can include £ or units, but you don't have to.",
  questions: [
    { section: "Section A: Column method", question: "Use the column method to work out 726 − 348.", type: "column", always: true, sum: "726 − 348", marks: 2 },
    { section: "Section A: Column method", question: "Use the column method to work out 8.42 − 3.67.", type: "column", always: true, sum: "8.42 − 3.67", marks: 2 },
    { section: "Section A: Column method", question: "Use the column method to work out 20 − 6.85.", type: "column", always: true, sum: "20 − 6.85", marks: 2 },

    { section: "Section B: Integers", question: "Work out 58 − 23", marks: 1, answer: "35" },
    { section: "Section B: Integers", question: "Work out 142 − 67", marks: 1, answer: "75" },
    { section: "Section B: Integers", question: "Work out 503 − 278", marks: 1, answer: "225" },
    { section: "Section B: Integers", question: "Work out 4000 − 1365", marks: 2, answer: "2635" },

    { section: "Section C: Decimals", question: "Work out 8.7 − 3.2", marks: 1, answer: "5.5" },
    { section: "Section C: Decimals", question: "Work out 6.4 − 2.9", marks: 1, answer: "3.5" },
    { section: "Section C: Decimals", question: "Work out 15.35 − 7.42", marks: 1, answer: "7.93" },
    { section: "Section C: Decimals", question: "Work out 9 − 3.6", marks: 1, answer: "5.4" },
    { section: "Section C: Decimals", question: "Work out 12.5 − 4.75", marks: 2, answer: "7.75" },
    { section: "Section C: Decimals", question: "Work out 1 − 0.35", marks: 2, answer: "0.65" },

    { section: "Section D: Problem Solving", question: "Kim has £20. She spends £7.85. How much money does she have left?", marks: 2, answer: "£12.15" },
    { section: "Section D: Problem Solving", question: "A plank is 3.2 m long. A piece 1.45 m long is cut off. How long is the piece that is left?", marks: 2, answer: "1.75 m" },
    { section: "Section D: Problem Solving", question: "The temperature was 14.5 °C. It fell by 6.8 °C. What is the temperature now?", marks: 2, answer: "7.7 °C" },
    { section: "Section D: Problem Solving", question: "Raj says 6.3 − 2.8 = 4.5. Explain Raj's mistake and give the correct answer.", type: "explain", marks: 2,
      answer: "You can't take 8 tenths from 3 tenths, so exchange 1 one for 10 tenths: 13 − 8 = 5 tenths, then 5 − 2 = 3 ones. The answer is 3.5. Raj did 8 − 3 instead of exchanging." }
  ]
});


QUESTION_BANK.add({
  topic: "Multiplication of integers and decimals",
  title: "Multiplication of Integers and Decimals",
  type: "number",
  questionsPerSet: 10,
  tip: "Type your answer and press <b>Enter</b> or <b>Check</b>. For column method questions, type one digit in each box of the answer row, starting from the right; the small boxes are for carrying. You can include £ or units, but you don't have to.",
  questions: [
    { section: "Section A: Column method", question: "Use the column method to work out 256 × 7.", type: "column", always: true, sum: "256 × 7", marks: 2 },
    { section: "Section A: Column method", question: "Use the column method to work out 3.48 × 6.", type: "column", always: true, sum: "3.48 × 6", marks: 2 },
    { section: "Section A: Column method", question: "Use the column method to work out 47.5 × 4.", type: "column", always: true, sum: "47.5 × 4", marks: 2 },

    { section: "Section B: Integers", question: "Work out 23 × 3", marks: 1, answer: "69" },
    { section: "Section B: Integers", question: "Work out 47 × 6", marks: 1, answer: "282" },
    { section: "Section B: Integers", question: "Work out 124 × 5", marks: 1, answer: "620" },
    { section: "Section B: Integers", question: "Work out 36 × 24", marks: 2, answer: "864" },

    { section: "Section C: Decimals", question: "Work out 0.4 × 3", marks: 1, answer: "1.2" },
    { section: "Section C: Decimals", question: "Work out 2.5 × 4", marks: 1, answer: "10" },
    { section: "Section C: Decimals", question: "Work out 1.6 × 7", marks: 1, answer: "11.2" },
    { section: "Section C: Decimals", question: "Work out 0.3 × 0.2", marks: 2, answer: "0.06" },
    { section: "Section C: Decimals", question: "Work out 3.45 × 10", marks: 1, answer: "34.5" },
    { section: "Section C: Decimals", question: "Work out 0.07 × 100", marks: 1, answer: "7" },
    { section: "Section C: Decimals", question: "Which is the same as 2.4 × 100?", type: "choice", marks: 1,
      options: ["24", "240", "2400", "0.024"], answer: "240" },

    { section: "Section D: Problem Solving", question: "One cinema ticket costs £4.75. How much do 6 tickets cost?", marks: 2, answer: "£28.50" },
    { section: "Section D: Problem Solving", question: "A recipe uses 0.25 kg of flour for each cake. How much flour is needed for 8 cakes?", marks: 2, answer: "2 kg" },
    { section: "Section D: Problem Solving", question: "A rectangle is 3.5 cm long and 6 cm wide. Work out its area in cm².", marks: 2, answer: "21" },
    { section: "Section D: Problem Solving", question: "Zoe says 0.3 × 0.2 = 0.6. Explain Zoe's mistake.", type: "explain", marks: 1,
      answer: "3 × 2 = 6, but tenths × tenths make hundredths, so 0.3 × 0.2 has two decimal places in total. The answer is 0.06." }
  ]
});


QUESTION_BANK.add({
  topic: "Addition of integers and decimals",
  title: "Addition of Integers and Decimals",
  type: "number",
  questionsPerSet: 10,
  tip: "Type your answer and press <b>Enter</b> or <b>Check</b>. For column method questions, type one digit in each box of the answer row, starting from the right; the small boxes are for carrying. You can include £ or units (e.g. £4.74 or 6.35 km), but you don't have to.",
  questions: [
    { section: "Section A: Column method", question: "Use the column method to work out 2847 + 1596.", type: "column", always: true, sum: "2847 + 1596", marks: 2 },
    { section: "Section A: Column method", question: "Use the column method to work out 36.8 + 7.45.", type: "column", always: true, sum: "36.8 + 7.45", marks: 2 },
    { section: "Section A: Column method", question: "Use the column method to work out 125.6 + 9.75.", type: "column", always: true, sum: "125.6 + 9.75", marks: 2 },

    { section: "Section B: Integers", question: "Work out 34 + 25", marks: 1, answer: "59" },
    { section: "Section B: Integers", question: "Work out 128 + 47", marks: 1, answer: "175" },
    { section: "Section B: Integers", question: "Work out 356 + 289", marks: 1, answer: "645" },
    { section: "Section B: Integers", question: "Work out 1407 + 2685", marks: 1, answer: "4092" },

    { section: "Section C: Decimals", question: "Work out 4.5 + 3.2", marks: 1, answer: "7.7" },
    { section: "Section C: Decimals", question: "Work out 6.8 + 2.7", marks: 1, answer: "9.5" },
    { section: "Section C: Decimals", question: "Work out 12.35 + 4.21", marks: 1, answer: "16.56" },
    { section: "Section C: Decimals", question: "Work out 7.6 + 3.45", marks: 1, answer: "11.05" },
    { section: "Section C: Decimals", question: "Work out 15 + 2.8", marks: 1, answer: "17.8" },
    { section: "Section C: Decimals", question: "Work out 0.9 + 0.35", marks: 1, answer: "1.25" },
    { section: "Section C: Decimals", question: "Work out 23.47 + 18.86", marks: 1, answer: "42.33" },
    { section: "Section C: Decimals", question: "Work out 3.2 + 4.65 + 0.8", marks: 2, answer: "8.65" },
    { section: "Section C: Decimals", question: "Work out 105.6 + 39.48", marks: 2, answer: "145.08" },
    { section: "Section C: Decimals", question: "Work out 0.007 + 0.25", marks: 2, answer: "0.257" },

    { section: "Section D: Problem Solving", question: "Sam buys a sandwich for £3.45 and a drink for £1.29. How much does Sam spend altogether?", marks: 2, answer: "£4.74" },
    { section: "Section D: Problem Solving", question: "Priya runs 2.6 km on Monday and 3.75 km on Tuesday. How far does she run in total?", marks: 2, answer: "6.35 km" },
    { section: "Section D: Problem Solving", question: "Three bags weigh 1.25 kg, 0.8 kg and 2.4 kg. What is their total weight?", marks: 2, answer: "4.45 kg" },
    { section: "Section D: Problem Solving", question: "Find the missing number: 4.7 + ____ = 10", marks: 2, answer: "5.3" },
    { section: "Section D: Problem Solving", question: "A carpenter joins two pieces of wood. One is 1.35 m long and the other is 0.92 m long. How long is the joined piece?", marks: 2, answer: "2.27 m" },
    {
      section: "Section D: Problem Solving",
      text: "Jo says 3.4 + 2.15 = 5.19.",
      parts: [
        { question: "Explain Jo's mistake.", marks: 1, type: "explain",
          answer: "Jo didn't line up the decimal points. She added the 4 tenths to the 15 hundredths as if they were 4 + 15. Writing 3.4 as 3.40 lines the digits up correctly." },
        { question: "Give the correct answer.", marks: 1, answer: "5.55" }
      ]
    }
  ]
});
