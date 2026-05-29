import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const STEPS = [
  'Analyzing your business type…',
  'Identifying your ideal customer…',
  'Crafting social media strategy…',
  'Building your content calendar…',
  'Writing email templates…',
  'Creating Google & Facebook ad copy…',
  'Researching SEO keywords…',
  'Calculating your marketing score…',
  'Finalizing your strategy…',
];

export default function LoadingScreen({ message }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [msgVisible, setMsgVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgVisible(false);
      setTimeout(() => {
        setStepIdx(i => (i + 1) % STEPS.length);
        setMsgVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => Math.min(p + Math.random() * 3, 92));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">

      {/* Spinner + icon */}
      <div className="relative w-24 h-24 mb-10">
        {/* Spinning arc */}
        <div className="absolute inset-0 rounded-full border-4 border-slate-200 border-t-emerald-500 animate-spin" />
        {/* Subtle second ring, slower, for depth */}
        <div className="absolute inset-2 rounded-full border-2 border-emerald-100 border-b-emerald-300 animate-spin-rev" />
        {/* Centered icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}
          >
            <Sparkles size={22} className="text-white" />
          </div>
        </div>
      </div>

      {/* Headline */}
      <h2 className="text-xl font-bold text-slate-800 mb-2 text-center">
        {message || 'Building your strategy'}
      </h2>

      {/* Rotating step with fade */}
      <div className="h-5 flex items-center justify-center mb-10">
        <p
          className="text-slate-500 text-sm text-center transition-opacity duration-300"
          style={{ opacity: msgVisible ? 1 : 0 }}
        >
          {STEPS[stepIdx]}
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 sm:w-72 h-1.5 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full shimmer-bar"
          style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
        />
      </div>

      <p className="mt-3 text-slate-400 text-xs">This usually takes 15–30 seconds</p>
    </div>
  );
}
