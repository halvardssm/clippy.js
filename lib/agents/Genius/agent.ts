import { AgentType } from "../../agent";

export const agent: AgentType = {
  overlayCount: 3,
  sounds: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ],
  framesize: [124, 93],
  animations: {
    DeepIdle1: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 130, images: [[124, 0]] },
        {
          duration: 200,
          images: [[248, 0]],
        },
        { duration: 160, images: [[372, 0]], exitBranch: 35 },
        {
          duration: 130,
          images: [[496, 0]],
        },
        { duration: 260, images: [[620, 0]], exitBranch: 35 },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 6, weight: 50 },
              { frameIndex: 12, weight: 40 },
            ],
          },
        },
        { duration: 260, images: [[620, 0]], exitBranch: 35 },
        {
          duration: 260,
          images: [[496, 0]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 8, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[620, 0]],
          exitBranch: 35,
          branching: { branches: [{ frameIndex: 9, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 11,
          branching: { branches: [{ frameIndex: 5, weight: 80 }] },
        },
        { duration: 130, images: [[868, 0]], exitBranch: 35 },
        {
          duration: 130,
          images: [[992, 0]],
        },
        { duration: 130, images: [[1116, 0]] },
        { duration: 130, images: [[1240, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
          exitBranch: 32,
        },
        { duration: 130, images: [[1488, 0]] },
        { duration: 130, images: [[1612, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 330,
          images: [[1984, 0]],
          exitBranch: 27,
          branching: { branches: [{ frameIndex: 20, weight: 75 }] },
        },
        { duration: 200, images: [[2108, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
        },
        { duration: 200, images: [[2356, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
          branching: { branches: [{ frameIndex: 23, weight: 60 }] },
        },
        {
          duration: 200,
          images: [[2108, 0]],
          exitBranch: 26,
          branching: {
            branches: [
              { frameIndex: 25, weight: 50 },
              {
                frameIndex: 20,
                weight: 25,
              },
              { frameIndex: 21, weight: 18 },
            ],
          },
        },
        { duration: 130, images: [[1984, 0]] },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1612, 0]] },
        { duration: 130, images: [[1488, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
        },
        { duration: 130, images: [[1240, 0]] },
        { duration: 130, images: [[1116, 0]] },
        {
          duration: 130,
          images: [[992, 0]],
          exitBranch: 36,
        },
        {
          duration: 130,
          images: [[868, 0]],
          exitBranch: 36,
          branching: { branches: [{ frameIndex: 5, weight: 100 }] },
        },
        { duration: 130, images: [[2480, 0]] },
        { duration: 130, images: [[2604, 0]] },
        {
          duration: 130,
          images: [[2728, 0]],
        },
        { duration: 130, images: [[0, 93]] },
        {
          duration: 130,
          images: [[124, 93]],
          exitBranch: 41,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Congratulate: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        { duration: 100, images: [[496, 93]] },
        {
          duration: 100,
          images: [[620, 93]],
          exitBranch: 37,
          branching: { branches: [{ frameIndex: 19, weight: 50 }] },
        },
        { duration: 130, images: [[744, 93]] },
        { duration: 130, images: [[868, 93]] },
        {
          duration: 130,
          images: [[992, 93]],
        },
        { duration: 80, images: [[1116, 93]] },
        { duration: 80, images: [[1240, 93]] },
        {
          duration: 100,
          images: [[1364, 93]],
        },
        { duration: 100, images: [[1488, 93]], sound: "2" },
        {
          duration: 100,
          images: [[1612, 93]],
        },
        { duration: 100, images: [[1736, 93]] },
        {
          duration: 100,
          images: [[1860, 93]],
          sound: "17",
        },
        { duration: 100, images: [[1984, 93]] },
        { duration: 100, images: [[2108, 93]] },
        {
          duration: 100,
          images: [[2232, 93]],
        },
        {
          duration: 100,
          images: [[2356, 93]],
          exitBranch: 37,
          branching: { branches: [{ frameIndex: 36, weight: 100 }] },
        },
        { duration: 130, images: [[2480, 93]] },
        { duration: 80, images: [[2604, 93]] },
        {
          duration: 80,
          images: [[2728, 93]],
        },
        { duration: 130, images: [[0, 186]] },
        { duration: 80, images: [[124, 186]] },
        {
          duration: 80,
          images: [[248, 186]],
          exitBranch: 31,
        },
        { duration: 80, images: [[372, 186]] },
        { duration: 130, images: [[496, 186]] },
        {
          duration: 160,
          images: [[620, 186]],
        },
        { duration: 100, images: [[496, 186]] },
        { duration: 100, images: [[372, 186]] },
        {
          duration: 100,
          images: [[248, 186]],
        },
        { duration: 100, images: [[124, 186]] },
        { duration: 100, images: [[0, 186]] },
        {
          duration: 100,
          images: [[2728, 93]],
        },
        { duration: 100, images: [[2604, 93]] },
        { duration: 100, images: [[2480, 93]] },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 39,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Hide: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 10,
          images: [[744, 186]],
          sound: "22",
        },
        { duration: 10, images: [[868, 186]] },
        { duration: 10, images: [[992, 186]] },
        { duration: 10 },
      ],
    },
    SendMail: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 100,
          images: [
            [248, 93],
            [1116, 186],
          ],
          sound: "1",
        },
        {
          duration: 100,
          images: [
            [372, 93],
            [1240, 186],
          ],
        },
        {
          duration: 100,
          images: [
            [1364, 186],
            [620, 93],
          ],
        },
        {
          duration: 100,
          images: [
            [1488, 186],
            [620, 93],
          ],
        },
        {
          duration: 100,
          images: [
            [1612, 186],
            [620, 93],
          ],
          exitBranch: 47,
        },
        {
          duration: 80,
          images: [
            [1860, 186],
            [1736, 186],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [1984, 186],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2108, 186],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2232, 186],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [2356, 186],
          ],
        },
        {
          duration: 160,
          images: [
            [1736, 186],
            [2480, 186],
          ],
        },
        {
          duration: 110,
          images: [
            [1736, 186],
            [2604, 186],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2728, 186],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [0, 279],
          ],
        },
        {
          duration: 160,
          images: [
            [1736, 186],
            [124, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [248, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [372, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [496, 279],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [620, 279],
          ],
        },
        {
          duration: 250,
          images: [
            [1736, 186],
            [744, 279],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [868, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [992, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [1116, 279],
          ],
          sound: "4",
        },
        {
          duration: 110,
          images: [
            [1736, 186],
            [1240, 279],
          ],
        },
        {
          duration: 160,
          images: [
            [1736, 186],
            [1364, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [1488, 279],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [1612, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [1736, 279],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [1860, 279],
          ],
          sound: "13",
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [1984, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2108, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2232, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2356, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2480, 279],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [2604, 279],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [2728, 279],
          ],
        },
        {
          duration: 160,
          images: [
            [1736, 186],
            [0, 372],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [124, 372],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [248, 372],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [372, 372],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [496, 372],
          ],
          sound: "15",
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [620, 372],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [744, 372],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [868, 372],
          ],
        },
        {
          duration: 130,
          images: [
            [1736, 186],
            [992, 372],
          ],
          sound: "1",
        },
        {
          duration: 80,
          images: [
            [1736, 186],
            [1860, 186],
          ],
        },
        {
          duration: 100,
          images: [
            [1488, 186],
            [620, 93],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 93],
            [1240, 186],
          ],
        },
        {
          duration: 100,
          images: [
            [248, 93],
            [1116, 186],
          ],
          exitBranch: 50,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Thinking: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 130,
          images: [[1116, 372]],
        },
        {
          duration: 450,
          images: [
            [1364, 372],
            [1240, 372],
          ],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 2, weight: 75 },
              { frameIndex: 5, weight: 10 },
            ],
          },
        },
        {
          duration: 350,
          images: [
            [1488, 372],
            [1240, 372],
          ],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 3, weight: 80 },
              { frameIndex: 2, weight: 3 },
            ],
          },
        },
        {
          duration: 450,
          images: [
            [1612, 372],
            [1240, 372],
          ],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 4, weight: 89 },
              {
                frameIndex: 3,
                weight: 10,
              },
              { frameIndex: 2, weight: 1 },
            ],
          },
        },
        {
          duration: 350,
          images: [
            [1488, 372],
            [1240, 372],
          ],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 5, weight: 60 },
              { frameIndex: 4, weight: 40 },
            ],
          },
        },
        { duration: 100, images: [[1364, 372]] },
        {
          duration: 100,
          images: [[1116, 372]],
          exitBranch: 8,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Explain: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 1,
          branching: {
            branches: [
              { frameIndex: 2, weight: 33 },
              { frameIndex: 7, weight: 33 },
            ],
          },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 17,
          branching: { branches: [{ frameIndex: 17, weight: 100 }] },
        },
        { duration: 100, images: [[1984, 372]] },
        { duration: 130, images: [[2108, 372]] },
        {
          duration: 100,
          images: [[2232, 372]],
        },
        {
          duration: 100,
          images: [[1984, 372]],
          exitBranch: 6,
          branching: { branches: [{ frameIndex: 17, weight: 100 }] },
        },
        { duration: 400, images: [[2356, 372]] },
        {
          duration: 130,
          images: [[2480, 372]],
          exitBranch: 17,
        },
        { duration: 200, images: [[2604, 372]] },
        {
          duration: 100,
          images: [[2232, 372]],
          branching: { branches: [{ frameIndex: 17, weight: 100 }] },
        },
        { duration: 100, images: [[2728, 372]] },
        { duration: 100, images: [[0, 465]] },
        {
          duration: 130,
          images: [[124, 465]],
        },
        { duration: 330, images: [[248, 465]] },
        { duration: 130, images: [[124, 465]] },
        {
          duration: 100,
          images: [[0, 465]],
        },
        { duration: 100, images: [[2728, 372]], exitBranch: 17 },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Save: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 39,
        },
        { duration: 130, images: [[372, 465]] },
        { duration: 80, images: [[496, 465]] },
        {
          duration: 80,
          images: [[620, 465]],
        },
        { duration: 130, images: [[744, 465]] },
        { duration: 210, images: [[868, 465]] },
        {
          duration: 130,
          images: [[992, 465]],
        },
        { duration: 80, images: [[1116, 465]] },
        { duration: 80, images: [[1240, 465]] },
        {
          duration: 80,
          images: [[1364, 465]],
        },
        { duration: 80, images: [[1488, 465]] },
        { duration: 80, images: [[1612, 465]] },
        {
          duration: 130,
          images: [[1736, 465]],
        },
        { duration: 500, images: [[1860, 465]], sound: "8" },
        {
          duration: 300,
          images: [[1736, 465]],
        },
        { duration: 80, images: [[1612, 465]] },
        { duration: 80, images: [[1488, 465]] },
        {
          duration: 80,
          images: [[1984, 465]],
        },
        { duration: 80, images: [[2108, 465]] },
        { duration: 0, images: [[2232, 465]] },
        {
          duration: 210,
          images: [[2356, 465]],
        },
        { duration: 210, images: [[2480, 465]] },
        { duration: 80, images: [[2604, 465]] },
        {
          duration: 80,
          images: [[2728, 465]],
        },
        { duration: 80, images: [[0, 558]] },
        { duration: 500, images: [[124, 558]] },
        {
          duration: 130,
          images: [[248, 558]],
        },
        { duration: 80, images: [[372, 558]] },
        { duration: 130, images: [[496, 558]] },
        {
          duration: 80,
          images: [[620, 558]],
        },
        { duration: 80, images: [[744, 558]] },
        { duration: 80, images: [[868, 558]] },
        {
          duration: 210,
          images: [[992, 558]],
        },
        { duration: 130, images: [[1116, 558]] },
        { duration: 80, images: [[1240, 558]] },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 41,
        },
        { duration: 100, images: [[1364, 558]] },
      ],
    },
    Print: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 130,
          images: [[1116, 372]],
        },
        { duration: 130, images: [[1364, 372]] },
        {
          duration: 130,
          images: [
            [1488, 372],
            [1488, 558],
          ],
        },
        {
          duration: 130,
          images: [
            [1612, 372],
            [1612, 558],
          ],
        },
        {
          duration: 130,
          images: [
            [1860, 558],
            [1736, 558],
          ],
        },
        {
          duration: 130,
          images: [
            [2108, 558],
            [1984, 558],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 558],
            [2232, 558],
          ],
        },
        {
          duration: 130,
          images: [
            [2604, 558],
            [2480, 558],
          ],
        },
        {
          duration: 130,
          images: [
            [0, 651],
            [2728, 558],
          ],
        },
        {
          duration: 130,
          images: [
            [248, 651],
            [124, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [0, 651],
            [372, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [620, 651],
            [496, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [868, 651],
            [744, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [1116, 651],
            [992, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [1364, 651],
            [1240, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [1612, 651],
            [1488, 651],
          ],
          exitBranch: 17,
          branching: {
            branches: [
              { frameIndex: 44, weight: 34 },
              { frameIndex: 17, weight: 66 },
            ],
          },
        },
        {
          duration: 130,
          images: [
            [1736, 651],
            [1240, 372],
          ],
        },
        {
          duration: 130,
          images: [
            [1984, 651],
            [1860, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [2232, 651],
            [2108, 651],
          ],
        },
        {
          duration: 130,
          images: [
            [2480, 651],
            [2356, 651],
          ],
        },
        { duration: 200, images: [[2604, 651]] },
        {
          duration: 130,
          images: [[2728, 651]],
          exitBranch: 23,
          branching: { branches: [{ frameIndex: 59, weight: 50 }] },
        },
        { duration: 130, images: [[0, 744]] },
        {
          duration: 130,
          images: [[124, 744]],
          exitBranch: 42,
          sound: "4",
        },
        { duration: 130, images: [[248, 744]] },
        { duration: 130, images: [[372, 744]] },
        {
          duration: 130,
          images: [[496, 744]],
        },
        {
          duration: 130,
          images: [[620, 744]],
          exitBranch: 42,
          branching: { branches: [{ frameIndex: 28, weight: 50 }] },
        },
        { duration: 130, images: [[744, 744]] },
        {
          duration: 130,
          images: [[868, 744]],
          exitBranch: 42,
        },
        { duration: 130, images: [[992, 744]] },
        {
          duration: 230,
          images: [[1116, 744]],
          exitBranch: 42,
          branching: { branches: [{ frameIndex: 32, weight: 50 }] },
        },
        { duration: 250, images: [[868, 744]] },
        {
          duration: 200,
          images: [[992, 744]],
          exitBranch: 42,
        },
        { duration: 130, images: [[744, 744]] },
        {
          duration: 230,
          images: [[620, 744]],
          exitBranch: 42,
          branching: { branches: [{ frameIndex: 36, weight: 66 }] },
        },
        { duration: 130, images: [[1240, 744]] },
        {
          duration: 130,
          images: [[1364, 744]],
          exitBranch: 42,
        },
        { duration: 130, images: [[1240, 744]] },
        {
          duration: 130,
          images: [[620, 744]],
          exitBranch: 42,
        },
        { duration: 130, images: [[1488, 744]] },
        { duration: 130, images: [[1612, 744]] },
        {
          duration: 130,
          images: [[1736, 744]],
          exitBranch: 61,
          branching: { branches: [{ frameIndex: 61, weight: 100 }] },
        },
        { duration: 100, images: [[1860, 744]] },
        { duration: 100, images: [[1984, 744]] },
        {
          duration: 100,
          images: [[2108, 744]],
        },
        { duration: 100, images: [[2232, 744]] },
        { duration: 100, images: [[2356, 744]] },
        {
          duration: 100,
          images: [[2480, 744]],
        },
        { duration: 100, images: [[2604, 744]] },
        { duration: 100, images: [[2728, 744]] },
        {
          duration: 100,
          images: [[0, 837]],
        },
        { duration: 100, images: [[124, 837]] },
        { duration: 100, images: [[248, 837]] },
        {
          duration: 100,
          images: [[372, 837]],
        },
        { duration: 100, images: [[496, 837]] },
        { duration: 100, images: [[620, 837]] },
        {
          duration: 100,
          images: [[744, 837]],
          branching: { branches: [{ frameIndex: 43, weight: 100 }] },
        },
        { duration: 100, images: [[868, 837]] },
        {
          duration: 100,
          images: [[992, 837]],
          exitBranch: 61,
          branching: { branches: [{ frameIndex: 61, weight: 100 }] },
        },
        { duration: 130, images: [[1116, 837]] },
        { duration: 130, images: [[1240, 837]] },
        {
          duration: 130,
          images: [[1364, 837]],
        },
        { duration: 130, images: [[1488, 837]] },
        { duration: 130, images: [[1612, 837]] },
        {
          duration: 130,
          images: [[1736, 837]],
          sound: "4",
        },
        { duration: 130, images: [[1860, 837]] },
        { duration: 130, images: [[1984, 837]] },
        {
          duration: 130,
          images: [[2108, 837]],
        },
        { duration: 130, images: [[2232, 837]] },
        { duration: 130, images: [[2356, 837]] },
        {
          duration: 130,
          images: [[2480, 837]],
        },
        { duration: 100, images: [[620, 93]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[1364, 558]], exitBranch: 77 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookRight: {
      frames: [
        { duration: 60, images: [[1736, 372]] },
        {
          duration: 80,
          images: [[1984, 372]],
        },
        { duration: 80, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[0, 930]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 80, images: [[2604, 837]] },
        {
          duration: 80,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 60, images: [[1736, 372]] },
      ],
    },
    GetAttention: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 100,
          images: [[124, 930]],
        },
        { duration: 100, images: [[248, 930]], exitBranch: 19 },
        {
          duration: 100,
          images: [[372, 930]],
        },
        { duration: 100, images: [[496, 930]] },
        { duration: 100, images: [[620, 930]] },
        {
          duration: 100,
          images: [[744, 930]],
        },
        { duration: 100, images: [[868, 930]] },
        { duration: 100, images: [[992, 930]] },
        {
          duration: 100,
          images: [[1116, 930]],
        },
        { duration: 100, images: [[1240, 930]] },
        { duration: 100, images: [[1116, 930]] },
        {
          duration: 120,
          images: [[992, 930]],
        },
        { duration: 750, images: [[868, 930]] },
        { duration: 100, images: [[744, 930]] },
        {
          duration: 100,
          images: [[620, 930]],
        },
        { duration: 100, images: [[496, 930]] },
        { duration: 100, images: [[372, 930]] },
        {
          duration: 100,
          images: [[248, 930]],
        },
        { duration: 100, images: [[124, 930]], exitBranch: 20 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Alert: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 6,
        },
        { duration: 100, images: [[0, 0]] },
        {
          duration: 130,
          images: [[1240, 1302]],
          exitBranch: 6,
        },
        { duration: 1000, images: [[1364, 1302]] },
        {
          duration: 130,
          images: [[1240, 1302]],
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    GetTechy: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 100,
          images: [[1488, 930]],
          sound: "14",
        },
        { duration: 100, images: [[1612, 930]] },
        { duration: 100, images: [[1736, 930]] },
        {
          duration: 100,
          images: [[1860, 930]],
          exitBranch: 40,
        },
        { duration: 100, images: [[1984, 930]] },
        { duration: 100, images: [[2108, 930]] },
        {
          duration: 100,
          images: [[2232, 930]],
          exitBranch: 39,
        },
        { duration: 100, images: [[2356, 930]] },
        {
          duration: 100,
          images: [[2480, 930]],
          exitBranch: 39,
        },
        { duration: 100, images: [[2604, 930]] },
        {
          duration: 100,
          images: [[2728, 930]],
          exitBranch: 39,
        },
        { duration: 100, images: [[0, 1023]] },
        {
          duration: 100,
          images: [[124, 1023]],
          exitBranch: 39,
        },
        { duration: 100, images: [[248, 1023]] },
        {
          duration: 100,
          images: [[372, 1023]],
          exitBranch: 39,
        },
        { duration: 100, images: [[496, 1023]] },
        {
          duration: 100,
          images: [[620, 1023]],
          exitBranch: 39,
        },
        { duration: 100, images: [[744, 1023]] },
        {
          duration: 100,
          images: [[868, 1023]],
          exitBranch: 39,
        },
        { duration: 100, images: [[992, 1023]] },
        {
          duration: 100,
          images: [[1116, 1023]],
          exitBranch: 39,
        },
        { duration: 100, images: [[1240, 1023]] },
        {
          duration: 100,
          images: [[1364, 1023]],
          exitBranch: 39,
        },
        { duration: 100, images: [[1488, 1023]] },
        {
          duration: 100,
          images: [[1612, 1023]],
          exitBranch: 39,
        },
        { duration: 100, images: [[1736, 1023]] },
        {
          duration: 100,
          images: [[1860, 1023]],
          exitBranch: 39,
        },
        {
          duration: 100,
          images: [[1984, 1023]],
          exitBranch: 29,
          branching: { branches: [{ frameIndex: 11, weight: 100 }] },
        },
        { duration: 100, images: [[2108, 1023]], exitBranch: 39 },
        {
          duration: 100,
          images: [[2232, 1023]],
        },
        { duration: 100, images: [[2356, 1023]], exitBranch: 39 },
        {
          duration: 100,
          images: [[2480, 1023]],
        },
        { duration: 100, images: [[2604, 1023]], exitBranch: 39 },
        {
          duration: 100,
          images: [[2728, 1023]],
        },
        { duration: 100, images: [[0, 1116]], exitBranch: 39 },
        {
          duration: 100,
          images: [[124, 1116]],
        },
        { duration: 100, images: [[248, 1116]], exitBranch: 39 },
        {
          duration: 100,
          images: [[372, 1116]],
        },
        { duration: 100, images: [[496, 1116]] },
        { duration: 100, images: [[620, 1116]] },
        {
          duration: 100,
          images: [[744, 1116]],
          exitBranch: 42,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GestureUp: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 16,
        },
        { duration: 130, images: [[868, 1116]] },
        { duration: 130, images: [[992, 1116]] },
        {
          duration: 130,
          images: [[1116, 1116]],
        },
        { duration: 130, images: [[1240, 1116]] },
        {
          duration: 160,
          images: [[1364, 1116]],
        },
        { duration: 1000, images: [[1488, 1116]] },
        {
          duration: 160,
          images: [[1364, 1116]],
        },
        { duration: 130, images: [[1240, 1116]] },
        {
          duration: 130,
          images: [[1116, 1116]],
        },
        { duration: 130, images: [[992, 1116]] },
        { duration: 130, images: [[868, 1116]] },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 18,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Idle1_1: {
      frames: [
        {
          duration: 450,
          images: [[1736, 372]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 0, weight: 60 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 0, weight: 80 }] },
        },
        {
          duration: 0,
          branching: {
            branches: [
              { frameIndex: 15, weight: 15 },
              {
                frameIndex: 26,
                weight: 15,
              },
              { frameIndex: 56, weight: 15 },
            ],
          },
          exitBranch: 94,
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 75, weight: 50 }] },
        },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 94, weight: 80 }] },
        },
        { duration: 200, images: [[1984, 372]], exitBranch: 94 },
        {
          duration: 130,
          images: [[1736, 1116]],
        },
        {
          duration: 500,
          images: [[1364, 930]],
          exitBranch: 8,
          branching: { branches: [{ frameIndex: 7, weight: 85 }] },
        },
        {
          duration: 330,
          images: [[1860, 1116]],
          exitBranch: 12,
          branching: { branches: [{ frameIndex: 8, weight: 90 }] },
        },
        {
          duration: 80,
          images: [[2604, 837]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 7, weight: 50 },
              { frameIndex: 8, weight: 25 },
            ],
          },
        },
        {
          duration: 130,
          images: [[2728, 837]],
          exitBranch: 12,
          branching: {
            branches: [
              { frameIndex: 10, weight: 85 },
              {
                frameIndex: 7,
                weight: 7,
              },
              { frameIndex: 13, weight: 8 },
            ],
          },
        },
        {
          duration: 500,
          images: [[1984, 1116]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 11, weight: 85 },
              { frameIndex: 10, weight: 7 },
            ],
          },
        },
        {
          duration: 80,
          images: [[2604, 837]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 11, weight: 50 },
              { frameIndex: 10, weight: 25 },
            ],
          },
        },
        { duration: 100, images: [[1984, 372]], exitBranch: 94 },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 94, weight: 100 }] },
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 94, weight: 65 }] },
          exitBranch: 94,
        },
        { duration: 130, images: [[2108, 1116]], exitBranch: 94 },
        {
          duration: 160,
          images: [[2232, 1116]],
        },
        { duration: 130, images: [[2356, 1116]] },
        {
          duration: 130,
          images: [[2480, 1116]],
        },
        { duration: 130, images: [[2604, 1116]], exitBranch: 94 },
        {
          duration: 130,
          images: [[2728, 1116]],
        },
        { duration: 130, images: [[0, 1209]] },
        { duration: 130, images: [[2728, 1116]] },
        {
          duration: 130,
          images: [[2604, 1116]],
        },
        {
          duration: 110,
          images: [[2480, 1116]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 94, weight: 100 }] },
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 94, weight: 70 }] },
          exitBranch: 94,
        },
        { duration: 130, images: [[124, 1209]] },
        { duration: 80, images: [[248, 1209]] },
        {
          duration: 80,
          images: [[372, 1209]],
        },
        { duration: 130, images: [[496, 1209]], exitBranch: 94 },
        {
          duration: 210,
          images: [[620, 1209]],
        },
        { duration: 130, images: [[744, 1209]], exitBranch: 94 },
        {
          duration: 130,
          images: [[868, 1209]],
        },
        { duration: 210, images: [[992, 1209]], exitBranch: 94 },
        {
          duration: 80,
          images: [[868, 1209]],
        },
        { duration: 130, images: [[744, 1209]], exitBranch: 94 },
        {
          duration: 210,
          images: [[620, 1209]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 32, weight: 90 }] },
        },
        { duration: 130, images: [[1116, 1209]], exitBranch: 94 },
        {
          duration: 80,
          images: [[1240, 1209]],
        },
        { duration: 130, images: [[1364, 1209]], exitBranch: 94 },
        {
          duration: 210,
          images: [[1488, 1209]],
        },
        { duration: 130, images: [[1612, 1209]], exitBranch: 94 },
        {
          duration: 80,
          images: [[1736, 1209]],
        },
        { duration: 210, images: [[1860, 1209]], exitBranch: 94 },
        {
          duration: 80,
          images: [[1736, 1209]],
        },
        { duration: 130, images: [[1612, 1209]], exitBranch: 94 },
        {
          duration: 210,
          images: [[1488, 1209]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 42, weight: 80 }] },
        },
        { duration: 80, images: [[1240, 1209]], exitBranch: 94 },
        {
          duration: 80,
          images: [[372, 1209]],
        },
        { duration: 80, images: [[248, 1209]] },
        { duration: 130, images: [[124, 1209]] },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        { duration: 100, images: [[248, 93]] },
        {
          duration: 100,
          images: [[1984, 1209]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 94, weight: 100 }] },
        },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 94, weight: 80 }] },
        },
        { duration: 130, images: [[2108, 1209]], exitBranch: 94 },
        {
          duration: 130,
          images: [[2232, 1209]],
        },
        { duration: 130, images: [[2356, 1209]] },
        {
          duration: 130,
          images: [[2480, 1209]],
          exitBranch: 70,
        },
        { duration: 130, images: [[2604, 1209]] },
        {
          duration: 130,
          images: [[2728, 1209]],
          exitBranch: 70,
        },
        { duration: 130, images: [[0, 1302]] },
        {
          duration: 130,
          images: [[2728, 1209]],
          exitBranch: 70,
        },
        {
          duration: 130,
          images: [[2604, 1209]],
          exitBranch: 70,
          branching: { branches: [{ frameIndex: 62, weight: 60 }] },
        },
        { duration: 130, images: [[2728, 1209]], exitBranch: 70 },
        {
          duration: 130,
          images: [[0, 1302]],
        },
        { duration: 130, images: [[2728, 1209]], exitBranch: 70 },
        {
          duration: 130,
          images: [[2604, 1209]],
        },
        { duration: 130, images: [[2480, 1209]] },
        {
          duration: 130,
          images: [[2356, 1209]],
        },
        { duration: 130, images: [[2232, 1209]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 94, weight: 100 }] },
        },
        {
          duration: 0,
          branching: { branches: [{ frameIndex: 94, weight: 65 }] },
          exitBranch: 94,
        },
        { duration: 100, images: [[124, 1302]] },
        { duration: 80, images: [[248, 1302]] },
        {
          duration: 130,
          images: [[372, 1302]],
        },
        { duration: 250, images: [[496, 1302]] },
        { duration: 80, images: [[620, 1302]] },
        {
          duration: 80,
          images: [[744, 1302]],
        },
        { duration: 130, images: [[868, 1302]] },
        { duration: 100, images: [[992, 1302]] },
        {
          duration: 100,
          images: [[1116, 1302]],
        },
        {
          duration: 500,
          images: [[992, 1302]],
          exitBranch: 86,
          branching: {
            branches: [
              { frameIndex: 85, weight: 95 },
              { frameIndex: 84, weight: 4 },
            ],
          },
        },
        { duration: 130, images: [[868, 1302]] },
        { duration: 80, images: [[744, 1302]] },
        {
          duration: 80,
          images: [[620, 1302]],
        },
        { duration: 250, images: [[496, 1302]] },
        { duration: 130, images: [[372, 1302]] },
        {
          duration: 130,
          images: [[2232, 1209]],
        },
        { duration: 100, images: [[124, 1302]] },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 94,
          branching: { branches: [{ frameIndex: 94, weight: 100 }] },
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Processing: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 130,
          images: [[124, 0]],
        },
        { duration: 200, images: [[248, 0]] },
        {
          duration: 160,
          images: [[372, 0]],
          exitBranch: 35,
        },
        { duration: 130, images: [[496, 0]] },
        {
          duration: 260,
          images: [[620, 0]],
          exitBranch: 35,
        },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 6, weight: 50 },
              { frameIndex: 12, weight: 40 },
            ],
          },
        },
        { duration: 260, images: [[620, 0]], exitBranch: 35 },
        {
          duration: 260,
          images: [[496, 0]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 8, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[620, 0]],
          exitBranch: 35,
          branching: { branches: [{ frameIndex: 9, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 11,
          branching: { branches: [{ frameIndex: 5, weight: 80 }] },
        },
        { duration: 130, images: [[868, 0]], exitBranch: 35 },
        {
          duration: 130,
          images: [[992, 0]],
        },
        { duration: 130, images: [[1116, 0]] },
        { duration: 130, images: [[1240, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
          exitBranch: 32,
        },
        { duration: 130, images: [[1488, 0]] },
        { duration: 130, images: [[1612, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 330,
          images: [[1984, 0]],
          exitBranch: 27,
          branching: { branches: [{ frameIndex: 20, weight: 75 }] },
        },
        { duration: 200, images: [[2108, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
          sound: "7",
        },
        { duration: 200, images: [[2356, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
          branching: { branches: [{ frameIndex: 23, weight: 60 }] },
        },
        {
          duration: 200,
          images: [[2108, 0]],
          exitBranch: 26,
          branching: {
            branches: [
              { frameIndex: 25, weight: 50 },
              {
                frameIndex: 20,
                weight: 25,
              },
              { frameIndex: 21, weight: 18 },
            ],
          },
        },
        { duration: 130, images: [[1984, 0]] },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1612, 0]] },
        { duration: 130, images: [[1488, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
        },
        { duration: 130, images: [[1240, 0]] },
        { duration: 130, images: [[1116, 0]] },
        {
          duration: 130,
          images: [[992, 0]],
          exitBranch: 36,
        },
        {
          duration: 130,
          images: [[868, 0]],
          exitBranch: 36,
          branching: { branches: [{ frameIndex: 5, weight: 100 }] },
        },
        { duration: 130, images: [[2480, 0]] },
        { duration: 130, images: [[2604, 0]] },
        {
          duration: 130,
          images: [[2728, 0]],
        },
        { duration: 130, images: [[0, 93]] },
        {
          duration: 130,
          images: [[124, 93]],
          exitBranch: 41,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookUpRight: {
      frames: [
        { duration: 60, images: [[1736, 372]] },
        {
          duration: 80,
          images: [[1984, 372]],
        },
        { duration: 80, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[1364, 930]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 80, images: [[2604, 837]] },
        {
          duration: 80,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 60, images: [[1736, 372]] },
      ],
    },
    Idle7: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 32,
          branching: { branches: [{ frameIndex: 0, weight: 90 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 32,
          branching: {
            branches: [
              { frameIndex: 0, weight: 90 },
              { frameIndex: 32, weight: 7 },
            ],
          },
        },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 32,
          branching: {
            branches: [
              { frameIndex: 3, weight: 40 },
              { frameIndex: 31, weight: 60 },
            ],
          },
        },
        { duration: 130, images: [[1488, 1302]] },
        { duration: 80, images: [[1612, 1302]] },
        {
          duration: 80,
          images: [[1736, 1302]],
        },
        { duration: 80, images: [[1860, 1302]] },
        { duration: 80, images: [[1984, 1302]] },
        {
          duration: 80,
          images: [[2108, 1302]],
        },
        { duration: 80, images: [[2232, 1302]] },
        { duration: 80, images: [[2356, 1302]] },
        {
          duration: 80,
          images: [[2480, 1302]],
        },
        { duration: 130, images: [[2604, 1302]] },
        { duration: 160, images: [[2728, 1302]] },
        {
          duration: 80,
          images: [[0, 1395]],
        },
        { duration: 80, images: [[124, 1395]], exitBranch: 20 },
        {
          duration: 130,
          images: [[248, 1395]],
        },
        { duration: 130, images: [[372, 1395]], exitBranch: 20 },
        {
          duration: 130,
          images: [[124, 1395]],
        },
        {
          duration: 130,
          images: [[0, 1395]],
          exitBranch: 20,
          branching: { branches: [{ frameIndex: 18, weight: 85 }] },
        },
        { duration: 130, images: [[2728, 1302]] },
        {
          duration: 130,
          images: [[2604, 1302]],
        },
        { duration: 130, images: [[2480, 1302]] },
        {
          duration: 130,
          images: [[2356, 1302]],
        },
        { duration: 130, images: [[2232, 1302]] },
        {
          duration: 130,
          images: [[2108, 1302]],
        },
        { duration: 130, images: [[1984, 1302]] },
        {
          duration: 130,
          images: [[1860, 1302]],
        },
        { duration: 130, images: [[1736, 1302]] },
        {
          duration: 130,
          images: [[1612, 1302]],
        },
        { duration: 130, images: [[1488, 1302]] },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 32,
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Idle6: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 22,
          branching: { branches: [{ frameIndex: 0, weight: 90 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 22,
          branching: {
            branches: [
              { frameIndex: 0, weight: 75 },
              { frameIndex: 22, weight: 17 },
            ],
          },
        },
        {
          duration: 0,
          images: [[0, 0]],
          exitBranch: 22,
          branching: {
            branches: [
              { frameIndex: 3, weight: 20 },
              { frameIndex: 22, weight: 80 },
            ],
          },
        },
        { duration: 130, images: [[124, 1302]], exitBranch: 22 },
        {
          duration: 130,
          images: [[496, 1395]],
        },
        { duration: 130, images: [[620, 1395]] },
        { duration: 130, images: [[744, 1395]] },
        {
          duration: 130,
          images: [[868, 1395]],
        },
        {
          duration: 130,
          images: [[992, 1395]],
          exitBranch: 16,
          branching: { branches: [{ frameIndex: 8, weight: 85 }] },
        },
        { duration: 130, images: [[1116, 1395]] },
        {
          duration: 130,
          images: [[1240, 1395]],
          exitBranch: 16,
        },
        { duration: 130, images: [[1364, 1395]] },
        {
          duration: 130,
          images: [[1116, 1395]],
          exitBranch: 16,
          branching: { branches: [{ frameIndex: 9, weight: 90 }] },
        },
        { duration: 130, images: [[1240, 1395]] },
        {
          duration: 130,
          images: [[1364, 1395]],
          exitBranch: 16,
        },
        {
          duration: 0,
          images: [[992, 1395]],
          exitBranch: 16,
          branching: {
            branches: [
              { frameIndex: 15, weight: 90 },
              {
                frameIndex: 8,
                weight: 5,
              },
              { frameIndex: 9, weight: 2 },
            ],
          },
        },
        { duration: 130, images: [[868, 1395]] },
        { duration: 130, images: [[744, 1395]] },
        {
          duration: 130,
          images: [[620, 1395]],
        },
        { duration: 130, images: [[496, 1395]] },
        { duration: 130, images: [[124, 1302]] },
        {
          duration: 130,
          images: [[1984, 372]],
          exitBranch: 22,
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Idle5: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 31,
          branching: { branches: [{ frameIndex: 0, weight: 90 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 31,
          branching: {
            branches: [
              { frameIndex: 0, weight: 85 },
              { frameIndex: 31, weight: 10 },
            ],
          },
        },
        { duration: 130, images: [[124, 1209]] },
        { duration: 80, images: [[248, 1209]] },
        {
          duration: 80,
          images: [[372, 1209]],
        },
        { duration: 130, images: [[496, 1209]], exitBranch: 24 },
        {
          duration: 210,
          images: [[620, 1209]],
        },
        { duration: 130, images: [[744, 1209]], exitBranch: 24 },
        {
          duration: 130,
          images: [[868, 1209]],
        },
        { duration: 210, images: [[992, 1209]], exitBranch: 24 },
        {
          duration: 80,
          images: [[868, 1209]],
        },
        { duration: 130, images: [[744, 1209]], exitBranch: 24 },
        {
          duration: 210,
          images: [[620, 1209]],
          exitBranch: 24,
          branching: { branches: [{ frameIndex: 6, weight: 90 }] },
        },
        { duration: 130, images: [[1116, 1209]], exitBranch: 24 },
        {
          duration: 80,
          images: [[1240, 1209]],
        },
        { duration: 130, images: [[1364, 1209]], exitBranch: 24 },
        {
          duration: 210,
          images: [[1488, 1209]],
        },
        { duration: 130, images: [[1612, 1209]], exitBranch: 24 },
        {
          duration: 80,
          images: [[1736, 1209]],
        },
        { duration: 210, images: [[1860, 1209]], exitBranch: 24 },
        {
          duration: 80,
          images: [[1736, 1209]],
        },
        { duration: 130, images: [[1612, 1209]], exitBranch: 24 },
        {
          duration: 210,
          images: [[1488, 1209]],
          exitBranch: 24,
          branching: { branches: [{ frameIndex: 16, weight: 90 }] },
        },
        { duration: 80, images: [[1240, 1209]], exitBranch: 24 },
        {
          duration: 80,
          images: [[372, 1209]],
        },
        { duration: 80, images: [[248, 1209]] },
        { duration: 130, images: [[124, 1209]] },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        { duration: 100, images: [[248, 93]] },
        {
          duration: 100,
          images: [[1984, 1209]],
          exitBranch: 31,
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Idle4: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 0, weight: 85 },
              { frameIndex: 1, weight: 13 },
            ],
          },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 0, weight: 70 },
              { frameIndex: 13, weight: 20 },
            ],
          },
        },
        { duration: 100, images: [[1612, 1116]], exitBranch: 13 },
        {
          duration: 130,
          images: [[2108, 1116]],
          exitBranch: 13,
        },
        { duration: 160, images: [[2232, 1116]] },
        {
          duration: 130,
          images: [[2356, 1116]],
        },
        { duration: 130, images: [[2480, 1116]] },
        {
          duration: 130,
          images: [[2604, 1116]],
          exitBranch: 13,
        },
        { duration: 130, images: [[2728, 1116]] },
        { duration: 130, images: [[0, 1209]] },
        {
          duration: 130,
          images: [[2728, 1116]],
        },
        { duration: 130, images: [[2604, 1116]] },
        {
          duration: 110,
          images: [[2480, 1116]],
          exitBranch: 13,
          branching: { branches: [{ frameIndex: 4, weight: 90 }] },
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Idle3: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 21,
          branching: { branches: [{ frameIndex: 0, weight: 95 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 21,
          branching: {
            branches: [
              { frameIndex: 0, weight: 90 },
              { frameIndex: 21, weight: 5 },
            ],
          },
        },
        { duration: 100, images: [[1612, 1116]], exitBranch: 21 },
        {
          duration: 130,
          images: [[2108, 1209]],
          exitBranch: 21,
        },
        { duration: 130, images: [[2232, 1209]] },
        {
          duration: 130,
          images: [[2356, 1209]],
        },
        { duration: 130, images: [[2480, 1209]], exitBranch: 16 },
        {
          duration: 130,
          images: [[2604, 1209]],
        },
        { duration: 130, images: [[2728, 1209]], exitBranch: 16 },
        {
          duration: 130,
          images: [[0, 1302]],
        },
        { duration: 130, images: [[2728, 1209]], exitBranch: 16 },
        {
          duration: 130,
          images: [[2604, 1209]],
          exitBranch: 16,
          branching: { branches: [{ frameIndex: 8, weight: 60 }] },
        },
        { duration: 130, images: [[2728, 1209]], exitBranch: 16 },
        {
          duration: 130,
          images: [[0, 1302]],
        },
        { duration: 130, images: [[2728, 1209]], exitBranch: 16 },
        {
          duration: 130,
          images: [[2604, 1209]],
        },
        { duration: 130, images: [[2480, 1209]] },
        {
          duration: 130,
          images: [[2356, 1209]],
        },
        { duration: 130, images: [[2232, 1209]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 21,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Idle2: {
      frames: [
        {
          duration: 100,
          images: [[0, 0]],
          branching: { branches: [{ frameIndex: 0, weight: 85 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 20,
          branching: {
            branches: [
              { frameIndex: 0, weight: 75 },
              { frameIndex: 20, weight: 10 },
            ],
          },
        },
        {
          duration: 130,
          images: [[1240, 1302]],
          exitBranch: 20,
          branching: { branches: [{ frameIndex: 13, weight: 50 }] },
        },
        { duration: 130, images: [[1364, 1302]] },
        {
          duration: 130,
          images: [[1488, 1395]],
        },
        { duration: 130, images: [[1612, 1395]] },
        {
          duration: 130,
          images: [[1736, 1395]],
        },
        { duration: 130, images: [[1860, 1395]] },
        {
          duration: 330,
          images: [[1984, 1395]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 8, weight: 90 }] },
        },
        { duration: 100, images: [[2108, 1395]] },
        {
          duration: 130,
          images: [[2232, 1395]],
        },
        { duration: 130, images: [[2356, 1395]], exitBranch: 16 },
        {
          duration: 130,
          images: [[2480, 1395]],
        },
        { duration: 130, images: [[2604, 1395]] },
        {
          duration: 1000,
          images: [[2728, 1395]],
          exitBranch: 15,
          branching: { branches: [{ frameIndex: 14, weight: 90 }] },
        },
        { duration: 100, images: [[2604, 1395]] },
        { duration: 100, images: [[496, 93]] },
        {
          duration: 100,
          images: [[372, 93]],
        },
        { duration: 100, images: [[248, 93]] },
        {
          duration: 100,
          images: [[1984, 1209]],
          exitBranch: 20,
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Idle1: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 21,
          branching: { branches: [{ frameIndex: 0, weight: 90 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 21,
          branching: {
            branches: [
              { frameIndex: 0, weight: 75 },
              { frameIndex: 21, weight: 10 },
            ],
          },
        },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 21,
          branching: { branches: [{ frameIndex: 3, weight: 40 }] },
        },
        { duration: 100, images: [[124, 1302]] },
        { duration: 80, images: [[248, 1302]] },
        {
          duration: 130,
          images: [[372, 1302]],
        },
        { duration: 250, images: [[496, 1302]] },
        { duration: 80, images: [[620, 1302]] },
        {
          duration: 80,
          images: [[744, 1302]],
        },
        { duration: 130, images: [[868, 1302]] },
        { duration: 100, images: [[992, 1302]] },
        {
          duration: 100,
          images: [[1116, 1302]],
        },
        {
          duration: 500,
          images: [[992, 1302]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 12, weight: 95 },
              { frameIndex: 11, weight: 4 },
            ],
          },
        },
        { duration: 130, images: [[868, 1302]] },
        { duration: 80, images: [[744, 1302]] },
        {
          duration: 80,
          images: [[620, 1302]],
        },
        { duration: 250, images: [[496, 1302]] },
        { duration: 130, images: [[372, 1302]] },
        {
          duration: 130,
          images: [[2232, 1209]],
        },
        { duration: 100, images: [[124, 1302]] },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 21,
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Idle0: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          branching: { branches: [{ frameIndex: 0, weight: 90 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          branching: { branches: [{ frameIndex: 0, weight: 70 }] },
        },
      ],
    },
    Idle9: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        { duration: 130, images: [[124, 0]] },
        {
          duration: 200,
          images: [[248, 0]],
        },
        { duration: 160, images: [[372, 0]], exitBranch: 35 },
        {
          duration: 130,
          images: [[496, 0]],
        },
        { duration: 260, images: [[620, 0]], exitBranch: 35 },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 6, weight: 50 },
              { frameIndex: 12, weight: 40 },
            ],
          },
        },
        { duration: 260, images: [[620, 0]], exitBranch: 35 },
        {
          duration: 260,
          images: [[496, 0]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 8, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[620, 0]],
          exitBranch: 35,
          branching: { branches: [{ frameIndex: 9, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 11,
          branching: { branches: [{ frameIndex: 5, weight: 80 }] },
        },
        { duration: 130, images: [[868, 0]], exitBranch: 35 },
        {
          duration: 130,
          images: [[992, 0]],
        },
        { duration: 130, images: [[1116, 0]] },
        { duration: 130, images: [[1240, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
          exitBranch: 32,
        },
        { duration: 130, images: [[1488, 0]] },
        { duration: 130, images: [[1612, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 330,
          images: [[1984, 0]],
          exitBranch: 27,
          branching: { branches: [{ frameIndex: 20, weight: 75 }] },
        },
        { duration: 200, images: [[2108, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
        },
        { duration: 200, images: [[2356, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
          branching: { branches: [{ frameIndex: 23, weight: 60 }] },
        },
        {
          duration: 200,
          images: [[2108, 0]],
          exitBranch: 26,
          branching: {
            branches: [
              { frameIndex: 25, weight: 50 },
              {
                frameIndex: 20,
                weight: 25,
              },
              { frameIndex: 21, weight: 18 },
            ],
          },
        },
        { duration: 130, images: [[1984, 0]] },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1612, 0]] },
        { duration: 130, images: [[1488, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
        },
        { duration: 130, images: [[1240, 0]] },
        { duration: 130, images: [[1116, 0]] },
        {
          duration: 130,
          images: [[992, 0]],
          exitBranch: 36,
        },
        {
          duration: 130,
          images: [[868, 0]],
          exitBranch: 36,
          branching: { branches: [{ frameIndex: 5, weight: 100 }] },
        },
        { duration: 130, images: [[2480, 0]] },
        { duration: 130, images: [[2604, 0]] },
        {
          duration: 130,
          images: [[2728, 0]],
        },
        { duration: 130, images: [[0, 93]] },
        {
          duration: 130,
          images: [[124, 93]],
          exitBranch: 41,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Idle8: {
      frames: [
        {
          duration: 330,
          images: [[1736, 372]],
          exitBranch: 13,
          branching: { branches: [{ frameIndex: 0, weight: 50 }] },
        },
        {
          duration: 130,
          images: [[1860, 372]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 0, weight: 80 },
              { frameIndex: 13, weight: 10 },
            ],
          },
        },
        {
          duration: 100,
          images: [[1612, 1116]],
          exitBranch: 13,
          branching: {
            branches: [
              { frameIndex: 3, weight: 20 },
              { frameIndex: 12, weight: 80 },
            ],
          },
        },
        { duration: 200, images: [[1984, 372]], exitBranch: 13 },
        {
          duration: 130,
          images: [[1736, 1116]],
        },
        {
          duration: 500,
          images: [[1364, 930]],
          exitBranch: 6,
          branching: { branches: [{ frameIndex: 5, weight: 85 }] },
        },
        {
          duration: 330,
          images: [[1860, 1116]],
          exitBranch: 10,
          branching: { branches: [{ frameIndex: 6, weight: 90 }] },
        },
        {
          duration: 80,
          images: [[2604, 837]],
          exitBranch: 11,
          branching: {
            branches: [
              { frameIndex: 5, weight: 50 },
              { frameIndex: 6, weight: 25 },
            ],
          },
        },
        {
          duration: 130,
          images: [[2728, 837]],
          exitBranch: 10,
          branching: {
            branches: [
              { frameIndex: 8, weight: 85 },
              {
                frameIndex: 5,
                weight: 7,
              },
              { frameIndex: 11, weight: 8 },
            ],
          },
        },
        {
          duration: 500,
          images: [[1984, 1116]],
          exitBranch: 11,
          branching: {
            branches: [
              { frameIndex: 9, weight: 85 },
              { frameIndex: 8, weight: 7 },
            ],
          },
        },
        {
          duration: 80,
          images: [[2604, 837]],
          exitBranch: 11,
          branching: {
            branches: [
              { frameIndex: 9, weight: 50 },
              { frameIndex: 8, weight: 25 },
            ],
          },
        },
        { duration: 100, images: [[1984, 372]], exitBranch: 13 },
        {
          duration: 100,
          images: [[1612, 1116]],
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    LookLeft: {
      frames: [
        { duration: 60, images: [[1736, 372]] },
        {
          duration: 60,
          images: [[1984, 372]],
        },
        { duration: 80, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[0, 1488]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 80, images: [[2604, 837]] },
        {
          duration: 80,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 60, images: [[1736, 372]] },
      ],
    },
    LookUpLeft: {
      frames: [
        { duration: 60, images: [[1736, 372]] },
        {
          duration: 80,
          images: [[1984, 372]],
        },
        { duration: 80, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[124, 1488]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 80, images: [[2604, 837]] },
        {
          duration: 80,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 60, images: [[1736, 372]] },
      ],
    },
    CheckingSomething: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 36,
        },
        { duration: 130, images: [[248, 1488]] },
        { duration: 80, images: [[372, 1488]] },
        {
          duration: 80,
          images: [[496, 1488]],
        },
        { duration: 80, images: [[620, 1488]] },
        { duration: 130, images: [[744, 1488]] },
        {
          duration: 80,
          images: [[868, 1488]],
        },
        { duration: 80, images: [[992, 1488]] },
        {
          duration: 80,
          images: [[1116, 1488]],
          sound: "4",
        },
        { duration: 80, images: [[1240, 1488]] },
        {
          duration: 80,
          images: [[1364, 1488]],
          exitBranch: 26,
        },
        { duration: 130, images: [[1488, 1488]], exitBranch: 16 },
        {
          duration: 750,
          images: [[1612, 1488]],
          exitBranch: 16,
          branching: { branches: [{ frameIndex: 15, weight: 65 }] },
        },
        { duration: 80, images: [[1736, 1488]], exitBranch: 26 },
        {
          duration: 80,
          images: [[1860, 1488]],
        },
        { duration: 80, images: [[1984, 1488]], exitBranch: 21 },
        {
          duration: 750,
          images: [[2108, 1488]],
          exitBranch: 20,
          branching: { branches: [{ frameIndex: 19, weight: 65 }] },
        },
        { duration: 130, images: [[1984, 1488]], exitBranch: 26 },
        {
          duration: 100,
          images: [[1860, 1488]],
        },
        { duration: 100, images: [[1736, 1488]], exitBranch: 26 },
        {
          duration: 750,
          images: [[1612, 1488]],
          exitBranch: 26,
          branching: {
            branches: [
              { frameIndex: 23, weight: 65 },
              { frameIndex: 16, weight: 35 },
            ],
          },
        },
        {
          duration: 130,
          images: [[1488, 1488]],
          exitBranch: 25,
          branching: { branches: [{ frameIndex: 16, weight: 65 }] },
        },
        { duration: 100, images: [[1364, 1488]] },
        {
          duration: 100,
          images: [[1240, 1488]],
        },
        { duration: 100, images: [[1116, 1488]] },
        {
          duration: 100,
          images: [[992, 1488]],
          sound: "13",
        },
        { duration: 100, images: [[868, 1488]] },
        { duration: 100, images: [[744, 1488]] },
        {
          duration: 100,
          images: [[620, 1488]],
        },
        { duration: 100, images: [[496, 1488]] },
        { duration: 100, images: [[372, 1488]] },
        {
          duration: 100,
          images: [[248, 1488]],
        },
        { duration: 100, images: [[620, 93]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 38,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Hearing_1: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 130,
          images: [[1116, 372]],
        },
        {
          duration: 450,
          images: [
            [1364, 372],
            [1240, 372],
          ],
          exitBranch: 6,
          branching: {
            branches: [
              { frameIndex: 2, weight: 75 },
              { frameIndex: 5, weight: 10 },
            ],
          },
        },
        {
          duration: 350,
          images: [
            [1488, 372],
            [1240, 372],
          ],
          exitBranch: 6,
          branching: {
            branches: [
              { frameIndex: 3, weight: 80 },
              { frameIndex: 2, weight: 3 },
            ],
          },
        },
        {
          duration: 450,
          images: [
            [1612, 372],
            [1240, 372],
          ],
          exitBranch: 6,
          branching: {
            branches: [
              { frameIndex: 4, weight: 89 },
              {
                frameIndex: 3,
                weight: 10,
              },
              { frameIndex: 2, weight: 1 },
            ],
          },
        },
        {
          duration: 350,
          images: [
            [1488, 372],
            [1240, 372],
          ],
          exitBranch: 6,
          branching: {
            branches: [
              { frameIndex: 5, weight: 60 },
              { frameIndex: 4, weight: 40 },
            ],
          },
        },
        { duration: 100, images: [[1364, 372]] },
        { duration: 100, images: [[1116, 372]] },
        {
          duration: 100,
          images: [[1612, 1116]],
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    GetWizardy: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 15,
        },
        { duration: 130, images: [[2232, 1488]] },
        { duration: 80, images: [[2356, 1488]] },
        {
          duration: 80,
          images: [[2480, 1488]],
        },
        { duration: 80, images: [[2604, 1488]] },
        { duration: 200, images: [[2728, 1488]] },
        {
          duration: 330,
          images: [[2728, 1488]],
        },
        { duration: 100, images: [[2604, 1488]] },
        {
          duration: 100,
          images: [[2480, 1488]],
        },
        { duration: 100, images: [[2356, 1488]] },
        {
          duration: 100,
          images: [[2232, 1488]],
        },
        { duration: 100, images: [[620, 93]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 17,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    GestureLeft: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 16,
        },
        { duration: 130, images: [[0, 1581]] },
        { duration: 130, images: [[124, 1581]] },
        {
          duration: 130,
          images: [[248, 1581]],
        },
        { duration: 130, images: [[372, 1581]] },
        { duration: 160, images: [[496, 1581]] },
        {
          duration: 1000,
          images: [[620, 1581]],
        },
        { duration: 160, images: [[496, 1581]] },
        { duration: 130, images: [[372, 1581]] },
        {
          duration: 130,
          images: [[248, 1581]],
        },
        { duration: 130, images: [[124, 1581]] },
        { duration: 130, images: [[0, 1581]] },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 18,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Wave: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 130,
          images: [[744, 1581]],
        },
        { duration: 80, images: [[868, 1581]] },
        { duration: 130, images: [[992, 1581]] },
        {
          duration: 80,
          images: [[1116, 1581]],
          exitBranch: 11,
        },
        { duration: 80, images: [[1240, 1581]] },
        {
          duration: 80,
          images: [[1364, 1581]],
          exitBranch: 11,
        },
        { duration: 80, images: [[1488, 1581]] },
        {
          duration: 100,
          images: [[1364, 1581]],
          exitBranch: 11,
        },
        { duration: 100, images: [[1240, 1581]] },
        {
          duration: 100,
          images: [[1116, 1581]],
        },
        { duration: 100, images: [[992, 1581]] },
        { duration: 100, images: [[868, 1581]] },
        {
          duration: 100,
          images: [[744, 1581]],
          exitBranch: 37,
          branching: { branches: [{ frameIndex: 37, weight: 50 }] },
        },
        { duration: 100, images: [[1612, 1581]], exitBranch: 37 },
        {
          duration: 100,
          images: [[1736, 1581]],
        },
        { duration: 100, images: [[1860, 1581]] },
        {
          duration: 100,
          images: [[1984, 1581]],
        },
        { duration: 100, images: [[2108, 1581]] },
        {
          duration: 100,
          images: [[2232, 1581]],
        },
        { duration: 100, images: [[2356, 1581]] },
        {
          duration: 100,
          images: [[2480, 1581]],
        },
        { duration: 100, images: [[2604, 1581]] },
        {
          duration: 100,
          images: [[2728, 1581]],
        },
        { duration: 100, images: [[0, 1674]], sound: "18" },
        {
          duration: 100,
          images: [[124, 1674]],
        },
        { duration: 100, images: [[248, 1674]] },
        { duration: 120, images: [[372, 1674]] },
        {
          duration: 120,
          images: [[496, 1674]],
        },
        { duration: 120, images: [[620, 1674]] },
        { duration: 120, images: [[744, 1674]] },
        {
          duration: 100,
          images: [[868, 1674]],
        },
        { duration: 1000, images: [[992, 1674]], exitBranch: 35 },
        {
          duration: 140,
          images: [[1116, 1674]],
        },
        { duration: 130, images: [[1240, 1674]] },
        {
          duration: 120,
          images: [[1364, 1674]],
        },
        { duration: 100, images: [[1488, 1674]], exitBranch: 37 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Goodbye: {
      frames: [
        {
          duration: 100,
          images: [[1364, 558]],
          exitBranch: 1,
          sound: "12",
          branching: { branches: [{ frameIndex: 27, weight: 50 }] },
        },
        { duration: 100, images: [[248, 93]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
        },
        { duration: 80, images: [[1612, 1674]] },
        {
          duration: 130,
          images: [[1736, 1674]],
          sound: "23",
        },
        { duration: 160, images: [[1860, 1674]] },
        { duration: 130, images: [[1736, 1674]] },
        {
          duration: 80,
          images: [[1612, 1674]],
        },
        { duration: 200, images: [[1984, 1674]] },
        {
          duration: 130,
          images: [[2108, 1674]],
        },
        { duration: 130, images: [[2232, 1674]], sound: "3" },
        {
          duration: 10,
          images: [[2356, 1674]],
        },
        { duration: 10, images: [[2480, 1674]] },
        { duration: 10, images: [[2604, 1674]] },
        {
          duration: 10,
          images: [[2728, 1674]],
        },
        { duration: 10, images: [[0, 1767]] },
        { duration: 10, images: [[124, 1767]] },
        {
          duration: 10,
          images: [[248, 1767]],
        },
        { duration: 10, images: [[372, 1767]] },
        { duration: 10, images: [[496, 1767]] },
        {
          duration: 10,
          images: [[620, 1767]],
        },
        { duration: 10, images: [[744, 1767]] },
        { duration: 10, images: [[868, 1767]] },
        {
          duration: 10,
          images: [[992, 1767]],
        },
        { duration: 10, images: [[1116, 1767]] },
        {
          duration: 100,
          branching: { branches: [{ frameIndex: 61, weight: 100 }] },
          exitBranch: 61,
        },
        {
          duration: 100,
          images: [
            [1240, 1767],
            [1612, 1116],
          ],
          sound: "11",
        },
        {
          duration: 100,
          images: [
            [1364, 1767],
            [1612, 1116],
          ],
        },
        {
          duration: 100,
          images: [
            [1488, 1767],
            [1612, 1116],
          ],
        },
        {
          duration: 100,
          images: [
            [1612, 1767],
            [1488, 1767],
            [1612, 1116],
          ],
        },
        {
          duration: 100,
          images: [
            [1736, 1767],
            [1612, 1116],
            [1488, 1767],
          ],
        },
        {
          duration: 100,
          images: [
            [1984, 1767],
            [1612, 1116],
            [1860, 1767],
          ],
        },
        {
          duration: 100,
          images: [
            [2108, 1767],
            [1612, 1116],
            [1488, 1767],
          ],
        },
        {
          duration: 100,
          images: [
            [1984, 1767],
            [1612, 1116],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [2232, 1767],
            [744, 1581],
            [1488, 1767],
          ],
          exitBranch: 43,
          branching: { branches: [{ frameIndex: 43, weight: 40 }] },
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [868, 1581],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [992, 1581],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1116, 1581],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1116, 1581],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1364, 1581],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [1488, 1581],
            [1488, 1767],
          ],
          exitBranch: 42,
          branching: {
            branches: [
              { frameIndex: 38, weight: 30 },
              { frameIndex: 40, weight: 15 },
            ],
          },
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [2480, 1767],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2604, 1767],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2728, 1767],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [0, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [124, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 160,
          images: [
            [2356, 1767],
            [248, 1860],
            [1488, 1767],
          ],
          sound: "20",
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [372, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [496, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [620, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 160,
          images: [
            [2356, 1767],
            [744, 1860],
            [1488, 1767],
          ],
          sound: "2",
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [868, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [992, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1116, 1860],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1984, 1767],
            [1240, 1860],
            [1488, 1767],
          ],
          sound: "17",
        },
        {
          duration: 100,
          images: [
            [1736, 1767],
            [1488, 1767],
          ],
        },
        {
          duration: 100,
          images: [
            [1612, 1767],
            [1488, 1767],
          ],
        },
        { duration: 100, images: [[1488, 1767]], sound: "16" },
        {
          duration: 100,
          images: [[1364, 1767]],
        },
        { duration: 100, images: [[1240, 1767]] },
        { duration: 100 },
      ],
    },
    GestureRight: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 14,
        },
        { duration: 80, images: [[2356, 2697]] },
        { duration: 80, images: [[2480, 2697]] },
        {
          duration: 80,
          images: [[2604, 2697]],
        },
        { duration: 130, images: [[2728, 2697]] },
        { duration: 1000, images: [[0, 2790]] },
        {
          duration: 130,
          images: [[2728, 2697]],
        },
        { duration: 80, images: [[2604, 2697]] },
        { duration: 80, images: [[2480, 2697]] },
        {
          duration: 80,
          images: [[2356, 2697]],
        },
        { duration: 100, images: [[620, 93]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 16,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Writing: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 71,
        },
        { duration: 130, images: [[248, 1488]] },
        { duration: 80, images: [[372, 1488]] },
        {
          duration: 80,
          images: [[496, 1488]],
        },
        { duration: 130, images: [[620, 1488]] },
        { duration: 80, images: [[744, 1488]] },
        {
          duration: 80,
          images: [[1364, 1860]],
        },
        { duration: 80, images: [[1488, 1860]] },
        { duration: 80, images: [[1612, 1860]] },
        {
          duration: 500,
          images: [[1736, 1860]],
          exitBranch: 53,
        },
        { duration: 100, images: [[1860, 1860]] },
        {
          duration: 500,
          images: [[1984, 1860]],
          exitBranch: 53,
        },
        { duration: 130, images: [[2108, 1860]] },
        {
          duration: 130,
          images: [[2232, 1860]],
          exitBranch: 53,
          sound: "7",
        },
        { duration: 130, images: [[2356, 1860]] },
        {
          duration: 130,
          images: [[2480, 1860]],
          exitBranch: 53,
        },
        { duration: 200, images: [[2604, 1860]] },
        {
          duration: 130,
          images: [[2728, 1860]],
          exitBranch: 53,
        },
        { duration: 80, images: [[0, 1953]] },
        {
          duration: 160,
          images: [[124, 1953]],
          exitBranch: 53,
        },
        { duration: 200, images: [[248, 1953]] },
        {
          duration: 160,
          images: [[372, 1953]],
          exitBranch: 53,
        },
        { duration: 160, images: [[496, 1953]], sound: "4" },
        {
          duration: 160,
          images: [[620, 1953]],
          exitBranch: 53,
        },
        { duration: 160, images: [[744, 1953]] },
        {
          duration: 200,
          images: [[868, 1953]],
          exitBranch: 53,
        },
        { duration: 200, images: [[1736, 1860]] },
        {
          duration: 130,
          images: [[992, 1953]],
          exitBranch: 53,
        },
        { duration: 100, images: [[1860, 1860]] },
        {
          duration: 200,
          images: [[1984, 1860]],
          exitBranch: 53,
        },
        { duration: 200, images: [[1116, 1953]] },
        {
          duration: 130,
          images: [[1984, 1860]],
          exitBranch: 53,
        },
        { duration: 100, images: [[1860, 1860]] },
        {
          duration: 0,
          images: [[992, 1953]],
          exitBranch: 53,
          branching: { branches: [{ frameIndex: 43, weight: 10 }] },
        },
        { duration: 0, images: [[1736, 1860]] },
        {
          duration: 500,
          images: [[1984, 1860]],
          exitBranch: 53,
          branching: {
            branches: [
              { frameIndex: 38, weight: 80 },
              {
                frameIndex: 14,
                weight: 12,
              },
              { frameIndex: 41, weight: 7 },
            ],
          },
        },
        {
          duration: 500,
          images: [[1116, 1953]],
          exitBranch: 53,
          branching: {
            branches: [
              { frameIndex: 39, weight: 80 },
              { frameIndex: 41, weight: 10 },
            ],
          },
        },
        { duration: 80, images: [[1984, 1860]], exitBranch: 53 },
        {
          duration: 80,
          images: [[1860, 1860]],
          exitBranch: 53,
          branching: {
            branches: [
              { frameIndex: 39, weight: 70 },
              {
                frameIndex: 14,
                weight: 15,
              },
              { frameIndex: 38, weight: 13 },
            ],
          },
        },
        { duration: 80, images: [[992, 1953]], exitBranch: 53 },
        {
          duration: 0,
          images: [[1736, 1860]],
        },
        { duration: 130, images: [[1240, 1953]], exitBranch: 53 },
        {
          duration: 200,
          images: [[1364, 1953]],
        },
        { duration: 130, images: [[1488, 1953]], exitBranch: 53 },
        {
          duration: 130,
          images: [[1612, 1953]],
        },
        { duration: 130, images: [[1488, 1953]], exitBranch: 53 },
        {
          duration: 210,
          images: [[1364, 1953]],
        },
        {
          duration: 130,
          images: [[1240, 1953]],
          exitBranch: 53,
          branching: { branches: [{ frameIndex: 29, weight: 100 }] },
        },
        { duration: 80, images: [[1736, 1953]] },
        { duration: 30, images: [[1860, 1953]] },
        {
          duration: 130,
          images: [[1984, 1953]],
        },
        { duration: 80, images: [[2108, 1953]] },
        { duration: 80, images: [[2232, 1953]] },
        {
          duration: 80,
          images: [[2356, 1953]],
        },
        { duration: 160, images: [[2480, 1953]] },
        {
          duration: 130,
          images: [[2604, 1953]],
          sound: "13",
        },
        { duration: 80, images: [[2728, 1953]] },
        { duration: 500, images: [[0, 2046]] },
        {
          duration: 130,
          images: [[124, 2046]],
        },
        { duration: 80, images: [[248, 2046]] },
        { duration: 80, images: [[372, 2046]] },
        {
          duration: 80,
          images: [[496, 2046]],
        },
        { duration: 130, images: [[744, 1488]] },
        { duration: 80, images: [[620, 1488]] },
        {
          duration: 80,
          images: [[496, 1488]],
        },
        { duration: 80, images: [[372, 1488]] },
        { duration: 130, images: [[248, 1488]] },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 73,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookDownRight: {
      frames: [
        { duration: 60, images: [[1736, 372]] },
        {
          duration: 60,
          images: [[1984, 372]],
        },
        { duration: 60, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[620, 2046]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 60, images: [[2604, 837]] },
        {
          duration: 130,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 60, images: [[1736, 372]] },
      ],
    },
    GetArtsy: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 100,
          images: [[744, 2046]],
        },
        { duration: 100, images: [[868, 2046]] },
        {
          duration: 100,
          images: [[992, 2046]],
          exitBranch: 18,
        },
        { duration: 100, images: [[1116, 2046]] },
        {
          duration: 100,
          images: [[1240, 2046]],
          exitBranch: 15,
        },
        { duration: 160, images: [[1364, 2046]] },
        {
          duration: 160,
          images: [[1488, 2046]],
          exitBranch: 17,
        },
        { duration: 160, images: [[1612, 2046]] },
        {
          duration: 160,
          images: [[1736, 2046]],
          exitBranch: 17,
        },
        { duration: 160, images: [[1860, 2046]] },
        {
          duration: 160,
          images: [[1984, 2046]],
          exitBranch: 17,
        },
        { duration: 160, images: [[1860, 2046]] },
        {
          duration: 160,
          images: [[1736, 2046]],
          exitBranch: 17,
        },
        {
          duration: 160,
          images: [[1612, 2046]],
          exitBranch: 15,
          branching: { branches: [{ frameIndex: 6, weight: 100 }] },
        },
        { duration: 100, images: [[1240, 2046]], exitBranch: 17 },
        {
          duration: 100,
          images: [[1116, 2046]],
        },
        { duration: 100, images: [[992, 2046]], exitBranch: 19 },
        {
          duration: 100,
          images: [[744, 2046]],
          exitBranch: 19,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Show: {
      frames: [
        { duration: 10, sound: "12" },
        {
          duration: 10,
          images: [[992, 186]],
        },
        { duration: 10, images: [[868, 186]], sound: "22" },
        {
          duration: 10,
          images: [[744, 186]],
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookDown: {
      frames: [
        { duration: 330, images: [[1736, 372]] },
        {
          duration: 80,
          images: [[1984, 372]],
        },
        { duration: 80, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[2108, 2046]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 80, images: [[2604, 837]] },
        {
          duration: 80,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 330, images: [[1736, 372]] },
      ],
    },
    Searching: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 130,
          images: [[124, 0]],
        },
        { duration: 200, images: [[248, 0]] },
        {
          duration: 160,
          images: [[372, 0]],
          exitBranch: 35,
        },
        { duration: 130, images: [[496, 0]] },
        {
          duration: 260,
          images: [[620, 0]],
          exitBranch: 35,
        },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 7,
          branching: {
            branches: [
              { frameIndex: 6, weight: 50 },
              { frameIndex: 12, weight: 40 },
            ],
          },
        },
        { duration: 260, images: [[620, 0]], exitBranch: 35 },
        {
          duration: 260,
          images: [[496, 0]],
          exitBranch: 9,
          branching: { branches: [{ frameIndex: 8, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[620, 0]],
          exitBranch: 35,
          branching: { branches: [{ frameIndex: 9, weight: 50 }] },
        },
        {
          duration: 260,
          images: [[744, 0]],
          exitBranch: 11,
          branching: { branches: [{ frameIndex: 5, weight: 80 }] },
        },
        { duration: 130, images: [[868, 0]], exitBranch: 35 },
        {
          duration: 130,
          images: [[992, 0]],
        },
        { duration: 130, images: [[1116, 0]] },
        { duration: 130, images: [[1240, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
          exitBranch: 32,
        },
        { duration: 130, images: [[1488, 0]] },
        { duration: 130, images: [[1612, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 330,
          images: [[1984, 0]],
          exitBranch: 27,
          branching: { branches: [{ frameIndex: 20, weight: 75 }] },
        },
        { duration: 200, images: [[2108, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
          sound: "7",
        },
        { duration: 200, images: [[2356, 0]] },
        {
          duration: 200,
          images: [[2232, 0]],
          exitBranch: 26,
          branching: { branches: [{ frameIndex: 23, weight: 60 }] },
        },
        {
          duration: 200,
          images: [[2108, 0]],
          exitBranch: 26,
          branching: {
            branches: [
              { frameIndex: 25, weight: 50 },
              {
                frameIndex: 20,
                weight: 25,
              },
              { frameIndex: 21, weight: 18 },
            ],
          },
        },
        { duration: 130, images: [[1984, 0]] },
        { duration: 130, images: [[1860, 0]] },
        {
          duration: 130,
          images: [[1736, 0]],
        },
        { duration: 130, images: [[1612, 0]] },
        { duration: 130, images: [[1488, 0]] },
        {
          duration: 130,
          images: [[1364, 0]],
        },
        { duration: 130, images: [[1240, 0]] },
        { duration: 130, images: [[1116, 0]] },
        {
          duration: 130,
          images: [[992, 0]],
          exitBranch: 36,
        },
        {
          duration: 130,
          images: [[868, 0]],
          exitBranch: 36,
          branching: { branches: [{ frameIndex: 5, weight: 100 }] },
        },
        { duration: 130, images: [[2480, 0]] },
        { duration: 130, images: [[2604, 0]] },
        {
          duration: 130,
          images: [[2728, 0]],
        },
        { duration: 130, images: [[0, 93]] },
        {
          duration: 130,
          images: [[124, 93]],
          exitBranch: 41,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    EmptyTrash: {
      frames: [
        { duration: 100, images: [[0, 0]], sound: "12" },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 26,
        },
        {
          duration: 130,
          images: [
            [2356, 2046],
            [2232, 2046],
          ],
        },
        {
          duration: 80,
          images: [
            [2604, 2046],
            [2480, 2046],
          ],
          sound: "6",
        },
        {
          duration: 80,
          images: [
            [0, 2139],
            [2728, 2046],
          ],
        },
        {
          duration: 160,
          images: [
            [248, 2139],
            [124, 2139],
          ],
        },
        { duration: 210, images: [[372, 2139]] },
        { duration: 130, images: [[496, 2139]] },
        {
          duration: 80,
          images: [[620, 2139]],
        },
        { duration: 80, images: [[744, 2139]] },
        { duration: 130, images: [[868, 2139]] },
        {
          duration: 160,
          images: [[992, 2139]],
        },
        { duration: 210, images: [[1116, 2139]] },
        { duration: 80, images: [[1240, 2139]] },
        {
          duration: 130,
          images: [[1364, 2139]],
          sound: "10",
        },
        { duration: 130, images: [[1488, 2139]] },
        {
          duration: 250,
          images: [[1612, 2139]],
        },
        { duration: 130, images: [[1736, 2139]] },
        { duration: 80, images: [[1860, 2139]] },
        {
          duration: 230,
          images: [[1984, 2139]],
        },
        {
          duration: 330,
          images: [
            [0, 2139],
            [2108, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2604, 2046],
            [2232, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 2046],
            [2356, 2139],
          ],
        },
        {
          duration: 100,
          images: [[620, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          exitBranch: 28,
        },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    Greeting: {
      frames: [
        { duration: 100, sound: "12" },
        {
          duration: 100,
          images: [[1240, 1767]],
          sound: "11",
        },
        { duration: 100, images: [[1364, 1767]] },
        { duration: 100, images: [[2480, 2139]] },
        {
          duration: 0,
          images: [
            [1612, 1767],
            [2480, 2139],
          ],
        },
        {
          duration: 100,
          images: [
            [1736, 1767],
            [2480, 2139],
          ],
        },
        {
          duration: 100,
          images: [
            [1984, 1767],
            [2480, 2139],
          ],
        },
        {
          duration: 100,
          images: [
            [2108, 1767],
            [2480, 2139],
          ],
        },
        {
          duration: 100,
          images: [
            [1984, 1767],
            [2480, 2139],
          ],
        },
        {
          duration: 100,
          images: [
            [2232, 1767],
            [2480, 2139],
          ],
          branching: {
            branches: [
              { frameIndex: 59, weight: 25 },
              {
                frameIndex: 115,
                weight: 25,
              },
              { frameIndex: 146, weight: 25 },
            ],
          },
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2604, 2139],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2728, 2139],
            [2480, 2139],
          ],
          sound: "20",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [0, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [124, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [248, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [372, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [496, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [620, 2232],
            [2480, 2139],
          ],
          sound: "2",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [744, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [868, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [992, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [1116, 2232],
            [2480, 2139],
          ],
          sound: "20",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1240, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1364, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1488, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1612, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [1736, 2232],
            [2480, 2139],
          ],
          sound: "2",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1860, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1984, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2108, 2232],
            [2480, 2139],
          ],
          exitBranch: 34,
          sound: "17",
        },
        {
          duration: 100,
          images: [
            [2356, 1767],
            [2108, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [2232, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [2356, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [2480, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2604, 2232],
            [2480, 2139],
          ],
          sound: "21",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2728, 2232],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [0, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 380,
          images: [
            [2356, 1767],
            [124, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [248, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [372, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [496, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [620, 2325],
            [2480, 2139],
          ],
          sound: "17",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [744, 2325],
            [2480, 2139],
          ],
          exitBranch: 50,
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [868, 2325],
            [2480, 2139],
          ],
          sound: "5",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [992, 2325],
            [2480, 2139],
          ],
          exitBranch: 50,
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [868, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [992, 2325],
            [2480, 2139],
          ],
          exitBranch: 50,
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [868, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [992, 2325],
            [2480, 2139],
          ],
          exitBranch: 50,
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1116, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1240, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [2108, 1767],
            [1364, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [1612, 2325],
            [1488, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 1767],
            [1736, 2325],
            [2480, 2139],
          ],
        },
        {
          duration: 100,
          images: [
            [1612, 1767],
            [620, 93],
            [1860, 1767],
          ],
        },
        {
          duration: 100,
          images: [
            [372, 93],
            [1488, 1767],
          ],
          sound: "16",
        },
        {
          duration: 100,
          images: [
            [248, 93],
            [1364, 1767],
          ],
        },
        {
          duration: 100,
          images: [
            [1364, 558],
            [1240, 1767],
          ],
        },
        {
          duration: 100,
          images: [[1860, 2325]],
          exitBranch: 163,
          branching: { branches: [{ frameIndex: 163, weight: 100 }] },
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1984, 2325],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2108, 2325],
            [1488, 1767],
          ],
        },
        {
          duration: 160,
          images: [
            [2356, 1767],
            [2232, 2325],
            [1488, 1767],
          ],
          sound: "20",
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [2356, 2325],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2480, 2325],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2604, 2325],
            [1488, 1767],
          ],
        },
        {
          duration: 160,
          images: [
            [2356, 1767],
            [2728, 2325],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [0, 2418],
            [1488, 1767],
          ],
          sound: "2",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [124, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [248, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 160,
          images: [
            [2356, 1767],
            [372, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [496, 2418],
            [1488, 1767],
          ],
          sound: "20",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [620, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [744, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [2356, 1767],
            [868, 2418],
            [1488, 1767],
          ],
          sound: "17",
        },
        {
          duration: 160,
          images: [
            [1116, 2418],
            [992, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [1984, 1767],
            [1240, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 1767],
            [1364, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1612, 1767],
            [1488, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1612, 1767],
            [1488, 2418],
            [1488, 1767],
          ],
        },
        {
          duration: 210,
          images: [
            [1364, 1767],
            [1612, 2418],
          ],
          exitBranch: 99,
          sound: "16",
        },
        {
          duration: 130,
          images: [
            [1240, 1767],
            [1736, 2418],
          ],
        },
        {
          duration: 80,
          images: [[1860, 2418]],
        },
        { duration: 130, images: [[1984, 2418]] },
        {
          duration: 160,
          images: [[2108, 2418]],
        },
        { duration: 130, images: [[2232, 2418]] },
        { duration: 80, images: [[2356, 2418]] },
        {
          duration: 130,
          images: [[2480, 2418]],
        },
        { duration: 130, images: [[2480, 2418]] },
        {
          duration: 160,
          images: [[2604, 2418]],
        },
        { duration: 210, images: [[2728, 2418]] },
        { duration: 250, images: [[0, 2511]] },
        {
          duration: 130,
          images: [[124, 2511]],
          sound: "17",
        },
        { duration: 130, images: [[248, 2511]] },
        { duration: 130, images: [[372, 2511]] },
        {
          duration: 130,
          images: [[496, 2511]],
        },
        { duration: 750, images: [[620, 2511]] },
        { duration: 130, images: [[744, 2511]] },
        {
          duration: 130,
          images: [[868, 2511]],
        },
        { duration: 130, images: [[992, 2511]] },
        {
          duration: 130,
          images: [[1116, 2511]],
          exitBranch: 110,
        },
        { duration: 210, images: [[1240, 2511]] },
        { duration: 80, images: [[1364, 2511]] },
        {
          duration: 80,
          images: [[1488, 2511]],
        },
        { duration: 80, images: [[1612, 2511]] },
        { duration: 80, images: [[1736, 2511]] },
        {
          duration: 80,
          images: [[1488, 2511]],
        },
        { duration: 80, images: [[1612, 2511]] },
        { duration: 80, images: [[1736, 2511]] },
        {
          duration: 80,
          images: [[1860, 2511]],
        },
        { duration: 80, images: [[1984, 2511]] },
        { duration: 80, images: [[2108, 2511]] },
        {
          duration: 100,
          images: [[496, 93]],
        },
        { duration: 80, images: [[372, 93]] },
        { duration: 100, images: [[248, 93]] },
        {
          duration: 100,
          images: [[1364, 558]],
          exitBranch: 163,
          branching: { branches: [{ frameIndex: 163, weight: 100 }] },
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2232, 2511],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2356, 2511],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2480, 2511],
            [1488, 1767],
          ],
          sound: "20",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2604, 2511],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2728, 2511],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [0, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [124, 2604],
            [1488, 1767],
          ],
          sound: "2",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [248, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [372, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [496, 2604],
            [1488, 1767],
          ],
          sound: "17",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [620, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [744, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [868, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [992, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1116, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1240, 2604],
            [1488, 1767],
          ],
          sound: "19",
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1364, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1488, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1612, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1736, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1860, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [1984, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2108, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2232, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2356, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [2480, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1984, 1767],
            [2604, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 1767],
            [2728, 2604],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1612, 1767],
            [620, 93],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [372, 93],
            [1488, 1767],
          ],
          sound: "16",
        },
        {
          duration: 80,
          images: [
            [248, 93],
            [1364, 1767],
          ],
          exitBranch: 163,
          branching: { branches: [{ frameIndex: 163, weight: 100 }] },
        },
        {
          duration: 50,
          images: [
            [2356, 1767],
            [0, 2697],
            [1488, 1767],
          ],
          sound: "9",
        },
        {
          duration: 50,
          images: [
            [2356, 1767],
            [124, 2697],
            [1488, 1767],
          ],
        },
        {
          duration: 50,
          images: [
            [2356, 1767],
            [248, 2697],
            [1488, 1767],
          ],
        },
        {
          duration: 50,
          images: [
            [2356, 1767],
            [372, 2697],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [496, 2697],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [2356, 1767],
            [620, 2697],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1984, 1767],
            [744, 2697],
            [1488, 1767],
          ],
        },
        {
          duration: 80,
          images: [
            [1736, 1767],
            [1488, 1767],
            [868, 2697],
          ],
        },
        {
          duration: 130,
          images: [
            [1612, 1767],
            [992, 2697],
            [1488, 1767],
          ],
        },
        {
          duration: 130,
          images: [
            [1488, 1767],
            [1116, 2697],
          ],
          sound: "16",
        },
        {
          duration: 130,
          images: [
            [1364, 1767],
            [1240, 2697],
          ],
        },
        {
          duration: 130,
          images: [
            [1240, 1767],
            [1364, 2697],
          ],
        },
        { duration: 130, images: [[1488, 2697]] },
        {
          duration: 130,
          images: [[1612, 2697]],
        },
        { duration: 100, images: [[620, 93]] },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[248, 93]],
          branching: { branches: [{ frameIndex: 163, weight: 100 }] },
        },
        { duration: 100, images: [[1860, 2325]], exitBranch: 164 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    LookUp: {
      frames: [
        { duration: 60, images: [[1736, 372]] },
        {
          duration: 60,
          images: [[1984, 372]],
        },
        { duration: 80, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[1984, 1116]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 80, images: [[2604, 837]] },
        {
          duration: 80,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 60, images: [[1736, 372]] },
      ],
    },
    GestureDown: {
      frames: [
        { duration: 100, images: [[0, 0]] },
        {
          duration: 100,
          images: [[248, 93]],
        },
        { duration: 100, images: [[372, 93]] },
        {
          duration: 100,
          images: [[496, 93]],
          exitBranch: 14,
        },
        { duration: 130, images: [[1736, 2697]] },
        {
          duration: 130,
          images: [[1860, 2697]],
        },
        { duration: 130, images: [[1984, 2697]] },
        {
          duration: 160,
          images: [[2108, 2697]],
        },
        { duration: 1000, images: [[2232, 2697]] },
        {
          duration: 160,
          images: [[2108, 2697]],
        },
        { duration: 130, images: [[1984, 2697]] },
        {
          duration: 130,
          images: [[1860, 2697]],
        },
        { duration: 130, images: [[1736, 2697]] },
        { duration: 100, images: [[620, 93]] },
        {
          duration: 100,
          images: [[372, 93]],
        },
        { duration: 100, images: [[248, 93]], exitBranch: 16 },
        { duration: 100, images: [[0, 0]] },
      ],
    },
    RestPose: { frames: [{ duration: 100, images: [[0, 0]] }] },
    LookDownLeft: {
      frames: [
        { duration: 60, images: [[1736, 372]] },
        {
          duration: 80,
          images: [[1984, 372]],
        },
        { duration: 80, images: [[2604, 837]] },
        { duration: 130, images: [[2728, 837]] },
        {
          duration: 500,
          images: [[124, 2790]],
        },
        { duration: 130, images: [[2728, 837]] },
        { duration: 80, images: [[2604, 837]] },
        {
          duration: 130,
          images: [[1984, 372]],
          exitBranch: 8,
        },
        { duration: 80, images: [[1736, 372]] },
      ],
    },
  },
};
