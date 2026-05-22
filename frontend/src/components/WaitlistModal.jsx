import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function WaitlistModal({ onClose }) {
  const [name,       setName]       = useState('');
  const [email,      setEmail]      = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done,       setDone]       = useState(false);
  const [error,      setError]      = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || submitting) return;
    setSubmitting(true);
    setError('');

    try {
      if (supabase) {
        const { error: dbErr } = await supabase
          .from('waitlist')
          .insert({ name: name.trim(), email: email.trim().toLowerCase() });

        // 23505 = unique_violation — email already on the list, treat as success
        if (dbErr && dbErr.code !== '23505') {
          throw dbErr;
        }
      }
      // If Supabase is not configured (no env vars), skip the DB write but still
      // show the success UI — handy for local dev before credentials are added.
      setDone(true);
    } catch (err) {
      console.error('Waitlist error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(14px)' }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md animate-slide-up rounded-3xl bg-white"
        style={{ border: '1.5px solid #e5e7eb', boxShadow: '0 32px 80px rgba(0,0,0,0.2)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
          aria-label="Close"
        >
          ✕
        </button>

        {done ? (
          /* ── Success state ── */
          <div className="px-8 py-10 text-center">
            {/* Animated checkmark ring */}
            <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
              style={{ background: 'linear-gradient(135deg,#ECFDF5,#D1FAE5)', border: '2px solid #A7F3D0', boxShadow: '0 0 0 8px rgba(16,185,129,0.08)' }}>
              🎉
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">You're on the list!</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-1">
              We'll notify you when Pro launches.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Early adopters get <strong className="text-emerald-600">exclusive pricing</strong> — your spot is reserved. We'll be in touch soon. 🚀
            </p>
            <button
              onClick={onClose}
              className="emerald-btn w-full py-3.5 rounded-2xl font-bold text-base"
            >
              <span>Got it — thanks! →</span>
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <div className="px-8 py-8">
            {/* Header */}
            <div className="text-center mb-7">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl"
                style={{ background: 'linear-gradient(135deg,#10B981,#059669)', boxShadow: '0 8px 28px rgba(16,185,129,0.35)' }}>
                👑
              </div>
              <h2 className="text-2xl font-black text-gray-900">Join the Pro Waitlist</h2>
              <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                Be first in line. Early adopters get exclusive pricing when we launch.
              </p>
            </div>

            {/* What's included callout */}
            <div className="rounded-2xl px-4 py-3.5 mb-6"
              style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Pro includes</p>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  'Unlimited strategies',
                  'Ad Copy (Google + FB)',
                  'Full SEO Keywords',
                  'Competitor Analysis',
                  'Score Breakdown',
                  'All email templates',
                  'Regenerate any section',
                  'PDF export',
                ].map(f => (
                  <div key={f} className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  required
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-300 focus:outline-none transition-all text-sm"
                  style={{ background: '#f9fafb', border: '1.5px solid #e5e7eb' }}
                  onFocus={e  => (e.target.style.borderColor = '#10B981')}
                  onBlur={e   => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="jane@yourbusiness.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-300 focus:outline-none transition-all text-sm"
                  style={{ background: '#f9fafb', border: '1.5px solid #e5e7eb' }}
                  onFocus={e  => (e.target.style.borderColor = '#10B981')}
                  onBlur={e   => (e.target.style.borderColor = '#e5e7eb')}
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 px-3 py-2 rounded-lg"
                  style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={!name.trim() || !email.trim() || submitting}
                className="emerald-btn w-full py-4 rounded-2xl text-base font-black disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none mt-1"
              >
                <span>
                  {submitting
                    ? 'Saving your spot…'
                    : 'Join the Waitlist — It\'s Free →'}
                </span>
              </button>
            </form>

            <p className="text-center text-gray-400 text-xs mt-4">
              🔒 No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
