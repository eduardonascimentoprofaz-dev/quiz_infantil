import { motion } from 'framer-motion';
import { useMascot } from '@/contexts/MascotContext';
import { Card } from '@/components/ui/card';

export default function MascotSelector() {
  const { gender, setGender } = useMascot();

  return (
    <div className="flex justify-center gap-4 mb-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card
          onClick={() => setGender('female')}
          className={`p-4 cursor-pointer border-4 transition-all ${
            gender === 'female'
              ? 'border-pink-500 bg-pink-50 shadow-lg'
              : 'border-gray-300 hover:border-pink-300'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">👧</div>
            <p className="font-bold text-gray-800">Feminino</p>
          </div>
        </Card>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card
          onClick={() => setGender('male')}
          className={`p-4 cursor-pointer border-4 transition-all ${
            gender === 'male'
              ? 'border-blue-500 bg-blue-50 shadow-lg'
              : 'border-gray-300 hover:border-blue-300'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">👦</div>
            <p className="font-bold text-gray-800">Masculino</p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
