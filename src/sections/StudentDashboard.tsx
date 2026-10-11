import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  CheckCircle2,
  Clock,
  BookOpen,
  Plus,
  Trash2,
  RotateCcw,
  Sparkles,
  TrendingUp,
  Award,
  Check,
  Edit2,
  ListTodo
} from 'lucide-react';
import { StudentTask } from '../types';

const INITIAL_TIMETABLE: StudentTask[] = [
  { id: '1', time: '06:00 AM', title: 'Revision: Computer Networks & Security Protocols', subject: 'Cyber Security', completed: true, priority: 'High', category: 'Revision' },
  { id: '2', time: '07:00 AM', title: 'Prepare for college & review morning lecture notes', subject: 'General Prep', completed: true, priority: 'Medium', category: 'Lecture' },
  { id: '3', time: '05:00 PM', title: 'Study Subject 1: Android Architecture & Room DB', subject: 'Mobile Computing', completed: false, priority: 'High', category: 'Revision' },
  { id: '4', time: '06:00 PM', title: 'Programming practice: Java Activity lifecycle & listeners', subject: 'Java Lab', completed: false, priority: 'High', category: 'Coding' },
  { id: '5', time: '07:30 PM', title: 'Revise notes & summarize key takeaways', subject: 'Theory Revision', completed: false, priority: 'Medium', category: 'Revision' },
  { id: '6', time: '08:00 PM', title: 'Review completed tasks & set tomorrow schedule', subject: 'Productivity Review', completed: false, priority: 'Low', category: 'Assignment' }
];

interface StudentDashboardProps {
  onSpeak: (text: string) => void;
}

export function StudentDashboard({ onSpeak }: StudentDashboardProps) {
  const [tasks, setTasks] = useState<StudentTask[]>(() => {
    try {
      const saved = localStorage.getItem('vigi_student_tasks');
      return saved ? JSON.parse(saved) : INITIAL_TIMETABLE;
    } catch {
      return INITIAL_TIMETABLE;
    }
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskSubject, setNewTaskSubject] = useState('BCA Core');
  const [newTaskTime, setNewTaskTime] = useState('09:00 PM');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('vigi_student_tasks', JSON.stringify(tasks));
    } catch (e) {
      console.warn('localStorage save warning:', e);
    }
  }, [tasks]);

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / (tasks.length || 1)) * 100);

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: StudentTask = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      subject: newTaskSubject,
      time: newTaskTime,
      completed: false,
      priority: 'Medium',
      category: 'Revision'
    };

    setTasks(prev => [...prev, newTask]);
    setNewTaskTitle('');
    setShowAddForm(false);
  };

  const resetDefaultTasks = () => {
    setTasks(INITIAL_TIMETABLE);
  };

  const handleSpeakTimetable = () => {
    const pending = tasks.filter(t => !t.completed);
    onSpeak(
      `Here is your study timetable status. You have completed ${completedCount} out of ${tasks.length} tasks, which is ${progressPercent} percent progress. Your next upcoming session is ${pending[0]?.title || 'all tasks completed for today'}.`
    );
  };

  return (
    <section id="student-assistant" className="py-20 px-4 sm:px-6 md:px-8 relative cyber-grid-bg">
      <div className="max-w-6xl mx-auto space-y-10 text-left">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyberGold/30 text-xs font-mono text-cyberGold">
            <span>SECTION 09 • STUDENT PRODUCTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Student Assistant Dashboard
          </h2>
          <p className="text-base text-gray-300 font-sans">
            A focused academic cockpit: schedule daily study blocks, manage subject topics, and monitor your consistency with visual progress tracking.
          </p>

          <div className="inline-block px-3 py-1 rounded-full bg-deepNavy border border-gray-700 text-xs font-mono text-gray-400">
            NOTICE: DEMO DATA STORED LOCALLY IN BROWSER • NOT AUTOMATICALLY SYNCED WITH ANDROID APP
          </div>
        </div>

        {/* Top Productivity Analytics & Progress Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress Circular Meter Card */}
          <div className="p-6 rounded-3xl glass-panel-glow border border-neonCyan/30 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-gray-400 uppercase">
                Today's Completion
              </span>
              <h3 className="text-3xl font-extrabold font-mono text-white">
                {progressPercent}%
              </h3>
              <p className="text-xs text-neonCyan font-mono">
                {completedCount} of {tasks.length} tasks finished
              </p>
            </div>

            {/* Circular Ring Gauge */}
            <div className="relative w-20 h-20 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-gray-800"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-neonCyan transition-all duration-700"
                  strokeDasharray={`${progressPercent}, 100`}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <TrendingUp className="w-6 h-6 text-neonCyan absolute" />
            </div>
          </div>

          {/* Motivational Wisdom Card */}
          <div className="p-6 rounded-3xl glass-panel-gold border border-cyberGold/30 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-cyberGold font-mono text-xs font-bold uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Daily Academic Focus</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-200 italic my-2 font-sans">
              "Disciplined revision of 1 hour every single day produces greater mastery than 12 hours of last-minute cramming before viva."
            </p>
            <span className="text-[10px] font-mono text-gray-400">
              BCA Academic Year 2026–2027
            </span>
          </div>

          {/* Spoken Narration & Action Trigger */}
          <div className="p-6 rounded-3xl glass-panel border border-electricBlue/30 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-neonCyan uppercase font-bold">
                Voice Assistant Link
              </span>
              <Award className="w-5 h-5 text-cyberGold" />
            </div>
            <p className="text-xs text-gray-300">
              Listen to VIGI speak aloud your schedule and upcoming priorities.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={handleSpeakTimetable}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-bold font-mono bg-gradient-to-r from-electricBlue to-neonCyan text-blackNavy hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all cursor-pointer"
              >
                SPEAK TIMETABLE
              </button>
              <button
                onClick={resetDefaultTasks}
                title="Reset to default syllabus schedule"
                className="p-2 rounded-xl bg-deepNavy border border-gray-700 text-gray-400 hover:text-white cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Timetable List Section */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-neonCyan/25 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-800">
            <div>
              <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-neonCyan" />
                <span>Today's Study Timetable & Schedule</span>
              </h3>
              <p className="text-xs text-gray-400 font-mono mt-0.5">
                BCA VI Semester Daily Routine Matrix
              </p>
            </div>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 rounded-xl text-xs font-bold font-mono bg-deepNavy border border-neonCyan/40 text-neonCyan hover:bg-neonCyan/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddForm ? 'CANCEL' : 'ADD DEMO TASK'}</span>
            </button>
          </div>

          {/* Add Task Form (Expandable) */}
          <AnimatePresence>
            {showAddForm && (
              <motion.form
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                onSubmit={handleAddTask}
                className="overflow-hidden p-5 rounded-2xl bg-blackNavy/90 border border-neonCyan/30 space-y-4"
              >
                <h4 className="text-xs font-mono font-bold text-neonCyan uppercase">
                  Add New Demonstration Study Slot
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Task Title (e.g. Solve Java Lab Program 4)"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    required
                    className="sm:col-span-1.5 px-3 py-2 rounded-xl bg-deepNavy border border-gray-700 text-white text-xs font-mono focus:border-neonCyan outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Subject (e.g. Java Lab)"
                    value={newTaskSubject}
                    onChange={(e) => setNewTaskSubject(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-deepNavy border border-gray-700 text-white text-xs font-mono focus:border-neonCyan outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Time (e.g. 09:00 PM)"
                    value={newTaskTime}
                    onChange={(e) => setNewTaskTime(e.target.value)}
                    className="px-3 py-2 rounded-xl bg-deepNavy border border-gray-700 text-white text-xs font-mono focus:border-neonCyan outline-none"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-bold font-mono bg-neonCyan text-blackNavy hover:shadow-[0_0_15px_#00F5FF] cursor-pointer"
                  >
                    SAVE TASK TO DEMO
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Tasks List */}
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`p-4 rounded-2xl transition-all border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                  task.completed
                    ? 'bg-blackNavy/40 border-gray-800/80 opacity-70'
                    : 'bg-deepNavy/80 border-neonCyan/20 hover:border-neonCyan/50 shadow-sm'
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Complete Checkbox Button */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center border transition-all cursor-pointer ${
                      task.completed
                        ? 'bg-emerald-500 border-emerald-400 text-blackNavy'
                        : 'border-gray-600 hover:border-neonCyan bg-blackNavy'
                    }`}
                    title={task.completed ? 'Mark incomplete' : 'Mark completed'}
                  >
                    {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                  </button>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyberGold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-cyberGold" />
                        {task.time}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-gray-300">
                        {task.subject}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neonCyan/10 text-neonCyan border border-neonCyan/20">
                        {task.category}
                      </span>
                    </div>

                    <p className={`text-sm mt-1 font-sans ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                      {task.title}
                    </p>
                  </div>
                </div>

                {/* Right Action: Delete */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all cursor-pointer self-end sm:self-center"
                  title="Remove task"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
