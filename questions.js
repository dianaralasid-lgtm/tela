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

   MORE TYPES
     "fraction"  A fraction such as "3/8". Equivalent fractions count
                unless you add  simplest: true , which needs lowest terms.
     "shade"    The student taps parts of a shape to shade the answer
                fraction, e.g. answer: "2/5" with
                shape: { style: "bar", parts: 5 }.
     "select"   The student taps ALL the right options. Give the answer as
                a list: answer: "1, 2, 3, 6". Use  range: [1, 30]  instead of
                "options" for the numbers 1 to 30.
     "tally"    The student draws tally marks; the answer is the number.
     "pictogram"  The student builds a pictogram row from whole, half and
                quarter symbols; the answer is the amount it should show.
                  pictogram: { key: 4, item: "books", rows: [["Mon", 3]], ask: "Fri" }
                (rows give the number of symbols; ask names the row to fill)

   MORE PICTURES (add to any question)
     shape: { style: "bar", parts: 8, shaded: 3 }   bar, "circle", or
                "grid" (with rows and cols); the first "shaded" parts are shaded.
     polygon: 6   or   polygon: { sides: 5, irregular: true }
     tally: { rows: [["Red", 7], ["Blue", 12]], headings: ["Colour", "Tally", "Frequency"], show: "tally" }
                show is "tally", "frequency" or "both".
     pictogram: { key: 4, item: "books", rows: [["Mon", 3], ["Tue", 2.5]] }
     table: { headings: ["Item", "Price"], rows: [["Tea", "£1.60"], ["Cake", "£2.40"]] }
     machine: { input: "4", steps: ["× 3", "+ 2"], output: "?" }   (function machine)
     outline: { points: [[0,0],[8,0],[8,5],[0,5]], unit: "cm" }
                A straight-sided shape from its corners (x across, y up).
                Each side is labelled with its length; hide: [1, 3] shows "?"
                on those sides (counting from the first side), labels: false
                hides all labels, and grid: true draws squared paper.
     spinner: ["red", "blue", "red", "green"]   (equal sections)
     counters: { red: 3, blue: 7 }              (a bag of counters)
     bars: { labels: ["A", "B"], values: [12, 5], ystep: 2, ymax: 14, ylabel: "Frequency" }
     stemleaf: { rows: [[1, "2 5 8"], [2, "1 3 3 7"]], key: "2 | 3 means 23" }
     pie: { sectors: [["Walk", 120], ["Bus", 90]], showAngles: true }   (angles)
     graph extras: xstep / ystep (what each square is worth), xlabel /
                ylabel (axis titles), and dots: [[5, 4], [15, 9]] for
                unlabelled points, e.g. on a frequency polygon.
     scale extra: words: [[0, "Impossible"], [1, "Certain"]] puts words
                under a number line, e.g. for a probability scale.

   "interval" An error interval such as "6.5 ≤ x < 7.5" (the student gets
              a ≤ button; <= also works). Bounds and signs are both checked.
   "ratio"    A ratio such as "3:4" or "3:5:8". Equivalent ratios count
              unless you add  simplest: true .
   Fractions also accept mixed numbers, e.g. "1 1/2".
   tolerance: 0.1  on a number question allows answers that far out
              (e.g. circle answers worked out with π or with 3.14).
   Number answers may be written "x = 4" as well as "4".
   ratioBar: { parts: [3, 5], labels: ["Amy", "Ben"], each: "?" }   bar model
   circle: { label: "5 cm", show: "radius" }   or  show: "diameter"
   outline extras: only: [0, 2] labels just those sides, and
              extra: [{ from: [4, 0], to: [4, 6], label: "6 cm" }] adds a
              dashed line such as a height.
   graph extra: labels: [["A", -3, 2]] writes text at a grid position.

   "drawbar"  The student clicks a bar chart to draw the missing bar. Give
              the chart as  bars: {...}  with null for the missing value and
              ask: its position (counting from 0); the answer is its height.

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


QUESTION_BANK.add({
  topic: "Fractions: writing, simplifying and ordering",
  title: "Fractions: Writing, Simplifying and Ordering",
  type: "fraction",
  questionsPerSet: 10,
  tip: "Type fractions like 3/8. To shade a shape, tap its parts (tap again to unshade). For ordering, tap the fractions in order. Then press <b>Check</b>.",
  questions: [
    { section: "Section A: Writing fractions", question: "What fraction of the shape is shaded?", marks: 1, answer: "3/8",
      shape: { style: "bar", parts: 8, shaded: 3 } },
    { section: "Section A: Writing fractions", question: "What fraction of the circle is shaded?", marks: 1, answer: "1/4",
      shape: { style: "circle", parts: 4, shaded: 1 } },
    { section: "Section A: Writing fractions", question: "What fraction of the grid is shaded?", marks: 1, answer: "5/12",
      shape: { style: "grid", rows: 3, cols: 4, shaded: 5 } },
    { section: "Section A: Writing fractions", question: "What fraction of the circle is shaded?", marks: 1, answer: "5/6",
      shape: { style: "circle", parts: 6, shaded: 5 } },
    { section: "Section A: Writing fractions", question: "Shade 2/5 of the shape.", type: "shade", marks: 1, answer: "2/5",
      shape: { style: "bar", parts: 5 } },
    { section: "Section A: Writing fractions", question: "Shade 3/4 of the circle.", type: "shade", marks: 1, answer: "3/4",
      shape: { style: "circle", parts: 4 } },
    { section: "Section A: Writing fractions", question: "Shade 1/3 of the grid.", type: "shade", marks: 1, answer: "1/3",
      shape: { style: "grid", rows: 2, cols: 3 } },

    { section: "Section B: Simplifying fractions", question: "Write 6/8 in its simplest form.", simplest: true, marks: 1, answer: "3/4" },
    { section: "Section B: Simplifying fractions", question: "Write 10/15 in its simplest form.", simplest: true, marks: 1, answer: "2/3" },
    { section: "Section B: Simplifying fractions", question: "Write 12/16 in its simplest form.", simplest: true, marks: 1, answer: "3/4" },
    { section: "Section B: Simplifying fractions", question: "Write 14/21 in its simplest form.", simplest: true, marks: 1, answer: "2/3" },
    { section: "Section B: Simplifying fractions", question: "Write 20/50 in its simplest form.", simplest: true, marks: 1, answer: "2/5" },
    { section: "Section B: Simplifying fractions", question: "Which fraction is equivalent to 2/3?", type: "choice", marks: 1,
      options: ["4/9", "6/9", "3/4", "2/6"], answer: "6/9" },
    { section: "Section B: Simplifying fractions", question: "Find the missing number: 3/5 = ?/20", type: "number", marks: 1, answer: "12" },

    { section: "Section C: Ordering fractions", question: "Put these fractions in order, starting with the smallest.", type: "order", marks: 1,
      items: ["1/2", "1/4", "3/4", "1/8"], answer: "1/8, 1/4, 1/2, 3/4" },
    { section: "Section C: Ordering fractions", question: "Put these fractions in order, starting with the smallest.", type: "order", marks: 2,
      items: ["2/3", "1/2", "5/6", "7/12"], answer: "1/2, 7/12, 2/3, 5/6" },
    { section: "Section C: Ordering fractions", question: "Which fraction is bigger?", type: "choice", marks: 1,
      options: ["3/5", "2/3"], answer: "2/3" },
    { section: "Section C: Ordering fractions", question: "Ben says 1/5 is bigger than 1/3 because 5 is bigger than 3. Explain why Ben is wrong.", type: "explain", marks: 1,
      answer: "The bottom number tells you how many equal parts the whole is split into. Splitting into 5 parts makes each part smaller than splitting into 3, so 1/5 is smaller than 1/3." }
  ]
});


QUESTION_BANK.add({
  topic: "Place value",
  title: "Place Value",
  type: "number",
  questionsPerSet: 10,
  tip: "Think about which column each digit is in: thousands, hundreds, tens, ones, then tenths and hundredths after the decimal point. Type your answer or tap your choice, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Value of a digit", question: "What is the value of the 7 in 3742?", marks: 1, answer: "700" },
    { section: "Section A: Value of a digit", question: "What is the value of the 4 in 54 316?", marks: 1, answer: "4000" },
    { section: "Section A: Value of a digit", question: "What is the value of the 3 in 6.135?", marks: 1, answer: "0.03" },
    { section: "Section A: Value of a digit", question: "Write down the digit in the tenths column of 47.82.", marks: 1, answer: "8" },
    { section: "Section A: Value of a digit", question: "Which number has 6 in the hundreds column?", type: "choice", marks: 1,
      options: ["3628", "6283", "2836", "8362"], answer: "3628" },
    { section: "Section A: Value of a digit", question: "Which is the same as 5.07?", type: "choice", marks: 1,
      options: ["5 ones and 7 tenths", "5 ones and 7 hundredths", "57 tenths", "5 tens and 7 ones"], answer: "5 ones and 7 hundredths" },

    { section: "Section B: Writing numbers", question: "Write forty-two thousand and seven in figures.", marks: 1, answer: "42007" },
    { section: "Section B: Writing numbers", question: "Write three hundred and five thousand, two hundred in figures.", marks: 1, answer: "305200" },
    { section: "Section B: Writing numbers", question: "Write 3 tens, 4 tenths and 2 hundredths as a number.", marks: 1, answer: "30.42" },
    { section: "Section B: Writing numbers", question: "Put these numbers in order, starting with the smallest.", type: "order", marks: 1,
      items: ["4.5", "4.05", "45", "0.45"], answer: "0.45, 4.05, 4.5, 45" },

    { section: "Section C: Changing numbers", question: "What is 10 more than 4995?", marks: 1, answer: "5005" },
    { section: "Section C: Changing numbers", question: "What is 1000 less than 20 450?", marks: 1, answer: "19450" },
    { section: "Section C: Changing numbers", question: "Work out 3.6 × 100", marks: 1, answer: "360" },
    { section: "Section C: Changing numbers", question: "Work out 52 ÷ 10", marks: 1, answer: "5.2" },
    { section: "Section C: Changing numbers", question: "Amy says the 5 in 2.05 is worth 5 tenths. Explain why Amy is wrong.", type: "explain", marks: 1,
      answer: "The 5 is in the second column after the decimal point, which is the hundredths column, so it is worth 5 hundredths (0.05). The tenths digit is 0." }
  ]
});


QUESTION_BANK.add({
  topic: "Names of polygons",
  title: "Names of Polygons",
  type: "choice",
  questionsPerSet: 10,
  tip: "Count the sides: 3 triangle, 4 quadrilateral, 5 pentagon, 6 hexagon, 7 heptagon, 8 octagon, 9 nonagon, 10 decagon. Tap your answer, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: 5, marks: 1,
      options: ["quadrilateral", "pentagon", "hexagon", "octagon"], answer: "pentagon" },
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: 6, marks: 1,
      options: ["pentagon", "hexagon", "heptagon", "octagon"], answer: "hexagon" },
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: 8, marks: 1,
      options: ["hexagon", "heptagon", "octagon", "decagon"], answer: "octagon" },
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: { sides: 7, irregular: true }, marks: 1,
      options: ["hexagon", "heptagon", "octagon", "nonagon"], answer: "heptagon" },
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: { sides: 4, irregular: true }, marks: 1,
      options: ["triangle", "quadrilateral", "pentagon", "hexagon"], answer: "quadrilateral" },
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: { sides: 3, irregular: true }, marks: 1,
      options: ["triangle", "quadrilateral", "pentagon", "hexagon"], answer: "triangle" },
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: 10, marks: 1,
      options: ["octagon", "nonagon", "decagon", "hexagon"], answer: "decagon" },
    { section: "Section A: Naming polygons", question: "What is the name of this polygon?", polygon: { sides: 9, irregular: true }, marks: 1,
      options: ["heptagon", "octagon", "nonagon", "decagon"], answer: "nonagon" },

    { section: "Section B: Sides and properties", question: "How many sides does an octagon have?", type: "number", marks: 1, answer: "8" },
    { section: "Section B: Sides and properties", question: "How many sides does a heptagon have?", type: "number", marks: 1, answer: "7" },
    { section: "Section B: Sides and properties", question: "How many sides does a decagon have?", type: "number", marks: 1, answer: "10" },
    { section: "Section B: Sides and properties", question: "A regular polygon has all its sides equal and...", marks: 1,
      options: ["all its angles equal", "four sides", "a right angle", "parallel sides"], answer: "all its angles equal" },
    { section: "Section B: Sides and properties", question: "Tap all the shapes that are quadrilaterals.", type: "select", marks: 2,
      options: ["square", "triangle", "rectangle", "kite", "pentagon", "trapezium", "hexagon"], answer: "square, rectangle, kite, trapezium" },
    { section: "Section B: Sides and properties", question: "Is a circle a polygon? Explain your answer.", type: "explain", marks: 1,
      answer: "No. A polygon is a flat shape made only of straight sides. A circle has one curved edge, so it is not a polygon." }
  ]
});


QUESTION_BANK.add({
  topic: "Tally charts",
  title: "Tally Charts",
  type: "number",
  questionsPerSet: 10,
  tip: "Count tally marks in fives: each group of four upright lines with one across is 5. To draw a tally, use <b>Add a mark</b>; every fifth mark goes across the group. Then press <b>Check</b>.",
  questions: [
    { section: "Section A: Reading a tally chart", text: "The tally chart shows people's favourite fruit.", question: "How many people chose banana?", marks: 1, answer: "12",
      tally: { rows: [["Apple", 7], ["Banana", 12], ["Orange", 4], ["Grape", 9]], headings: ["Fruit", "Tally", "Frequency"], show: "tally" } },
    { section: "Section A: Reading a tally chart", text: "The tally chart shows people's favourite fruit.", question: "How many people chose grape?", marks: 1, answer: "9",
      tally: { rows: [["Apple", 7], ["Banana", 12], ["Orange", 4], ["Grape", 9]], headings: ["Fruit", "Tally", "Frequency"], show: "tally" } },
    { section: "Section A: Reading a tally chart", text: "The tally chart shows people's favourite fruit.", question: "Which fruit was the most popular?", type: "choice", marks: 1,
      options: ["Apple", "Banana", "Orange", "Grape"], answer: "Banana",
      tally: { rows: [["Apple", 7], ["Banana", 12], ["Orange", 4], ["Grape", 9]], headings: ["Fruit", "Tally", "Frequency"], show: "tally" } },
    { section: "Section A: Reading a tally chart", text: "The tally chart shows people's favourite fruit.", question: "How many people were asked altogether?", marks: 2, answer: "32",
      tally: { rows: [["Apple", 7], ["Banana", 12], ["Orange", 4], ["Grape", 9]], headings: ["Fruit", "Tally", "Frequency"], show: "tally" } },
    { section: "Section A: Reading a tally chart", text: "The tally chart shows people's favourite fruit.", question: "How many more people chose apple than orange?", marks: 1, answer: "3",
      tally: { rows: [["Apple", 7], ["Banana", 12], ["Orange", 4], ["Grape", 9]], headings: ["Fruit", "Tally", "Frequency"], show: "tally" } },
    { section: "Section A: Reading a tally chart", question: "What number do these tally marks show?", marks: 1, answer: "17",
      tally: { rows: [["Votes", 17]], headings: ["", "Tally", ""], show: "tally" } },

    { section: "Section B: Drawing tallies", question: "Draw the tally marks for 8.", type: "tally", marks: 1, answer: "8" },
    { section: "Section B: Drawing tallies", question: "Draw the tally marks for 13.", type: "tally", marks: 1, answer: "13" },
    { section: "Section B: Drawing tallies", question: "Draw the tally marks for 20.", type: "tally", marks: 1, answer: "20" },

    { section: "Section C: Understanding tallies", question: "Why is every fifth tally mark drawn across the other four?", type: "choice", marks: 1,
      options: ["To make them easier to count in fives", "To show the fifth one is bigger", "Because the fifth one doesn't count", "To make the chart look neat"],
      answer: "To make them easier to count in fives" },
    { section: "Section C: Understanding tallies", question: "Cars has a frequency of 23 in a tally chart. How many complete groups of five tally marks are there?", marks: 1, answer: "4" },
    { section: "Section C: Understanding tallies", question: "Sita draws five upright lines next to each other to show 5. Explain what she should have drawn.", type: "explain", marks: 1,
      answer: "Four upright lines with the fifth line drawn across them, like a gate. This makes groups of five that are easy to count." }
  ]
});


QUESTION_BANK.add({
  topic: "Pictograms",
  title: "Pictograms",
  type: "number",
  questionsPerSet: 10,
  tip: "Always check the key first. Half a symbol is half the key's amount, and a quarter is a quarter of it. To complete a pictogram, add whole, half or quarter symbols, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Reading a pictogram", text: "The pictogram shows how many books a class read.", question: "How many books were read on Monday?", marks: 1, answer: "12",
      pictogram: { key: 4, item: "books", rows: [["Monday", 3], ["Tuesday", 2.5], ["Wednesday", 4], ["Thursday", 1.25]] } },
    { section: "Section A: Reading a pictogram", text: "The pictogram shows how many books a class read.", question: "How many books were read on Tuesday?", marks: 1, answer: "10",
      pictogram: { key: 4, item: "books", rows: [["Monday", 3], ["Tuesday", 2.5], ["Wednesday", 4], ["Thursday", 1.25]] } },
    { section: "Section A: Reading a pictogram", text: "The pictogram shows how many books a class read.", question: "How many books were read on Thursday?", marks: 1, answer: "5",
      pictogram: { key: 4, item: "books", rows: [["Monday", 3], ["Tuesday", 2.5], ["Wednesday", 4], ["Thursday", 1.25]] } },
    { section: "Section A: Reading a pictogram", text: "The pictogram shows how many books a class read.", question: "On which day were the most books read?", type: "choice", marks: 1,
      options: ["Monday", "Tuesday", "Wednesday", "Thursday"], answer: "Wednesday",
      pictogram: { key: 4, item: "books", rows: [["Monday", 3], ["Tuesday", 2.5], ["Wednesday", 4], ["Thursday", 1.25]] } },
    { section: "Section A: Reading a pictogram", text: "The pictogram shows how many books a class read.", question: "How many books were read altogether from Monday to Thursday?", marks: 2, answer: "43",
      pictogram: { key: 4, item: "books", rows: [["Monday", 3], ["Tuesday", 2.5], ["Wednesday", 4], ["Thursday", 1.25]] } },
    { section: "Section A: Reading a pictogram", text: "The pictogram shows how many books a class read.", question: "How many more books were read on Wednesday than on Thursday?", marks: 1, answer: "11",
      pictogram: { key: 4, item: "books", rows: [["Monday", 3], ["Tuesday", 2.5], ["Wednesday", 4], ["Thursday", 1.25]] } },

    { section: "Section B: Completing a pictogram", question: "On Friday the class read 14 books. Complete the pictogram for Friday.", type: "pictogram", marks: 1, answer: "14",
      pictogram: { key: 4, item: "books", rows: [["Monday", 3], ["Tuesday", 2.5], ["Wednesday", 4], ["Thursday", 1.25]], ask: "Friday" } },
    { section: "Section B: Completing a pictogram", question: "A shop sold 9 ice creams on Saturday. Complete the pictogram for Saturday.", type: "pictogram", marks: 1, answer: "9",
      pictogram: { key: 2, item: "ice creams", rows: [["Thursday", 3], ["Friday", 5.5]], ask: "Saturday" } },
    { section: "Section B: Completing a pictogram", question: "35 people went swimming on Sunday. Complete the pictogram for Sunday.", type: "pictogram", marks: 1, answer: "35",
      pictogram: { key: 10, item: "people", rows: [["Friday", 2], ["Saturday", 4.5]], ask: "Sunday" } },

    { section: "Section C: Using the key", question: "In a pictogram, one symbol stands for 6 people. How many people does half a symbol stand for?", marks: 1, answer: "3" },
    { section: "Section C: Using the key", question: "Why does a pictogram need a key?", type: "choice", marks: 1,
      options: ["To show how many each symbol stands for", "To make it colourful", "To show the title", "To count the rows"],
      answer: "To show how many each symbol stands for" },
    { section: "Section C: Using the key", question: "The key says one symbol stands for 8 people. Leo says a quarter of a symbol is 1 person. Explain Leo's mistake.", type: "explain", marks: 1,
      answer: "A quarter of a symbol is a quarter of 8 people, and 8 ÷ 4 = 2. So a quarter of a symbol stands for 2 people, not 1." }
  ]
});


QUESTION_BANK.add({
  topic: "Negative numbers",
  title: "Negative Numbers",
  type: "number",
  questionsPerSet: 10,
  tip: "On a number line, numbers get smaller as you go left. The further a negative number is from zero, the smaller it is. Type your answer, tap your choice or click the number line, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Ordering and comparing", question: "Put these numbers in order, starting with the smallest.", type: "order", marks: 1,
      items: ["3", "−5", "0", "−1", "4"], answer: "−5, −1, 0, 3, 4" },
    { section: "Section A: Ordering and comparing", question: "Which symbol goes in the box?  −7 ☐ −4", type: "choice", marks: 1,
      options: ["<", ">", "="], answer: "<" },
    { section: "Section A: Ordering and comparing", question: "Which temperature is the coldest?", type: "choice", marks: 1,
      options: ["−2 °C", "−9 °C", "0 °C", "3 °C"], answer: "−9 °C" },
    { section: "Section A: Ordering and comparing", question: "Click on the number line to point the arrow at −3.", type: "mark", marks: 1, answer: "-3",
      scale: { style: "line", min: -10, max: 10, major: 2, minor: 1 } },
    { section: "Section A: Ordering and comparing", question: "What number is the arrow pointing to?", marks: 1, answer: "−6",
      scale: { style: "line", min: -10, max: 10, major: 2, minor: 1, value: -6 } },
    { section: "Section A: Ordering and comparing", question: "What temperature does the thermometer show?", marks: 1, answer: "−8 °C",
      scale: { style: "thermometer", min: -20, max: 20, major: 10, minor: 2, unit: "°C", value: -8 } },

    { section: "Section B: Calculating", question: "Work out −3 + 8", marks: 1, answer: "5" },
    { section: "Section B: Calculating", question: "Work out 4 − 9", marks: 1, answer: "−5" },
    { section: "Section B: Calculating", question: "Work out −2 − 6", marks: 1, answer: "−8" },
    { section: "Section B: Calculating", question: "Work out −4 × 3", marks: 1, answer: "−12" },
    { section: "Section B: Calculating", question: "Work out −20 ÷ 5", marks: 1, answer: "−4" },

    { section: "Section C: Problem solving", question: "The temperature is −4 °C. It rises by 9 °C. What is the new temperature?", marks: 1, answer: "5 °C" },
    { section: "Section C: Problem solving", question: "What is the difference between −6 °C and 5 °C?", marks: 2, answer: "11 °C" },
    { section: "Section C: Problem solving", question: "Max says −8 is bigger than −3 because 8 is bigger than 3. Explain why Max is wrong.", type: "explain", marks: 1,
      answer: "Negative numbers get smaller the further they are from zero. −8 is further left on the number line than −3, so −8 is smaller than −3." }
  ]
});


QUESTION_BANK.add({
  topic: "Powers and roots",
  title: "Powers and Roots",
  type: "number",
  questionsPerSet: 10,
  tip: "5² means 5 × 5, and 3³ means 3 × 3 × 3. √49 asks which number times itself makes 49, and ∛8 asks which number times itself three times makes 8. Type your answer or tap your choice, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Powers", question: "Work out 5²", marks: 1, answer: "25" },
    { section: "Section A: Powers", question: "Work out 9²", marks: 1, answer: "81" },
    { section: "Section A: Powers", question: "Work out 3³", marks: 1, answer: "27" },
    { section: "Section A: Powers", question: "Work out 2⁴", marks: 1, answer: "16" },
    { section: "Section A: Powers", question: "Work out 10³", marks: 1, answer: "1000" },
    { section: "Section A: Powers", question: "Work out 4² + 3²", marks: 2, answer: "25" },

    { section: "Section B: Roots", question: "Work out √49", marks: 1, answer: "7" },
    { section: "Section B: Roots", question: "Work out √144", marks: 1, answer: "12" },
    { section: "Section B: Roots", question: "Work out ∛8", marks: 1, answer: "2" },
    { section: "Section B: Roots", question: "Work out ∛64", marks: 1, answer: "4" },

    { section: "Section C: Comparing", question: "Which is bigger?", type: "choice", marks: 1,
      options: ["2⁵", "5²", "They are equal"], answer: "2⁵" },
    { section: "Section C: Comparing", question: "Tap all the square numbers.", type: "select", marks: 2,
      options: ["4", "9", "12", "16", "20", "25", "30", "36"], answer: "4, 9, 16, 25, 36" },
    { section: "Section C: Comparing", question: "Put these in order of size, starting with the smallest.", type: "order", marks: 2,
      items: ["3²", "2³", "√100", "1⁵"], answer: "1⁵, 2³, 3², √100" },
    { section: "Section C: Comparing", question: "Jo says 3² = 6. Explain Jo's mistake.", type: "explain", marks: 1,
      answer: "3² means 3 × 3, not 3 × 2. So 3² = 9." }
  ]
});


QUESTION_BANK.add({
  topic: "Factors and multiples",
  title: "Factors and Multiples",
  type: "select",
  questionsPerSet: 10,
  tip: "A factor divides into a number exactly. A multiple is in the number's times table. A prime number has exactly two factors: 1 and itself. Tap ALL the answers that fit, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Factors", question: "Tap all the factors of 12.", marks: 2, range: [1, 12], answer: "1, 2, 3, 4, 6, 12" },
    { section: "Section A: Factors", question: "Tap all the factors of 20.", marks: 2, range: [1, 20], answer: "1, 2, 4, 5, 10, 20" },
    { section: "Section A: Factors", question: "Which number is a factor of 18?", type: "choice", marks: 1,
      options: ["4", "5", "6", "8"], answer: "6" },
    { section: "Section A: Factors", question: "How many factors does 16 have?", type: "number", marks: 1, answer: "5" },
    { section: "Section A: Factors", question: "Write down the common factor of 12 and 18 that is bigger than 4.", type: "number", marks: 1, answer: "6" },

    { section: "Section B: Multiples", question: "Tap all the multiples of 4.", marks: 2, range: [1, 30], answer: "4, 8, 12, 16, 20, 24, 28" },
    { section: "Section B: Multiples", question: "Tap all the multiples of 7.", marks: 2, range: [1, 50], answer: "7, 14, 21, 28, 35, 42, 49" },
    { section: "Section B: Multiples", question: "What is the 6th multiple of 8?", type: "number", marks: 1, answer: "48" },
    { section: "Section B: Multiples", question: "Which number is a multiple of 9?", type: "choice", marks: 1,
      options: ["28", "36", "42", "50"], answer: "36" },
    { section: "Section B: Multiples", question: "What is the smallest number that is a multiple of both 4 and 6?", type: "number", marks: 1, answer: "12" },

    { section: "Section C: Prime numbers", question: "Tap all the prime numbers.", marks: 2, range: [1, 20], answer: "2, 3, 5, 7, 11, 13, 17, 19" },
    { section: "Section C: Prime numbers", question: "Is 1 a prime number?", type: "choice", marks: 1, options: ["Yes", "No"], answer: "No" },
    { section: "Section C: Prime numbers", question: "Ella says 2 is not a prime number because it is even. Explain why Ella is wrong.", type: "explain", marks: 1,
      answer: "A prime number has exactly two factors, 1 and itself. 2 has exactly two factors, 1 and 2, so it is prime. It is the only even prime number." }
  ]
});


QUESTION_BANK.add({
  topic: "Calculation money problems",
  title: "Money Problems",
  type: "number",
  questionsPerSet: 10,
  tip: "Line up the decimal points and keep two decimal places for pence (£2.50, not £2.5). You can type £ and p, but you don't have to. Then press <b>Check</b>.",
  questions: [
    { section: "Section A: Money calculations", question: "Work out £3.45 + £2.80", marks: 1, answer: "£6.25" },
    { section: "Section A: Money calculations", question: "Work out £10 − £6.35", marks: 1, answer: "£3.65" },
    { section: "Section A: Money calculations", question: "Work out £1.25 × 4", marks: 1, answer: "£5" },
    { section: "Section A: Money calculations", question: "Work out £7.20 ÷ 3", marks: 1, answer: "£2.40" },
    { section: "Section A: Money calculations", question: "Write 365p in pounds.", marks: 1, answer: "£3.65" },

    { section: "Section B: Café prices", text: "Here is the price list in a café.", question: "How much does a tea and a sandwich cost altogether?", marks: 2, answer: "£5.35",
      table: { headings: ["Item", "Price"], rows: [["Tea", "£1.60"], ["Coffee", "£2.15"], ["Sandwich", "£3.75"], ["Cake", "£2.40"]] } },
    { section: "Section B: Café prices", text: "Here is the price list in a café.", question: "How much do two coffees and a cake cost?", marks: 2, answer: "£6.70",
      table: { headings: ["Item", "Price"], rows: [["Tea", "£1.60"], ["Coffee", "£2.15"], ["Sandwich", "£3.75"], ["Cake", "£2.40"]] } },
    { section: "Section B: Café prices", text: "Here is the price list in a café.", question: "Mia pays for a sandwich with a £5 note. How much change does she get?", marks: 2, answer: "£1.25",
      table: { headings: ["Item", "Price"], rows: [["Tea", "£1.60"], ["Coffee", "£2.15"], ["Sandwich", "£3.75"], ["Cake", "£2.40"]] } },
    { section: "Section B: Café prices", text: "Here is the price list in a café.", question: "Max has £10. What is the greatest number of cakes he can buy?", marks: 2, answer: "4",
      table: { headings: ["Item", "Price"], rows: [["Tea", "£1.60"], ["Coffee", "£2.15"], ["Sandwich", "£3.75"], ["Cake", "£2.40"]] } },
    { section: "Section B: Café prices", text: "Here is the price list in a café.", question: "Ali buys a coffee and a cake and pays with £10. How much change does he get?", marks: 2, answer: "£5.45",
      table: { headings: ["Item", "Price"], rows: [["Tea", "£1.60"], ["Coffee", "£2.15"], ["Sandwich", "£3.75"], ["Cake", "£2.40"]] } },

    { section: "Section C: Problem solving", question: "Pens cost 45p each. How much do 6 pens cost, in pounds?", marks: 2, answer: "£2.70" },
    { section: "Section C: Problem solving", question: "A bus ticket costs £2.30 each way. How much does a return journey cost every day for 5 days?", marks: 2, answer: "£23" },
    { section: "Section C: Problem solving", question: "Which pack of rolls is better value?", type: "choice", marks: 2,
      options: ["3 rolls for £1.20", "5 rolls for £1.80"], answer: "5 rolls for £1.80" },
    { section: "Section C: Problem solving", question: "Sam says £2.5 and £2.05 are the same amount. Explain why Sam is wrong.", type: "explain", marks: 1,
      answer: "£2.5 means £2.50, which is 2 pounds and 50 pence. £2.05 is 2 pounds and 5 pence. So £2.5 is 45p more." }
  ]
});


QUESTION_BANK.add({
  topic: "Fractions of an amount",
  title: "Fractions of an Amount",
  type: "number",
  questionsPerSet: 10,
  tip: "To find a fraction of an amount, divide by the bottom number, then multiply by the top number. The bar shows the amount split into equal parts. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Using a bar", text: "The bar is split into 4 equal parts.", question: "Work out 1/4 of 20", marks: 1, answer: "5",
      shape: { style: "bar", parts: 4, shaded: 1 } },
    { section: "Section A: Using a bar", text: "The bar is split into 3 equal parts.", question: "Work out 1/3 of 18", marks: 1, answer: "6",
      shape: { style: "bar", parts: 3, shaded: 1 } },
    { section: "Section A: Using a bar", text: "The bar is split into 5 equal parts.", question: "Work out 3/5 of 40", marks: 1, answer: "24",
      shape: { style: "bar", parts: 5, shaded: 3 } },
    { section: "Section A: Using a bar", text: "The bar is split into 7 equal parts.", question: "Work out 2/7 of 35", marks: 1, answer: "10",
      shape: { style: "bar", parts: 7, shaded: 2 } },

    { section: "Section B: Amounts with units", question: "Work out 3/4 of £12", marks: 1, answer: "£9" },
    { section: "Section B: Amounts with units", question: "Work out 5/8 of 64 kg", marks: 1, answer: "40 kg" },
    { section: "Section B: Amounts with units", question: "Work out 2/3 of 90 minutes", marks: 1, answer: "60 minutes" },
    { section: "Section B: Amounts with units", question: "Which is bigger?", type: "choice", marks: 2,
      options: ["1/2 of 30", "1/3 of 48", "They are equal"], answer: "1/3 of 48" },

    { section: "Section C: Problem solving", question: "A class has 30 pupils. 2/5 of them walk to school. How many pupils walk to school?", marks: 2, answer: "12" },
    { section: "Section C: Problem solving", question: "A class has 30 pupils. 2/5 of them walk to school. How many pupils do NOT walk to school?", marks: 2, answer: "18" },
    { section: "Section C: Problem solving", question: "Jo has £40. She spends 1/4 of it on a book and 1/2 of it on a game. How much money does she have left?", marks: 2, answer: "£10" },
    { section: "Section C: Problem solving", question: "1/3 of a number is 7. What is the number?", marks: 1, answer: "21" },
    { section: "Section C: Problem solving", question: "Tom says 3/4 of 20 is 5. Explain Tom's mistake.", type: "explain", marks: 1,
      answer: "Tom has only found 1/4 of 20 (20 ÷ 4 = 5). For 3/4 you multiply by 3: 5 × 3 = 15." }
  ]
});


QUESTION_BANK.add({
  topic: "Fractions, decimals and percentages",
  title: "Fractions, Decimals and Percentages",
  type: "number",
  questionsPerSet: 10,
  tip: "Percent means out of 100: 35% = 35/100 = 0.35. Type fractions like 3/5 and percentages like 40% (the % sign is optional). Then press <b>Check</b>.",
  questions: [
    { section: "Section A: Converting", question: "Write 0.7 as a percentage.", marks: 1, answer: "70%" },
    { section: "Section A: Converting", question: "Write 25% as a decimal.", marks: 1, answer: "0.25" },
    { section: "Section A: Converting", question: "Write 3/4 as a percentage.", marks: 1, answer: "75%" },
    { section: "Section A: Converting", question: "Write 1/5 as a decimal.", marks: 1, answer: "0.2" },
    { section: "Section A: Converting", question: "Write 0.4 as a fraction in its simplest form.", type: "fraction", simplest: true, marks: 1, answer: "2/5" },
    { section: "Section A: Converting", question: "Write 35% as a fraction in its simplest form.", type: "fraction", simplest: true, marks: 2, answer: "7/20" },

    { section: "Section B: Using grids", text: "The grid is made of 100 squares.", question: "What percentage of the grid is shaded?", marks: 1, answer: "37%",
      shape: { style: "grid", rows: 10, cols: 10, shaded: 37 } },
    { section: "Section B: Using grids", text: "The grid is made of 100 squares.", question: "What fraction of the grid is shaded? Give your answer in its simplest form.", type: "fraction", simplest: true, marks: 2, answer: "3/5",
      shape: { style: "grid", rows: 10, cols: 10, shaded: 60 } },
    { section: "Section B: Using grids", question: "Shade 40% of the grid.", type: "shade", marks: 1, answer: "2/5",
      shape: { style: "grid", rows: 2, cols: 5 } },

    { section: "Section C: Comparing", question: "Put these in order, starting with the smallest.", type: "order", marks: 2,
      items: ["0.35", "40%", "3/10", "0.5"], answer: "3/10, 0.35, 40%, 0.5" },
    { section: "Section C: Comparing", question: "Which is the biggest?", type: "choice", marks: 1,
      options: ["0.62", "65%", "3/5", "0.6"], answer: "65%" },
    { section: "Section C: Comparing", question: "Which of these is NOT equal to one half?", type: "choice", marks: 1,
      options: ["0.5", "50%", "2/4", "0.05"], answer: "0.05" },
    { section: "Section C: Comparing", question: "Ali says 0.5 is the same as 5%. Explain why Ali is wrong.", type: "explain", marks: 1,
      answer: "0.5 is 5 tenths, which is 50 hundredths, so 0.5 = 50%. 5% is 0.05." }
  ]
});


QUESTION_BANK.add({
  topic: "Estimation",
  title: "Estimation",
  type: "number",
  questionsPerSet: 10,
  tip: "To estimate, round each number first (usually to 1 significant figure: the first digit, followed by zeros), then do the easier calculation. Type your estimate and press <b>Check</b>.",
  questions: [
    { section: "Section A: Rounding to estimate", question: "Estimate 48 × 21 by rounding each number to 1 significant figure.", marks: 1, answer: "1000" },
    { section: "Section A: Rounding to estimate", question: "Estimate 312 + 589 by rounding each number to the nearest hundred.", marks: 1, answer: "900" },
    { section: "Section A: Rounding to estimate", question: "Estimate 6.8 × 4.2 by rounding each number to the nearest whole number.", marks: 1, answer: "28" },
    { section: "Section A: Rounding to estimate", question: "Estimate 798 ÷ 41 by rounding each number to 1 significant figure.", marks: 1, answer: "20" },
    { section: "Section A: Rounding to estimate", question: "Estimate 19.7 × 3.1 by rounding each number to 1 significant figure.", marks: 1, answer: "60" },
    { section: "Section A: Rounding to estimate", question: "Estimate (61 × 9.8) ÷ 2.1 by rounding each number to 1 significant figure.", marks: 2, answer: "300" },
    { section: "Section A: Rounding to estimate", question: "Which is the best estimate for 49 × 52?", type: "choice", marks: 1,
      options: ["2000", "2500", "3000", "250"], answer: "2500" },

    { section: "Section B: Problem solving", question: "A concert ticket costs £9.95. Estimate the cost of 31 tickets.", marks: 2, answer: "£300" },
    { section: "Section B: Problem solving", question: "A car travels 58 miles every day for 19 days. Estimate the total distance it travels.", marks: 2, answer: "1200 miles" },
    { section: "Section B: Problem solving", question: "Using 5 × 6 = 30 to estimate 4.9 × 6.1: is 30 an overestimate or an underestimate?", type: "choice", marks: 1,
      options: ["Overestimate", "Underestimate"], answer: "Overestimate" },
    { section: "Section B: Problem solving", question: "Kai estimates 52 × 38 as 50 × 30 = 1500. Explain what Kai should have done.", type: "explain", marks: 1,
      answer: "38 rounds to 40, not 30, because the units digit is 8 (5 or more rounds up). The estimate should be 50 × 40 = 2000." }
  ]
});


QUESTION_BANK.add({
  topic: "Function machines",
  title: "Function Machines",
  type: "number",
  questionsPerSet: 10,
  tip: "Follow the machine from left to right. To find the input, work backwards from the output and do the inverse of each step (× becomes ÷, + becomes −). Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Finding the output", question: "What is the output?", marks: 1, answer: "14", machine: { input: "4", steps: ["× 3", "+ 2"], output: "?" } },
    { section: "Section A: Finding the output", question: "What is the output?", marks: 1, answer: "30", machine: { input: "10", steps: ["− 4", "× 5"], output: "?" } },
    { section: "Section A: Finding the output", question: "What is the output?", marks: 1, answer: "13", machine: { input: "7", steps: ["× 2", "− 1"], output: "?" } },
    { section: "Section A: Finding the output", question: "What is the output?", marks: 1, answer: "11", machine: { input: "20", steps: ["÷ 4", "+ 6"], output: "?" } },

    { section: "Section B: Finding the input", question: "What is the input?", marks: 2, answer: "7", machine: { input: "?", steps: ["× 3", "+ 5"], output: "26" } },
    { section: "Section B: Finding the input", question: "What is the input?", marks: 2, answer: "5", machine: { input: "?", steps: ["+ 4", "× 2"], output: "18" } },
    { section: "Section B: Finding the input", question: "What is the input?", marks: 2, answer: "20", machine: { input: "?", steps: ["÷ 2", "− 3"], output: "7" } },

    { section: "Section C: Algebra and reasoning", question: "Write an expression for the output. Write it without brackets.", type: "algebra", marks: 1, answer: "4x + 1",
      machine: { input: "x", steps: ["× 4", "+ 1"], output: "?" } },
    { section: "Section C: Algebra and reasoning", question: "Write an expression for the output. Write it without brackets.", type: "algebra", marks: 2, answer: "2n + 6",
      machine: { input: "n", steps: ["+ 3", "× 2"], output: "?" } },
    { section: "Section C: Algebra and reasoning", question: "Which function machine turns 5 into 17?", type: "choice", marks: 1,
      options: ["× 3 then + 2", "+ 3 then × 2", "× 4 then − 2", "× 2 then + 5"], answer: "× 3 then + 2" },
    { section: "Section C: Algebra and reasoning", question: "Ella puts 6 into this machine and gets 18. Explain her mistake.", type: "explain", marks: 1,
      machine: { input: "6", steps: ["× 2", "+ 3"], output: "?" },
      answer: "Ella added 3 first: (6 + 3) × 2 = 18. The machine multiplies by 2 first: 6 × 2 = 12, then 12 + 3 = 15." }
  ]
});


QUESTION_BANK.add({
  topic: "Perimeter and area",
  title: "Perimeter and Area",
  type: "number",
  questionsPerSet: 10,
  tip: "Perimeter is the distance all the way around (add every side). Area is the space inside (for a rectangle, length × width), measured in square units such as cm². Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Rectangles and squares", question: "Work out the perimeter of the rectangle.", marks: 1, answer: "26 cm",
      outline: { points: [[0, 0], [8, 0], [8, 5], [0, 5]], unit: "cm" } },
    { section: "Section A: Rectangles and squares", question: "Work out the area of the rectangle, in cm².", marks: 1, answer: "40 cm²",
      outline: { points: [[0, 0], [8, 0], [8, 5], [0, 5]], unit: "cm" } },
    { section: "Section A: Rectangles and squares", question: "Work out the perimeter of the square.", marks: 1, answer: "24 m",
      outline: { points: [[0, 0], [6, 0], [6, 6], [0, 6]], unit: "m" } },
    { section: "Section A: Rectangles and squares", question: "A rectangle is 7 cm long and 4 cm wide. Work out its area, in cm².", marks: 1, answer: "28 cm²" },
    { section: "Section A: Rectangles and squares", text: "The perimeter of this rectangle is 30 cm.", question: "Work out the missing length.", marks: 2, answer: "6 cm",
      outline: { points: [[0, 0], [9, 0], [9, 6], [0, 6]], unit: "cm", hide: [1, 3] } },

    { section: "Section B: Compound shapes", question: "Work out the perimeter of this shape.", marks: 2, answer: "28 cm",
      outline: { points: [[0, 0], [8, 0], [8, 3], [5, 3], [5, 6], [0, 6]], unit: "cm" } },
    { section: "Section B: Compound shapes", question: "Work out the area of this shape, in cm².", marks: 2, answer: "39 cm²",
      outline: { points: [[0, 0], [8, 0], [8, 3], [5, 3], [5, 6], [0, 6]], unit: "cm" } },
    { section: "Section B: Compound shapes", text: "The shape is drawn on centimetre squared paper.", question: "Work out the area of the shape, in cm².", marks: 1, answer: "20",
      outline: { points: [[0, 0], [4, 0], [4, 2], [6, 2], [6, 4], [0, 4]], grid: true, labels: false } },
    { section: "Section B: Compound shapes", text: "The shape is drawn on centimetre squared paper.", question: "Work out the perimeter of the shape, in cm.", marks: 1, answer: "20",
      outline: { points: [[0, 0], [4, 0], [4, 2], [6, 2], [6, 4], [0, 4]], grid: true, labels: false } },

    { section: "Section C: Units and reasoning", question: "Which of these is a unit of area?", type: "choice", marks: 1,
      options: ["cm", "cm²", "cm³", "km"], answer: "cm²" },
    { section: "Section C: Units and reasoning", question: "Lily says a rectangle 3 cm by 4 cm has an area of 14 cm². Explain Lily's mistake.", type: "explain", marks: 1,
      answer: "Lily has found the perimeter (3 + 4 + 3 + 4 = 14 cm). The area is length × width: 3 × 4 = 12 cm²." }
  ]
});


QUESTION_BANK.add({
  topic: "Probability: scales",
  title: "Probability Scales",
  type: "choice",
  questionsPerSet: 10,
  tip: "Probabilities go from 0 (impossible) to 1 (certain); an even chance is 0.5. Tap a word, type a fraction, or click the probability scale, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Probability words", question: "How likely is it that the sun will rise tomorrow?", marks: 1,
      options: ["impossible", "unlikely", "even chance", "likely", "certain"], answer: "certain" },
    { section: "Section A: Probability words", question: "How likely is it to roll a 7 on an ordinary six-sided dice?", marks: 1,
      options: ["impossible", "unlikely", "even chance", "likely", "certain"], answer: "impossible" },
    { section: "Section A: Probability words", question: "How likely is it to get heads when a fair coin is flipped?", marks: 1,
      options: ["impossible", "unlikely", "even chance", "likely", "certain"], answer: "even chance" },
    { section: "Section A: Probability words", text: "A bag holds these counters.", question: "How likely is it to pick a red counter?", marks: 1,
      counters: { red: 9, blue: 1 }, options: ["impossible", "unlikely", "even chance", "likely", "certain"], answer: "likely" },
    { section: "Section A: Probability words", question: "How likely is it to snow in London in July?", marks: 1,
      options: ["impossible", "unlikely", "even chance", "likely", "certain"], answer: "unlikely" },

    { section: "Section B: The probability scale", question: "Click on the probability scale to show the probability of getting heads with a fair coin.", type: "mark", marks: 1, answer: "0.5",
      scale: { style: "line", min: 0, max: 1, major: 0.5, minor: 0.1, words: [[0, "Impossible"], [0.5, "Even chance"], [1, "Certain"]] } },
    { section: "Section B: The probability scale", question: "Click on the probability scale to show the probability of rolling a number less than 7 on an ordinary dice.", type: "mark", marks: 1, answer: "1",
      scale: { style: "line", min: 0, max: 1, major: 0.5, minor: 0.1, words: [[0, "Impossible"], [0.5, "Even chance"], [1, "Certain"]] } },
    { section: "Section B: The probability scale", text: "A bag holds 10 counters: 3 red and 7 blue.", question: "Click on the scale to show the probability of picking a red counter.", type: "mark", marks: 1, answer: "0.3",
      counters: { red: 3, blue: 7 },
      scale: { style: "line", min: 0, max: 1, major: 0.5, minor: 0.1, words: [[0, "Impossible"], [0.5, "Even chance"], [1, "Certain"]] } },

    { section: "Section C: Probabilities as numbers", text: "The spinner has 5 equal sections.", question: "What is the probability of landing on blue? Give your answer as a fraction.", type: "fraction", marks: 1, answer: "2/5",
      spinner: ["blue", "red", "blue", "yellow", "red"] },
    { section: "Section C: Probabilities as numbers", text: "A bag holds these counters.", question: "A counter is picked at random. What is the probability it is green? Give your answer as a fraction.", type: "fraction", marks: 1, answer: "6/10",
      counters: { red: 4, green: 6 } },
    { section: "Section C: Probabilities as numbers", question: "An ordinary dice is rolled. What is the probability of rolling a 3? Give your answer as a fraction.", type: "fraction", marks: 1, answer: "1/6" },
    { section: "Section C: Probabilities as numbers", question: "The probability that it rains tomorrow is 0.3. What is the probability that it does NOT rain?", type: "number", marks: 1, answer: "0.7" },
    { section: "Section C: Probabilities as numbers", question: "Zak says: \"There are two outcomes, win or lose, so the probability of winning is 1/2.\" Explain why Zak might be wrong.", type: "explain", marks: 1,
      answer: "Having two outcomes doesn't make them equally likely. The probability is only 1/2 if winning and losing are equally likely, which they often aren't." }
  ]
});


QUESTION_BANK.add({
  topic: "Frequency polygons",
  title: "Frequency Polygons",
  type: "number",
  questionsPerSet: 10,
  tip: "A frequency polygon plots each frequency at the midpoint of its class, then joins the points with straight lines. To plot, click the grid to place each point. Then press <b>Check</b>.",
  questions: [
    { section: "Section A: Midpoints", text: "The table shows the heights of some plants.", question: "What is the midpoint of the class 20 < h ≤ 30?", marks: 1, answer: "25",
      table: { headings: ["Height, h (cm)", "Frequency"], rows: [["0 < h ≤ 10", "4"], ["10 < h ≤ 20", "9"], ["20 < h ≤ 30", "12"], ["30 < h ≤ 40", "7"], ["40 < h ≤ 50", "3"]] } },
    { section: "Section A: Midpoints", question: "What is the midpoint of the class 40 < t ≤ 60?", marks: 1, answer: "50" },
    { section: "Section A: Midpoints", question: "A frequency polygon plots each frequency against the...", type: "choice", marks: 1,
      options: ["midpoint of the class", "upper bound of the class", "lower bound of the class", "class width"], answer: "midpoint of the class" },

    { section: "Section B: Drawing a frequency polygon", text: "The table shows the heights of some plants.",
      table: { headings: ["Height, h (cm)", "Frequency"], rows: [["0 < h ≤ 10", "4"], ["10 < h ≤ 20", "9"], ["20 < h ≤ 30", "12"], ["30 < h ≤ 40", "7"], ["40 < h ≤ 50", "3"]] },
      question: "Plot the five points of the frequency polygon for this data.", type: "plot", marks: 3, answer: "(5, 4); (15, 9); (25, 12); (35, 7); (45, 3)",
      graph: { x: [0, 50], xstep: 5, y: [0, 14], ystep: 1, xlabel: "Height (cm)", ylabel: "Frequency" } },

    { section: "Section C: Reading a frequency polygon", text: "The frequency polygon shows the heights of some plants.", question: "What is the frequency for the class with midpoint 35?", marks: 1, answer: "7",
      graph: { x: [0, 50], xstep: 5, y: [0, 14], ystep: 1, xlabel: "Height (cm)", ylabel: "Frequency",
        lines: [[[5, 4], [15, 9], [25, 12], [35, 7], [45, 3]]], dots: [[5, 4], [15, 9], [25, 12], [35, 7], [45, 3]] } },
    { section: "Section C: Reading a frequency polygon", text: "The frequency polygon shows the heights of some plants.", question: "Which class has the highest frequency?", type: "choice", marks: 1,
      options: ["0 < h ≤ 10", "10 < h ≤ 20", "20 < h ≤ 30", "30 < h ≤ 40", "40 < h ≤ 50"], answer: "20 < h ≤ 30",
      graph: { x: [0, 50], xstep: 5, y: [0, 14], ystep: 1, xlabel: "Height (cm)", ylabel: "Frequency",
        lines: [[[5, 4], [15, 9], [25, 12], [35, 7], [45, 3]]], dots: [[5, 4], [15, 9], [25, 12], [35, 7], [45, 3]] } },
    { section: "Section C: Reading a frequency polygon", text: "The frequency polygon shows the heights of some plants.", question: "How many plants were measured altogether?", marks: 2, answer: "35",
      graph: { x: [0, 50], xstep: 5, y: [0, 14], ystep: 1, xlabel: "Height (cm)", ylabel: "Frequency",
        lines: [[[5, 4], [15, 9], [25, 12], [35, 7], [45, 3]]], dots: [[5, 4], [15, 9], [25, 12], [35, 7], [45, 3]] } },
    { section: "Section C: Reading a frequency polygon", question: "Why are the points of a frequency polygon plotted at the midpoints of the classes?", type: "explain", marks: 1,
      answer: "We don't know the exact values inside each class, so the midpoint is used as a typical value to represent the whole class." }
  ]
});


QUESTION_BANK.add({
  topic: "Averages from lists (mean and median)",
  title: "Averages: Mean and Median",
  type: "number",
  questionsPerSet: 10,
  tip: "Mean: add them up and divide by how many there are. Median: put them in order and take the middle one (or halfway between the middle two). Mode: the most common. Range: biggest minus smallest.",
  questions: [
    { section: "Section A: Finding averages", question: "Find the median of 3, 7, 2, 9, 5", marks: 1, answer: "5" },
    { section: "Section A: Finding averages", question: "Find the median of 12, 4, 8, 10", marks: 2, answer: "9" },
    { section: "Section A: Finding averages", question: "Find the mean of 4, 6, 8, 10, 12", marks: 1, answer: "8" },
    { section: "Section A: Finding averages", question: "Find the mean of 3, 5, 5, 7, 10", marks: 2, answer: "6" },
    { section: "Section A: Finding averages", question: "Find the mode of 2, 3, 3, 5, 7, 3, 9", marks: 1, answer: "3" },
    { section: "Section A: Finding averages", question: "Find the range of 15, 8, 21, 11", marks: 1, answer: "13" },
    { section: "Section A: Finding averages", text: "Find the median of 9, 2, 7, 4, 6.", parts: [
      { question: "Put the numbers in order, smallest first.", type: "order", marks: 1, items: ["9", "2", "7", "4", "6"], answer: "2, 4, 6, 7, 9" },
      { question: "What is the median?", marks: 1, answer: "6" }
    ] },

    { section: "Section B: Using a table", text: "The table shows four pupils' test scores.", question: "Work out the mean score.", marks: 2, answer: "7",
      table: { headings: ["Pupil", "Score"], rows: [["Amy", "7"], ["Ben", "9"], ["Cal", "4"], ["Dev", "8"]] } },
    { section: "Section B: Using a table", text: "The table shows four pupils' test scores.", question: "Work out the median score.", marks: 2, answer: "7.5",
      table: { headings: ["Pupil", "Score"], rows: [["Amy", "7"], ["Ben", "9"], ["Cal", "4"], ["Dev", "8"]] } },

    { section: "Section C: Problem solving", question: "The mean of four numbers is 6. Three of the numbers are 5, 7 and 4. What is the fourth number?", marks: 2, answer: "8" },
    { section: "Section C: Problem solving", question: "Which average best represents 2, 3, 3, 4, 100?", type: "choice", marks: 1,
      options: ["mean", "median"], answer: "median" },
    { section: "Section C: Problem solving", question: "Rosa says the median of 5, 1, 9 is 1 because it is in the middle. Explain Rosa's mistake.", type: "explain", marks: 1,
      answer: "The numbers must be put in order first: 1, 5, 9. The middle number is then 5, so the median is 5." }
  ]
});


QUESTION_BANK.add({
  topic: "Bar charts",
  title: "Bar Charts",
  type: "number",
  questionsPerSet: 10,
  tip: "Check what each line on the scale is worth before reading a bar. To draw a bar, click on the chart at the right height (it snaps to whole numbers), then press <b>Check</b>.",
  questions: [
    { section: "Section A: Reading a bar chart", text: "The bar chart shows pupils' favourite sports.", question: "How many pupils chose swimming?", marks: 1, answer: "8",
      bars: { labels: ["Football", "Tennis", "Swimming", "Netball"], values: [12, 5, 8, 9], ystep: 2, ymax: 14, ylabel: "Number of pupils" } },
    { section: "Section A: Reading a bar chart", text: "The bar chart shows pupils' favourite sports.", question: "How many more pupils chose football than tennis?", marks: 1, answer: "7",
      bars: { labels: ["Football", "Tennis", "Swimming", "Netball"], values: [12, 5, 8, 9], ystep: 2, ymax: 14, ylabel: "Number of pupils" } },
    { section: "Section A: Reading a bar chart", text: "The bar chart shows pupils' favourite sports.", question: "How many pupils are shown altogether?", marks: 2, answer: "34",
      bars: { labels: ["Football", "Tennis", "Swimming", "Netball"], values: [12, 5, 8, 9], ystep: 2, ymax: 14, ylabel: "Number of pupils" } },
    { section: "Section A: Reading a bar chart", text: "The bar chart shows pupils' favourite sports.", question: "Which sport was the least popular?", type: "choice", marks: 1,
      options: ["Football", "Tennis", "Swimming", "Netball"], answer: "Tennis",
      bars: { labels: ["Football", "Tennis", "Swimming", "Netball"], values: [12, 5, 8, 9], ystep: 2, ymax: 14, ylabel: "Number of pupils" } },

    { section: "Section B: Drawing bars", question: "9 pupils chose netball. Click on the chart to draw the bar for netball.", type: "drawbar", marks: 1, answer: "9",
      bars: { labels: ["Football", "Tennis", "Swimming", "Netball"], values: [12, 5, 8, null], ask: 3, ystep: 2, ymax: 14, ylabel: "Number of pupils" } },
    { section: "Section B: Drawing bars", question: "7 people chose strawberry. Click on the chart to draw the bar for strawberry.", type: "drawbar", marks: 1, answer: "7",
      bars: { labels: ["Vanilla", "Chocolate", "Strawberry", "Mint"], values: [6, 10, null, 3], ask: 2, ystep: 2, ymax: 12, ylabel: "Number of people" } },

    { section: "Section C: Reasoning", question: "Why are there gaps between the bars on a bar chart?", type: "choice", marks: 1,
      options: ["Each bar is a separate category", "To save ink", "Because the data is continuous", "To make the numbers fit"], answer: "Each bar is a separate category" },
    { section: "Section C: Reasoning", text: "The bar chart shows pupils' favourite sports.", question: "Kim reads the tennis bar as 6. Explain Kim's mistake.", type: "explain", marks: 1,
      bars: { labels: ["Football", "Tennis", "Swimming", "Netball"], values: [12, 5, 8, 9], ystep: 2, ymax: 14, ylabel: "Number of pupils" },
      answer: "The scale goes up in 2s. The tennis bar stops halfway between 4 and 6, so it shows 5, not 6." }
  ]
});


QUESTION_BANK.add({
  topic: "Stem and leaf",
  title: "Stem and Leaf Diagrams",
  type: "number",
  questionsPerSet: 10,
  tip: "Use the key to read each value: with the key 2 | 3 = 23, the stem gives the tens and each leaf gives the units. Type your answer or tap your choice, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Reading values", text: "The stem and leaf diagram shows the ages of people at a party.", question: "How many people are shown?", marks: 1, answer: "12",
      stemleaf: { rows: [[1, "2 5 8"], [2, "1 3 3 7"], [3, "0 4 6"], [4, "1 5"]], key: "2 | 3 means 23" } },
    { section: "Section A: Reading values", text: "The stem and leaf diagram shows the ages of people at a party.", question: "How old is the oldest person?", marks: 1, answer: "45",
      stemleaf: { rows: [[1, "2 5 8"], [2, "1 3 3 7"], [3, "0 4 6"], [4, "1 5"]], key: "2 | 3 means 23" } },
    { section: "Section A: Reading values", text: "The stem and leaf diagram shows the ages of people at a party.", question: "How many people are older than 30?", marks: 1, answer: "4",
      stemleaf: { rows: [[1, "2 5 8"], [2, "1 3 3 7"], [3, "0 4 6"], [4, "1 5"]], key: "2 | 3 means 23" } },
    { section: "Section A: Reading values", question: "In a stem and leaf diagram with the key 2 | 3 means 23, what does 3 | 4 mean?", type: "choice", marks: 1,
      options: ["34", "3.4", "7", "43"], answer: "34" },

    { section: "Section B: Averages and range", text: "The stem and leaf diagram shows the ages of people at a party.", question: "Work out the range of the ages.", marks: 1, answer: "33",
      stemleaf: { rows: [[1, "2 5 8"], [2, "1 3 3 7"], [3, "0 4 6"], [4, "1 5"]], key: "2 | 3 means 23" } },
    { section: "Section B: Averages and range", text: "The stem and leaf diagram shows the ages of people at a party.", question: "What is the mode?", marks: 1, answer: "23",
      stemleaf: { rows: [[1, "2 5 8"], [2, "1 3 3 7"], [3, "0 4 6"], [4, "1 5"]], key: "2 | 3 means 23" } },
    { section: "Section B: Averages and range", text: "The stem and leaf diagram shows the ages of people at a party.", question: "Work out the median age.", marks: 2, answer: "25",
      stemleaf: { rows: [[1, "2 5 8"], [2, "1 3 3 7"], [3, "0 4 6"], [4, "1 5"]], key: "2 | 3 means 23" } },

    { section: "Section C: Building a diagram", question: "The leaves for the stem 5 are 7, 2, 9 and 4. Put them in the order they should be written.", type: "order", marks: 1,
      items: ["7", "2", "9", "4"], answer: "2, 4, 7, 9" },
    { section: "Section C: Building a diagram", question: "Why should the leaves in a stem and leaf diagram be written in order?", type: "explain", marks: 1,
      answer: "Ordered leaves make it easy to read off the smallest and largest values and to count to the middle to find the median." }
  ]
});


QUESTION_BANK.add({
  topic: "Pie charts",
  title: "Pie Charts",
  type: "number",
  questionsPerSet: 10,
  tip: "The angles in a pie chart add up to 360°. Work out what 1° (or one person) is worth first: angle for one person = 360 ÷ total. Type your answer or tap your choice, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Reading a pie chart", text: "The pie chart shows how 36 pupils travel to school. Walk 120°, Bus 90°, Car 100°, Bike 50°.", question: "Which way of travelling is the most popular?", type: "choice", marks: 1,
      options: ["Walk", "Bus", "Car", "Bike"], answer: "Walk",
      pie: { sectors: [["Walk", 120], ["Bus", 90], ["Car", 100], ["Bike", 50]], showAngles: true } },
    { section: "Section A: Reading a pie chart", text: "The pie chart shows how 36 pupils travel to school.", question: "How many pupils walk to school?", marks: 2, answer: "12",
      pie: { sectors: [["Walk", 120], ["Bus", 90], ["Car", 100], ["Bike", 50]], showAngles: true } },
    { section: "Section A: Reading a pie chart", text: "The pie chart shows how 36 pupils travel to school.", question: "How many pupils come by bike?", marks: 2, answer: "5",
      pie: { sectors: [["Walk", 120], ["Bus", 90], ["Car", 100], ["Bike", 50]], showAngles: true } },
    { section: "Section A: Reading a pie chart", text: "The pie chart shows how 36 pupils travel to school.", question: "What fraction of the pupils travel by bus? Give your answer in its simplest form.", type: "fraction", simplest: true, marks: 2, answer: "1/4",
      pie: { sectors: [["Walk", 120], ["Bus", 90], ["Car", 100], ["Bike", 50]], showAngles: true } },
    { section: "Section A: Reading a pie chart", text: "The pie chart shows the favourite colours of 60 people.", question: "How many people chose blue?", marks: 2, answer: "25",
      pie: { sectors: [["Red", 90], ["Blue", 150], ["Green", 60], ["Yellow", 60]], showAngles: true } },

    { section: "Section B: Working with angles", question: "A pie chart shows 60 people. What angle represents one person?", marks: 1, answer: "6°" },
    { section: "Section B: Working with angles", question: "A pie chart shows 30 people. What angle represents one person?", marks: 1, answer: "12°" },
    { section: "Section B: Working with angles", question: "45 out of 90 people chose pizza. What angle would pizza have in a pie chart?", marks: 2, answer: "180°" },
    { section: "Section B: Working with angles", question: "The angles in a pie chart always add up to...", type: "choice", marks: 1,
      options: ["90°", "180°", "360°", "100°"], answer: "360°" },
    { section: "Section B: Working with angles", text: "The pie chart shows how 36 pupils travel to school.", question: "Ben says 90 pupils travel by bus because the bus angle is 90°. Explain Ben's mistake.", type: "explain", marks: 1,
      pie: { sectors: [["Walk", 120], ["Bus", 90], ["Car", 100], ["Bike", 50]], showAngles: true },
      answer: "The angle isn't the number of pupils. 36 pupils share 360°, so each pupil is 10°. 90° ÷ 10 = 9 pupils travel by bus." }
  ]
});


QUESTION_BANK.add({
  topic: "Systematic listing strategies",
  title: "Systematic Listing",
  type: "number",
  questionsPerSet: 10,
  tip: "List the options in an organised way, for example keep the first choice fixed while you go through every second choice. Type your answer or tap ALL the correct options, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Listing outcomes", question: "Tap all the 2-digit numbers you can make using two of the digits 1, 4 and 7 (no digit used twice).", type: "select", marks: 2,
      options: ["14", "17", "41", "47", "71", "74", "11", "44", "77"], answer: "14, 17, 41, 47, 71, 74" },
    { section: "Section A: Listing outcomes", question: "Two coins are flipped. Tap all the possible outcomes (H = heads, T = tails).", type: "select", marks: 2,
      options: ["HH", "HT", "TH", "TT", "H", "HHT"], answer: "HH, HT, TH, TT" },
    { section: "Section A: Listing outcomes", text: "The table shows the outcomes when spinner A (1, 2, 3) and spinner B (1, 2) are spun.",
      table: { headings: ["A \\ B", "1", "2"], rows: [["1", "1, 1", "1, 2"], ["2", "2, 1", "2, 2"], ["3", "3, 1", "3, 2"]] },
      question: "How many outcomes have a total of 4?", marks: 1, answer: "2" },

    { section: "Section B: Counting combinations", question: "A café sells 3 sandwiches (cheese, ham, egg) and 2 drinks (tea, juice). How many different sandwich-and-drink meals are there?", marks: 1, answer: "6" },
    { section: "Section B: Counting combinations", question: "A menu has 4 starters and 3 main courses. How many different starter-and-main combinations are there?", marks: 1, answer: "12" },
    { section: "Section B: Counting combinations", question: "In how many different orders can 3 people, A, B and C, stand in a line?", marks: 2, answer: "6" },
    { section: "Section B: Counting combinations", question: "How many different 3-digit numbers can be made using the digits 2, 5 and 8 once each?", marks: 2, answer: "6" },
    { section: "Section B: Counting combinations", question: "Using the digits 2, 5 and 8 once each, what is the largest 3-digit number you can make?", marks: 1, answer: "852" },
    { section: "Section B: Counting combinations", question: "Using the digits 2, 5 and 8 once each, what is the smallest 3-digit number you can make?", marks: 1, answer: "258" },

    { section: "Section C: Reasoning", question: "Which method best makes sure you don't miss any combinations?", type: "choice", marks: 1,
      options: ["List them in an organised order", "Guess", "Pick some at random", "Only write the first few"], answer: "List them in an organised order" },
    { section: "Section C: Reasoning", question: "Ravi has a red shirt and a blue shirt, and jeans and shorts. He lists: red-jeans, blue-jeans, red-shorts. Explain what is wrong with his list.", type: "explain", marks: 1,
      answer: "He has missed blue-shorts. Listing systematically (red-jeans, red-shorts, blue-jeans, blue-shorts) shows there are 2 × 2 = 4 outfits." }
  ]
});


QUESTION_BANK.add({
  topic: "Error intervals",
  title: "Error Intervals",
  type: "interval",
  questionsPerSet: 10,
  tip: "An error interval looks like 6.5 ≤ x < 7.5. The lower bound is included (≤) but the upper bound isn't (<), because it would round up. Use the ≤ button or type <=, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Rounding", question: "A length, l, is 7 cm to the nearest cm. Write down the error interval for l.", marks: 2, answer: "6.5 ≤ l < 7.5" },
    { section: "Section A: Rounding", question: "x = 40 to the nearest 10. Write down the error interval for x.", marks: 2, answer: "35 ≤ x < 45" },
    { section: "Section A: Rounding", question: "m = 3.4 correct to 1 decimal place. Write down the error interval for m.", marks: 2, answer: "3.35 ≤ m < 3.45" },
    { section: "Section A: Rounding", question: "A mass, w, is 250 g to the nearest 10 g. Write down the error interval for w.", marks: 2, answer: "245 ≤ w < 255" },
    { section: "Section A: Rounding", question: "t = 8.2 correct to 1 decimal place. Write down the error interval for t.", marks: 2, answer: "8.15 ≤ t < 8.25" },
    { section: "Section A: Rounding", question: "n = 600 to the nearest 100. Write down the error interval for n.", marks: 2, answer: "550 ≤ n < 650" },

    { section: "Section B: Truncation and bounds", question: "y = 5.7 when it is truncated to 1 decimal place. Write down the error interval for y.", marks: 2, answer: "5.7 ≤ y < 5.8" },
    { section: "Section B: Truncation and bounds", question: "A number is 60 when rounded to the nearest 10. What is its lower bound?", type: "number", marks: 1, answer: "55" },
    { section: "Section B: Truncation and bounds", question: "A number is 4.3 when rounded to 1 decimal place. What is its upper bound?", type: "number", marks: 1, answer: "4.35" },
    { section: "Section B: Truncation and bounds", question: "Which value is in the error interval 6.5 ≤ x < 7.5?", type: "choice", marks: 1,
      options: ["6.4", "6.5", "7.5", "7.6"], answer: "6.5" },
    { section: "Section B: Truncation and bounds", question: "In 6.5 ≤ x < 7.5, why is 7.5 written with < and not ≤?", type: "explain", marks: 1,
      answer: "7.5 rounds up to 8, not 7, so it can't be one of the values. The values can get as close to 7.5 as you like without reaching it." }
  ]
});


QUESTION_BANK.add({
  topic: "Fractions: arithmetic",
  title: "Fractions: Arithmetic",
  type: "fraction",
  questionsPerSet: 10,
  tip: "To add or subtract, use a common denominator. To multiply, multiply the tops and the bottoms. To divide, flip the second fraction and multiply. Type fractions like 3/4 and mixed numbers like 1 1/2, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Adding and subtracting", question: "Work out 1/4 + 2/4", marks: 1, answer: "3/4" },
    { section: "Section A: Adding and subtracting", question: "Work out 2/5 + 1/3", marks: 2, answer: "11/15" },
    { section: "Section A: Adding and subtracting", question: "Work out 3/4 − 1/6", marks: 2, answer: "7/12" },
    { section: "Section A: Adding and subtracting", question: "Work out 5/6 − 1/2. Give your answer in its simplest form.", simplest: true, marks: 2, answer: "1/3" },
    { section: "Section A: Adding and subtracting", question: "Work out 1 1/2 + 2 1/4. Give your answer as a mixed number.", marks: 2, answer: "3 3/4" },
    { section: "Section A: Adding and subtracting", question: "Work out 2 1/3 − 1 1/2", marks: 2, answer: "5/6" },

    { section: "Section B: Multiplying and dividing", question: "Work out 2/3 × 3/5. Give your answer in its simplest form.", simplest: true, marks: 2, answer: "2/5" },
    { section: "Section B: Multiplying and dividing", question: "Work out 3/4 × 8", marks: 1, answer: "6" },
    { section: "Section B: Multiplying and dividing", question: "Work out 1/2 ÷ 1/4", marks: 1, answer: "2" },
    { section: "Section B: Multiplying and dividing", question: "Work out 2/3 ÷ 4/9. Give your answer as a mixed number.", marks: 2, answer: "1 1/2" },
    { section: "Section B: Multiplying and dividing", question: "Which calculation has the answer 1/2?", type: "choice", marks: 1,
      options: ["1/4 + 1/3", "1/3 + 1/6", "1/2 × 1/2", "3/4 − 1/2"], answer: "1/3 + 1/6" },
    { section: "Section B: Multiplying and dividing", question: "Sam says 1/3 + 1/4 = 2/7. Explain Sam's mistake and give the correct answer.", type: "explain", marks: 2,
      answer: "Sam added the tops and the bottoms. You need a common denominator: 1/3 = 4/12 and 1/4 = 3/12, so 1/3 + 1/4 = 7/12." }
  ]
});


QUESTION_BANK.add({
  topic: "Ratio: as a fraction and simplifying",
  title: "Ratio: Simplifying and Fractions",
  type: "ratio",
  questionsPerSet: 10,
  tip: "Simplify a ratio by dividing every part by the same number until they can't be divided any more. Put both parts in the same units first. Type ratios like 3:4, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Simplifying ratios", question: "Simplify 6 : 9", simplest: true, marks: 1, answer: "2:3" },
    { section: "Section A: Simplifying ratios", question: "Simplify 12 : 16", simplest: true, marks: 1, answer: "3:4" },
    { section: "Section A: Simplifying ratios", question: "Simplify 15 : 25 : 40", simplest: true, marks: 2, answer: "3:5:8" },
    { section: "Section A: Simplifying ratios", question: "Simplify 0.5 : 2", simplest: true, marks: 1, answer: "1:4" },
    { section: "Section A: Simplifying ratios", question: "Write 40 cm : 2 m in its simplest form.", simplest: true, marks: 2, answer: "1:5" },
    { section: "Section A: Simplifying ratios", text: "A bag holds these counters.", question: "Write the ratio of red counters to blue counters in its simplest form.", simplest: true, marks: 1, answer: "2:3",
      counters: { red: 4, blue: 6 } },
    { section: "Section A: Simplifying ratios", question: "Which ratio is equivalent to 4 : 6?", type: "choice", marks: 1,
      options: ["2 : 3", "3 : 2", "8 : 10", "1 : 2"], answer: "2 : 3" },
    { section: "Section A: Simplifying ratios", question: "Write 2 : 5 in the form 1 : n. What is n?", type: "number", marks: 1, answer: "2.5" },

    { section: "Section B: Ratios and fractions", question: "The ratio of red beads to blue beads is 3 : 5. What fraction of the beads are red?", type: "fraction", marks: 1, answer: "3/8" },
    { section: "Section B: Ratios and fractions", question: "The ratio of boys to girls in a club is 2 : 7. What fraction of the club are girls?", type: "fraction", marks: 1, answer: "7/9" },
    { section: "Section B: Ratios and fractions", question: "The ratio of red to blue paint is 3 : 4. Tia says 3/4 of the paint is red. Explain why Tia is wrong.", type: "explain", marks: 1,
      answer: "There are 3 + 4 = 7 parts altogether, and 3 of them are red. So 3/7 of the paint is red, not 3/4." }
  ]
});


QUESTION_BANK.add({
  topic: "Proportion: recipes and ingredients",
  title: "Proportion: Recipes",
  type: "number",
  questionsPerSet: 10,
  tip: "Find the amount for one first (divide), then multiply up. For a recipe, work out how many times bigger or smaller the new number of people is. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Recipes", text: "Here is a recipe for pancakes for 4 people.", question: "How much flour is needed for 8 people?", marks: 1, answer: "400 g",
      table: { headings: ["Ingredient", "For 4 people"], rows: [["Flour", "200 g"], ["Eggs", "2"], ["Milk", "300 ml"], ["Sugar", "50 g"]] } },
    { section: "Section A: Recipes", text: "Here is a recipe for pancakes for 4 people.", question: "How much milk is needed for 6 people?", marks: 2, answer: "450 ml",
      table: { headings: ["Ingredient", "For 4 people"], rows: [["Flour", "200 g"], ["Eggs", "2"], ["Milk", "300 ml"], ["Sugar", "50 g"]] } },
    { section: "Section A: Recipes", text: "Here is a recipe for pancakes for 4 people.", question: "How many eggs are needed for 2 people?", marks: 1, answer: "1",
      table: { headings: ["Ingredient", "For 4 people"], rows: [["Flour", "200 g"], ["Eggs", "2"], ["Milk", "300 ml"], ["Sugar", "50 g"]] } },
    { section: "Section A: Recipes", text: "Here is a recipe for pancakes for 4 people.", question: "How much sugar is needed for 10 people?", marks: 2, answer: "125 g",
      table: { headings: ["Ingredient", "For 4 people"], rows: [["Flour", "200 g"], ["Eggs", "2"], ["Milk", "300 ml"], ["Sugar", "50 g"]] } },
    { section: "Section A: Recipes", text: "Here is a recipe for pancakes for 4 people.", question: "How many people can be served using 600 g of flour?", marks: 2, answer: "12",
      table: { headings: ["Ingredient", "For 4 people"], rows: [["Flour", "200 g"], ["Eggs", "2"], ["Milk", "300 ml"], ["Sugar", "50 g"]] } },
    { section: "Section A: Recipes", text: "Here is a recipe for pancakes for 4 people.", question: "Max has 5 eggs and plenty of everything else. What is the greatest number of people he can make pancakes for?", marks: 2, answer: "10",
      table: { headings: ["Ingredient", "For 4 people"], rows: [["Flour", "200 g"], ["Eggs", "2"], ["Milk", "300 ml"], ["Sugar", "50 g"]] } },

    { section: "Section B: Direct proportion", question: "5 pens cost £3.50. How much do 8 pens cost?", marks: 2, answer: "£5.60" },
    { section: "Section B: Direct proportion", question: "3 kg of apples cost £4.20. How much do 5 kg cost?", marks: 2, answer: "£7" },
    { section: "Section B: Direct proportion", question: "A car uses 6 litres of fuel to travel 72 km. How far can it travel on 10 litres?", marks: 2, answer: "120 km" },
    { section: "Section B: Direct proportion", question: "A recipe for 6 people needs 300 g of rice. Which method finds the amount for 9 people?", type: "choice", marks: 1,
      options: ["÷ 6, then × 9", "× 6, then ÷ 9", "add 3", "× 9"], answer: "÷ 6, then × 9" },
    { section: "Section B: Direct proportion", question: "A recipe for 4 people uses 2 eggs. For 6 people, Jack uses 4 eggs because he adds 2 more people and 2 more eggs. Explain Jack's mistake.", type: "explain", marks: 1,
      answer: "Recipes scale by multiplying, not adding. 6 people is 1.5 times 4 people, so he needs 2 × 1.5 = 3 eggs." }
  ]
});


QUESTION_BANK.add({
  topic: "Ratio: sharing",
  title: "Ratio: Sharing",
  type: "number",
  questionsPerSet: 10,
  tip: "Add the parts of the ratio to find the total number of parts, divide the amount by this to find one part, then multiply for each share. The bar model shows each part as a box. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Sharing an amount", text: "£40 is shared between Amy and Ben in the ratio 3 : 5.", ratioBar: { parts: [3, 5], labels: ["Amy", "Ben"] }, parts: [
      { question: "How much does Amy get?", marks: 1, answer: "£15" },
      { question: "How much does Ben get?", marks: 1, answer: "£25" }
    ] },
    { section: "Section A: Sharing an amount", question: "Share 90 in the ratio 4 : 5. What is the smaller share?", marks: 2, answer: "40" },
    { section: "Section A: Sharing an amount", question: "60 sweets are shared in the ratio 1 : 2 : 3. How many sweets are in the largest share?", marks: 2, answer: "30",
      ratioBar: { parts: [1, 2, 3], labels: ["Ali", "Bea", "Cal"] } },
    { section: "Section A: Sharing an amount", question: "The ratio of boys to girls in a class is 4 : 5. There are 36 pupils. How many are girls?", marks: 2, answer: "20" },

    { section: "Section B: Working from one share", text: "Amy and Ben share some money in the ratio 2 : 3. Amy gets £12.", question: "How much does Ben get?", marks: 2, answer: "£18",
      ratioBar: { parts: [2, 3], labels: ["Amy", "Ben"], each: "?" } },
    { section: "Section B: Working from one share", question: "Money is shared in the ratio 2 : 7. The difference between the two shares is £35. How much money was shared?", marks: 3, answer: "£63" },
    { section: "Section B: Working from one share", question: "Paint is mixed using white and blue in the ratio 3 : 1. There are 2 litres of blue. How much white is needed?", marks: 2, answer: "6 litres" },
    { section: "Section B: Working from one share", question: "In a ratio 2 : 3, what fraction of the total is the first share?", type: "choice", marks: 1,
      options: ["2/3", "2/5", "3/5", "1/2"], answer: "2/5" },
    { section: "Section B: Working from one share", question: "Kai shares £24 in the ratio 1 : 3. He divides £24 by 3 and gives out £8 and £16. Explain Kai's mistake.", type: "explain", marks: 1,
      answer: "There are 1 + 3 = 4 parts, so one part is £24 ÷ 4 = £6. The shares are £6 and £18." }
  ]
});


QUESTION_BANK.add({
  topic: "Percentages: percentages of amounts",
  title: "Percentages of Amounts",
  type: "number",
  questionsPerSet: 10,
  tip: "Build percentages from easy ones: 10% is ÷ 10, 5% is half of 10%, 1% is ÷ 100. Or use a multiplier, e.g. 35% of 200 = 0.35 × 200. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Working out percentages", question: "Work out 10% of 70", marks: 1, answer: "7" },
    { section: "Section A: Working out percentages", question: "Work out 25% of 80", marks: 1, answer: "20" },
    { section: "Section A: Working out percentages", question: "Work out 5% of 60", marks: 1, answer: "3" },
    { section: "Section A: Working out percentages", question: "Work out 35% of 200", marks: 1, answer: "70" },
    { section: "Section A: Working out percentages", question: "Work out 12% of 50", marks: 1, answer: "6" },
    { section: "Section A: Working out percentages", question: "Work out 17.5% of 400", marks: 2, answer: "70" },
    { section: "Section A: Working out percentages", question: "Work out 150% of 30", marks: 1, answer: "45" },
    { section: "Section A: Working out percentages", question: "Work out 1% of 3500", marks: 1, answer: "35" },

    { section: "Section B: Problem solving", question: "A coat costs £60. In a sale, 20% is taken off. How much money is saved?", marks: 2, answer: "£12" },
    { section: "Section B: Problem solving", question: "36% of a class of 25 pupils have a pet. How many pupils have a pet?", marks: 2, answer: "9" },
    { section: "Section B: Problem solving", question: "Which is bigger?", type: "choice", marks: 1,
      options: ["30% of 50", "20% of 70", "They are equal"], answer: "30% of 50" },
    { section: "Section B: Problem solving", question: "Kim says 5% of 80 is 16. Explain Kim's mistake.", type: "explain", marks: 1,
      answer: "16 is 20% of 80. 10% of 80 is 8, so 5% is half of that: 4." }
  ]
});


QUESTION_BANK.add({
  topic: "Percentages: increase/decrease",
  title: "Percentage Increase and Decrease",
  type: "number",
  questionsPerSet: 10,
  tip: "Either find the percentage and add or subtract it, or use a multiplier: increase by 12% is × 1.12, decrease by 30% is × 0.7. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Increase and decrease", question: "Increase 50 by 10%.", marks: 1, answer: "55" },
    { section: "Section A: Increase and decrease", question: "Increase £80 by 25%.", marks: 2, answer: "£100" },
    { section: "Section A: Increase and decrease", question: "Decrease 120 by 15%.", marks: 2, answer: "102" },
    { section: "Section A: Increase and decrease", question: "Decrease £45 by 20%.", marks: 2, answer: "£36" },
    { section: "Section A: Increase and decrease", question: "Increase 240 by 5%.", marks: 2, answer: "252" },
    { section: "Section A: Increase and decrease", question: "Which multiplier increases an amount by 12%?", type: "choice", marks: 1,
      options: ["0.12", "1.12", "0.88", "1.2"], answer: "1.12" },
    { section: "Section A: Increase and decrease", question: "Which multiplier decreases an amount by 30%?", type: "choice", marks: 1,
      options: ["0.3", "1.3", "0.7", "0.03"], answer: "0.7" },

    { section: "Section B: Problem solving", question: "A TV costs £350. Its price is reduced by 30%. What is the new price?", marks: 2, answer: "£245" },
    { section: "Section B: Problem solving", question: "A salary of £24 000 rises by 3%. What is the new salary?", marks: 2, answer: "£24720" },
    { section: "Section B: Problem solving", question: "A town's population of 8000 increases by 15%. What is the new population?", marks: 2, answer: "9200" },
    { section: "Section B: Problem solving", question: "A price of £100 is increased by 10%, then the new price is decreased by 10%. Leo says it goes back to £100. Explain why Leo is wrong.", type: "explain", marks: 2,
      answer: "After the increase the price is £110. 10% of £110 is £11, so the decrease takes it to £99, not £100. The second 10% is of a bigger amount." }
  ]
});


QUESTION_BANK.add({
  topic: "Percentage change",
  title: "Percentage Change",
  type: "number",
  questionsPerSet: 10,
  tip: "Percentage change = change ÷ original × 100. Always divide by the ORIGINAL amount. Type your answer (the % sign is optional) and press <b>Check</b>.",
  questions: [
    { section: "Section A: Finding percentage change", question: "A price rises from £40 to £50. What is the percentage increase?", marks: 2, answer: "25%" },
    { section: "Section A: Finding percentage change", question: "A number falls from 80 to 60. What is the percentage decrease?", marks: 2, answer: "25%" },
    { section: "Section A: Finding percentage change", question: "A number rises from 250 to 300. What is the percentage increase?", marks: 2, answer: "20%" },
    { section: "Section A: Finding percentage change", question: "A price falls from £1200 to £1020. What is the percentage decrease?", marks: 2, answer: "15%" },
    { section: "Section A: Finding percentage change", question: "A ticket price falls from £8 to £7. What is the percentage decrease?", marks: 2, answer: "12.5%" },
    { section: "Section A: Finding percentage change", question: "A plant grows from 12 cm to 15 cm. What is the percentage increase?", marks: 2, answer: "25%" },

    { section: "Section B: Percentages in context", question: "Sam buys a bike for £20 and sells it for £26. What is his percentage profit?", marks: 2, answer: "30%" },
    { section: "Section B: Percentages in context", question: "Mia scores 36 out of 40 in a test. What is this as a percentage?", marks: 1, answer: "90%" },
    { section: "Section B: Percentages in context", question: "Which formula gives the percentage change?", type: "choice", marks: 1,
      options: ["change ÷ original × 100", "change ÷ new × 100", "new ÷ original × 100", "original ÷ change × 100"], answer: "change ÷ original × 100" },
    { section: "Section B: Percentages in context", question: "A price goes from £50 to £60. Tom says this is a 10% increase because it went up by £10. Explain Tom's mistake.", type: "explain", marks: 1,
      answer: "The £10 increase must be compared with the original £50: 10 ÷ 50 × 100 = 20%. So it is a 20% increase." }
  ]
});


QUESTION_BANK.add({
  topic: "Exchange rate",
  title: "Exchange Rates",
  type: "number",
  questionsPerSet: 10,
  tip: "If £1 = €1.15, multiply pounds by 1.15 to get euros, and divide euros by 1.15 to get pounds. On a conversion graph, go across to the line, then up or down to read the value. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Using a rate", question: "£1 = €1.15. Change £200 into euros.", marks: 1, answer: "230" },
    { section: "Section A: Using a rate", question: "£1 = €1.15. Change €46 into pounds.", marks: 2, answer: "£40" },
    { section: "Section A: Using a rate", question: "£1 = $1.25. Change £80 into dollars.", marks: 1, answer: "100" },
    { section: "Section A: Using a rate", question: "£1 = $1.25. Change $150 into pounds.", marks: 2, answer: "£120" },
    { section: "Section A: Using a rate", question: "£1 = 160 yen. How many yen do you get for £15?", marks: 1, answer: "2400" },
    { section: "Section A: Using a rate", question: "Which bank gives more euros for £100?", type: "choice", marks: 1,
      options: ["Bank A: £1 = €1.12", "Bank B: £1 = €1.15"], answer: "Bank B: £1 = €1.15" },

    { section: "Section B: Conversion graphs", text: "The graph converts between pounds and euros.", question: "Use the graph to change £25 into euros.", marks: 1, answer: "30",
      graph: { x: [0, 50], xstep: 5, y: [0, 60], ystep: 6, xlabel: "Pounds (£)", ylabel: "Euros (€)", lines: [[[0, 0], [50, 60]]] } },
    { section: "Section B: Conversion graphs", text: "The graph converts between pounds and euros.", question: "Use the graph to change €48 into pounds.", marks: 1, answer: "£40",
      graph: { x: [0, 50], xstep: 5, y: [0, 60], ystep: 6, xlabel: "Pounds (£)", ylabel: "Euros (€)", lines: [[[0, 0], [50, 60]]] } },
    { section: "Section B: Conversion graphs", question: "The exchange rate is £1 = €1.20. Jo changes €30 into pounds by multiplying: 30 × 1.2 = £36. Explain Jo's mistake.", type: "explain", marks: 1,
      answer: "Going from euros to pounds, you divide by the rate: 30 ÷ 1.2 = £25. You get fewer pounds than euros, so £36 can't be right." }
  ]
});


QUESTION_BANK.add({
  topic: "Conversions and units",
  title: "Conversions and Units",
  type: "number",
  questionsPerSet: 10,
  tip: "1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm, 1 kg = 1000 g, 1 litre = 1000 ml, 1 hour = 60 minutes. Type your answer (units optional) and press <b>Check</b>.",
  questions: [
    { section: "Section A: Metric units", question: "Change 3.5 km into metres.", marks: 1, answer: "3500 m" },
    { section: "Section A: Metric units", question: "Change 450 cm into metres.", marks: 1, answer: "4.5 m" },
    { section: "Section A: Metric units", question: "Change 2.4 kg into grams.", marks: 1, answer: "2400 g" },
    { section: "Section A: Metric units", question: "Change 750 ml into litres.", marks: 1, answer: "0.75 litres" },
    { section: "Section A: Metric units", question: "Change 6400 g into kilograms.", marks: 1, answer: "6.4 kg" },
    { section: "Section A: Metric units", question: "Change 1.2 litres into millilitres.", marks: 1, answer: "1200 ml" },
    { section: "Section A: Metric units", question: "Change 0.3 m into millimetres.", marks: 1, answer: "300 mm" },

    { section: "Section B: Time", question: "Change 3 hours into minutes.", marks: 1, answer: "180 minutes" },
    { section: "Section B: Time", question: "Change 2.5 hours into minutes.", marks: 1, answer: "150 minutes" },
    { section: "Section B: Time", question: "Change 90 minutes into hours.", marks: 1, answer: "1.5 hours" },

    { section: "Section C: Comparing", question: "Put these lengths in order, starting with the shortest.", type: "order", marks: 2,
      items: ["1.2 m", "95 cm", "1050 mm", "0.8 m"], answer: "0.8 m, 95 cm, 1050 mm, 1.2 m" },
    { section: "Section C: Comparing", question: "Which is the most sensible unit for the mass of a car?", type: "choice", marks: 1,
      options: ["grams", "kilograms", "millilitres", "centimetres"], answer: "kilograms" },
    { section: "Section C: Comparing", question: "Ben says 2 m is the same as 20 cm. Explain Ben's mistake.", type: "explain", marks: 1,
      answer: "There are 100 cm in 1 m, not 10. So 2 m = 2 × 100 = 200 cm." }
  ]
});


QUESTION_BANK.add({
  topic: "Scale drawings",
  title: "Scale Drawings",
  type: "number",
  questionsPerSet: 10,
  tip: "Multiply by the scale to go from the drawing to real life, and divide to go from real life to the drawing. With a scale like 1 : 50 000, change the units at the end (100 cm = 1 m, 1000 m = 1 km). Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Maps", question: "A map has a scale of 1 cm : 5 km. Two towns are 7 cm apart on the map. How far apart are they in real life?", marks: 1, answer: "35 km" },
    { section: "Section A: Maps", question: "A map has a scale of 1 cm : 5 km. Two villages are 22.5 km apart. How far apart are they on the map?", marks: 2, answer: "4.5 cm" },
    { section: "Section A: Maps", question: "A map has a scale of 1 : 50 000. Two places are 4 cm apart on the map. What is the real distance in km?", marks: 2, answer: "2 km" },
    { section: "Section A: Maps", question: "What does a scale of 1 : 25 mean?", type: "choice", marks: 1,
      options: ["1 cm on the drawing is 25 cm in real life", "25 cm on the drawing is 1 cm in real life", "The drawing is 25 times bigger", "1 m is 25 km"],
      answer: "1 cm on the drawing is 25 cm in real life" },

    { section: "Section B: Plans and models", question: "A plan is drawn to a scale of 1 : 100. A room is 6 cm long on the plan. How long is the real room, in metres?", marks: 2, answer: "6 m" },
    { section: "Section B: Plans and models", question: "A model car is made to a scale of 1 : 20. The model is 21 cm long. How long is the real car, in cm?", marks: 1, answer: "420 cm" },
    { section: "Section B: Plans and models", text: "This is a plan of a garden. The scale is 1 cm to 2 m.",
      outline: { points: [[0, 0], [4, 0], [4, 3], [0, 3]], unit: "cm" }, parts: [
      { question: "How long is the longer side of the real garden, in metres?", marks: 1, answer: "8 m" },
      { question: "Work out the real area of the garden, in m².", marks: 2, answer: "48 m²" }
    ] },
    { section: "Section B: Plans and models", question: "The scale is 1 cm to 2 m. Sara says a drawing 3 cm by 4 cm shows a real area of 12 m². Explain Sara's mistake.", type: "explain", marks: 2,
      answer: "Sara used the drawing's measurements. The real garden is 3 × 2 = 6 m by 4 × 2 = 8 m, so the real area is 6 × 8 = 48 m²." }
  ]
});


QUESTION_BANK.add({
  topic: "Best buy questions",
  title: "Best Buy",
  type: "choice",
  questionsPerSet: 10,
  tip: "Compare like with like: find the price of one item (or of 100 g, 1 litre, ...) for each option. The lowest price per unit is the best value. Tap your answer or type a price, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Which is better value?", text: "Eggs are sold in two packs.", question: "Which pack is better value?", marks: 2,
      table: { headings: ["Pack", "Eggs", "Price"], rows: [["A", "6", "£1.50"], ["B", "10", "£2.40"]] }, options: ["Pack A", "Pack B"], answer: "Pack B" },
    { section: "Section A: Which is better value?", text: "Eggs are sold in two packs.", question: "How much does one egg cost in pack B?", type: "number", marks: 1, answer: "£0.24",
      table: { headings: ["Pack", "Eggs", "Price"], rows: [["A", "6", "£1.50"], ["B", "10", "£2.40"]] } },
    { section: "Section A: Which is better value?", question: "Cereal comes in a 500 g box for £2.20 or a 750 g box for £3.15. Which is better value?", marks: 2,
      options: ["500 g box", "750 g box"], answer: "750 g box" },
    { section: "Section A: Which is better value?", question: "Juice comes in a 1 litre carton for £1.20 or a 1.5 litre carton for £1.65. Which is better value?", marks: 2,
      options: ["1 litre", "1.5 litres"], answer: "1.5 litres" },
    { section: "Section A: Which is better value?", text: "Shampoo is sold in three sizes.", question: "Which size is the best value?", marks: 3,
      table: { headings: ["Size", "Price"], rows: [["200 ml", "£2.40"], ["300 ml", "£3.30"], ["500 ml", "£5.25"]] }, options: ["200 ml", "300 ml", "500 ml"], answer: "500 ml" },

    { section: "Section B: Unit prices", question: "2.5 kg of rice costs £3.50. How much does 1 kg cost?", type: "number", marks: 1, answer: "£1.40" },
    { section: "Section B: Unit prices", question: "4 cans of drink cost £2.60. How much does 1 can cost?", type: "number", marks: 1, answer: "£0.65" },
    { section: "Section B: Unit prices", question: "Give a reason why someone might not buy the best-value pack.", type: "explain", marks: 1,
      answer: "For example: they don't need that much and some might go to waste, it might go out of date first, or they can't afford the bigger pack right now." }
  ]
});


QUESTION_BANK.add({
  topic: "Number substitution",
  title: "Substitution",
  type: "number",
  questionsPerSet: 10,
  tip: "Replace each letter with its number, then use BIDMAS. Remember 3a means 3 × a, and a² means a × a. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Expressions", question: "Find the value of 3a + 2 when a = 5.", marks: 1, answer: "17" },
    { section: "Section A: Expressions", question: "Find the value of 4x − y when x = 3 and y = 5.", marks: 1, answer: "7" },
    { section: "Section A: Expressions", question: "Find the value of a² + b when a = 4 and b = 3.", marks: 1, answer: "19" },
    { section: "Section A: Expressions", question: "Find the value of 2(p + q) when p = 3 and q = 7.", marks: 1, answer: "20" },
    { section: "Section A: Expressions", question: "Find the value of 5 − 2n when n = −3.", marks: 2, answer: "11" },
    { section: "Section A: Expressions", question: "Find the value of ab when a = −2 and b = 6.", marks: 1, answer: "−12" },
    { section: "Section A: Expressions", question: "Which expression has the value 10 when x = 2?", type: "choice", marks: 1,
      options: ["3x + 4", "x² + 2", "4x", "x + 9"], answer: "3x + 4" },

    { section: "Section B: Formulae", question: "v = u + at. Work out v when u = 5, a = 2 and t = 10.", marks: 2, answer: "25" },
    { section: "Section B: Formulae", question: "A = ½bh. Work out A when b = 8 and h = 5.", marks: 2, answer: "20" },
    { section: "Section B: Formulae", question: "P = 2l + 2w. Work out P when l = 7.5 and w = 4.", marks: 2, answer: "23" },
    { section: "Section B: Formulae", question: "F = 1.8C + 32. Work out F when C = 20.", marks: 2, answer: "68" },
    { section: "Section B: Formulae", question: "When x = 3, Ali says 2x² = 36. Explain Ali's mistake.", type: "explain", marks: 1,
      answer: "Ali worked out (2 × 3)² = 36. In 2x² only the x is squared: 3² = 9, then 2 × 9 = 18." }
  ]
});


QUESTION_BANK.add({
  topic: "Solving linear equations",
  title: "Solving Linear Equations",
  type: "number",
  questionsPerSet: 10,
  tip: "Do the same thing to both sides to get x on its own, undoing operations in reverse order. You can type just the number or x = ..., then press <b>Check</b>.",
  questions: [
    { section: "Section A: One and two steps", question: "Solve x + 7 = 12", marks: 1, answer: "5" },
    { section: "Section A: One and two steps", question: "Solve 3x = 21", marks: 1, answer: "7" },
    { section: "Section A: One and two steps", question: "Solve x/4 = 6", marks: 1, answer: "24" },
    { section: "Section A: One and two steps", question: "Solve 2x + 5 = 17", marks: 2, answer: "6" },
    { section: "Section A: One and two steps", question: "Solve 5x − 3 = 22", marks: 2, answer: "5" },
    { section: "Section A: One and two steps", question: "Solve 7 − 2x = 1", marks: 2, answer: "3" },
    { section: "Section A: One and two steps", question: "What should you do first to solve 3x + 4 = 19?", type: "choice", marks: 1,
      options: ["Subtract 4 from both sides", "Divide both sides by 3", "Add 4 to both sides", "Multiply both sides by 3"], answer: "Subtract 4 from both sides" },

    { section: "Section B: Harder equations", question: "Solve 4x + 1 = 2x + 9", marks: 2, answer: "4" },
    { section: "Section B: Harder equations", question: "Solve 3(x + 2) = 18", marks: 2, answer: "4" },
    { section: "Section B: Harder equations", question: "Solve (x − 1)/3 = 5", marks: 2, answer: "16" },
    { section: "Section B: Harder equations", question: "Solve 6x + 4 = 1", marks: 2, answer: "−0.5" },

    { section: "Section C: Forming equations", question: "I think of a number, multiply it by 4 and add 3. The answer is 31. What was my number?", marks: 2, answer: "7" },
    { section: "Section C: Forming equations", question: "A rectangle has sides of x cm and (x + 3) cm. Its perimeter is 26 cm. Work out x.", marks: 3, answer: "5" },
    { section: "Section C: Forming equations", question: "To solve 2x + 3 = 11, Amy writes 2x = 14. Explain Amy's mistake and solve the equation.", type: "explain", marks: 2,
      answer: "To remove the + 3 she should subtract 3 from both sides, not add it: 2x = 8, so x = 4." }
  ]
});


QUESTION_BANK.add({
  topic: "Drawing graphs",
  title: "Drawing Straight Line Graphs",
  type: "number",
  questionsPerSet: 10,
  tip: "Make a table of values: put each x into the equation to find y, then plot the points (x, y). To plot, click the grid; the points of a straight line graph should line up. Then press <b>Check</b>.",
  questions: [
    { section: "Section A: Tables of values", text: "Complete the table of values for y = 2x + 1.",
      table: { headings: ["x", "0", "1", "2", "3"], rows: [["y", "1", "?", "?", "?"]] }, parts: [
      { question: "What is y when x = 1?", marks: 1, answer: "3" },
      { question: "What is y when x = 2?", marks: 1, answer: "5" },
      { question: "What is y when x = 3?", marks: 1, answer: "7" }
    ] },
    { section: "Section A: Tables of values", question: "Does the point (2, 9) lie on the line y = 4x + 1?", type: "choice", marks: 1, options: ["Yes", "No"], answer: "Yes" },
    { section: "Section A: Tables of values", question: "Which equation gives a horizontal line?", type: "choice", marks: 1,
      options: ["y = 3", "x = 3", "y = 3x", "y = x + 3"], answer: "y = 3" },

    { section: "Section B: Plotting graphs", question: "Plot the points of y = 2x + 1 for x = 0, 1, 2 and 3.", type: "plot", marks: 2,
      answer: "(0, 1); (1, 3); (2, 5); (3, 7)", graph: { x: [0, 4], y: [0, 8] } },
    { section: "Section B: Plotting graphs", question: "Plot the points of y = x − 2 for x = 0, 1, 2, 3 and 4.", type: "plot", marks: 2,
      answer: "(0, −2); (1, −1); (2, 0); (3, 1); (4, 2)", graph: { x: [0, 5], y: [-3, 3] } },
    { section: "Section B: Plotting graphs", question: "Plot the points of y = 3 − x for x = 0, 1, 2 and 3.", type: "plot", marks: 2,
      answer: "(0, 3); (1, 2); (2, 1); (3, 0)", graph: { x: [0, 4], y: [0, 4] } },

    { section: "Section C: Reading graphs", text: "The graph shows the line y = 2x − 1.", question: "Use the graph to find y when x = 3.", marks: 1, answer: "5",
      graph: { x: [-1, 4], y: [-3, 7], lines: [[[-1, -3], [4, 7]]] } },
    { section: "Section C: Reading graphs", text: "The graph shows the line y = 2x − 1.", question: "Use the graph to find x when y = −1.", marks: 1, answer: "0",
      graph: { x: [-1, 4], y: [-3, 7], lines: [[[-1, -3], [4, 7]]] } },
    { section: "Section C: Reading graphs", question: "Jamal plots the points for y = 2x + 1 and one of them doesn't line up with the others. What does this tell him?", type: "explain", marks: 1,
      answer: "The points of a straight line graph must all lie on one line, so that point has been worked out or plotted wrongly. He should check its y value." }
  ]
});


QUESTION_BANK.add({
  topic: "Area and circumference of circles",
  title: "Area and Circumference of Circles",
  type: "number",
  questionsPerSet: 10,
  tip: "Area = πr². Circumference = πd (or 2πr). Remember the diameter is twice the radius. Give answers to 1 decimal place; answers using π = 3.14 are accepted too. Then press <b>Check</b>.",
  questions: [
    { section: "Section A: Area", question: "Work out the area of the circle. Give your answer to 1 decimal place.", tolerance: 0.1, marks: 2, answer: "78.5 cm²",
      circle: { label: "5 cm", show: "radius" } },
    { section: "Section A: Area", question: "Work out the area of the circle. Give your answer to 1 decimal place.", tolerance: 0.1, marks: 2, answer: "28.3 cm²",
      circle: { label: "3 cm", show: "radius" } },
    { section: "Section A: Area", question: "Work out the area of the circle. Give your answer to 1 decimal place.", tolerance: 0.1, marks: 3, answer: "113.1 cm²",
      circle: { label: "12 cm", show: "diameter" } },
    { section: "Section A: Area", question: "A circle has a radius of 4 cm. What is its area, in terms of π?", type: "choice", marks: 1,
      options: ["16π cm²", "8π cm²", "4π cm²", "64π cm²"], answer: "16π cm²" },

    { section: "Section B: Circumference", question: "Work out the circumference of the circle. Give your answer to 1 decimal place.", tolerance: 0.1, marks: 2, answer: "31.4 cm",
      circle: { label: "5 cm", show: "radius" } },
    { section: "Section B: Circumference", question: "Work out the circumference of the circle. Give your answer to 1 decimal place.", tolerance: 0.1, marks: 2, answer: "37.7 cm",
      circle: { label: "12 cm", show: "diameter" } },
    { section: "Section B: Circumference", question: "Work out the circumference of the circle. Give your answer to 1 decimal place.", tolerance: 0.1, marks: 2, answer: "44.0 cm",
      circle: { label: "7 cm", show: "radius" } },
    { section: "Section B: Circumference", question: "A circle has a circumference of 31.4 cm. Use π = 3.14 to find its diameter.", marks: 2, answer: "10 cm" },
    { section: "Section B: Circumference", question: "Which is the formula for the area of a circle?", type: "choice", marks: 1,
      options: ["πr²", "2πr", "πd", "πr"], answer: "πr²" },
    { section: "Section B: Circumference", question: "A circle has a diameter of 6 cm. Jo works out its area as π × 6² = 113.1 cm². Explain Jo's mistake.", type: "explain", marks: 1,
      answer: "The formula uses the radius, which is half the diameter: 3 cm. The area is π × 3² = 28.3 cm²." }
  ]
});


QUESTION_BANK.add({
  topic: "Area of compound shapes",
  title: "Area of Compound Shapes",
  type: "number",
  questionsPerSet: 10,
  tip: "Split the shape into rectangles and triangles, find each area and add them (or find a big area and subtract a missing part). Triangle = ½ × base × height; trapezium = ½(a + b)h; parallelogram = base × height.",
  questions: [
    { section: "Section A: Shapes made of rectangles", question: "Work out the area of this shape, in cm².", marks: 3, answer: "70 cm²",
      outline: { points: [[0, 0], [10, 0], [10, 4], [6, 4], [6, 9], [0, 9]], unit: "cm" } },
    { section: "Section A: Shapes made of rectangles", question: "Work out the area of this shape, in cm².", marks: 3, answer: "76 cm²",
      outline: { points: [[0, 0], [12, 0], [12, 8], [8, 8], [8, 3], [4, 3], [4, 8], [0, 8]], unit: "cm" } },
    { section: "Section A: Shapes made of rectangles", question: "A rectangle 10 cm by 6 cm has a square hole of side 2 cm cut out of it. What area is left, in cm²?", marks: 2, answer: "56 cm²" },

    { section: "Section B: Triangles and quadrilaterals", question: "Work out the area of the triangle, in cm².", marks: 2, answer: "30 cm²",
      outline: { points: [[0, 0], [10, 0], [4, 6]], unit: "cm", only: [0], extra: [{ from: [4, 0], to: [4, 6], label: "6 cm" }] } },
    { section: "Section B: Triangles and quadrilaterals", question: "Work out the area of the trapezium, in cm².", marks: 2, answer: "37.5 cm²",
      outline: { points: [[0, 0], [10, 0], [7, 5], [2, 5]], unit: "cm", only: [0, 2], extra: [{ from: [2, 0], to: [2, 5], label: "5 cm" }] } },
    { section: "Section B: Triangles and quadrilaterals", question: "Work out the area of the parallelogram, in cm².", marks: 2, answer: "32 cm²",
      outline: { points: [[0, 0], [8, 0], [11, 4], [3, 4]], unit: "cm", only: [0], extra: [{ from: [3, 0], to: [3, 4], label: "4 cm" }] } },
    { section: "Section B: Triangles and quadrilaterals", text: "The shape is a rectangle with a triangle on top.", question: "Work out the total area, in cm².", marks: 3, answer: "52 cm²",
      outline: { points: [[0, 0], [8, 0], [8, 5], [4, 8], [0, 5]], unit: "cm", only: [0, 1], extra: [{ from: [4, 5], to: [4, 8], label: "3 cm" }] } },
    { section: "Section B: Triangles and quadrilaterals", question: "Which is the formula for the area of a triangle?", type: "choice", marks: 1,
      options: ["½ × base × height", "base × height", "base + height", "2 × base × height"], answer: "½ × base × height" },
    { section: "Section B: Triangles and quadrilaterals", question: "Ben says a triangle with base 10 cm and height 6 cm has an area of 60 cm². Explain Ben's mistake.", type: "explain", marks: 1,
      answer: "Ben has forgotten to halve. A triangle is half of a rectangle, so its area is ½ × 10 × 6 = 30 cm²." }
  ]
});


QUESTION_BANK.add({
  topic: "Frequency tables",
  title: "Frequency Tables",
  type: "number",
  questionsPerSet: 10,
  tip: "The frequency tells you how many times each value occurs. To find the total of the values, multiply each value by its frequency and add them up. Type your answer or tap your choice, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Reading a frequency table", text: "The table shows how many pets a group of people have.", question: "How many people were asked?", marks: 1, answer: "25",
      table: { headings: ["Number of pets", "Frequency"], rows: [["0", "5"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"]] } },
    { section: "Section A: Reading a frequency table", text: "The table shows how many pets a group of people have.", question: "What is the mode (the most common number of pets)?", marks: 1, answer: "1",
      table: { headings: ["Number of pets", "Frequency"], rows: [["0", "5"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"]] } },
    { section: "Section A: Reading a frequency table", text: "The table shows how many pets a group of people have.", question: "How many people have 2 or more pets?", marks: 1, answer: "12",
      table: { headings: ["Number of pets", "Frequency"], rows: [["0", "5"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"]] } },
    { section: "Section A: Reading a frequency table", text: "The table shows how many pets a group of people have.", question: "How many pets are there altogether?", marks: 2, answer: "40",
      table: { headings: ["Number of pets", "Frequency"], rows: [["0", "5"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"]] } },
    { section: "Section A: Reading a frequency table", text: "The table shows how many pets a group of people have.", question: "Work out the mean number of pets.", marks: 3, answer: "1.6",
      table: { headings: ["Number of pets", "Frequency"], rows: [["0", "5"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"]] } },
    { section: "Section A: Reading a frequency table", text: "The table shows how many pets a group of people have.", question: "Work out the median number of pets.", marks: 2, answer: "1",
      table: { headings: ["Number of pets", "Frequency"], rows: [["0", "5"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"]] } },

    { section: "Section B: Grouped data", text: "The table shows how long some pupils took to get to school.", question: "Which is the modal class?", type: "choice", marks: 1,
      table: { headings: ["Time, t (minutes)", "Frequency"], rows: [["0 < t ≤ 10", "3"], ["10 < t ≤ 20", "7"], ["20 < t ≤ 30", "5"]] },
      options: ["0 < t ≤ 10", "10 < t ≤ 20", "20 < t ≤ 30"], answer: "10 < t ≤ 20" },
    { section: "Section B: Grouped data", text: "The table shows how long some pupils took to get to school.", question: "How many pupils took more than 10 minutes?", marks: 1, answer: "12",
      table: { headings: ["Time, t (minutes)", "Frequency"], rows: [["0 < t ≤ 10", "3"], ["10 < t ≤ 20", "7"], ["20 < t ≤ 30", "5"]] } },
    { section: "Section B: Grouped data", question: "The frequencies in a frequency table add up to...", type: "choice", marks: 1,
      options: ["the total number of results", "the mode", "the biggest value", "the mean"], answer: "the total number of results" },
    { section: "Section B: Grouped data", text: "The table shows how many pets a group of people have.", question: "Mia says the mode of this data is 8. Explain Mia's mistake.", type: "explain", marks: 1,
      table: { headings: ["Number of pets", "Frequency"], rows: [["0", "5"], ["1", "8"], ["2", "6"], ["3", "4"], ["4", "2"]] },
      answer: "8 is the highest frequency, not a number of pets. The mode is the value with the highest frequency, which is 1 pet." }
  ]
});


QUESTION_BANK.add({
  topic: "Two-way tables",
  title: "Two-Way Tables",
  type: "number",
  questionsPerSet: 10,
  tip: "Each row and each column adds up to its total. Use the totals to fill in missing numbers one at a time. Type your answer and press <b>Check</b>.",
  questions: [
    { section: "Section A: Completing a two-way table", text: "The two-way table shows how 50 pupils travel to school. Some numbers are missing.", question: "How many boys travel by bus?", marks: 1, answer: "8",
      table: { headings: ["", "Walk", "Bus", "Car", "Total"], rows: [["Boys", "12", "?", "5", "25"], ["Girls", "?", "11", "?", "25"], ["Total", "21", "?", "10", "50"]] } },
    { section: "Section A: Completing a two-way table", text: "The two-way table shows how 50 pupils travel to school. Some numbers are missing.", question: "How many girls walk?", marks: 1, answer: "9",
      table: { headings: ["", "Walk", "Bus", "Car", "Total"], rows: [["Boys", "12", "?", "5", "25"], ["Girls", "?", "11", "?", "25"], ["Total", "21", "?", "10", "50"]] } },
    { section: "Section A: Completing a two-way table", text: "The two-way table shows how 50 pupils travel to school. Some numbers are missing.", question: "How many girls travel by car?", marks: 1, answer: "5",
      table: { headings: ["", "Walk", "Bus", "Car", "Total"], rows: [["Boys", "12", "?", "5", "25"], ["Girls", "?", "11", "?", "25"], ["Total", "21", "?", "10", "50"]] } },
    { section: "Section A: Completing a two-way table", text: "The two-way table shows how 50 pupils travel to school. Some numbers are missing.", question: "How many pupils travel by bus altogether?", marks: 2, answer: "19",
      table: { headings: ["", "Walk", "Bus", "Car", "Total"], rows: [["Boys", "12", "?", "5", "25"], ["Girls", "?", "11", "?", "25"], ["Total", "21", "?", "10", "50"]] } },
    { section: "Section A: Completing a two-way table", text: "The two-way table shows how 50 pupils travel to school. Some numbers are missing.", question: "What fraction of the pupils walk?", type: "fraction", marks: 1, answer: "21/50",
      table: { headings: ["", "Walk", "Bus", "Car", "Total"], rows: [["Boys", "12", "?", "5", "25"], ["Girls", "?", "11", "?", "25"], ["Total", "21", "?", "10", "50"]] } },
    { section: "Section A: Completing a two-way table", text: "The two-way table shows how 50 pupils travel to school. Some numbers are missing.", question: "How many more girls than boys travel by bus?", marks: 2, answer: "3",
      table: { headings: ["", "Walk", "Bus", "Car", "Total"], rows: [["Boys", "12", "?", "5", "25"], ["Girls", "?", "11", "?", "25"], ["Total", "21", "?", "10", "50"]] } },

    { section: "Section B: Using a two-way table", text: "The table shows which film 40 people watched at a cinema.", question: "How many people watched Film A?", marks: 1, answer: "23",
      table: { headings: ["", "Film A", "Film B", "Total"], rows: [["Adults", "14", "6", "20"], ["Children", "9", "11", "20"], ["Total", "23", "17", "40"]] } },
    { section: "Section B: Using a two-way table", text: "The table shows which film 40 people watched at a cinema.", question: "One person is chosen at random. What is the probability they are a child who watched Film B?", type: "fraction", marks: 1, answer: "11/40",
      table: { headings: ["", "Film A", "Film B", "Total"], rows: [["Adults", "14", "6", "20"], ["Children", "9", "11", "20"], ["Total", "23", "17", "40"]] } },
    { section: "Section B: Using a two-way table", question: "Why are two-way tables useful?", type: "explain", marks: 1,
      answer: "They show data sorted in two ways at once (for example boys/girls and how they travel), and the totals make it easy to find missing values and compare groups." }
  ]
});


QUESTION_BANK.add({
  topic: "Transformations of shapes",
  title: "Transformations of Shapes",
  type: "choice",
  questionsPerSet: 10,
  tip: "Translation slides a shape, reflection flips it in a mirror line, rotation turns it about a centre, and enlargement changes its size. To draw an image, click the grid to plot each corner of the new shape, then press <b>Check</b>.",
  questions: [
    { section: "Section A: Describing transformations", question: "Which transformation maps shape A onto shape B?", marks: 1,
      options: ["translation", "reflection", "rotation", "enlargement"], answer: "translation",
      graph: { lines: [[[-4, 1], [-2, 1], [-4, 3], [-4, 1]], [[1, -2], [3, -2], [1, 0], [1, -2]]], labels: [["A", -4.6, 2.2], ["B", 3.4, -1]] } },
    { section: "Section A: Describing transformations", question: "Shape A is translated onto shape B. Describe the translation.", marks: 1,
      options: ["5 right and 3 down", "5 left and 3 up", "3 right and 5 down", "5 right and 3 up"], answer: "5 right and 3 down",
      graph: { lines: [[[-4, 1], [-2, 1], [-4, 3], [-4, 1]], [[1, -2], [3, -2], [1, 0], [1, -2]]], labels: [["A", -4.6, 2.2], ["B", 3.4, -1]] } },
    { section: "Section A: Describing transformations", question: "Which transformation maps shape A onto shape B?", marks: 1,
      options: ["translation", "reflection", "rotation", "enlargement"], answer: "reflection",
      graph: { lines: [[[1, 1], [4, 1], [1, 3], [1, 1]], [[-1, 1], [-4, 1], [-1, 3], [-1, 1]]], labels: [["A", 2.5, 3.4], ["B", -2.5, 3.4]] } },
    { section: "Section A: Describing transformations", question: "Shape A is reflected onto shape B. What is the mirror line?", marks: 1,
      options: ["the y-axis", "the x-axis", "y = x", "x = 1"], answer: "the y-axis",
      graph: { lines: [[[1, 1], [4, 1], [1, 3], [1, 1]], [[-1, 1], [-4, 1], [-1, 3], [-1, 1]]], labels: [["A", 2.5, 3.4], ["B", -2.5, 3.4]] } },
    { section: "Section A: Describing transformations", question: "Which transformation maps shape A onto shape B?", marks: 1,
      options: ["translation", "reflection", "rotation", "enlargement"], answer: "rotation",
      graph: { lines: [[[1, 1], [3, 1], [1, 4], [1, 1]], [[-1, -1], [-3, -1], [-1, -4], [-1, -1]]], labels: [["A", 2.2, 3], ["B", -2.2, -3]] } },
    { section: "Section A: Describing transformations", question: "Shape A is rotated onto shape B. Describe the rotation.", marks: 1,
      options: ["90° clockwise about (0, 0)", "180° about (0, 0)", "90° anticlockwise about (0, 0)", "180° about (1, 1)"], answer: "180° about (0, 0)",
      graph: { lines: [[[1, 1], [3, 1], [1, 4], [1, 1]], [[-1, -1], [-3, -1], [-1, -4], [-1, -1]]], labels: [["A", 2.2, 3], ["B", -2.2, -3]] } },
    { section: "Section A: Describing transformations", question: "Shape A is enlarged onto shape B. What is the scale factor?", type: "number", marks: 1, answer: "2",
      graph: { lines: [[[1, 1], [2, 1], [1, 2], [1, 1]], [[2, 2], [4, 2], [2, 4], [2, 2]]], labels: [["A", 0.6, 0.6], ["B", 3.2, 3.4]] } },

    { section: "Section B: Drawing transformations", question: "Translate the triangle 3 right and 2 up. Plot the three corners of the image.", type: "plot", marks: 2,
      answer: "(−1, −1); (1, −1); (1, 1)", graph: { lines: [[[-4, -3], [-2, -3], [-2, -1], [-4, -3]]] } },
    { section: "Section B: Drawing transformations", question: "Reflect the triangle in the x-axis. Plot the three corners of the image.", type: "plot", marks: 2,
      answer: "(1, −1); (4, −1); (4, −3)", graph: { lines: [[[1, 1], [4, 1], [4, 3], [1, 1]]] } },
    { section: "Section B: Drawing transformations", question: "Rotate the triangle 90° clockwise about (0, 0). Plot the three corners of the image.", type: "plot", marks: 2,
      answer: "(1, −1); (1, −3); (2, −1)", graph: { lines: [[[1, 1], [3, 1], [1, 2], [1, 1]]] } },
    { section: "Section B: Drawing transformations", question: "Enlarge the triangle by scale factor 2 with centre (0, 0). Plot the three corners of the image.", type: "plot", marks: 2,
      answer: "(2, 2); (4, 2); (4, 4)", graph: { lines: [[[1, 1], [2, 1], [2, 2], [1, 1]]] } },
    { section: "Section B: Drawing transformations", question: "After a reflection, what stays the same about the shape?", type: "explain", marks: 1,
      answer: "Its shape and size stay the same (the image is congruent): the side lengths and angles don't change. Only its position and which way it faces change." }
  ]
});
