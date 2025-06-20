import { useState } from 'react';
import './RightSlideModal.css';
import { useTheme } from '../../Context/ThemeContext';
import { useContrast } from '../../Context/ContrastContext';
import { useRtl } from '../../Context/RtlContext';
import { useCompact } from '../../Context/CompactContext';
import { useLayout } from '../../Context/LayoutContext';
import { useColorScheme } from '../../Context/ColorContext';
import { usePreset } from '../../Context/PresetContext';
import { useFont } from '../../Context/FontContext';
import SettingIcon from "../../assets/img/HeaderIcons/setting_link.svg";

// SVG iconlar (inline yoki import)
const ModeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 0 1 12.79 3a7 7 0 1 0 8.21 9.79z" stroke="#374151" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const ContrastIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#374151" strokeWidth="1.7"/><path d="M12 3v18" stroke="#374151" strokeWidth="1.7"/></svg>
);
const RtlIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="14" height="4" rx="2" stroke="#374151" strokeWidth="1.7"/><rect x="3" y="13" width="10" height="4" rx="2" stroke="#374151" strokeWidth="1.7"/><path d="M21 12v-1a2 2 0 0 0-2-2h-2" stroke="#374151" strokeWidth="1.7"/></svg>
);
const CompactIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="7" width="18" height="10" rx="3" stroke="#374151" strokeWidth="1.7"/><path d="M7 12h10" stroke="#374151" strokeWidth="1.7" strokeLinecap="round"/></svg>
);
const InfoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#64748b" strokeWidth="1.5"/><path d="M12 8v.01" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 12v4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

const layouts = [
  { value: 'sidebar', icon: '🟩', label: 'Sidebar' },
  { value: 'topbar', icon: '⬛', label: 'Topbar' },
  { value: 'minimal', icon: '⬜', label: 'Minimal' }
];
const colorSchemes = [
  { value: 'integrate', label: 'Integrate' },
  { value: 'apparent', label: 'Apparent' }
];
const presets = [
  { value: 'green', color: '#34d399' },
  { value: 'blue', color: '#3b82f6' },
  { value: 'purple', color: '#a78bfa' },
  { value: 'orange', color: '#f59e42' },
  { value: 'red', color: '#f43f5e' }
];
const fonts = [
  { value: 'Public Sans', label: 'Public Sans' },
  { value: 'Inter', label: 'Inter' },
  { value: 'DM Sans', label: 'DM Sans' },
  { value: 'Nunito Sans', label: 'Nunito Sans' }
];

const RightSlideModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { contrastMode, toggleContrast } = useContrast();
  const { isRtl, toggleRtl } = useRtl();
  const { isCompact, toggleCompact } = useCompact();
  const { layout, setLayout } = useLayout();
  const { colorScheme, setColorScheme } = useColorScheme();
  const { preset, setPreset } = usePreset();
  const { fontFamily, setFontFamily, fontSize, setFontSize } = useFont();

  // Reset funksiyasi
  const handleReset = () => {
    if (theme !== 'light') toggleTheme();
    if (contrastMode) toggleContrast();
    if (isRtl) toggleRtl();
    if (isCompact) toggleCompact();
    setLayout('sidebar');
    setColorScheme('integrate');
    setPreset('green');
    setFontFamily('Public Sans');
    setFontSize(16);
  };

  return (
    <div className="rs-modal-container">
      <button
        className="modal_button"
        onClick={() => setIsOpen(true)}
        disabled={isOpen}
        style={isOpen ? { pointerEvents: "none", opacity: 0.5 } : {}}
      >
        <img src={SettingIcon} alt="Settings" width={24} height={24} />
      </button>
      {isOpen && (
        <>
          <div className="rs-modal-overlay" onClick={() => setIsOpen(false)} />
          <div className="rs-modal-content">
            <div className="modal_header">
              <strong className="modal_title">Settings</strong>
              <div>
                <button className="modal_icon_btn" onClick={handleReset} title="Reset">
                  <span>⟳</span>
                </button>
                <button className="modal_icon_btn" onClick={() => setIsOpen(false)} title="Close">
                  <span>&times;</span>
                </button>
              </div>
            </div>
            {/* Switchlar */}
            <div className="modal-card-row">
              <div className="modal-card">
                <div className="modal-card-title"><ModeIcon /> Mode</div>
                <label className="switch">
                  <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="modal-card">
                <div className="modal-card-title"><ContrastIcon /> Contrast</div>
                <label className="switch">
                  <input type="checkbox" checked={contrastMode} onChange={toggleContrast} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div className="modal-card-row">
              <div className="modal-card">
                <div className="modal-card-title"><RtlIcon /> Right to left</div>
                <label className="switch">
                  <input type="checkbox" checked={isRtl} onChange={toggleRtl} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="modal-card">
                <div className="modal-card-title"><CompactIcon /> Compact <span style={{marginLeft:6}}><InfoIcon /></span></div>
                <label className="switch">
                  <input type="checkbox" checked={isCompact} onChange={toggleCompact} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            {/* Layout */}
            <div className="modal-section">
              <div className="modal-section-label" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 2 }}>
                Menu Orientation
              </div>
              <div style={{ color: '#64748b', fontSize: '1rem', marginBottom: 12 }}>
                Choose Vertical or Horizontal Menu Orientation
              </div>
              <div className="orientation-row">
                <button
                  className={`orientation-card${layout === 'sidebar' ? ' active' : ''}`}
                  onClick={() => setLayout('sidebar')}
                  type="button"
                >
                  {/* Vertical SVG */}
                  <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
                    <rect x="2" y="2" width="76" height="52" rx="8" fill="#fff" stroke={layout === 'sidebar' ? "#10b981" : "#e5e7eb"} strokeWidth="2"/>
                    <rect x="10" y="10" width="12" height="36" rx="3" fill="#3b82f6"/>
                    <rect x="26" y="12" width="40" height="8" rx="2" fill="#60a5fa"/>
                    <rect x="26" y="24" width="40" height="20" rx="2" fill="none" stroke="#60a5fa" strokeDasharray="4 2"/>
                  </svg>
                  <div className="orientation-label">Vertical</div>
                </button>
                <button
                  className={`orientation-card${layout === 'topbar' ? ' active' : ''}`}
                  onClick={() => setLayout('topbar')}
                  type="button"
                >
                  {/* Horizontal SVG */}
                  <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
                    <rect x="2" y="2" width="76" height="52" rx="8" fill="#fff" stroke={layout === 'topbar' ? "#10b981" : "#e5e7eb"} strokeWidth="2"/>
                    <rect x="10" y="10" width="60" height="8" rx="2" fill="#3b82f6"/>
                    <rect x="10" y="22" width="60" height="24" rx="2" fill="none" stroke="#60a5fa" strokeDasharray="4 2"/>
                  </svg>
                  <div className="orientation-label">Horizontal</div>
                </button>
              </div>
            </div>
            {/* Color */}
            <div className="modal-section">
              <div className="modal-section-label">Color</div>
              <div className="modal-color-row">
                {colorSchemes.map(c => (
                  <button
                    key={c.value}
                    className={`modal-color-btn${colorScheme === c.value ? ' active' : ''}`}
                    onClick={() => setColorScheme(c.value)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Presets */}
            <div className="modal-section">
              <div className="modal-section-label">Presets</div>
              <div className="modal-preset-row">
                {presets.map(p => (
                  <button
                    key={p.value}
                    className={`modal-preset-btn${preset === p.value ? ' active' : ''}`}
                    style={{ background: p.color }}
                    onClick={() => setPreset(p.value)}
                  />
                ))}
              </div>
            </div>
            {/* Font */}
            <div className="modal-section">
              <div className="modal-section-label">Font</div>
              <div className="modal-font-row">
                {fonts.map(f => (
                  <button
                    key={f.value}
                    className={`modal-font-btn${fontFamily === f.value ? ' active' : ''}`}
                    onClick={() => setFontFamily(f.value)}
                  >
                    <span style={{ fontFamily: f.value }}>{f.label}</span>
                  </button>
                ))}
              </div>
              <div className="modal-font-slider">
                <input
                  type="range"
                  min={12}
                  max={22}
                  value={fontSize}
                  onChange={e => setFontSize(Number(e.target.value))}
                />
                <span className="modal-font-size-label">{fontSize}px</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RightSlideModal;