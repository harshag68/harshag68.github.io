import { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Cpu, Database, Cloud, FileCode, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LogLine {
  id: string;
  type: 'info' | 'warn' | 'success' | 'transform';
  text: string;
  timestamp: string;
}

export default function PipelineVisualizer() {
  const [pipelineState, setPipelineState] = useState<'idle' | 'extract' | 'transform' | 'load' | 'success'>('idle');
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [recordsProcessed, setRecordsProcessed] = useState(0);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  const getTimestamp = () => {
    const d = new Date();
    return d.toTimeString().split(' ')[0] + '.' + String(d.getMilliseconds()).padStart(3, '0');
  };

  const addLog = (text: string, type: 'info' | 'warn' | 'success' | 'transform' = 'info') => {
    const newLog: LogLine = {
      id: Math.random().toString(),
      type,
      text,
      timestamp: getTimestamp(),
    };
    setLogs((prev) => [...prev, newLog]);
  };

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const runPipeline = () => {
    setPipelineState('extract');
    setProgress(0);
    setRecordsProcessed(0);
    setLogs([]);

    // Step 1: EXTRACT (0% - 30%)
    setTimeout(() => {
      addLog('Initializing Shriharsha_Portfolio_ETL v2.1.0...', 'info');
    }, 100);

    setTimeout(() => {
      addLog('Establishing connections to secure data sources...', 'info');
      addLog('✔ Source 1: UNT_Business_Analytics_DB [Connected]', 'success');
      addLog('✔ Source 2: Tekstar_IT_SQL_Server_Prod [Connected]', 'success');
      addLog('✔ Source 3: Google_Certificates_Directory [Connected]', 'success');
    }, 600);

    setTimeout(() => {
      addLog('Extracting professional experience records (10M+ environment simulation)...', 'info');
      setRecordsProcessed(4500);
    }, 1200);

    setTimeout(() => {
      addLog('Extracting certifications, skills matrix, and publications...', 'info');
      setRecordsProcessed(9800);
      setProgress(30);
      setPipelineState('transform');
    }, 2000);

    // Step 2: TRANSFORM (30% - 70%)
    setTimeout(() => {
      addLog('Parsing source records and applying mapping-driven logic...', 'transform');
    }, 2400);

    setTimeout(() => {
      addLog('Transforming schema: Formatting dates & deduplicating records...', 'transform');
      addLog('✔ Normalized 3 educational achievements', 'success');
    }, 3000);

    setTimeout(() => {
      addLog('Running quality validation checks on skills proficiency array...', 'transform');
      addLog('⚠ Alert: Query performance optimization skill detected [Proficiency: 95%]', 'warn');
      addLog('✔ Validated 20 critical engineering skills', 'success');
      setRecordsProcessed(10234251); // 10 million records!
    }, 3600);

    setTimeout(() => {
      addLog('Running LLM pipeline analyzer: Extracting multi-agent projects...', 'transform');
      addLog('✔ Prompt Engineering and Vertex AI workloads tokenized', 'success');
      setProgress(70);
      setPipelineState('load');
    }, 4500);

    // Step 3: LOAD (70% - 100%)
    setTimeout(() => {
      addLog('Connecting to Target Warehouse: BigQuery_Portfolio_Data_Lake...', 'info');
    }, 4900);

    setTimeout(() => {
      addLog('Streaming records into localized static cache arrays...', 'info');
      addLog('✔ Writing: EXPERIENCES_TABLE [Completed]', 'success');
      addLog('✔ Writing: PROJECTS_TABLE [Completed]', 'success');
      addLog('✔ Writing: SKILLS_TABLE [Completed]', 'success');
    }, 5500);

    setTimeout(() => {
      addLog('Running database index optimizations & building query cache...', 'info');
      addLog('✔ Partitioned tables by date hierarchy', 'success');
      addLog('✔ Indexes built on: experience_id, skill_id', 'success');
    }, 6200);

    setTimeout(() => {
      addLog('ETL Pipeline successfully executed!', 'success');
      addLog('Status: 10,234,251 records loaded. DB Integrity: Verified (100%)', 'success');
      setProgress(100);
      setPipelineState('success');
    }, 7000);
  };

  const resetPipeline = () => {
    setPipelineState('idle');
    setProgress(0);
    setLogs([]);
    setRecordsProcessed(0);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8" id="etl-pipeline-section">
      <div className="bg-[#F8F9FA] border-2 border-black p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 bg-black animate-ping" />
              <span className="font-mono text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                01 / Interactive Engineering Demo
              </span>
            </div>
            <h2 className="text-3xl font-display font-black text-[#1A1A1A] uppercase tracking-tight">
              Shriharsha's ETL Pipeline
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-lg font-medium leading-relaxed">
              Simulate a high-performance ETL pipeline processing over 10 million records from my actual background. See how I transform raw resume stats into structured portfolio data.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {pipelineState === 'idle' ? (
              <button
                onClick={runPipeline}
                id="run-pipeline-btn"
                className="flex items-center gap-2 px-5 py-2.5 bg-black hover:bg-gray-900 text-white font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Run ETL Demo
              </button>
            ) : (
              <button
                onClick={resetPipeline}
                id="reset-pipeline-btn"
                className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-black font-mono text-xs font-black uppercase tracking-wider transition-all duration-200 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Pipeline
              </button>
            )}
          </div>
        </div>

        {/* Pipeline Map / Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8 bg-white p-6 border-2 border-black relative">
          
          {/* Node 1: EXTRACT */}
          <div className="flex flex-col items-center p-4 border border-gray-200 bg-[#F8F9FA] relative">
            <div className={`p-3 border-2 border-black mb-3 transition-colors duration-300 ${
              pipelineState === 'extract' ? 'bg-black text-white animate-bounce' :
              pipelineState !== 'idle' ? 'bg-gray-200 text-black' : 'bg-white text-gray-400'
            }`}>
              <Database className="w-6 h-6" />
            </div>
            <h4 className="font-mono font-black text-xs text-[#1A1A1A] tracking-wider uppercase">1. EXTRACT</h4>
            <p className="font-mono text-[9px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Sources: UNT DB, SQL Server</p>
            {pipelineState === 'extract' && (
              <span className="absolute -bottom-3 text-[9px] font-mono text-black font-black uppercase tracking-wider animate-pulse">Processing...</span>
            )}
          </div>

          {/* Node 2: TRANSFORM */}
          <div className="flex flex-col items-center p-4 border border-gray-200 bg-[#F8F9FA] relative">
            <div className={`p-3 border-2 border-black mb-3 transition-colors duration-300 ${
              pipelineState === 'transform' ? 'bg-black text-white' :
              pipelineState === 'load' || pipelineState === 'success' ? 'bg-gray-200 text-black' : 'bg-white text-gray-400'
            }`}>
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="font-mono font-black text-xs text-[#1A1A1A] tracking-wider uppercase">2. TRANSFORM</h4>
            <p className="font-mono text-[9px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Worker: Spark / Pandas</p>
            {pipelineState === 'transform' && (
              <span className="absolute -bottom-3 text-[9px] font-mono text-black font-black uppercase tracking-wider animate-pulse">Processing...</span>
            )}
          </div>

          {/* Node 3: LOAD */}
          <div className="flex flex-col items-center p-4 border border-gray-200 bg-[#F8F9FA] relative">
            <div className={`p-3 border-2 border-black mb-3 transition-colors duration-300 ${
              pipelineState === 'load' ? 'bg-black text-white' :
              pipelineState === 'success' ? 'bg-gray-200 text-black' : 'bg-white text-gray-400'
            }`}>
              <Cloud className="w-6 h-6" />
            </div>
            <h4 className="font-mono font-black text-xs text-[#1A1A1A] tracking-wider uppercase">3. LOAD</h4>
            <p className="font-mono text-[9px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Warehouse: BigQuery Lake</p>
            {pipelineState === 'load' && (
              <span className="absolute -bottom-3 text-[9px] font-mono text-black font-black uppercase tracking-wider animate-pulse">Loading...</span>
            )}
          </div>

          {/* Connectors */}
          <div className="hidden md:block absolute left-1/3 top-1/2 w-[12%] h-[1px] border-t-2 border-dashed border-gray-400 -translate-y-6" />
          <div className="hidden md:block absolute right-1/3 top-1/2 w-[12%] h-[1px] border-t-2 border-dashed border-gray-400 -translate-y-6" />
        </div>

        {/* Progress Metrics Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs mb-2">
            <div className="flex items-center gap-1.5 font-mono text-gray-500 uppercase font-black tracking-wider">
              <span className="text-gray-400">Records Ingested:</span>
              <span className="text-black">{recordsProcessed.toLocaleString()}</span>
            </div>
            <div className="font-mono text-gray-500 uppercase font-black tracking-wider">
              <span className="text-gray-400">Progress:</span>{' '}
              <span className="text-black">
                {progress}%
              </span>
            </div>
          </div>
          <div className="w-full bg-white border-2 border-black h-4 overflow-hidden">
            <motion.div
              className="h-full bg-black"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeInOut', duration: 0.3 }}
            />
          </div>
        </div>

        {/* Streaming Monospace Logging Console */}
        <div className="bg-black text-white p-4 border-2 border-black font-mono text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
              <span className="text-gray-400 text-[10px] ml-2 tracking-wider">shriharsha@etl-agent:~/logs</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
              <span>LOG STREAM LIVE</span>
            </div>
          </div>

          <div className="h-56 overflow-y-auto space-y-1.5 pr-2 scrollbar-none flex flex-col">
            <AnimatePresence initial={false}>
              {logs.length === 0 ? (
                <div className="text-gray-500 h-full flex flex-col items-center justify-center text-center py-10">
                  <FileCode className="w-8 h-8 mb-2 opacity-50 text-white" />
                  <p className="text-[11px] uppercase font-bold tracking-widest">Pipeline is currently in standby mode.</p>
                  <p className="text-[10px] text-gray-600 mt-1 font-bold uppercase tracking-wide">Click "Run ETL Demo" above to witness the ingestion stream.</p>
                </div>
              ) : (
                logs.map((log) => (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-2.5 py-0.5"
                  >
                    <span className="text-gray-500 text-[10px] shrink-0">{log.timestamp}</span>
                    <span className={`shrink-0 text-[10px] px-1.5 py-0.2 rounded-none font-bold tracking-wider ${
                      log.type === 'success' ? 'bg-green-700 text-white border border-green-600' :
                      log.type === 'warn' ? 'bg-yellow-600 text-black border border-yellow-500' :
                      log.type === 'transform' ? 'bg-gray-800 text-white border border-gray-700' :
                      'bg-gray-900 text-gray-300 border border-gray-800'
                    }`}>
                      {log.type.toUpperCase()}
                    </span>
                    <span className="text-[11px] leading-relaxed text-gray-300 break-all font-medium">
                      {log.text}
                    </span>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
            <div ref={consoleEndRef} />
          </div>
        </div>

        {/* Pipeline Success Easter Egg banner */}
        {pipelineState === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-white border-4 border-black flex items-start sm:items-center gap-3.5"
            id="etl-success-banner"
          >
            <div className="p-2.5 bg-black text-white border border-black shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-mono font-black text-xs text-black uppercase tracking-widest">Target Schema Populated Successfully!</h4>
              <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed font-sans font-medium">
                The ETL pipeline successfully converted the raw unstructured CV bytes into highly optimized, fully reactive indices. Feel free to explore my full profile in the tabs below.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
