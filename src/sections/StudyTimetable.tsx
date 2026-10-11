import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  Clock,
  Calendar,
  CheckCircle2,
  Trash2,
  Cpu,
  Layers,
  Database,
  Volume2,
  Sparkles,
  Info
} from 'lucide-react';
import { ReminderItem } from '../types';

const INITIAL_REMINDERS: ReminderItem[] = [
  {
    id: 'r1',
    subject: 'Cyber Security',
    title: 'Lab Record Submission Deadline',
    date: '2026-10-15',
    time: '10:00 AM',
    description: 'Submit verified experiments on Network Scanning & Wireshark captures.',
    completed: false
  },
  {
    id: 'r2',
    subject: 'Java Lab',
    title: 'Practice Android Activity Lifecycle',
    date: '2026-10-12',
    time: '06:00 PM',
    description: 'Revise onCreate, onResume, and Room SQLite database operations.',
    completed: true
  }
];

interface StudyTimetableProps {
  onSpeak: (text: string) => void;
}

export function StudyTimetable({ onSpeak }: StudyTimetableProps) {
  const [reminders, setReminders] = useState<ReminderItem[]>(() => {
    try {
      const saved = localStorage.getItem('vigi_demo_reminders');
      return saved ? JSON.parse(saved) : INITIAL_REMINDERS;
    } catch {
      return INITIAL_REMINDERS;
    }
  });

  const [subject, setSubject] = useState('Cyber Security');
  const [taskTitle, setTaskTitle] = useState('');
  const [date, setDate] = useState('2026-10-20');
  const [time, setTime] = useState('07:30 PM');
  const [description, setDescription] = useState('');
  const [saveFeedback, setSaveFeedback] = useState(false);

  const handleSaveReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;

    const newReminder: ReminderItem = {
      id: Date.now().toString(),
      subject,
      title: taskTitle.trim(),
      date,
      time,
      description: description.trim() || 'Scheduled study reminder.',
      completed: false
    };

    const updated = [newReminder, ...reminders];
    setReminders(updated);
    try {
      localStorage.setItem('vigi_demo_reminders', JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }

    setTaskTitle('');
    setDescription('');
    setSaveFeedback(true);
    setTimeout(() => setSaveFeedback(false), 2500);

    onSpeak(`Demonstration reminder saved for ${newReminder.subject}: ${newReminder.title} at ${newReminder.time}.`);
  };

  const handleResetForm = () => {
    setTaskTitle('');
    setDescription('');
    setSubject('Cyber Security');
  };

  const toggleReminder = (id: string) => {
    setReminders(prev =>
      prev.map(r => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  };

  const deleteReminder = (id: string) => {
    setReminders(prev => prev.filter(r => r.id !== id));
  };

  return (
    <section id="reminders" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-6xl mx-auto space-y-12 text-left">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-electricBlue/30 text-xs font-mono text-neonCyan">
            <span>SECTION 10 • SCHEDULE REMINDER ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Study Timetable & Reminders
          </h2>
          <p className="text-base text-gray-300 font-sans">
            Schedule academic deadline alerts and explore how native Android system services coordinate background notifications.
          </p>
        </div>

        {/* 2-Column Grid: Form on Left, List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Reminder Creation Form (Left 5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl glass-panel-glow border border-neonCyan/30 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-neonCyan" />
                <span>Create Demonstration Reminder</span>
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neonCyan/15 text-neonCyan">
                INPUT FORM
              </span>
            </div>

            <form onSubmit={handleSaveReminder} className="space-y-3.5">
              {/* Subject */}
              <div>
                <label className="text-[11px] font-mono text-gray-400 block mb-1">SUBJECT</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-blackNavy border border-gray-700 text-white text-xs font-mono focus:border-neonCyan outline-none"
                >
                  <option value="Cyber Security">Cyber Security</option>
                  <option value="Mobile Computing (Android)">Mobile Computing (Android)</option>
                  <option value="Java Programming Lab">Java Programming Lab</option>
                  <option value="Computer Networks">Computer Networks</option>
                  <option value="Software Engineering">Software Engineering</option>
                </select>
              </div>

              {/* Task Title */}
              <div>
                <label className="text-[11px] font-mono text-gray-400 block mb-1">TASK TITLE</label>
                <input
                  type="text"
                  placeholder="e.g. Prepare Viva Presentation Slides"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2.5 rounded-xl bg-blackNavy border border-gray-700 text-white text-xs font-mono focus:border-neonCyan outline-none"
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-gray-400 block mb-1">DATE</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-blackNavy border border-gray-700 text-white text-xs font-mono focus:border-neonCyan outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-gray-400 block mb-1">TIME</label>
                  <input
                    type="text"
                    value={time}
                    placeholder="e.g. 06:00 PM"
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-blackNavy border border-gray-700 text-white text-xs font-mono focus:border-neonCyan outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="text-[11px] font-mono text-gray-400 block mb-1">DESCRIPTION</label>
                <textarea
                  rows={2}
                  placeholder="Additional study notes, syllabus units, or lab chapters..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-blackNavy border border-gray-700 text-white text-xs font-sans focus:border-neonCyan outline-none resize-none"
                />
              </div>

              {/* Form Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs font-mono bg-gradient-to-r from-neonCyan to-electricBlue text-blackNavy hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] active:scale-[0.98] transition-all cursor-pointer"
                >
                  SAVE DEMO REMINDER
                </button>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="py-3 px-3 rounded-xl bg-deepNavy border border-gray-700 text-gray-400 hover:text-white text-xs font-mono cursor-pointer"
                >
                  RESET FORM
                </button>
              </div>

              {saveFeedback && (
                <p className="text-xs font-mono text-emerald-400 text-center animate-pulse pt-1">
                  ✔ Demonstration reminder saved successfully!
                </p>
              )}
            </form>
          </div>

          {/* Active Reminders List (Right 7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl glass-panel border border-neonCyan/25 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <h3 className="text-base font-bold font-display text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyberGold" />
                <span>Scheduled Academic Reminders</span>
              </h3>
              <span className="text-xs font-mono text-gray-400">
                {reminders.length} Active
              </span>
            </div>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {reminders.map((rem) => (
                <div
                  key={rem.id}
                  className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                    rem.completed
                      ? 'bg-blackNavy/40 border-gray-800 opacity-60'
                      : 'bg-deepNavy/80 border-neonCyan/25 hover:border-neonCyan/50'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyberGold">
                        {rem.time} • {rem.date}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neonCyan/15 text-neonCyan">
                        {rem.subject}
                      </span>
                    </div>
                    <h4 className={`text-sm font-bold ${rem.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                      {rem.title}
                    </h4>
                    <p className="text-xs text-gray-300 font-sans">
                      {rem.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => toggleReminder(rem.id)}
                      className={`p-1.5 rounded-lg border text-xs font-mono cursor-pointer ${
                        rem.completed
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                          : 'bg-gray-800 text-gray-400 hover:text-white border-gray-700'
                      }`}
                      title={rem.completed ? 'Mark incomplete' : 'Mark done'}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteReminder(rem.id)}
                      className="p-1.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-500/10 cursor-pointer"
                      title="Delete reminder"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proposed Android Implementation Breakdown */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-neonCyan/20 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-neonCyan" />
              <span>Proposed Native Android Architecture for Scheduling</span>
            </h3>
            <span className="text-xs font-mono text-cyberGold">
              NATIVE SYSTEM INTEGRATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* AlarmManager */}
            <div className="p-4 rounded-2xl bg-deepNavy border border-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-neonCyan block">
                AlarmManager
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Schedules precise, time-critical intent broadcasts. Executes exact alarms even when the smartphone is in doze mode using <code className="text-neonCyan">setExactAndAllowWhileIdle()</code>.
              </p>
            </div>

            {/* WorkManager */}
            <div className="p-4 rounded-2xl bg-deepNavy border border-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-cyberGold block">
                WorkManager
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Manages deferrable, guaranteed background operations such as daily database maintenance, recurring timetable resets, and periodic scan result cache pruning.
              </p>
            </div>

            {/* NotificationManager */}
            <div className="p-4 rounded-2xl bg-deepNavy border border-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 block">
                NotificationManager
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Posts prioritized notifications into dedicated system channels (e.g., Study Reminders Channel vs Security Alerts Channel) adhering to Android 13+ permission standards.
              </p>
            </div>

            {/* Room Database */}
            <div className="p-4 rounded-2xl bg-deepNavy border border-gray-800 space-y-2">
              <span className="text-xs font-mono font-bold text-holographicPurple block">
                Room Persistence Library
              </span>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Provides type-safe on-device SQLite storage for timetable records, reminder timestamps, and completion flags with zero network dependency.
              </p>
            </div>
          </div>

          {/* Realistic Disclaimer */}
          <div className="p-3.5 rounded-xl bg-blackNavy border border-cyberGold/30 text-xs font-mono text-gray-400 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-cyberGold flex-shrink-0 mt-0.5" />
            <p>
              Academic Note: Real Android notifications depend on user permissions, OEM battery optimization configurations, and operating system scheduling policies. The website does not schedule real device alarms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
