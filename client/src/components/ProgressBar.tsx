import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  current: number;
  total: number;
  score: number;
}

export default function ProgressBar({
  progress,
  current,
  total,
  score,
}: ProgressBarProps) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 px-3 sm:px-4 py-3 sm:py-4 rounded-b-2xl shadow-sm">
      {/* Score and Question Counter */}
      <div className="flex justify-between items-center mb-2 sm:mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl">⭐</span>
          <span className="text-lg sm:text-xl font-bold text-purple-600">
            {score}
          </span>
        </div>
        <div className="text-xs sm:text-sm font-semibold text-gray-600">
          {current} de {total}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
