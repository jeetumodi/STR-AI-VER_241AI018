import { Vortex } from "./ui/vortex";

export function Practice() {
  const problems = [
    {
      title: "1. Set Matrix Zeroes",
      description: "Set entire row and column to zero if an element is zero.",
      link: "https://leetcode.com/problems/set-matrix-zeroes/",
      difficulty: "Medium",
    },
    {
      title: "2. Pascal’s Triangle",
      description: "Generate Pascal’s Triangle up to the given number of rows.",
      link: "https://leetcode.com/problems/pascals-triangle/",
      difficulty: "Easy",
    },
    {
      title: "3. Next Permutation",
      description: "Rearrange numbers to the lexicographically next greater permutation.",
      link: "https://leetcode.com/problems/next-permutation/",
      difficulty: "Medium",
    },
    {
      title: "4. Kadane’s Algorithm",
      description: "Find the contiguous subarray with the maximum sum.",
      link: "https://leetcode.com/problems/maximum-subarray/",
      difficulty: "Easy",
    },
    {
      title: "5. Sort Colors",
      description: "Sort the array with 0s, 1s, and 2s using constant space.",
      link: "https://leetcode.com/problems/sort-colors/",
      difficulty: "Medium",
    },
    {
      title: "6. Stock Buy and Sell",
      description: "Find the best time to buy and sell stock for max profit.",
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      difficulty: "Easy",
    },
    {
      title: "7. Rotate Image",
      description: "Rotate the 2D matrix by 90 degrees clockwise in-place.",
      link: "https://leetcode.com/problems/rotate-image/",
      difficulty: "Medium",
    },
    {
      title: "8. Spiral Matrix",
      description: "Return all elements of the matrix in spiral order.",
      link: "https://leetcode.com/problems/spiral-matrix/",
      difficulty: "Medium",
    },
    {
      title: "9. Merge Intervals",
      description: "Merge all overlapping intervals.",
      link: "https://leetcode.com/problems/merge-intervals/",
      difficulty: "Medium",
    },
    {
      title: "10. Insert Interval",
      description: "Insert and merge a new interval into a sorted list of intervals.",
      link: "https://leetcode.com/problems/insert-interval/",
      difficulty: "Hard",
    },
    {
      title: "11. Missing Number",
      description: "Find the missing number in the range 0 to n.",
      link: "https://leetcode.com/problems/missing-number/",
      difficulty: "Easy",
    },
    {
      title: "12. Find Duplicate Number",
      description: "Return the duplicate number in the array.",
      link: "https://leetcode.com/problems/find-the-duplicate-number/",
      difficulty: "Medium",
    },
  ];

  const getCardBg = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-400/10 hover:bg-green-400/20";
      case "Medium":
        return "bg-orange-400/10 hover:bg-orange-400/20";
      case "Hard":
        return "bg-red-500/10 hover:bg-red-500/20";
      default:
        return "bg-white/10 hover:bg-white/20";
    }
  };

  return (
    <div className="w-full">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={220}
        className="flex flex-col items-center justify-start px-4 py-10 w-full"
      >
        <div className="max-w-3xl w-full flex flex-col gap-6">
          {problems.map((problem, index) => (
            <a
              key={index}
              href={problem.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block ${getCardBg(problem.difficulty)} text-white rounded-xl p-6 backdrop-blur transition-all duration-300`}
            >
              <h3 className="text-base font-semibold mb-1">{problem.title}</h3>
              <span className="inline-block text-xs font-semibold px-2 py-1 rounded bg-white/10 mb-2">
                {problem.difficulty}
              </span>
              <p className="text-sm text-gray-200">{problem.description}</p>
            </a>
          ))}
        </div>
      </Vortex>
    </div>
  );
}
